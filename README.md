# Haarstudio Pekesen – Next.js Website

Moderne Onepage-Präsenz für das Haarstudio Pekesen in Bad Homburg. Die Seite wurde mit Next.js (App Router), TypeScript und Tailwind CSS v4 umgesetzt und ist vollständig responsiv.

## Features

- Hochwertiges Layout mit Playfair Display & Manrope
- Alle Stammdaten, Öffnungszeiten und CTA-Elemente
- Instagram-Verlinkung & Google-Maps-Routenlink
- Dockerfile für ein produktionsreifes OCI-Image (Next.js Standalone)
- GitHub Action zum Bauen und Veröffentlichen des Images nach GHCR

## Entwicklung

```bash
npm install
npm run dev
```

Die Seite ist unter <http://localhost:3000> erreichbar.

### Linting & Builds

```bash
npm run lint
npm run build
```

## Container Image lokal bauen

```bash
docker build -t haarstudio-pekesen .
docker run -p 3000:3000 haarstudio-pekesen
```

## GitHub Action

`.github/workflows/build.yml` baut das Docker-Image bei jedem Push nach `main` und veröffentlicht es als `ghcr.io/<owner>/<repo>:<tag>`.
