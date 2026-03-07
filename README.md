# Haarstudio Pekesen – Next.js Website

Moderne Onepage-Präsenz für das Haarstudio Pekesen in Bad Homburg. Die Seite wurde mit Next.js (App Router), TypeScript und Tailwind CSS v4 umgesetzt und ist vollständig responsiv.

## Features

- Hochwertiges Layout mit Playfair Display & Manrope
- Alle Stammdaten, Öffnungszeiten und CTA-Elemente
- Instagram-Verlinkung & Google-Maps-Routenlink
- Dockerfile für ein produktionsreifes OCI-Image (Next.js Standalone)
- GitHub Action zum Bauen und Veröffentlichen des Images nach GHCR
- Bildgalerie mit Creative-Commons-Lizenzen

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

## Bildnachweise

Alle Fotos liegen in `public/images`.

**Eigene Fotos des Salons:**

- `salon-styling-bereich.jpeg` – Styling-Bereich mit Hexagon-Deckenleuchten (Hero-Image)
- `salon-styling-bereich-2.jpeg` – Styling-Bereich, zweite Perspektive
- `empfang-ueberblick.jpeg` – Empfangsbereich mit Rezeption
- `empfang-tresen.jpeg` – Rezeptionstresen
- `1B993822-…_1_105_c.jpeg` – Fassade Frontalansicht
- `BD62660A-…_1_105_c.jpeg` – Außenansicht mit Schaufenstern
- `E6F74B7D-…_1_105_c.jpeg` – Seitenansicht Fußgängerzone
