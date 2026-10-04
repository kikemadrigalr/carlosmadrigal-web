import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'cm-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <a class="skip-link" href="#contenido">Saltar al contenido</a>
    <cm-header />
    <main id="contenido" class="main">
      <router-outlet />
    </main>
    <cm-footer />
  `,
})
export class AppComponent {}
