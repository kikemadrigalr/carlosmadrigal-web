import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { ProjectPage } from './pages/project/project.page';
import { AboutPage } from './pages/about/about.page';
import { NotFoundPage } from './pages/not-found/not-found.page';

export const routes: Routes = [
  { path: '', redirectTo: 'es', pathMatch: 'full' },
  {
    path: 'es',
    data: { lang: 'es' },
    children: [
      { path: '', component: HomePage },
      { path: 'proyectos/:slug', component: ProjectPage },
      { path: 'sobre-mi', component: AboutPage },
    ],
  },
  {
    path: 'en',
    data: { lang: 'en' },
    children: [
      { path: '', component: HomePage },
      { path: 'projects/:slug', component: ProjectPage },
      { path: 'about', component: AboutPage },
    ],
  },
  { path: '**', component: NotFoundPage },
];
