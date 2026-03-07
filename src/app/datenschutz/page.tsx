import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Haarstudio Pekesen",
  description:
    "Datenschutzerklärung des Haarstudio Pekesen – Informationen zur Datenverarbeitung gemäß DSGVO.",
  alternates: {
    canonical: "https://haarstudio-pekesen.de/datenschutz",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Datenschutz() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/">
        <Image src="/images/logo.svg" alt="Logo Haarstudio Pekesen" width={200} height={100} />
      </Link>

      <h1 className="section-heading mt-8 text-4xl text-[#1c1f24]">
        Datenschutzerklärung
      </h1>

      <div className="mt-8 space-y-8 text-lg text-slate-700">
        <section>
          <h2 className="text-xl font-semibold text-[#1c1f24]">
            1. Datenschutz auf einen Blick
          </h2>
          <h3 className="mt-4 font-semibold text-[#1c1f24]">
            Allgemeine Hinweise
          </h3>
          <p className="mt-2">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was
            mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
            besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
            persönlich identifiziert werden können.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1c1f24]">
            2. Verantwortliche Stelle
          </h2>
          <p className="mt-2">
            Haarstudio Pekesen
            <br />
            Inhaber: Ali Pekesen
            <br />
            Louisenstraße 19
            <br />
            61348 Bad Homburg v. d. Höhe
            <br />
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
            3. Datenerfassung auf dieser Website
          </h2>
          <h3 className="mt-4 font-semibold text-[#1c1f24]">Server-Log-Dateien</h3>
          <p className="mt-2">
            Der Provider dieser Seiten erhebt und speichert automatisch
            Informationen in sogenannten Server-Log-Dateien, die Ihr Browser
            automatisch übermittelt. Dies sind:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>Browsertyp und Browserversion</li>
            <li>Verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>
          <p className="mt-2">
            Eine Zusammenführung dieser Daten mit anderen Datenquellen wird
            nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage
            von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein
            berechtigtes Interesse an der technisch fehlerfreien Darstellung und
            Optimierung seiner Website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1c1f24]">
            4. Hosting
          </h2>
          <p className="mt-2">
            Diese Website wird extern gehostet. Die personenbezogenen Daten, die
            auf dieser Website erfasst werden, werden auf den Servern des
            Hosters gespeichert. Hierbei kann es sich um IP-Adressen,
            Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten,
            Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über
            eine Website generiert werden, handeln.
          </p>
          <p className="mt-2">
            Der Einsatz des Hosters erfolgt im Interesse einer sicheren,
            schnellen und effizienten Bereitstellung unseres Online-Angebots
            durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1c1f24]">
            5. Keine Cookies und kein Tracking
          </h2>
          <p className="mt-2">
            Diese Website verwendet keine Cookies, keine Tracking-Tools und
            keine Analyse-Dienste. Es werden keine personenbezogenen Daten zu
            Werbezwecken erhoben oder an Dritte weitergegeben.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1c1f24]">
            6. Externe Links
          </h2>
          <p className="mt-2">
            Diese Website enthält Links zu externen Websites (z.&nbsp;B. Google
            Maps, Instagram). Beim Klick auf diese Links werden Sie auf die
            Server der jeweiligen Anbieter weitergeleitet. Dort gelten die
            Datenschutzbestimmungen der jeweiligen Anbieter.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1c1f24]">
            7. Ihre Rechte
          </h2>
          <p className="mt-2">
            Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre
            gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger
            und den Zweck der Datenverarbeitung sowie ein Recht auf
            Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu
            weiteren Fragen zum Thema personenbezogene Daten können Sie sich
            jederzeit an uns wenden.
          </p>
          <p className="mt-2">
            Sie haben das Recht, sich bei der zuständigen Aufsichtsbehörde zu
            beschweren. Die zuständige Aufsichtsbehörde ist der Hessische
            Beauftragte für Datenschutz und Informationsfreiheit.
          </p>
        </section>
      </div>
    </div>
  );
}
