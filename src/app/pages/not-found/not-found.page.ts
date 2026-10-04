import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LangService } from '../../core/lang.service';
import { UI } from '../../content/i18n';

@Component({
  selector: 'cm-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="container page">
      <p class="eyebrow">404</p>
      <h1 class="title">{{ t().notFound.title }}</h1>
      <p class="muted">{{ t().notFound.text }}</p>
      <a class="btn btn-primary" [routerLink]="paths().home">{{ t().notFound.home }}</a>
    </section>
  `,
  styles: `
    .page { padding-block: var(--section-y); display: grid; gap: 1rem; justify-items: start; }
    .title { font-size: var(--text-3xl); font-weight: 700; }
  `,
})
export class NotFoundPage {
  private readonly lang = inject(LangService);
  readonly t = computed(() => UI[this.lang.lang()]);
  readonly paths = this.lang.paths;
}
