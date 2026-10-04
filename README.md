# carlosmadrigal-web

Sitio personal de Carlos Madrigal — Desarrollador Backend .NET · APIs REST · Angular.
Angular 18 (standalone, prerender estático), bilingüe ES/EN, tema claro/oscuro, desplegado en Vercel.

## Requisitos

- Node.js 24 (ver `.nvmrc`)
- npm 10+

## Desarrollo

```bash
npm install
npm start          # http://localhost:4200  (redirige a /es)
```

## Build de producción

```bash
npm run build
```

Genera `dist/carlosmadrigal-web/browser/` con HTML prerenderizado para cada ruta listada en `routes.txt`.

## Estructura

```
src/app/
├── core/            lang.service · theme.service · seo.service
├── content/         i18n.ts (textos UI) · projects.ts (casos)
├── components/      header · footer
└── pages/           home · project · about · not-found
public/              favicon · robots · sitemap · cv/ (PDF del CV)
routes.txt           rutas a prerenderizar
vercel.json          configuración de despliegue
```

Para cambiar textos: `src/app/content/i18n.ts`.
Para añadir o editar un proyecto: `src/app/content/projects.ts` + su ruta en `routes.txt` y `sitemap.xml`.
Para la foto: reemplazar el placeholder en `pages/about/about.page.ts` por `<img src="/foto.jpg">` y copiar la imagen a `public/`.

## Pendientes antes de publicar

- [ ] Copiar el CV a `public/cv/Carlos_Madrigal_CV.pdf`
- [ ] Generar `public/og.png` (1200×630) para previsualizaciones en redes
- [ ] Foto profesional en `public/foto.jpg` y actualizar `about.page.ts`
- [ ] Si el dominio final no es `carlosmadrigal.vercel.app`, actualizar `SITE_URL` en `core/seo.service.ts`, `robots.txt` y `sitemap.xml`

## Repositorio

`https://github.com/kikemadrigalr/carlosmadrigal-web` — rama principal `main`. Cada push a `main` despliega en Vercel.

## Vercel

1. New Project → importar `kikemadrigalr/carlosmadrigal-web`.
2. Framework: Angular (lo detecta solo). `vercel.json` ya fija build y `outputDirectory`.
3. Settings → General → Node.js Version: **24.x**.
4. Settings → General → Project Name: `carlosmadrigal` → URL `carlosmadrigal.vercel.app`.
5. Dominio propio (opcional): Settings → Domains → agregar y copiar los registros DNS que indique.
