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

## Scripts

- `pnpm dev`: desarrollo
- `pnpm build`: build de produccion (genera export estatico)
- `pnpm start`: iniciar servidor de produccion (no necesario para Pages)