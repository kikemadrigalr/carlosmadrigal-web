import { Lang } from '../core/lang.service';

export interface ProjectCopy {
  name: string;
  sector: string;
  tagline: string;
  context: string[];
  role: string[];
  architecture: string[];
  outcome?: string[];
  seoDesc: string;
}

export interface Project {
  slug: string;
  order: string; // "01"
  years: string;
  stack: string[];
  copy: Record<Lang, ProjectCopy>;
}

export const PROJECTS: Project[] = [
  {
    slug: 'dxone',
    order: '01',
    years: '2026',
    stack: ['.NET 8', 'Angular', 'SQL Server', 'Azure', 'Clean Architecture', 'JWT', 'OpenAPI'],
    copy: {
      es: {
        name: 'DxOne',
        sector: 'Diagnóstico de enfermedades raras',
        tagline: 'Una plataforma regional que reemplaza tres sistemas legacy en cuatro países.',
        context: [
          'Una farmacéutica global operaba su programa de diagnóstico de enfermedades raras en LATAM con tres plataformas independientes: una en México, otra en el Cono Sur y una aplicación dedicada en Colombia. Tres códigos, tres flujos, tres equipos de mantenimiento.',
          'DxOne es una solución nueva que engloba los tres programas en una sola, con dos productos: una app móvil nativa para el médico especialista y DxOne Connect, el CRM web para los operadores logísticos de cada país.',
        ],
        role: [
          'Desarrollador. Me integré al squad en agosto de 2026 con foco en DxOne Connect. Desarrollé los módulos de Médicos y Pacientes para Colombia, México y Cono Sur, incluyendo formularios de alta y edición por país, sincronización bidireccional con la app móvil y estándares de registro de nombres para evitar sobrescrituras.',
          'Construí los catálogos de la Red Dx (aseguradoras, instituciones, proveedores, contactos, ciudades, especialidades), parte del flujo de solicitudes diagnósticas (documentos físicos pendientes, cierre "no efectiva" con motivos por país) y la descarga del consentimiento informado. Durante el hypercare corregí decenas de hallazgos de QA en los módulos internos.',
        ],
        architecture: [
          'Tres programas (Colombia, México, Cono Sur) en una sola aplicación, con aislamiento lógico de datos por división en lugar de tres infraestructuras separadas. DxOne Connect aprovecha la plataforma TBTB Connect 2.0 ya en producción.',
          'Autenticación JWT en cookies HttpOnly/Secure/SameSite=Strict; el token lleva la división del usuario y filtra la visibilidad desde el backend.',
          'Clean Architecture en .NET 8, Azure App Services + Azure SQL + Key Vault + Blob Storage, audit log inmutable.',
          'Cumplimiento de cuatro normativas de datos personales (Colombia, México, Argentina, Chile) con DPIA e inventario de datos documentados.',
        ],
        outcome: [
          'Un solo flujo diagnóstico regional en producción donde antes había tres. Reconocimiento formal de la compañía por el aporte durante la ventana de lanzamiento (julio–septiembre 2026).',
        ],
        seoDesc: 'DxOne: plataforma regional de diagnóstico de enfermedades raras en cuatro países. Módulos de Médicos, Pacientes y Red Dx en .NET 8 y Angular.',
      },
      en: {
        name: 'DxOne',
        sector: 'Rare disease diagnostics',
        tagline: 'One regional platform replacing three legacy systems across four countries.',
        context: [
          'A global pharmaceutical company ran its rare-disease diagnostic program in LATAM on three independent platforms: one in Mexico, one in the Southern Cone and a dedicated app in Colombia. Three codebases, three flows, three maintenance teams.',
          'DxOne is a new solution that brings the three programs under one roof, with two products: a native mobile app for the specialist physician and DxOne Connect, the web CRM for each country’s logistics operator.',
        ],
        role: [
          'Developer. I joined the squad in August 2026 focused on DxOne Connect. I built the Physicians and Patients modules for Colombia, Mexico and the Southern Cone, including per-country create/edit forms, two-way sync with the mobile app and name-registration standards to prevent overwrites.',
          'I built the Dx Network catalogs (insurers, institutions, providers, contacts, cities, specialties), part of the diagnostic request flow (pending physical documents, "not effective" closure with per-country reasons) and informed-consent download. During hypercare I fixed dozens of QA findings across internal modules.',
        ],
        architecture: [
          'Three programs (Colombia, Mexico, Southern Cone) in a single application, with logical data isolation by division instead of three separate infrastructures. DxOne Connect runs on the TBTB Connect 2.0 platform already in production.',
          'JWT authentication in HttpOnly/Secure/SameSite=Strict cookies; the token carries the user’s division and filters visibility from the backend.',
          'Clean Architecture on .NET 8, Azure App Services + Azure SQL + Key Vault + Blob Storage, immutable audit log.',
          'Compliance with four personal-data regulations (Colombia, Mexico, Argentina, Chile) with a documented DPIA and data inventory.',
        ],
        outcome: [
          'One regional diagnostic flow in production where there used to be three. Formal company recognition for the contribution during the launch window (July–September 2026).',
        ],
        seoDesc: 'DxOne: regional rare-disease diagnostics platform across four countries. Physicians, Patients and Dx Network modules in .NET 8 and Angular.',
      },
    },
  },
  {
    slug: 'connect',
    order: '02',
    years: '2025–2026',
    stack: ['.NET 8', 'Angular 18', 'SQL Server', 'OpenAPI', 'xUnit', 'Playwright', 'Azure'],
    copy: {
      es: {
        name: 'TBTB Connect 2.0',
        sector: 'Operación farmacéutica',
        tagline: 'El CRM operativo sobre el que corren los programas de pacientes.',
        context: [
          'La plataforma operativa de TBTB Global para clientes farmacéuticos: registra y supervisa actividades con médicos y pacientes, el seguimiento de procesos clínicos y la gestión completa de toma y transporte de muestras. Es la base sobre la que se configuran programas como DxOne.',
        ],
        role: [
          'Desarrollador, backend y frontend. Mi aporte más distintivo fue impulsar la construcción de módulos genéricos a partir de scripts de configuración en SQL Server: un orquestador que, con una sola ejecución, deja un módulo operativo con sus cuatro esquemas (datatable, creación, edición y visualización) y sus funcionales. Lo que antes requería programar cada módulo a mano pasó a ser configuración.',
          'Además: diseño de APIs REST con OpenAPI como contrato entre equipos, modelado relacional y procedimientos almacenados, y módulos Angular sobre el design system reutilizable de la plataforma.',
        ],
        architecture: [
          'Módulos definidos por configuración en SQL (esquemas + funcionales) en lugar de código específico por módulo: menos duplicación, despliegue de un módulo nuevo en una ejecución.',
          'Desarrollo guiado por especificaciones (PRD), con el documento OpenAPI generado desde el código como contrato de integración; frontend y backend avanzan en paralelo.',
          'Multi-programa y multi-división sobre una sola instancia, con aislamiento lógico de datos.',
          'Pruebas unitarias con xUnit sobre servicios; E2E con Playwright.',
        ],
        seoDesc: 'TBTB Connect 2.0: CRM operativo para programas de pacientes. Módulos genéricos por configuración SQL, APIs OpenAPI, Angular y xUnit.',
      },
      en: {
        name: 'TBTB Connect 2.0',
        sector: 'Pharma operations',
        tagline: 'The operational CRM that patient programs run on.',
        context: [
          'TBTB Global’s operational platform for pharmaceutical clients: it records and supervises activities with physicians and patients, tracks clinical processes and manages sample collection and transport end to end. It is the base on which programs like DxOne are configured.',
        ],
        role: [
          'Developer, backend and frontend. My most distinctive contribution was driving the construction of generic modules from SQL Server configuration scripts: an orchestrator that, in a single run, leaves a module operational with its four schemas (datatable, create, edit and view) and its functional pieces. What used to require hand-coding every module became configuration.',
          'Also: REST API design with OpenAPI as the contract between teams, relational modeling and stored procedures, and Angular modules on top of the platform’s reusable design system.',
        ],
        architecture: [
          'Modules defined by SQL configuration (schemas + functionals) instead of module-specific code: less duplication, a new module deployed in one run.',
          'Spec-guided development (PRD), with the OpenAPI document generated from the code as the integration contract; frontend and backend move in parallel.',
          'Multi-program and multi-division on a single instance, with logical data isolation.',
          'Unit tests with xUnit on services; E2E with Playwright.',
        ],
        seoDesc: 'TBTB Connect 2.0: operational CRM for patient programs. Generic modules via SQL configuration, OpenAPI APIs, Angular and xUnit.',
      },
    },
  },
  {
    slug: 'rdstp',
    order: '03',
    years: '2025–2026',
    stack: ['.NET Core', 'SQL Server', 'REST API', 'OpenAPI'],
    copy: {
      es: {
        name: 'RDSTP',
        sector: 'Trazabilidad clínica',
        tagline: 'Ecosistema modular para seguir una muestra médica de punta a punta.',
        context: [
          'Ecosistema modular para seguir una muestra médica desde la toma hasta el resultado, con automatización documental, validaciones inteligentes y notificaciones integradas.',
        ],
        role: [
          'Desarrollador backend. Construí las funcionalidades centrales de la aplicación: el registro de la muestra (sample), el llenado y exportación del TRF (formulario de solicitud al laboratorio) y el seguimiento del sample desde que se registra hasta que se procesa y se cargan sus resultados.',
          'También el tracking de los paquetes que trasladan las muestras hasta su entrega en el laboratorio.',
        ],
        architecture: [
          'Ciclo de vida de la muestra modelado como máquina de estados, con cada transición registrada para trazabilidad completa.',
          'Generación documental del TRF desde los datos del sample, sin captura manual duplicada.',
          'Dos niveles de tracking independientes pero vinculados: la muestra y el paquete físico que la transporta.',
        ],
        seoDesc: 'RDSTP: backend .NET para trazabilidad de muestras médicas. Registro de sample, TRF, tracking de muestras y paquetes.',
      },
      en: {
        name: 'RDSTP',
        sector: 'Clinical traceability',
        tagline: 'A modular ecosystem to follow a medical sample end to end.',
        context: [
          'A modular ecosystem to follow a medical sample from collection to result, with document automation, smart validations and integrated notifications.',
        ],
        role: [
          'Backend developer. I built the application’s core features: sample registration, TRF (lab test requisition form) completion and export, and sample tracking from registration through processing to results upload.',
          'Also the tracking of the packages that transport samples until delivery at the lab.',
        ],
        architecture: [
          'Sample lifecycle modeled as a state machine, with every transition recorded for full traceability.',
          'TRF document generated from sample data, with no duplicated manual entry.',
          'Two independent but linked tracking levels: the sample and the physical package carrying it.',
        ],
        seoDesc: 'RDSTP: .NET backend for medical sample traceability. Sample registration, TRF, sample and package tracking.',
      },
    },
  },
  {
    slug: 'rdgenpp',
    order: '04',
    years: '2024',
    stack: ['.NET Core', 'Angular', 'SQL Server'],
    copy: {
      es: {
        name: 'RDGENPP',
        sector: 'Laboratorios y centros de salud',
        tagline: 'Seguimiento de muestras de pacientes entre laboratorio y centro de salud.',
        context: [
          'Sistema de seguimiento de muestras de pacientes para mejorar tratamientos y diagnósticos, optimizando el flujo de información entre laboratorios y centros de salud.',
        ],
        role: [
          'Desarrollador. Desarrollo de la aplicación de seguimiento: registro de muestras, estados del proceso y flujo de información entre laboratorio y centro de salud. Antecedente directo de RDSTP.',
        ],
        architecture: [
          'API REST en .NET Core con SQL Server como fuente de verdad del estado de cada muestra.',
          'Frontend Angular para el registro y la consulta de estados por parte de laboratorio y centro de salud.',
        ],
        seoDesc: 'RDGENPP: seguimiento de muestras de pacientes entre laboratorios y centros de salud. .NET Core, Angular y SQL Server.',
      },
      en: {
        name: 'RDGENPP',
        sector: 'Labs and healthcare centers',
        tagline: 'Patient sample tracking between lab and healthcare center.',
        context: [
          'A patient sample tracking system to improve treatment and diagnosis, streamlining the information flow between laboratories and healthcare centers.',
        ],
        role: [
          'Developer. Built the tracking application: sample registration, process states and information flow between lab and healthcare center. Direct predecessor of RDSTP.',
        ],
        architecture: [
          'REST API on .NET Core with SQL Server as the source of truth for each sample’s state.',
          'Angular frontend for registration and status lookup by lab and healthcare center.',
        ],
        seoDesc: 'RDGENPP: patient sample tracking between labs and healthcare centers. .NET Core, Angular and SQL Server.',
      },
    },
  },
  {
    slug: 'galexito',
    order: '05',
    years: '2018–2020',
    stack: ['.NET Framework 4.5', 'Web Forms', 'SQL Server', 'SSRS', 'IIS'],
    copy: {
      es: {
        name: 'Galexito',
        sector: 'Gestión interna',
        tagline: 'Módulos web en .NET Framework y reportes gerenciales con SSRS.',
        context: [
          'Sistema de gestión interno de Empresas Andinas, en .NET Framework 4.5 con ASP.NET Web Forms, desplegado en IIS.',
        ],
        role: [
          'Desarrollador. Desarrollo de módulos web (páginas ASPX, controles de servidor, code-behind en C#), reportes de indicadores con SQL Server Reporting Services para la toma de decisiones gerenciales, y automatización de la emisión de cartas de trabajo en el módulo de RRHH, que eliminó un proceso manual.',
        ],
        architecture: [
          'Web Forms con controles de servidor y code-behind; un único binario desplegado en IIS.',
          'Reportes SSRS alimentados por procedimientos almacenados en SQL Server.',
        ],
        seoDesc: 'Galexito: sistema de gestión interno en .NET Framework 4.5 con Web Forms, SQL Server y Reporting Services.',
      },
      en: {
        name: 'Galexito',
        sector: 'Internal management',
        tagline: 'Web modules on .NET Framework and management reports with SSRS.',
        context: [
          'Empresas Andinas’ internal management system, built on .NET Framework 4.5 with ASP.NET Web Forms and deployed on IIS.',
        ],
        role: [
          'Developer. Built web modules (ASPX pages, server controls, C# code-behind), KPI reports with SQL Server Reporting Services for management decisions, and automated employment-letter generation in the HR module, removing a manual process.',
        ],
        architecture: [
          'Web Forms with server controls and code-behind; a single binary deployed on IIS.',
          'SSRS reports fed by SQL Server stored procedures.',
        ],
        seoDesc: 'Galexito: internal management system on .NET Framework 4.5 with Web Forms, SQL Server and Reporting Services.',
      },
    },
  },
];

export function findProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function nextProject(slug: string): Project {
  const i = PROJECTS.findIndex((p) => p.slug === slug);
  return PROJECTS[(i + 1) % PROJECTS.length];
}
