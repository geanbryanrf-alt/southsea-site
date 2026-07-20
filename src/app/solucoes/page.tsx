import { siteData } from "@/data/content";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Soluções | Southsea Investments",
  description: "Conheça nossas soluções em crédito corporativo, estruturação e mercado de capitais."
};

export default function Solucoes() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-16">{siteData.solutions.title}</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteData.solutions.items.map((item) => (
              <div 
                key={item.id}
                className="group relative bg-dark border border-white/5 p-8 flex flex-col h-full hover:border-primary/40 transition-colors duration-300 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                <h3 className="text-xl font-serif text-foreground mb-4">{item.title}</h3>
                <p className="text-foreground/60 text-sm font-light mb-8 flex-1 leading-relaxed">
                  {item.description}
                </p>
                <Link href={item.href} className="inline-flex items-center text-sm text-primary hover:text-primary-light transition-colors w-fit">
                  Explorar solução <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
