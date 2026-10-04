import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Lang } from './lang.service';

export const SITE_URL = 'https://carlosmadrigal.vercel.app';

export interface SeoInput {
  title: string;
  description: string;
  path: string; // ej. /es/proyectos/dxone
  lang: Lang;
  altPath?: string; // ruta equivalente en el otro idioma
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly doc = inject(DOCUMENT);

  set(input: SeoInput): void {
    const url = SITE_URL + input.path;
    this.title.setTitle(input.title);
    this.doc.documentElement.lang = input.lang;

    this.meta.updateTag({ name: 'description', content: input.description });
    this.meta.updateTag({ property: 'og:title', content: input.title });
    this.meta.updateTag({ property: 'og:description', content: input.description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Carlos Madrigal' });
    this.meta.updateTag({ property: 'og:image', content: SITE_URL + '/og.png' });
    this.meta.updateTag({ property: 'og:locale', content: input.lang === 'es' ? 'es_CO' : 'en_US' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });

    this.link('canonical', url);
    if (input.altPath) {
      const alt = input.lang === 'es' ? 'en' : 'es';
      this.link('alternate', SITE_URL + input.altPath, alt);
      this.link('alternate', url, input.lang);
    }
  }

  private link(rel: string, href: string, hreflang?: string): void {
    const selector = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]`;
    let el = this.doc.head.querySelector<HTMLLinkElement>(selector);
    if (!el) {
      el = this.doc.createElement('link');
      el.rel = rel;
      if (hreflang) el.hreflang = hreflang;
      this.doc.head.appendChild(el);
    }
    el.href = href;
  }
}
