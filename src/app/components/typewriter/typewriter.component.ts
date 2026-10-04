import {
  Component,
  DestroyRef,
  PLATFORM_ID,
  afterNextRender,
  computed,
  effect,
  inject,
  input,
  signal,
  untracked,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Escribe una lista de ítems letra a letra, uno tras otro, con cursor.
 * En servidor/prerender (y con prefers-reduced-motion) muestra el texto completo.
 * Si cambian los ítems (p. ej. al cambiar de idioma) vuelve a escribir.
 */
@Component({
  selector: 'cm-typewriter',
  standalone: true,
  template: `
    <span class="tw" [attr.aria-label]="fullText()">
      <span aria-hidden="true">{{ typed() ?? fullText() }}</span><span class="cursor" aria-hidden="true" [class.done]="done()">▍</span>
    </span>
  `,
  styles: `
    .tw { display: inline; }
    .cursor { display: inline-block; margin-left: 1px; color: var(--accent); animation: blink 1s steps(1) infinite; }
    .cursor.done { animation: blink 1s steps(1) 3; opacity: 0; }
    @keyframes blink { 0%, 50% { opacity: 1; } 50.01%, 100% { opacity: 0; } }
    @media (prefers-reduced-motion: reduce) { .cursor { display: none; } }
  `,
})
export class TypewriterComponent {
  readonly items = input.required<string[]>();
  readonly separator = input(' · ');
  /** ms por carácter y pausa al terminar cada ítem */
  readonly speed = input(38);
  readonly pause = input(350);

  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly reduced = this.isBrowser && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  readonly fullText = computed(() => this.items().join(this.separator()));
  /** Texto escrito hasta ahora; null = mostrar el texto completo (SSR / sin animación). */
  readonly typed = signal<string | null>(null);
  readonly done = signal(true);

  private started = false;
  private timer: ReturnType<typeof setTimeout> | undefined;
  private runId = 0;

  constructor() {
    inject(DestroyRef).onDestroy(() => clearTimeout(this.timer));

    // Primera animación: solo en navegador, después del primer render (evita desajuste de hidratación).
    afterNextRender(() => {
      this.started = true;
      this.run();
    });

    // Reanuda si cambian los ítems (cambio de idioma).
    effect(() => {
      this.items();
      if (this.started) untracked(() => this.run());
    });
  }

  private run(): void {
    if (!this.isBrowser || this.reduced) {
      this.typed.set(null);
      this.done.set(true);
      return;
    }

    clearTimeout(this.timer);
    const id = ++this.runId;
    const items = this.items();
    const sep = this.separator();
    let text = '';
    let i = 0;
    let j = 0;

    this.typed.set('');
    this.done.set(false);

    const tick = () => {
      if (id !== this.runId) return;
      const item = items[i];
      if (j < item.length) {
        text += item[j++];
        this.typed.set(text);
        this.timer = setTimeout(tick, this.speed() + Math.random() * 40);
        return;
      }
      i++;
      j = 0;
      if (i < items.length) {
        text += sep;
        this.typed.set(text);
        this.timer = setTimeout(tick, this.pause());
      } else {
        this.done.set(true);
      }
    };
    tick();
  }
}
