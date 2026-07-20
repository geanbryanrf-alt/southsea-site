import Link from "next/link";
import { siteData } from "@/data/content";

export function Footer() {
  return (
    <footer className="bg-dark text-foreground/80 py-16 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="lg:col-span-1 space-y-4">
          <Link href="/" className="block text-xl font-serif font-semibold tracking-wide text-foreground">
            SOUTHSEA<span className="text-primary text-sm tracking-normal align-top ml-1">INVESTMENTS</span>
          </Link>
          <p className="text-sm font-light text-foreground/60">{siteData.footer.tagline}</p>
        </div>

        <div>
          <h4 className="text-foreground font-serif text-lg mb-6">Navegação</h4>
          <ul className="space-y-3">
            {siteData.header.menu.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-sm hover:text-primary transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-foreground font-serif text-lg mb-6">Soluções</h4>
          <ul className="space-y-3">
            {siteData.solutions.items.slice(0, 4).map((item) => (
              <li key={item.id}>
                <Link href={item.href} className="text-sm hover:text-primary transition-colors">
                  {item.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/solucoes" className="text-sm hover:text-primary transition-colors underline underline-offset-4 decoration-white/20">
                Ver todas
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-foreground font-serif text-lg mb-6">Contato</h4>
          <ul className="space-y-3 text-sm text-foreground/70">
            <li>{siteData.footer.contact.email}</li>
            <li>{siteData.footer.contact.phone}</li>
            <li className="pt-2">{siteData.footer.contact.locations}</li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-foreground/50">
        <p className="max-w-2xl">{siteData.footer.disclaimer}</p>
        <div className="flex gap-4">
          <Link href="/privacidade" className="hover:text-primary transition-colors">Política de privacidade</Link>
          <Link href="/termos" className="hover:text-primary transition-colors">Termos de uso</Link>
        </div>
      </div>
    </footer>
  );
}
