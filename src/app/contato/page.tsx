import { siteData } from "@/data/content";

export const metadata = {
  title: "Contato | Southsea Investments",
  description: "Fale com a Southsea Investments."
};

export default function Contato() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-background">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-16 text-center">
          Contato Institucional
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-12">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground/50 mb-2">Localizações</h3>
              <p className="text-xl text-foreground font-light">{siteData.footer.contact.locations}</p>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground/50 mb-2">E-mail</h3>
              <a href={`mailto:${siteData.footer.contact.email}`} className="text-xl text-primary font-light hover:underline underline-offset-4">
                {siteData.footer.contact.email}
              </a>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground/50 mb-2">WhatsApp / Telefone</h3>
              <p className="text-xl text-foreground font-light">{siteData.footer.contact.phone}</p>
            </div>
          </div>

          <div className="bg-dark border border-white/5 p-8">
            <h3 className="text-2xl font-serif text-foreground mb-6">Mensagem Direta</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="text"
                placeholder="Nome"
                className="w-full bg-background border border-white/10 px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <input 
                type="email"
                placeholder="E-mail"
                className="w-full bg-background border border-white/10 px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <textarea 
                rows={4}
                placeholder="Mensagem"
                className="w-full bg-background border border-white/10 px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              />
              <button className="w-full border border-primary text-primary hover:bg-primary hover:text-dark py-4 font-medium transition-all mt-4">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
