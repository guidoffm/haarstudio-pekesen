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
  },
  alternates: {
    canonical: "https://haarstudio-pekesen.de",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${manrope.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
