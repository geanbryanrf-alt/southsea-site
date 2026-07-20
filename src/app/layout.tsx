import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FixedAnalysisCTA } from "@/components/FixedAnalysisCTA";
import { JsonLd } from "@/components/JsonLd";
import { MotionProvider } from "@/components/MotionProvider";
import { PageTransition } from "@/components/PageTransition";
import { siteUrl } from "@/data/content";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-cormorant" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Southsea Investments | Corporate Advisory & Consulting", template: "%s | Southsea Investments" },
  description: "Estruturação financeira para empresas em expansão, reestruturação ou captação de capital.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "pt_BR", url: siteUrl, siteName: "Southsea Investments", title: "Southsea Investments | Corporate Advisory & Consulting", description: "Estruturação financeira para empresas em expansão, reestruturação ou captação de capital.", images: [{ url: "/og.png", width: 1730, height: 910, alt: "Southsea Investments — Estruturação financeira para empresas" }] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} ${cormorant.variable} flex min-h-screen flex-col bg-background font-sans text-foreground`}>
        <MotionProvider>
          <JsonLd data={[
            { "@context": "https://schema.org", "@type": "Organization", name: "Southsea Investments", url: siteUrl },
            { "@context": "https://schema.org", "@type": "ProfessionalService", name: "Southsea Investments", url: siteUrl, description: "Corporate advisory e consultoria financeira empresarial." },
          ]} />
          <Header />
          <main className="flex-1"><PageTransition>{children}</PageTransition></main>
          <Footer />
          <FixedAnalysisCTA />
        </MotionProvider>
      </body>
    </html>
  );
}