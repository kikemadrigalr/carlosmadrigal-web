import { Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LangService } from './core/lang.service';
import { UI } from './content/i18n';

@Component({
  selector: 'cm-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <a class="skip-link" href="#contenido">{{ t().nav.skip }}</a>
    <cm-header />
    <main id="contenido" class="main">
      <router-outlet />
    </main>
    <cm-footer />
  `,
})
export class AppComponent {
  private readonly lang = inject(LangService);
  readonly t = computed(() => UI[this.lang.lang()]);
}
