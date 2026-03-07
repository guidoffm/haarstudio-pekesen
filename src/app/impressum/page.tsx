import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Haarstudio Pekesen",
  description:
    "Impressum des Haarstudio Pekesen – Inhaber Ali Pekesen, Louisenstraße 19, 61348 Bad Homburg v. d. Höhe.",
  alternates: {
    canonical: "https://haarstudio-pekesen.de/impressum",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Impressum() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/"
        className="text-sm text-[#a57c48] underline underline-offset-4"
      >
        &larr; Zurück zur Startseite
      </Link>

      <h1 className="section-heading mt-8 text-4xl text-[#1c1f24]">
        Impressum
      </h1>

      <div className="mt-8 space-y-6 text-lg text-slate-700">
        <section>
          <h2 className="text-xl font-semibold text-[#1c1f24]">
            Angaben gemäß § 5 TMG
          </h2>
          <p className="mt-2">
            Haarstudio Pekesen
            <br />
            Inhaber: Ali Pekesen
            <br />
            Louisenstraße 19
            <br />
            61348 Bad Homburg v. d. Höhe
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1c1f24]">Kontakt</h2>
          <p className="mt-2">
            Telefon:{" "}
            <Link href="tel:+496172681466" className="underline">
              06172 681466
            </Link>
            <br />
            E-Mail:{" "}
            <Link href="mailto:kontakt@haarstudio-pekesen.de" className="underline">
              kontakt@haarstudio-pekesen.de
            </Link>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1c1f24]">
            Umsatzsteuer-ID
          </h2>
          <p className="mt-2">
            Umsatzsteuer-Identifikationsnummer gemäß § 27a
            Umsatzsteuergesetz: [wird nachgetragen]
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1c1f24]">
            Berufsbezeichnung und berufsrechtliche Regelungen
          </h2>
          <p className="mt-2">
            Berufsbezeichnung: Friseurmeister
            <br />
            Zuständige Kammer: Handwerkskammer Frankfurt-Rhein-Main
            <br />
            Verliehen in: Deutschland
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1c1f24]">
            Streitschlichtung
          </h2>
          <p className="mt-2">
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <Link
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              https://ec.europa.eu/consumers/odr/
            </Link>
          </p>
          <p className="mt-2">
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </section>
      </div>
    </div>
  );
}
