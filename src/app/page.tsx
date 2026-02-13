import Link from "next/link";

const hours = [
  { day: "Montag", time: "08:00 - 19:30" },
  { day: "Dienstag", time: "08:00 - 19:30" },
  { day: "Mittwoch", time: "08:00 - 19:30" },
  { day: "Donnerstag", time: "08:00 - 19:30" },
  { day: "Freitag", time: "08:00 - 19:30" },
  { day: "Samstag", time: "09:00 - 18:00" },
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
      "Montag bis Freitag bis 19:30 Uhr – perfekt für alle, die sich nach der Arbeit Zeit für sich nehmen möchten.",
  },
];

export default function Home() {
  return (
    <div className="pb-16">
      <header className="mx-auto mt-8 max-w-6xl px-6">
        <section className="relative overflow-hidden rounded-[32px] bg-[#1c1f24] text-white">
          <div className="absolute inset-0 opacity-20" aria-hidden>
            <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.35),_transparent_55%)]" />
          </div>
          <div className="relative grid gap-10 px-8 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:px-14">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#f5d9b3]">
                Haarstudio Pekesen · Bad Homburg
              </p>
              <h1 className="section-heading mt-4 text-4xl leading-tight text-white sm:text-5xl">
                Ihr exklusiver Friseur im Herzen von Bad Homburg
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-slate-200">
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
              Handwerk mit Handschlagqualität – geführt von Ali Pekesen
            </h2>
            <p className="mt-6 text-lg text-slate-800">
              Das Haarstudio Pekesen ist ein Familienbetrieb mit modernem Anspruch.
              Ali Pekesen und sein Team nehmen sich Zeit, um Ihren Stil zu verstehen,
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
                  href="https://maps.app.goo.gl/?q=Louisenstra%C3%9Fe+19,+61348+Bad+Homburg"
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
