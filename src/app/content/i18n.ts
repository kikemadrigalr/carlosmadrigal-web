import { Lang } from '../core/lang.service';

/** Textos de interfaz y de la home, por idioma. */
export interface UiStrings {
  nav: { projects: string; about: string; contact: string; skip: string };
  hero: { label: string; labelItems: string[]; title: string; paragraph: string; ctaProjects: string; ctaCv: string; available: string };
  metrics: { value: string; label: string }[];
  stack: {
    eyebrow: string;
    title: string;
    groups: { name: string; items: string[] }[];
    builtWith: string;
    builtWithLink: string;
  };
  projects: { eyebrow: string; title: string; viewCase: string; all: string };
  how: { eyebrow: string; title: string; items: { title: string; text: string }[] };
  contact: { eyebrow: string; title: string; text: string; copyEmail: string; copied: string; linkedin: string; whatsapp: string };
  project: { context: string; role: string; architecture: string; outcome: string; stack: string; next: string; back: string };
  about: { eyebrow: string; title: string };
  footer: { role: string; builtWith: string; code: string; rights: string };
  notFound: { title: string; text: string; home: string };
  theme: { toLight: string; toDark: string };
  seo: { homeTitle: string; homeDesc: string; aboutTitle: string; aboutDesc: string };
}

export const CONTACT = {
  email: 'carlosmad03@gmail.com',
  linkedin: 'https://www.linkedin.com/in/carlosmad03',
  github: 'https://github.com/kikemadrigalr',
  repo: 'https://github.com/kikemadrigalr/carlosmadrigal-web',
  whatsapp: 'https://wa.me/573127580552',
  cvPdf: '/cv/Carlos_Madrigal_CV.pdf',
};

const es: UiStrings = {
  nav: { projects: 'Proyectos', about: 'Sobre mí', contact: 'Contactar', skip: 'Saltar al contenido' },
  hero: {
    label: 'Desarrollador Backend .NET · APIs REST · Full Stack Angular · Remoto desde Colombia',
    labelItems: ['Desarrollador Backend .NET', 'APIs REST', 'Full Stack Angular', 'Remoto desde Colombia'],
    title: 'Construyo APIs que sostienen operaciones clínicas en producción.',
    paragraph:
      'Cinco años diseñando y manteniendo servicios .NET para el sector salud y farmacéutico, donde un dato mal guardado tiene consecuencias reales. Trabajo API-first con OpenAPI como contrato, pruebas en xUnit y Playwright, y Angular cuando el producto necesita frontend.',
    ctaProjects: 'Ver proyectos',
    ctaCv: 'Descargar CV (PDF)',
    available: 'Disponible para roles remotos',
  },
  metrics: [
    { value: '5+', label: 'años con .NET' },
    { value: '6', label: 'proyectos en producción' },
    { value: '100%', label: 'remoto desde 2023' },
  ],
  stack: {
    eyebrow: '01 — Stack',
    title: 'Herramientas con las que entrego.',
    groups: [
      {
        name: 'Backend',
        items: ['C#', '.NET 6/7/8', 'ASP.NET Core', 'Entity Framework', 'OpenAPI / Swagger', '.NET Framework 4.5', 'Web Forms (ASPX)', 'ASP.NET MVC'],
      },
      {
        name: 'Datos & Testing',
        items: ['SQL Server', 'Procedimientos almacenados', 'MySQL', 'xUnit', 'Playwright E2E', 'Code reviews', 'SOLID'],
      },
      {
        name: 'Frontend & Herramientas',
        items: ['Angular 14/16/18', 'TypeScript', 'JavaScript ES6+', 'Bootstrap', 'Git', 'Visual Studio', 'Postman', 'Claude Code', 'Cursor', 'MCP'],
      },
    ],
    builtWith: 'Esta web está hecha con Angular 18 y desplegada en Vercel.',
    builtWithLink: 'Ver el código en GitHub ↗',
  },
  projects: { eyebrow: '02 — Proyectos', title: 'Sistemas en producción.', viewCase: 'Ver el caso →', all: 'Todos los proyectos' },
  how: {
    eyebrow: '03 — Cómo trabajo',
    title: 'Cuatro reglas que no negocio.',
    items: [
      { title: 'API-first.', text: 'El contrato OpenAPI se escribe antes que el código; frontend y backend avanzan en paralelo sin bloquearse.' },
      { title: 'Tests que acompañan.', text: 'xUnit en servicios y lógica de negocio; Playwright para E2E en vivo mientras desarrollo.' },
      { title: 'Refactors seguros.', text: 'Code reviews y SOLID como práctica, no como ideal.' },
      { title: 'IA como copiloto.', text: 'Claude Code, Cursor y MCP a diario para refactorizar, documentar y depurar. Las decisiones de arquitectura las tomo yo.' },
    ],
  },
  contact: {
    eyebrow: '04 — Contacto',
    title: '¿Tienes un sistema que necesita un backend sólido?',
    text: 'Respondo yo, en un día laborable. Disponible para roles remotos en LATAM y EE.UU.',
    copyEmail: 'Copiar correo',
    copied: 'Copiado ✓',
    linkedin: 'Escríbeme en LinkedIn ↗',
    whatsapp: 'WhatsApp ↗',
  },
  project: {
    context: 'Contexto',
    role: 'Mi rol',
    architecture: 'Arquitectura y decisiones',
    outcome: 'Resultado',
    stack: 'Stack',
    next: 'Siguiente proyecto',
    back: '← Todos los proyectos',
  },
  about: { eyebrow: 'Sobre mí', title: 'Backend que no se ve, pero se nota.' },
  footer: {
    role: 'Desarrollador Backend .NET · APIs REST · Angular',
    builtWith: 'Hecho con Angular 18',
    code: 'Código en GitHub ↗',
    rights: 'Todos los derechos reservados.',
  },
  notFound: { title: 'Página no encontrada', text: 'La ruta que buscas no existe o cambió de lugar.', home: 'Ir al inicio' },
  theme: { toLight: 'Cambiar a tema claro', toDark: 'Cambiar a tema oscuro' },
  seo: {
    homeTitle: 'Carlos Madrigal — Desarrollador Backend .NET · APIs REST · Angular',
    homeDesc: 'Cinco años construyendo APIs .NET para salud y farma. API-first, xUnit, Playwright, Angular. Remoto desde Colombia.',
    aboutTitle: 'Sobre mí — Carlos Madrigal',
    aboutDesc: 'Licenciado en Informática, cinco años en .NET, de Web Forms a .NET 8 en plataformas clínicas que operan en cuatro países.',
  },
};

const en: UiStrings = {
  nav: { projects: 'Projects', about: 'About', contact: 'Contact', skip: 'Skip to content' },
  hero: {
    label: '.NET Backend Developer · REST APIs · Angular Full Stack · Remote from Colombia',
    labelItems: ['.NET Backend Developer', 'REST APIs', 'Angular Full Stack', 'Remote from Colombia'],
    title: 'I build APIs that keep clinical operations running in production.',
    paragraph:
      'Five years designing and maintaining .NET services for healthcare and pharma, where a badly stored record has real consequences. I work API-first with OpenAPI as the contract, test with xUnit and Playwright, and ship Angular when the product needs a frontend.',
    ctaProjects: 'View projects',
    ctaCv: 'Download CV (PDF)',
    available: 'Open to remote roles',
  },
  metrics: [
    { value: '5+', label: 'years with .NET' },
    { value: '6', label: 'projects in production' },
    { value: '100%', label: 'remote since 2023' },
  ],
  stack: {
    eyebrow: '01 — Stack',
    title: 'The tools I ship with.',
    groups: [
      {
        name: 'Backend',
        items: ['C#', '.NET 6/7/8', 'ASP.NET Core', 'Entity Framework', 'OpenAPI / Swagger', '.NET Framework 4.5', 'Web Forms (ASPX)', 'ASP.NET MVC'],
      },
      {
        name: 'Data & Testing',
        items: ['SQL Server', 'Stored procedures', 'MySQL', 'xUnit', 'Playwright E2E', 'Code reviews', 'SOLID'],
      },
      {
        name: 'Frontend & Tools',
        items: ['Angular 14/16/18', 'TypeScript', 'JavaScript ES6+', 'Bootstrap', 'Git', 'Visual Studio', 'Postman', 'Claude Code', 'Cursor', 'MCP'],
      },
    ],
    builtWith: 'This site is built with Angular 18 and deployed on Vercel.',
    builtWithLink: 'View the code on GitHub ↗',
  },
  projects: { eyebrow: '02 — Projects', title: 'Systems in production.', viewCase: 'View case →', all: 'All projects' },
  how: {
    eyebrow: '03 — How I work',
    title: 'Four rules I don’t negotiate.',
    items: [
      { title: 'API-first.', text: 'The OpenAPI contract comes before the code; frontend and backend move in parallel without blocking each other.' },
      { title: 'Tests that travel with the code.', text: 'xUnit on services and business logic; Playwright for live E2E while I build.' },
      { title: 'Safe refactors.', text: 'Code reviews and SOLID as practice, not aspiration.' },
      { title: 'AI as copilot.', text: 'Claude Code, Cursor and MCP every day to refactor, document and debug. Architecture decisions are mine.' },
    ],
  },
  contact: {
    eyebrow: '04 — Contact',
    title: 'Have a system that needs a solid backend?',
    text: 'I answer personally, within one business day. Open to remote roles across LATAM and the US.',
    copyEmail: 'Copy email',
    copied: 'Copied ✓',
    linkedin: 'Message me on LinkedIn ↗',
    whatsapp: 'WhatsApp ↗',
  },
  project: {
    context: 'Context',
    role: 'My role',
    architecture: 'Architecture & decisions',
    outcome: 'Outcome',
    stack: 'Stack',
    next: 'Next project',
    back: '← All projects',
  },
  about: { eyebrow: 'About', title: 'Backend nobody sees, everybody feels.' },
  footer: {
    role: '.NET Backend Developer · REST APIs · Angular',
    builtWith: 'Built with Angular 18',
    code: 'Code on GitHub ↗',
    rights: 'All rights reserved.',
  },
  notFound: { title: 'Page not found', text: 'The route you’re looking for doesn’t exist or has moved.', home: 'Go home' },
  theme: { toLight: 'Switch to light theme', toDark: 'Switch to dark theme' },
  seo: {
    homeTitle: 'Carlos Madrigal — .NET Backend Developer · REST APIs · Angular',
    homeDesc: 'Five years building .NET APIs for healthcare and pharma. API-first, xUnit, Playwright, Angular. Remote from Colombia.',
    aboutTitle: 'About — Carlos Madrigal',
    aboutDesc: 'Computer Science graduate, five years in .NET, from Web Forms to .NET 8 on clinical platforms operating in four countries.',
  },
};

export const UI: Record<Lang, UiStrings> = { es, en };

/** Texto de la página "Sobre mí", en párrafos. */
export const ABOUT: Record<Lang, string[]> = {
  es: [
    'Soy Licenciado en Informática por la Universidad de Oriente (Venezuela) y llevo cinco años programando en .NET, desde Web Forms en sistemas de gestión interna hasta .NET 8 en plataformas clínicas que hoy operan en cuatro países.',
    'Me interesa el backend que no se ve: el contrato de una API bien definido, el procedimiento almacenado que no se cae con el volumen, el test que atrapa el bug antes que el usuario.',
    'Uso IA a diario — Claude Code, Cursor, MCP — como herramienta de productividad, no como sustituto del criterio. Y fuera del teclado soy trompetista profesional, lo que explica mi obsesión con la práctica deliberada y con que las cosas suenen bien en conjunto.',
    'Inglés B1: leo documentación técnica sin problema; la conversación está en progreso.',
  ],
  en: [
    'I hold a degree in Computer Science from Universidad de Oriente (Venezuela) and have spent five years programming in .NET — from Web Forms in internal management systems to .NET 8 on clinical platforms that now operate in four countries.',
    'I care about the backend nobody sees: the well-defined API contract, the stored procedure that holds under load, the test that catches the bug before the user does.',
    'I use AI daily — Claude Code, Cursor, MCP — as a productivity tool, not a substitute for judgment. Away from the keyboard I’m a professional trumpet player, which explains my obsession with deliberate practice and with things sounding good together.',
    'English: B1. Technical documentation is no problem; conversation is a work in progress.',
  ],
};
