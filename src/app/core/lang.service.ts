import { Injectable, computed, inject, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

export type Lang = 'es' | 'en';

/** Idioma activo, derivado del prefijo de la URL (/es o /en). */
@Injectable({ providedIn: 'root' })
export class LangService {
  private readonly router = inject(Router);
  private readonly _lang = signal<Lang>(this.fromUrl(this.router.url));

  readonly lang = this._lang.asReadonly();
  readonly isEs = computed(() => this._lang() === 'es');

  /** Prefijos de ruta por idioma para construir enlaces. */
  readonly paths = computed(() =>
    this._lang() === 'es'
      ? { home: '/es', projects: '/es/proyectos', about: '/es/sobre-mi' }
      : { home: '/en', projects: '/en/projects', about: '/en/about' },
  );

  constructor() {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e) => this._lang.set(this.fromUrl(e.urlAfterRedirects)));
  }

  /** URL equivalente en el otro idioma (para el selector ES/EN). */
  switchUrl(): string {
    const url = this.router.url.split('#')[0];
    const map: Record<string, string> = {
      '/es': '/en',
      '/en': '/es',
      '/es/sobre-mi': '/en/about',
      '/en/about': '/es/sobre-mi',
    };
    if (map[url]) return map[url];
    if (url.startsWith('/es/proyectos/')) return url.replace('/es/proyectos/', '/en/projects/');
    if (url.startsWith('/en/projects/')) return url.replace('/en/projects/', '/es/proyectos/');
    return this._lang() === 'es' ? '/en' : '/es';
  }

  private fromUrl(url: string): Lang {
    return url.startsWith('/en') ? 'en' : 'es';
  }
}
