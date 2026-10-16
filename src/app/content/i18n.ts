import { Lang } from '../core/lang.service';

/** Textos de interfaz y de la home, por idioma. */
export interface UiStrings {
  nav: { projects: string; about: string; contact: string; skip: string; home: string; main: string; menu: string };
  hero: { labelItems: string[]; title: string; paragraph: string; ctaProjects: string; ctaCv: string; ctaGithub: string; available: string };
  metrics: { value: string; label: string }[];
  stack: {
    eyebrow: string;
    title: string;
    groups: { name: string; items: string[] }[];
    builtWith: string;
    builtWithLink: string;
  };
  projects: { eyebrow: string; title: string; viewCase: string };
  experience: { eyebrow: string; title: string; items: { period: string; title: string; text: string }[] };
  ai: { eyebrow: string; title: string; items: { title: string; text: string }[]; closing: string };
  how: { eyebrow: string; title: string; items: { title: string; text: string }[] };
  contact: { eyebrow: string; title: string; text: string; copyEmail: string; copied: string; linkedin: string; github: string; whatsapp: string };
  project: { context: string; role: string; architecture: string; outcome: string; stack: string; next: string; back: string };
  about: { eyebrow: string; title: string };
  footer: { role: string; builtWith: string; code: string };
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
  nav: {
    projects: 'Proyectos',
    about: 'Sobre mí',
    contact: 'Contactar',
    skip: 'Saltar al contenido',
    home: 'Carlos Madrigal — inicio',
    main: 'Principal',
    menu: 'Menú',
  },
  hero: {
    labelItems: ['Backend .NET', 'APIs REST', 'Angular'],
    title: 'Backend .NET que entra a producción y se queda.',
    paragraph:
      'Cinco años diseñando y manteniendo APIs REST con .NET, en sistemas donde un dato mal guardado tiene consecuencias reales. OpenAPI/Swagger como contrato de integración, xUnit y Playwright como red de seguridad, Angular cuando hace falta frontend — e IA integrada en el flujo de trabajo diario.',
    ctaProjects: 'Ver proyectos',
    ctaCv: 'Descargar CV (PDF)',
    ctaGithub: 'GitHub ↗',
    available: 'Disponible para roles remotos',
  },
  metrics: [
    { value: '5', label: 'años de experiencia en .NET' },
    { value: '4.5 → 10', label: 'de .NET Framework a .NET 10' },
    { value: '5', label: 'sistemas en producción' },
    { value: '100%', label: 'remoto desde 2023' },
  ],
  stack: {
    eyebrow: '01 — Stack',
    title: 'Herramientas con las que trabajo a diario.',
    groups: [
      {
        name: 'Backend',
        items: ['C#', '.NET 6–10', 'ASP.NET Core', 'Entity Framework', 'OpenAPI / Swagger', '.NET Framework 4.5', 'Web Forms (ASPX)', 'ASP.NET MVC'],
      },
      {
        name: 'Datos & Testing',
        items: ['SQL Server', 'Procedimientos almacenados', 'MySQL', 'xUnit', 'Playwright E2E', 'Code reviews', 'SOLID'],
      },
      {
        name: 'Frontend & Herramientas',
        items: ['Angular 14/16/18', 'TypeScript', 'JavaScript ES6+', 'Bootstrap', 'Git', 'Visual Studio', 'Postman'],
      },
    ],
    builtWith: 'Esta web está hecha con Angular 18 y desplegada en Vercel.',
    builtWithLink: 'Ver el código en GitHub ↗',
  },
  projects: { eyebrow: '02 — Proyectos', title: 'Sistemas en producción.', viewCase: 'Ver el caso →' },
  experience: {
    eyebrow: '03 — Experiencia',
    title: 'Dónde he construido.',
    items: [
      {
        period: '2023 — hoy',
        title: 'TBTB Global · Desarrollador Full Stack',
        text: 'Plataformas clínicas en .NET 8 y Angular para el sector salud y farmacéutico: DxOne, Connect 2.0, RDSTP. Remoto.',
      },
      {
        period: '2020 — 2023',
        title: 'Música profesional y proyectos propios',
        text: 'Trompetista profesional. El regreso al desarrollo en 2023 fue una decisión, no una casualidad.',
      },
      {
        period: '2018 — 2020',
        title: 'Empresas Andinas · Analista de Sistemas',
        text: '.NET Framework 4.5 y Web Forms sobre el sistema de gestión Galexito; reportes con SQL Server y Reporting Services; automatización de procesos de RRHH.',
      },
      {
        period: '2016 — 2019',
        title: 'Universidad de Oriente · Lic. en Informática',
        text: 'Prácticas profesionales como analista de sistemas (2016); titulado en 2019.',
      },
    ],
  },
  ai: {
    eyebrow: '04 — IA',
    title: 'IA en el flujo de trabajo, no en el discurso.',
    items: [
      { title: 'Claude Code y Cursor', text: 'A diario: refactorización, documentación y depuración.' },
      { title: 'MCP', text: 'Conecto el entorno de desarrollo con las APIs y herramientas internas de la organización.' },
      { title: 'Playwright MCP', text: 'Pruebas E2E dirigidas por IA mientras desarrollo, no después.' },
    ],
    closing: 'Las decisiones de arquitectura siguen siendo mías. La IA multiplica; el criterio dirige.',
  },
  how: {
    eyebrow: '05 — Cómo trabajo',
    title: 'Cuatro reglas que no negocio.',
    items: [
      { title: 'El contrato manda.', text: 'Desarrollo guiado por especificaciones (PRD) y OpenAPI/Swagger como fuente de verdad para la integración; frontend y backend avanzan sin bloquearse.' },
      { title: 'Tests que acompañan.', text: 'xUnit en servicios y lógica de negocio; Playwright para E2E en vivo mientras desarrollo.' },
      { title: 'Refactors seguros.', text: 'Code reviews y SOLID como práctica, no como ideal.' },
      { title: 'La base de datos importa.', text: 'Modelado relacional y procedimientos almacenados en SQL Server; el rendimiento empieza en el dato.' },
    ],
  },
  contact: {
    eyebrow: '06 — Contacto',
    title: '¿Tienes un sistema que necesita un backend sólido?',
    text: 'Respondo yo, en menos de un día hábil. Disponible para roles remotos en LATAM y EE.UU.',
    copyEmail: 'Copiar correo',
    copied: 'Copiado ✓',
    linkedin: 'Escríbeme en LinkedIn ↗',
    github: 'GitHub ↗',
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
  },
  notFound: { title: 'Página no encontrada', text: 'La ruta que buscas no existe o cambió de lugar.', home: 'Ir al inicio' },
  theme: { toLight: 'Cambiar a tema claro', toDark: 'Cambiar a tema oscuro' },
  seo: {
    homeTitle: 'Carlos Madrigal — Desarrollador Backend .NET · APIs REST · Angular',
    homeDesc: 'Desarrollador backend .NET: cinco años construyendo APIs REST en producción. OpenAPI/Swagger, xUnit, Playwright e IA en el flujo de desarrollo. Remoto desde Colombia.',
    aboutTitle: 'Sobre mí — Carlos Madrigal',
    aboutDesc: 'Licenciado en Informática, cinco años en .NET: de Web Forms a .NET 8 en sistemas que siguen en producción.',
  },
};

const en: UiStrings = {
  nav: {
    projects: 'Projects',
    about: 'About',
    contact: 'Contact',
    skip: 'Skip to content',
    home: 'Carlos Madrigal — home',
    main: 'Main',
    menu: 'Menu',
  },
  hero: {
    labelItems: ['.NET Backend', 'REST APIs', 'Angular'],
    title: '.NET backends that ship to production — and stay there.',
    paragraph:
      'Five years designing and maintaining REST APIs with .NET, in systems where a badly stored record has real consequences. OpenAPI/Swagger as the integration contract, xUnit and Playwright as the safety net, Angular when a frontend is needed — and AI woven into my daily workflow.',
    ctaProjects: 'View projects',
    ctaCv: 'Download CV (PDF)',
    ctaGithub: 'GitHub ↗',
    available: 'Open to remote roles',
  },
  metrics: [
    { value: '5', label: 'years of .NET experience' },
    { value: '4.5 → 10', label: 'from .NET Framework to .NET 10' },
    { value: '5', label: 'systems in production' },
    { value: '100%', label: 'remote since 2023' },
  ],
  stack: {
    eyebrow: '01 — Stack',
    title: 'The tools I ship with.',
    groups: [
      {
        name: 'Backend',
        items: ['C#', '.NET 6–10', 'ASP.NET Core', 'Entity Framework', 'OpenAPI / Swagger', '.NET Framework 4.5', 'Web Forms (ASPX)', 'ASP.NET MVC'],
      },
      {
        name: 'Data & Testing',
        items: ['SQL Server', 'Stored procedures', 'MySQL', 'xUnit', 'Playwright E2E', 'Code reviews', 'SOLID'],
      },
      {
        name: 'Frontend & Tools',
        items: ['Angular 14/16/18', 'TypeScript', 'JavaScript ES6+', 'Bootstrap', 'Git', 'Visual Studio', 'Postman'],
      },
    ],
    builtWith: 'This site is built with Angular 18 and deployed on Vercel.',
    builtWithLink: 'View the code on GitHub ↗',
  },
  projects: { eyebrow: '02 — Projects', title: 'Systems in production.', viewCase: 'View case →' },
  experience: {
    eyebrow: '03 — Experience',
    title: 'Where I’ve built.',
    items: [
      {
        period: '2023 — today',
        title: 'TBTB Global · Full Stack Developer',
        text: 'Clinical platforms in .NET 8 and Angular for healthcare and pharma: DxOne, Connect 2.0, RDSTP. Remote.',
      },
      {
        period: '2020 — 2023',
        title: 'Professional music and personal projects',
        text: 'Professional trumpet player. Returning to software in 2023 was a decision, not a coincidence.',
      },
      {
        period: '2018 — 2020',
        title: 'Empresas Andinas · Systems Analyst',
        text: '.NET Framework 4.5 and Web Forms on the Galexito management system; SQL Server and Reporting Services reports; HR process automation.',
      },
      {
        period: '2016 — 2019',
        title: 'Universidad de Oriente · BSc in Computer Science',
        text: 'Professional internship as a systems analyst (2016); graduated in 2019.',
      },
    ],
  },
  ai: {
    eyebrow: '04 — AI',
    title: 'AI in the workflow, not in the pitch.',
    items: [
      { title: 'Claude Code and Cursor', text: 'Daily: refactoring, documentation and debugging.' },
      { title: 'MCP', text: 'Wiring the dev environment into the organization’s internal APIs and tools.' },
      { title: 'Playwright MCP', text: 'AI-driven E2E tests while I build, not after.' },
    ],
    closing: 'Architecture decisions are still mine. AI multiplies; judgment steers.',
  },
  how: {
    eyebrow: '05 — How I work',
    title: 'Four non-negotiables.',
    items: [
      { title: 'The contract rules.', text: 'Spec-guided development (PRD) with OpenAPI/Swagger as the source of truth for integration; frontend and backend move without blocking each other.' },
      { title: 'Tests that travel with the code.', text: 'xUnit on services and business logic; Playwright for live E2E while I build.' },
      { title: 'Safe refactors.', text: 'Code reviews and SOLID as practice, not aspiration.' },
      { title: 'The database matters.', text: 'Relational modeling and stored procedures in SQL Server; performance starts at the data layer.' },
    ],
  },
  contact: {
    eyebrow: '06 — Contact',
    title: 'Have a system that needs a solid backend?',
    text: 'I reply personally within one business day. Open to remote roles across LATAM and the US.',
    copyEmail: 'Copy email',
    copied: 'Copied ✓',
    linkedin: 'Message me on LinkedIn ↗',
    github: 'GitHub ↗',
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
  },
  notFound: { title: 'Page not found', text: 'The route you’re looking for doesn’t exist or has moved.', home: 'Go home' },
  theme: { toLight: 'Switch to light theme', toDark: 'Switch to dark theme' },
  seo: {
    homeTitle: 'Carlos Madrigal — .NET Backend Developer · REST APIs · Angular',
    homeDesc: '.NET backend developer: five years building REST APIs in production. OpenAPI/Swagger, xUnit, Playwright and AI in the development workflow. Remote from Colombia.',
    aboutTitle: 'About — Carlos Madrigal',
    aboutDesc: 'Computer Science graduate, five years in .NET — from Web Forms to .NET 8 on systems still running in production.',
  },
};

export const UI: Record<Lang, UiStrings> = { es, en };

/** Texto de la página "Sobre mí", en párrafos. */
export const ABOUT: Record<Lang, string[]> = {
  es: [
    'Soy Licenciado en Informática por la Universidad de Oriente (Venezuela) y llevo cinco años programando en .NET, desde Web Forms en sistemas de gestión interna hasta .NET 8 en plataformas que hoy están en producción — entre ellas, sistemas del sector salud que operan en varios países.',
    'Me interesa el backend que no se ve: el contrato de una API bien definido, el procedimiento almacenado que no se cae con el volumen, el test que atrapa el bug antes que el usuario.',
    'Uso IA a diario — Claude Code, Cursor, MCP — como herramienta de productividad, no como sustituto del criterio. Y fuera del teclado soy trompetista profesional, lo que explica mi obsesión con la práctica deliberada y con que las cosas suenen bien en conjunto.',
    'Inglés B1: leo documentación técnica sin problema; la conversación está en progreso.',
  ],
  en: [
    'I hold a degree in Computer Science from Universidad de Oriente (Venezuela) and have spent five years programming in .NET — from Web Forms in internal management systems to .NET 8 on platforms running in production today, including healthcare systems operating across several countries.',
    'I care about the backend nobody sees: the well-defined API contract, the stored procedure that holds under load, the test that catches the bug before the user does.',
    'I use AI daily — Claude Code, Cursor, MCP — as a productivity tool, not a substitute for judgment. Away from the keyboard I’m a professional trumpet player, which explains my obsession with deliberate practice and with things sounding good together.',
    'English: B1. Technical documentation is no problem; conversation is a work in progress.',
  ],
};
