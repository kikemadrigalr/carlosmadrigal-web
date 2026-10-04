import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LangService } from '../../core/lang.service';
import { SeoService } from '../../core/seo.service';
import { CONTACT, UI } from '../../content/i18n';
import { PROJECTS } from '../../content/projects';
import { TypewriterComponent } from '../../components/typewriter/typewriter.component';

@Component({
  selector: 'cm-home',
  standalone: true,
  imports: [RouterLink, TypewriterComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css',
})
export class HomePage implements OnInit {
  private readonly langSvc = inject(LangService);
  private readonly seo = inject(SeoService);

  readonly lang = this.langSvc.lang;
  readonly t = computed(() => UI[this.lang()]);
  readonly paths = this.langSvc.paths;
  readonly contact = CONTACT;
  readonly projects = PROJECTS;
  readonly copied = signal(false);

  ngOnInit(): void {
    const lang = this.lang();
    this.seo.set({
      title: UI[lang].seo.homeTitle,
      description: UI[lang].seo.homeDesc,
      path: lang === 'es' ? '/es' : '/en',
      altPath: lang === 'es' ? '/en' : '/es',
      lang,
    });
  }

  async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    } catch {
      window.location.href = 'mailto:' + CONTACT.email;
    }
  }
}
