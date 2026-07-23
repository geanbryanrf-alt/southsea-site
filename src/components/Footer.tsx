import Link from "next/link";
import { contact, navigation, solutions } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030303] pb-24 pt-16 lg:pb-16">
      <div className="container mx-auto grid gap-12 px-5 md:grid-cols-2 md:px-10 lg:grid-cols-4">
        <div className="space-y-5">
          <Link href="/" className="font-serif text-xl font-semibold tracking-[0.08em] text-foreground">
            SOUTHSEA <span className="font-sans text-[0.52em] font-medium tracking-[0.22em] text-primary">INVESTMENTS</span>
          </Link>
          <p className="max-w-xs text-sm leading-6 text-foreground/60">Estruturação financeira para empresas em expansão, reestruturação ou captação de capital.</p>
        </div>
        <div>
          <h2 className="footer-title">Navegação</h2>
          <ul className="space-y-3">
            {navigation.map((item) => <li key={item.href}><Link className="footer-link" href={item.href}>{item.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h2 className="footer-title">Soluções</h2>
          <ul className="space-y-3">
            {solutions.slice(0, 4).map((item) => <li key={item.slug}><Link className="footer-link" href={`/solucoes/${item.slug}`}>{item.shortTitle}</Link></li>)}
            <li><Link className="footer-link text-primary" href="/solucoes">Ver todas as soluções</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="footer-title">Primeiro contato</h2>
          <p className="mb-5 text-sm leading-6 text-foreground/60">Para uma avaliação inicial, compartilhe o contexto da operação pelo formulário estratégico.</p>
          <Link href="/analise-estrategica" className="footer-link text-primary">Solicitar análise estratégica</Link>
          <div className="mt-6 space-y-2 text-sm text-foreground/60">
            {contact.email && <a className="block transition-colors hover:text-primary" href={`mailto:${contact.email}`}>{contact.email}</a>}
            <a className="block transition-colors hover:text-primary" href={contact.whatsappHref} target="_blank" rel="noreferrer">WhatsApp · {contact.whatsapp}</a>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-14 flex flex-col gap-4 border-t border-white/10 px-5 pt-7 text-xs text-foreground/40 md:flex-row md:items-center md:justify-between md:px-10">
        <p>Southsea Investments. Informação institucional sujeita à validação de escopo.</p>
        <div className="flex gap-5"><Link className="hover:text-primary" href="/privacidade">Privacidade</Link><Link className="hover:text-primary" href="/termos">Termos de uso</Link></div>
      </div>
    </footer>
  );
}