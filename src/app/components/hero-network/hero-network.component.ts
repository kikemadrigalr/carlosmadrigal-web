import {
  Component,
  DestroyRef,
  ElementRef,
  NgZone,
  PLATFORM_ID,
  afterNextRender,
  inject,
  viewChild,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface NetNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

/**
 * Red de nodos animada para el fondo del hero: partículas que derivan,
 * se enlazan entre sí por cercanía y se sienten atraídas por el cursor.
 *
 * - En servidor/prerender no hace nada (el canvas queda vacío).
 * - Con prefers-reduced-motion dibuja un único frame estático.
 * - Corre fuera de la zona de Angular: ni el rAF ni el pointermove
 *   disparan change detection.
 * - Se pausa cuando el hero sale del viewport o la pestaña se oculta.
 */
@Component({
  selector: 'cm-hero-network',
  standalone: true,
  template: `<canvas #canvas aria-hidden="true"></canvas>`,
  styles: `
    :host {
      position: absolute;
      inset: 0;
      display: block;
      pointer-events: none;
    }
    canvas {
      display: block;
      width: 100%;
      height: 100%;
    }
  `,
})
export class HeroNetworkComponent {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly zone = inject(NgZone);
  private readonly host: ElementRef<HTMLElement> = inject(ElementRef);
  private readonly canvasRef = viewChild.required<ElementRef<HTMLCanvasElement>>('canvas');

  private readonly LINK = 130;
  private readonly MOUSE_LINK = 180;

  private nodes: NetNode[] = [];
  private mouse = { x: -9999, y: -9999 };
  private w = 0;
  private h = 0;
  private raf = 0;
  private running = false;
  private inViewport = true;
  private reduced = false;

  constructor() {
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      if (!this.isBrowser) return;
      this.reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      const el = this.host.nativeElement;
      const parent = el.parentElement ?? el;

      this.zone.runOutsideAngular(() => {
        this.resize();
        this.seed();

        if (this.reduced) {
          this.drawFrame(); // un frame estático y listo
          return;
        }

        const onMove = (e: PointerEvent) => {
          const rect = el.getBoundingClientRect();
          this.mouse.x = e.clientX - rect.left;
          this.mouse.y = e.clientY - rect.top;
        };
        const onLeave = () => {
          this.mouse.x = this.mouse.y = -9999;
        };
        const onVisibility = () => (document.hidden ? this.stop() : this.start());

        parent.addEventListener('pointermove', onMove, { passive: true });
        parent.addEventListener('pointerleave', onLeave, { passive: true });
        document.addEventListener('visibilitychange', onVisibility);

        const ro = new ResizeObserver(() => this.resize());
        ro.observe(el);

        const io = new IntersectionObserver(([entry]) => {
          this.inViewport = entry.isIntersecting;
          this.inViewport ? this.start() : this.stop();
        });
        io.observe(el);

        this.start();

        destroyRef.onDestroy(() => {
          this.stop();
          ro.disconnect();
          io.disconnect();
          parent.removeEventListener('pointermove', onMove);
          parent.removeEventListener('pointerleave', onLeave);
          document.removeEventListener('visibilitychange', onVisibility);
        });
      });
    });
  }

  private resize(): void {
    const canvas = this.canvasRef().nativeElement;
    const rect = this.host.nativeElement.getBoundingClientRect();
    this.w = canvas.width = Math.max(1, rect.width);
    this.h = canvas.height = Math.max(1, rect.height);
  }

  private seed(): void {
    const count = this.w < 720 ? 40 : 70;
    this.nodes = Array.from({ length: count }, () => ({
      x: Math.random() * this.w,
      y: Math.random() * this.h,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: 1 + Math.random() * 1.6,
    }));
  }

  private start(): void {
    if (this.running || this.reduced || !this.inViewport) return;
    this.running = true;
    const loop = () => {
      if (!this.running) return;
      this.drawFrame();
      this.raf = requestAnimationFrame(loop);
    };
    this.raf = requestAnimationFrame(loop);
  }

  private stop(): void {
    this.running = false;
    cancelAnimationFrame(this.raf);
  }

  private drawFrame(): void {
    const ctx = this.canvasRef().nativeElement.getContext('2d');
    if (!ctx) return;

    // el color sale del token para acompañar el cambio de tema
    const accent =
      getComputedStyle(this.host.nativeElement).getPropertyValue('--accent').trim() || '#45d0c0';

    ctx.clearRect(0, 0, this.w, this.h);

    for (const n of this.nodes) {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > this.w) n.vx *= -1;
      if (n.y < 0 || n.y > this.h) n.vy *= -1;
      const dx = this.mouse.x - n.x;
      const dy = this.mouse.y - n.y;
      const d = Math.hypot(dx, dy);
      if (d < this.MOUSE_LINK && d > 0.01) {
        n.x += (dx / d) * 0.5;
        n.y += (dy / d) * 0.5;
      }
    }

    for (let i = 0; i < this.nodes.length; i++) {
      for (let j = i + 1; j < this.nodes.length; j++) {
        const a = this.nodes[i];
        const b = this.nodes[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < this.LINK) {
          ctx.strokeStyle = accent;
          ctx.globalAlpha = (1 - d / this.LINK) * 0.18;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    for (const n of this.nodes) {
      const d = Math.hypot(this.mouse.x - n.x, this.mouse.y - n.y);
      if (d < this.MOUSE_LINK) {
        ctx.strokeStyle = accent;
        ctx.globalAlpha = (1 - d / this.MOUSE_LINK) * 0.35;
        ctx.beginPath();
        ctx.moveTo(n.x, n.y);
        ctx.lineTo(this.mouse.x, this.mouse.y);
        ctx.stroke();
      }
      ctx.globalAlpha = 0.55;
      ctx.fillStyle = accent;
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }
}
