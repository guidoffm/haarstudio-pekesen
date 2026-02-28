import Image from "next/image";
import Link from "next/link";

const hours = [
  { day: "Montag", time: "08:00 - 19:00" },
  { day: "Dienstag", time: "08:00 - 19:00" },
  { day: "Mittwoch", time: "08:00 - 19:00" },
  { day: "Donnerstag", time: "08:00 - 19:00" },
  { day: "Freitag", time: "08:00 - 19:00" },
  { day: "Samstag", time: "08:00 - 18:00" },
];

const highlights = [
  {
    title: "Spontan willkommen",
    copy:
      "Unsere Türen stehen offen – kommen Sie einfach vorbei und lassen Sie sich vom Team beraten.",
  },
  {
    title: "Persönlicher Service",
    copy:
      "Unter der Leitung von Ali Pekesen erwartet Sie echte Handwerkskunst und ehrliche Empfehlungen.",
  },
  {
    title: "Lange Öffnungszeiten",
    copy:
      "Montag bis Freitag bis 19:00 Uhr – perfekt für alle, die sich nach der Arbeit Zeit für sich nehmen möchten.",
  },
];

const heroImage = {
  src: "/images/Haarstudio-Pekesen_316423fd282c58eecad1ab2eef972d09.jpg",
  alt: "Modernes Haarstudio mit Spiegelwand und warmem Licht",
  credit: "Pixabay",
  creditUrl: "https://pixabay.com/",
  license: "Pixabay License",
  licenseUrl: "https://pixabay.com/service/license-summary/",
};

const galleryImages = [
  {
    src: "/images/1B993822-9FB4-4829-B9F7-1F06B06CFE1B_1_105_c.jpeg",
    alt: "Fassade des Haarstudio Pekesen in der Louisenstraße, Bad Homburg – Frontalansicht mit großem Leuchtschild",
    caption: "Unser Salon mitten in der Fußgängerzone – gut sichtbar, leicht zu finden.",
  },
  {
    src: "/images/BD62660A-9384-4052-925D-9EFD05F6A681_1_105_c.jpeg",
    alt: "Außenansicht des Haarstudio Pekesen mit Schaufenstern und Eingang",
    caption: "Moderne Schaufenster laden zum Vorbeikommen ein – kein Termin nötig.",
  },
  {
    src: "/images/E6F74B7D-87F0-458C-827E-8052B61D100D_1_105_c.jpeg",
    alt: "Seitenansicht des Haarstudio Pekesen mit Blick in die historische Fußgängerzone Bad Homburg",
    caption: "Direkt in der historischen Innenstadt – umgeben von Cafés und Boutiquen.",
  },
];

export default function Home() {
  return (
    <div className="pb-16">
      <header className="mx-auto mt-8 max-w-6xl px-6">
        <section className="relative overflow-hidden rounded-[32px] bg-[#1c1f24] text-white">
          <div className="absolute inset-0" aria-hidden>
            <Image
              src={heroImage.src}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#101215]/80" />
          </div>
          <div className="relative grid gap-10 px-8 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:px-14">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#f5d9b3]">
                Haarstudio Pekesen · Bad Homburg
              </p>
              <h1 className="section-heading mt-4 text-4xl leading-tight text-white sm:text-5xl">
                Ihr exklusiver Friseur im Herzen von Bad Homburg
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-slate-100">
                Wir verbinden präzise Schnitte, charakterstarke Colorationen und
                aufmerksamste Gastfreundschaft. Kommen Sie spontan vorbei – oder
                reservieren Sie Ihren Lieblingsstylisten telefonisch.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="tel:+496172681466"
                  className="inline-flex items-center justify-center rounded-full bg-[#c8a46a] px-8 py-3 text-base font-semibold text-[#1c1f24] transition hover:bg-[#d4b37d]"
                >
                  Jetzt anrufen
                </Link>
                <Link
                  href="#kontakt"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-3 text-base font-semibold text-white transition hover:border-white hover:bg-white/10"
                >
                  Öffnungszeiten & Kontakt
                </Link>
              </div>
            </div>
            <div className="card-shadow rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur">
              <div className="text-sm uppercase tracking-widest text-[#f5d9b3]">
                Kein Termin nötig
              </div>
              <p className="mt-3 text-xl font-semibold text-white">
                Kommen Sie spontan vorbei! Möchten Sie Wartezeiten vermeiden oder
                von einer bestimmten Person bedient werden? Rufen Sie uns an und
                wir planen Ihren Besuch.
              </p>
              <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-6">
                <p className="text-sm text-slate-200">Adresse</p>
                <p className="mt-1 font-semibold">
                  Louisenstraße 19<br />61348 Bad Homburg v. d. Höhe
                </p>
                <p className="mt-4 text-sm text-slate-200">Telefon</p>
                <Link
                  href="tel:+496172681466"
                  className="mt-1 inline-flex items-center gap-2 text-lg font-semibold text-white"
                >
                  06172 681466
                </Link>
                <p className="mt-4 text-sm text-slate-200">E-Mail</p>
                <Link
                  href="mailto:kontakt@haarstudio-pekesen.de"
                  className="mt-1 inline-flex items-center gap-2 text-white"
                >
                  kontakt@haarstudio-pekesen.de
                </Link>
              </div>
            </div>
          </div>
          <p className="relative px-8 pb-6 text-xs text-white/70 lg:px-14">
            Foto: <Link className="underline" href={heroImage.creditUrl} target="_blank" rel="noreferrer">{heroImage.credit}</Link> ({" "}
            <Link className="underline" href={heroImage.licenseUrl} target="_blank" rel="noreferrer">
              {heroImage.license}
            </Link>
            )
          </p>
        </section>
      </header>

      <main className="mx-auto mt-16 flex max-w-6xl flex-col gap-16 px-6">
        <section className="grid gap-8 rounded-[32px] border border-[#efe2d0] bg-white/90 p-10 shadow-sm lg:grid-cols-3">
          {highlights.map((highlight) => (
            <article key={highlight.title} className="space-y-3">
              <h3 className="section-heading text-2xl text-[#1c1f24]">
                {highlight.title}
              </h3>
              <p className="text-base text-slate-700">{highlight.copy}</p>
            </article>
          ))}
        </section>

        <section className="grid items-center gap-12 rounded-[32px] bg-[#f1e6d9] p-10 lg:grid-cols-[1.1fr_0.9fr]" id="ueber-uns">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#a57c48]">
              Über uns
            </p>
            <h2 className="section-heading mt-4 text-3xl text-[#1c1f24]">
              Handwerk mit Handschlagqualität – geführt von Ali & Zeynel Pekesen
            </h2>
            <p className="mt-6 text-lg text-slate-800">
              Das Haarstudio Pekesen ist ein Familienbetrieb mit modernem Anspruch.
              Ali & Zeynel Pekesen und ihr Team nehmen sich Zeit, um Ihren Stil zu verstehen,
              empfehlen nur, was wirklich zu Ihnen passt, und arbeiten mit exklusiven Produkten.
            </p>
            <p className="mt-4 text-lg text-slate-800">
              Ob klassischer Haarschnitt, lebendige Farbe oder präzises Bart-Styling –
              wir setzen auf saubere Linien, hochwertige Pflege und einen freundlichen Empfang.
            </p>
          </div>
          <div className="card-shadow rounded-[28px] border border-[#f2d7b5] bg-white p-8">
            <p className="text-sm uppercase tracking-[0.4em] text-[#a57c48]">
              Kontakt
            </p>
            <h3 className="section-heading mt-3 text-3xl text-[#1c1f24]">
              Haarstudio Pekesen
            </h3>
            <p className="mt-4 text-lg text-slate-700">
              Louisenstraße 19<br />61348 Bad Homburg v. d. Höhe
            </p>
            <div className="mt-6 space-y-3">
              <Link
                href="tel:+496172681466"
                className="flex items-center justify-between rounded-2xl border border-[#f2d7b5] px-5 py-4 text-lg font-semibold text-[#1c1f24] transition hover:bg-[#fdf7f0]"
              >
                06172 681466<span className="text-sm font-normal text-[#a57c48]">Jetzt anrufen</span>
              </Link>
              <Link
                href="mailto:kontakt@haarstudio-pekesen.de"
                className="flex items-center justify-between rounded-2xl border border-[#f2d7b5] px-5 py-4 text-lg text-[#1c1f24] transition hover:bg-[#fdf7f0]"
              >
                kontakt@haarstudio-pekesen.de<span className="text-sm font-normal text-[#a57c48]">Mail senden</span>
              </Link>
            </div>
            <Link
              href="https://www.instagram.com/pekesen_haarstudio/"
              target="_blank"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#1c1f24] underline decoration-[#c8a46a] decoration-2 underline-offset-4"
            >
              Folgen Sie uns auf Instagram
            </Link>
          </div>
        </section>

        <section className="rounded-[32px] border border-[#efe2d0] bg-white p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#a57c48]">
                Impressionen
              </p>
              <h2 className="section-heading mt-4 text-3xl text-[#1c1f24]">
                Atmosphäre, die inspiriert
              </h2>
              <p className="mt-4 max-w-3xl text-lg text-slate-700">
                Von der großzügigen Empfangszone bis zu unseren Styling-Plätzen – diese Eindrücke
                vermitteln, wie persönlich und hochwertig Ihr Besuch bei uns wird.
              </p>
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image) => (
              <figure
                key={image.src}
                className="group overflow-hidden rounded-[28px] border border-[#efe2d0] bg-white"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="p-6 text-sm text-slate-700">
                  <p className="text-base text-[#1c1f24]">{image.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="kontakt" className="rounded-[32px] border border-[#efe2d0] bg-white p-10">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#a57c48]">
                Öffnungszeiten
              </p>
              <h2 className="section-heading mt-4 text-3xl text-[#1c1f24]">
                Immer für Sie da – auch nach Feierabend
              </h2>
              <p className="mt-4 text-lg text-slate-700">
                Montag bis Freitag sind wir bis 19:30 Uhr für Sie da. Starten Sie entspannt in den Abend – wir kümmern uns um den perfekten Look.
              </p>
              <ul className="mt-6 space-y-3">
                {hours.map((hour) => (
                  <li
                    key={hour.day}
                    className="flex items-center justify-between rounded-2xl bg-[#f9f5f0] px-5 py-4 text-lg text-[#1c1f24]"
                  >
                    <span>{hour.day}</span>
                    <span className="font-semibold">{hour.time} Uhr</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-8">
              <div className="rounded-[28px] border border-[#efe2d0] bg-[#fdf9f5] p-8">
                <h3 className="section-heading text-2xl text-[#1c1f24]">Besuchen Sie uns spontan</h3>
                <p className="mt-3 text-base text-slate-700">
                  Eine Terminbuchung ist nicht notwendig. Wenn Sie Wartezeiten vermeiden oder von einer bestimmten Person bedient werden möchten, rufen Sie uns an.
                </p>
                <Link
                  href="tel:+496172681466"
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-[#1c1f24] px-6 py-3 text-white transition hover:bg-black"
                >
                  Direkt anrufen
                </Link>
              </div>
              <div className="rounded-[28px] border border-[#efe2d0] bg-white p-8">
                <h3 className="section-heading text-2xl text-[#1c1f24]">So finden Sie uns</h3>
                <p className="mt-3 text-base text-slate-700">
                  Louisenstraße 19<br />61348 Bad Homburg v. d. Höhe
                </p>
                <p className="mt-4 text-base text-slate-700">
                  Mitten in der Fußgängerzone – ideal erreichbar, mit Parkmöglichkeiten und direkter Nähe zu Cafés und Boutiquen.
                </p>
                <Link
                  href="https://www.google.com/maps/search/?api=1&query=Louisenstraße+19,+61348+Bad+Homburg"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#1c1f24] underline decoration-[#c8a46a] decoration-2 underline-offset-4"
                  target="_blank"
                >
                  Route auf Google Maps öffnen
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto mt-16 w-full max-w-6xl px-6">
        <div className="rounded-[32px] border border-[#efe2d0] bg-white p-8 text-sm text-slate-600">
          <p className="font-semibold text-[#1c1f24]">Haarstudio Pekesen · Inhaber Ali Pekesen</p>
          <p className="mt-2">
            Louisenstraße 19 · 61348 Bad Homburg v. d. Höhe · Telefon 06172 681466 · kontakt@haarstudio-pekesen.de
          </p>
          <p className="mt-2">Instagram: @pekesen_haarstudio</p>
          <p className="mt-4 text-xs text-slate-500">
            © {new Date().getFullYear()} Haarstudio Pekesen. Alle Rechte vorbehalten.
          </p>
        </div>
      </footer>
    </div>
  );
}
