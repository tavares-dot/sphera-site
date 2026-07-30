import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import { site } from "@/lib/content";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const url = site.canonicalUrl;

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: site.seo.title,
  description: site.seo.description,
  applicationName: site.brand,
  authors: [{ name: site.brand }],
  keywords: [
    "estruturação comercial",
    "estruturação empresarial",
    "gestão comercial",
    "processos e indicadores",
    "previsibilidade de vendas",
    "SPHERA",
  ],
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url,
    siteName: site.brand,
    title: site.seo.title,
    description: site.seo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.brand,
  description: site.seo.description,
  url,
  email: site.email,
  slogan: site.tagline,
  areaServed: "BR",
  founder: { "@type": "Person", name: "Rafael Tavares" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${archivo.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
