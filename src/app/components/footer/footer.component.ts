import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LangService } from '../../core/lang.service';
import { CONTACT, UI } from '../../content/i18n';

@Component({
  selector: 'cm-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="footer">
      <div class="container footer-inner">
        <div>
          <p class="name">Carlos Madrigal</p>
          <p class="muted small">{{ t().footer.role }}</p>
        </div>
        <ul class="links small">
          <li><a [href]="'mailto:' + contact.email">{{ contact.email }}</a></li>
          <li><a [href]="contact.linkedin" target="_blank" rel="noopener">LinkedIn ↗</a></li>
          <li><a [href]="contact.github" target="_blank" rel="noopener">GitHub ↗</a></li>
          <li><a [routerLink]="paths().about">{{ t().nav.about }}</a></li>
        </ul>
        <p class="meta mono">
          © {{ year }} Carlos Madrigal · {{ t().footer.builtWith }} ·
          <a [href]="contact.repo" target="_blank" rel="noopener">{{ t().footer.code }}</a>
        </p>
      </div>
    </footer>
  `,
  styles: `
    .footer { border-top: 1px solid var(--line); padding-block: 2.5rem; }
    .footer-inner { display: grid; grid-template-columns: 1fr auto; gap: 1.5rem 3rem; align-items: start; }
    .name { font-weight: 600; }
    .small { font-size: var(--text-sm); }
    .links { display: flex; flex-wrap: wrap; gap: 0.4rem 1.4rem; }
    .links a { color: var(--fg-muted); }
    .links a:hover { color: var(--fg); }
    .meta { grid-column: 1 / -1; font-size: var(--text-xs); color: var(--fg-subtle); }
    .meta a { color: var(--fg-muted); }
    .meta a:hover { color: var(--fg); }
    @media (max-width: 640px) { .footer-inner { grid-template-columns: 1fr; } }
  `,
})
export class FooterComponent {
  private readonly lang = inject(LangService);
  readonly t = computed(() => UI[this.lang.lang()]);
  readonly paths = this.lang.paths;
  readonly contact = CONTACT;
  readonly year = new Date().getFullYear();
}
