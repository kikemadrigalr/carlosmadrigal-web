import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LangService } from '../../core/lang.service';
import { ThemeService } from '../../core/theme.service';
import { UI } from '../../content/i18n';

@Component({
  selector: 'cm-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="header">
      <div class="container header-inner">
        <a class="brand" [routerLink]="paths().home" aria-label="Carlos Madrigal — inicio">
          <span class="brand-mark mono">CM</span>
          <span class="brand-name">Carlos Madrigal</span>
        </a>

        <nav class="nav" [class.open]="open()" aria-label="Principal">
          <a [routerLink]="paths().home" fragment="proyectos" (click)="open.set(false)">{{ t().nav.projects }}</a>
          <a [routerLink]="paths().about" routerLinkActive="active" (click)="open.set(false)">{{ t().nav.about }}</a>
          <a class="lang" [routerLink]="switchUrl()" (click)="open.set(false)" [attr.aria-label]="lang.isEs() ? 'Switch to English' : 'Cambiar a español'">
            <span [class.on]="lang.isEs()">ES</span><span class="sep">/</span><span [class.on]="!lang.isEs()">EN</span>
          </a>
          <button class="icon" type="button" (click)="theme.toggle()" [attr.aria-label]="theme.theme() === 'dark' ? t().theme.toLight : t().theme.toDark">
            @if (theme.theme() === 'dark') {
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
            } @else {
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>
            }
          </button>
          <a class="btn btn-primary cta" [routerLink]="paths().home" fragment="contacto" (click)="open.set(false)">{{ t().nav.contact }}</a>
        </nav>

        <button class="icon burger" type="button" (click)="open.set(!open())" [attr.aria-expanded]="open()" aria-controls="nav" aria-label="Menú">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            @if (open()) { <path d="M6 6l12 12M18 6L6 18"/> } @else { <path d="M4 7h16M4 12h16M4 17h16"/> }
          </svg>
        </button>
      </div>
    </header>
  `,
  styles: `
    .header { position: sticky; top: 0; z-index: 50; background: color-mix(in srgb, var(--bg) 85%, transparent); backdrop-filter: blur(8px); border-bottom: 1px solid var(--line); }
    .header-inner { display: flex; align-items: center; justify-content: space-between; height: 64px; gap: 1rem; }
    .brand { display: inline-flex; align-items: center; gap: 0.6rem; font-weight: 600; }
    .brand-mark { display: grid; place-items: center; width: 34px; height: 34px; border-radius: 8px; background: var(--accent); color: var(--accent-fg); font-size: 0.8rem; letter-spacing: 0.04em; }
    .nav { display: flex; align-items: center; gap: 1.4rem; font-size: var(--text-sm); }
    .nav a { color: var(--fg-muted); transition: color var(--ease); }
    .nav a:hover, .nav a.active { color: var(--fg); }
    .nav .cta { color: var(--accent-fg); }
    .lang { font-family: var(--font-mono); font-size: var(--text-xs); letter-spacing: 0.04em; }
    .lang .on { color: var(--fg); font-weight: 500; }
    .lang .sep { margin-inline: 0.25rem; color: var(--fg-subtle); }
    .icon { display: grid; place-items: center; width: 36px; height: 36px; border-radius: var(--radius-sm); color: var(--fg-muted); transition: background-color var(--ease), color var(--ease); }
    .icon:hover { background: var(--bg-muted); color: var(--fg); }
    .burger { display: none; }
    @media (max-width: 720px) {
      .brand-name { display: none; }
      .burger { display: grid; }
      .nav { display: none; position: absolute; left: 0; right: 0; top: 64px; flex-direction: column; align-items: stretch; gap: 0; padding: 0.5rem var(--gutter) 1rem; background: var(--bg); border-bottom: 1px solid var(--line); }
      .nav.open { display: flex; }
      .nav a, .nav .icon { padding: 0.8rem 0; width: auto; height: auto; justify-content: flex-start; }
      .nav .cta { margin-top: 0.5rem; justify-content: center; }
    }
  `,
})
export class HeaderComponent {
  readonly lang = inject(LangService);
  readonly theme = inject(ThemeService);
  readonly open = signal(false);
  readonly t = computed(() => UI[this.lang.lang()]);
  readonly paths = this.lang.paths;
  readonly switchUrl = computed(() => {
    this.lang.lang(); // dependencia para recalcular al navegar
    return this.lang.switchUrl();
  });
}
