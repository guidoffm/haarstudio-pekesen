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

## Bildnachweise (Creative Commons)

Die Fotos liegen lokal in `public/images` und unterliegen folgenden CC-Lizenzen:

1. `hero-salon.jpg` – "Payal Shakya at Moi Hair Salon opening" von [Ashishlohorung](https://commons.wikimedia.org/wiki/User:Ashishlohorung) (CC BY-SA 3.0) via Wikimedia Commons: <https://commons.wikimedia.org/w/index.php?curid=25753252>
2. `salon-exterior.jpg` – "Hien Kim hair salon in Minh Khai street" von [Vuong Tri Binh](https://commons.wikimedia.org/wiki/User:Vuong_Tri_Binh) (CC BY-SA 4.0) via Wikimedia Commons: <https://commons.wikimedia.org/w/index.php?curid=63502965>
3. `salon-bw.jpg` – "Hair salon in cheung chau" von [Peachyeung316](https://commons.wikimedia.org/wiki/User:Peachyeung316) (CC BY-SA 4.0) via Wikimedia Commons: <https://commons.wikimedia.org/w/index.php?curid=91989563>
