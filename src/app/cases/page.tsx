import { siteData } from "@/data/content";

export const metadata = {
  title: "Cases | Southsea Investments",
  description: "Operações que traduzem estratégia em execução."
};

export default function Cases() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-foreground max-w-xl">
            {siteData.cases.title}
          </h1>
          <div className="text-xs text-primary/70 border border-primary/20 px-3 py-1 bg-primary/5 rounded-sm">
            {siteData.cases.disclaimer}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {siteData.cases.items.map((item) => (
             <div key={item.id} className="bg-dark border border-white/5 p-8 md:p-12">
              <h3 className="text-2xl font-serif text-foreground mb-4">{item.title}</h3>
              <div className="w-12 h-[1px] bg-primary/50 mb-10" />
              
              <div className="space-y-8 font-light">
                <div>
                  <span className="block text-foreground/40 mb-2 uppercase tracking-wider text-[11px] font-semibold">Cenário</span>
                  <p className="text-foreground/80 text-lg">{item.scenario}</p>
                </div>
                <div>
                  <span className="block text-foreground/40 mb-2 uppercase tracking-wider text-[11px] font-semibold">Desafio</span>
                  <p className="text-foreground/80 text-lg">{item.challenge}</p>
                </div>
                <div>
                  <span className="block text-foreground/40 mb-2 uppercase tracking-wider text-[11px] font-semibold">Solução Estruturada</span>
                  <p className="text-primary text-xl font-medium">{item.solution}</p>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-white/5 bg-background/50 p-6">
                <span className="block text-foreground/40 mb-2 uppercase tracking-wider text-[11px] font-semibold">Resultado Indicado</span>
                <p className="text-foreground text-lg">{item.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
