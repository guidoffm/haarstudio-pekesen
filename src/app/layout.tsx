import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://haarstudio-pekesen.de"),
  title: "Haarstudio Pekesen | Friseur Bad Homburg",
  description:
    "Haarstudio Pekesen in Bad Homburg – exklusive Schnitte, Colorationen und Styling mit langen Öffnungszeiten und persönlichem Service.",
  keywords: [
    "Haarstudio Pekesen",
    "Friseur Bad Homburg",
    "Ali Pekesen",
    "Zeynel Pekesen",
    "Friseursalon Louisenstraße",
    "ohne Termin",
  ],
  openGraph: {
    title: "Haarstudio Pekesen – Ihr exklusiver Friseur in Bad Homburg",
    description:
      "Besuchen Sie das Haarstudio Pekesen spontan oder vereinbaren Sie Ihren Wunschtermin. Montag bis Freitag von 08:00 bis 19:30 Uhr geöffnet.",
    url: "https://haarstudio-pekesen.de",
    siteName: "Haarstudio Pekesen",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/images/1B993822-9FB4-4829-B9F7-1F06B06CFE1B_1_105_c.jpeg",
        width: 1200,
        height: 630,
        alt: "Fassade des Haarstudio Pekesen in der Louisenstraße, Bad Homburg",
      },
    ],
  },
  alternates: {
    canonical: "https://haarstudio-pekesen.de",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: "Haarstudio Pekesen",
  url: "https://haarstudio-pekesen.de",
  telephone: "+496172681466",
  email: "kontakt@haarstudio-pekesen.de",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Louisenstraße 19",
    addressLocality: "Bad Homburg v. d. Höhe",
    postalCode: "61348",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.2271,
    longitude: 8.6181,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "18:00",
    },
  ],
  sameAs: ["https://www.instagram.com/pekesen_haarstudio/"],
  image:
    "https://haarstudio-pekesen.de/images/1B993822-9FB4-4829-B9F7-1F06B06CFE1B_1_105_c.jpeg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${manrope.variable} ${playfair.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
