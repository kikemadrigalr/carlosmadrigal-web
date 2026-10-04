import { DOCUMENT } from '@angular/common';
import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'cm-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly doc = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  readonly theme = signal<Theme>(this.initial());

  toggle(): void {
    this.apply(this.theme() === 'dark' ? 'light' : 'dark');
  }

  private initial(): Theme {
    if (!this.isBrowser) return 'light';
    // index.html ya aplicó data-theme antes de arrancar; lo leemos de ahí.
    return this.doc.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }

  private apply(theme: Theme): void {
    this.theme.set(theme);
    if (!this.isBrowser) return;
    if (theme === 'dark') {
      this.doc.documentElement.setAttribute('data-theme', 'dark');
    } else {
      this.doc.documentElement.removeAttribute('data-theme');
    }
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* almacenamiento no disponible: se ignora */
    }
  }
}
