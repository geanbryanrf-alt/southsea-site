import { StrategicForm } from "@/components/forms/StrategicForm";


export const metadata = {
  title: "Análise Estratégica | Southsea Investments",
  description: "Preencha as informações iniciais para avaliação de enquadramento e potencial da operação."
};

export default function AnaliseEstrategica() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-background relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background z-0 pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-5xl font-serif text-foreground mb-6 text-balance">
            Sua empresa está diante de uma decisão financeira relevante?
          </h1>
          <p className="text-lg text-foreground/70 font-light max-w-2xl mx-auto">
            Preencha as informações iniciais para que a equipe avalie o enquadramento e o potencial da operação.
          </p>
        </div>

        <div className="bg-dark border border-white/10 p-6 md:p-12 shadow-2xl">
          <StrategicForm />
        </div>
      </div>
    </div>
  );
}
