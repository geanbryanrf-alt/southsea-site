import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant" 
});

export const metadata: Metadata = {
  title: "Southsea Investments | Expansão, Crédito Estruturado e Advisory Financeiro",
  description: "Advisory financeiro para empresas que buscam expansão, reestruturação de passivos, crédito estruturado, BNDES e acesso ao mercado de capitais.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://southseainvestments.com.br",
    siteName: "Southsea Investments",
    title: "Southsea Investments | Expansão e Crédito Estruturado",
    description: "Advisory financeiro para empresas que buscam expansão, reestruturação de passivos, crédito estruturado, BNDES e acesso ao mercado de capitais."
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} ${cormorant.variable} font-sans bg-background text-foreground flex min-h-screen flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
