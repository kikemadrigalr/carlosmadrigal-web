import { Component, computed, effect, inject, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LangService } from '../../core/lang.service';
import { SeoService } from '../../core/seo.service';
import { UI } from '../../content/i18n';
import { findProject, nextProject } from '../../content/projects';

@Component({
  selector: 'cm-project',
  standalone: true,
  imports: [RouterLink],
  template: `
    @if (project(); as p) {
      <article class="container page">
        <a class="back mono" [routerLink]="paths().home" fragment="proyectos">{{ t().project.back }}</a>

        <header class="head">
          <p class="eyebrow">{{ p.order }} — {{ p.copy[lang()].sector }} · {{ p.years }}</p>
          <h1 class="title">{{ p.copy[lang()].name }}</h1>
          <p class="tagline muted">{{ p.copy[lang()].tagline }}</p>
          <ul class="chips">
            @for (s of p.stack; track s) { <li class="chip">{{ s }}</li> }
          </ul>
        </header>

        <div class="body">
          <section class="block">
            <h2 class="block-title">{{ t().project.context }}</h2>
            <div class="prose">
              @for (par of p.copy[lang()].context; track $index) { <p>{{ par }}</p> }
            </div>
          </section>

          <section class="block">
            <h2 class="block-title">{{ t().project.role }}</h2>
            <div class="prose">
              @for (par of p.copy[lang()].role; track $index) { <p>{{ par }}</p> }
            </div>
          </section>

          <section class="block">
            <h2 class="block-title">{{ t().project.architecture }}</h2>
            <ul class="arch">
              @for (item of p.copy[lang()].architecture; track $index) { <li>{{ item }}</li> }
            </ul>
          </section>

          @if (p.copy[lang()].outcome; as outcome) {
            <section class="block">
              <h2 class="block-title">{{ t().project.outcome }}</h2>
              <div class="prose">
                @for (par of outcome; track $index) { <p>{{ par }}</p> }
              </div>
            </section>
          }
        </div>

        <footer class="next">
          <p class="eyebrow">{{ t().project.next }}</p>
          <a class="next-link" [routerLink]="[paths().projects, next().slug]">
            <span class="next-name">{{ next().copy[lang()].name }}</span>
            <span class="muted">{{ next().copy[lang()].tagline }}</span>
            <span class="next-arrow">→</span>
          </a>
        </footer>
      </article>
    }
  `,
  styles: `
    .page { padding-block: clamp(2.5rem, 6vw, 5rem) var(--section-y); }
    .back { display: inline-block; font-size: var(--text-xs); color: var(--fg-muted); margin-bottom: 2.5rem; }
    .back:hover { color: var(--fg); }
    .title { font-size: var(--text-hero); font-weight: 700; letter-spacing: -0.03em; line-height: 1.05; }
    .tagline { margin-top: 1rem; max-width: 50ch; font-size: var(--text-xl); }
    .chips { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 1.5rem; }
    .body { display: grid; gap: 3rem; margin-top: clamp(3rem, 6vw, 4.5rem); padding-top: 3rem; border-top: 1px solid var(--line); }
    .block { display: grid; grid-template-columns: 220px 1fr; gap: 1.5rem 3rem; }
    .block-title { font-family: var(--font-mono); font-size: var(--text-xs); font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; color: var(--fg-subtle); padding-top: 0.3rem; }
    .arch { display: grid; gap: 0.9rem; max-width: 68ch; }
    .arch li { position: relative; padding-left: 1.4rem; }
    .arch li::before { content: '—'; position: absolute; left: 0; color: var(--accent); }
    .next { margin-top: var(--section-y); padding-top: 3rem; border-top: 1px solid var(--line); }
    .next-link { display: grid; grid-template-columns: auto 1fr auto; gap: 1rem; align-items: baseline; }
    .next-name { font-size: var(--text-2xl); font-weight: 600; }
    .next-arrow { color: var(--accent); font-size: var(--text-xl); transition: transform var(--ease); }
    .next-link:hover .next-arrow { transform: translateX(4px); }
    @media (max-width: 760px) {
      .block { grid-template-columns: 1fr; gap: 0.75rem; }
      .next-link { grid-template-columns: 1fr auto; }
      .next-link .muted { grid-column: 1 / -1; }
    }
  `,
})
export class ProjectPage {
  /** Viene del router (withComponentInputBinding). */
  readonly slug = input.required<string>();

  private readonly langSvc = inject(LangService);
  private readonly seo = inject(SeoService);
  private readonly router = inject(Router);

  readonly lang = this.langSvc.lang;
  readonly paths = this.langSvc.paths;
  readonly t = computed(() => UI[this.lang()]);
  readonly project = computed(() => findProject(this.slug()));
  readonly next = computed(() => nextProject(this.slug()));

  constructor() {
    effect(() => {
      const p = this.project();
      const lang = this.lang();
      if (!p) {
        this.router.navigateByUrl('/404', { skipLocationChange: true });
        return;
      }
      const c = p.copy[lang];
      this.seo.set({
        title: `${c.name} — Carlos Madrigal`,
        description: c.seoDesc,
        path: `${this.paths().projects}/${p.slug}`,
        altPath: `${lang === 'es' ? '/en/projects' : '/es/proyectos'}/${p.slug}`,
        lang,
      });
    });
  }
}
