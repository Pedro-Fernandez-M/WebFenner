# WebFenner

Sitio web educativo construido con Next.js.

## Ejecutar en local

1. Instalar dependencias:

```bash
pnpm install
```

2. Iniciar modo desarrollo:

```bash
pnpm dev
```

3. Abrir en el navegador:

http://localhost:3000

## Deploy en GitHub Pages

Este repositorio incluye un workflow en `.github/workflows/deploy-pages.yml`.

1. Haz push a `main`.
2. GitHub Actions construye el sitio y publica automaticamente.
3. URL esperada:

https://pedro-fernandez-m.github.io/WebFenner/

## Noticias desde Facebook (automatico)

La seccion Noticias y Novedades puede cargarse automaticamente desde:

https://www.facebook.com/indufenner

### Configuracion en GitHub

En GitHub ve a Settings > Secrets and variables > Actions y crea:

- `FACEBOOK_PAGE_ID`: ID numerico de la pagina de Facebook
- `FACEBOOK_PAGE_ACCESS_TOKEN`: token de pagina con permisos para leer posts

El workflow ejecuta `pnpm fetch:facebook-news` antes del build y genera:

- `data/noticias.facebook.generated.json`

Si faltan credenciales o la API falla, se genera un fallback para no romper el deploy.

## Scripts

- `pnpm dev`: desarrollo
- `pnpm build`: build de produccion (genera export estatico)
- `pnpm fetch:facebook-news`: sincroniza noticias desde Facebook Graph API
- `pnpm start`: iniciar servidor de produccion (no necesario para Pages)