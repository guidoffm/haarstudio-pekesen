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

Alle Fotos liegen in `public/images` und stammen von Pixabay (frei für kommerzielle Nutzung, keine Namensnennung erforderlich – [Pixabay License](https://pixabay.com/service/license-summary/)):

1. `Haarstudio-Pekesen_316423fd282c58eecad1ab2eef972d09.jpg` – <https://pixabay.com/>
2. `ornaw-barbershop-4019683_1280.jpg` – <https://pixabay.com/photos/barbershop-salon-chairs-barbers-4019683/> (Fotograf: ornaw)
3. `juanromanroman-hairdressing-952007_1280.jpg` – <https://pixabay.com/photos/hairdressing-salon-hairdresser-952007/> (Fotograf: juanromanroman)
4. `mostafa_meraji-barber-6818730_1280.jpg` – <https://pixabay.com/photos/barber-barbershop-salon-hairdresser-6818730/> (Fotograf: mostafa_meraji)
5. `pexels-awning-1840339_1280.jpg` – <https://pixabay.com/photos/awning-shop-stores-signboard-1840339/> (Fotograf: pexels)
