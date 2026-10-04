import { Component, OnInit, computed, inject } from '@angular/core';
import { LangService } from '../../core/lang.service';
import { SeoService } from '../../core/seo.service';
import { ABOUT, CONTACT, UI } from '../../content/i18n';

@Component({
  selector: 'cm-about',
  standalone: true,
  template: `
    <article class="container page">
      <div class="grid">
        <div class="photo-col">
          <!-- Reemplazar por <img src="/foto.jpg"> cuando esté la foto definitiva -->
          <div class="photo" aria-hidden="true"><span class="mono">CM</span></div>
          <ul class="facts mono">
            <li>Lic. Informática · UDO 2019</li>
            <li>Colombia · UTC−5</li>
            <li>ES nativo · EN B1</li>
          </ul>
        </div>
        <div>
          <p class="eyebrow">{{ t().about.eyebrow }}</p>
          <h1 class="title">{{ t().about.title }}</h1>
          <div class="prose text">
            @for (par of paragraphs(); track $index) { <p>{{ par }}</p> }
          </div>
          <div class="actions">
            <a class="btn btn-primary" [href]="contact.cvPdf" download>{{ t().hero.ctaCv }}</a>
            <a class="btn" [href]="contact.linkedin" target="_blank" rel="noopener">LinkedIn ↗</a>
            <a class="btn" [href]="contact.github" target="_blank" rel="noopener">GitHub ↗</a>
          </div>
        </div>
      </div>
    </article>
  `,
  styles: `
    .page { padding-block: clamp(3rem, 7vw, 6rem) var(--section-y); }
    .grid { display: grid; grid-template-columns: 240px 1fr; gap: 3rem 4rem; align-items: start; }
    .photo { width: 200px; aspect-ratio: 1; border-radius: 50%; display: grid; place-items: center; background: var(--accent-soft); color: var(--accent); font-size: 2.5rem; letter-spacing: 0.05em; border: 1px solid var(--line); }
    .facts { margin-top: 1.5rem; display: grid; gap: 0.4rem; font-size: var(--text-xs); color: var(--fg-muted); }
    .title { font-size: var(--text-3xl); font-weight: 700; letter-spacing: -0.025em; }
    .text { margin-top: 1.5rem; font-size: var(--text-lg); }
    .actions { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 2rem; }
    @media (max-width: 760px) { .grid { grid-template-columns: 1fr; } .photo { width: 140px; font-size: 1.8rem; } }
  `,
})
export class AboutPage implements OnInit {
  private readonly langSvc = inject(LangService);
  private readonly seo = inject(SeoService);

  readonly lang = this.langSvc.lang;
  readonly t = computed(() => UI[this.lang()]);
  readonly paragraphs = computed(() => ABOUT[this.lang()]);
  readonly contact = CONTACT;

  ngOnInit(): void {
    const lang = this.lang();
    this.seo.set({
      title: UI[lang].seo.aboutTitle,
      description: UI[lang].seo.aboutDesc,
      path: lang === 'es' ? '/es/sobre-mi' : '/en/about',
      altPath: lang === 'es' ? '/en/about' : '/es/sobre-mi',
      lang,
    });
  }
}
