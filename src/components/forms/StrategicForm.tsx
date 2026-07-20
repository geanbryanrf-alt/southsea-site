"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

const formSchema = z.object({
  nome: z.string().min(3, "Nome deve ter no mínimo 3 caracteres"),
  cargo: z.string().min(2, "Informe seu cargo"),
  empresa: z.string().min(2, "Informe o nome da empresa"),
  cnpj: z.string().optional(),
  email: z.string().email("E-mail corporativo inválido"),
  whatsapp: z.string().min(10, "WhatsApp inválido"),
  cidade: z.string().min(2, "Informe cidade e estado"),
  segmento: z.string().min(2, "Informe o segmento"),
  faturamento: z.enum([
    "Até R$ 5 milhões",
    "R$ 5 a R$ 20 milhões",
    "R$ 20 a R$ 50 milhões",
    "R$ 50 a R$ 100 milhões",
    "Acima de R$ 100 milhões"
  ], { required_error: "Selecione uma faixa de faturamento" }),
  objetivo: z.enum([
    "Expansão",
    "Captação de recursos",
    "Reestruturação de passivos",
    "Antecipação de recebíveis",
    "Máquinas e equipamentos",
    "Mercado de capitais",
    "Operação internacional",
    "Outro"
  ], { required_error: "Selecione o objetivo principal" }),
  valorOperacao: z.string().min(1, "Informe o valor aproximado"),
  prazoEstimado: z.string().min(1, "Informe o prazo"),
  garantias: z.enum(["Sim", "Não", "Parcialmente", "Não sei informar"], { required_error: "Selecione uma opção" }),
  contexto: z.string().optional(),
  lgpd: z.literal(true, {
    errorMap: () => ({ message: "Você precisa aceitar os termos de uso" }),
  }),
});

type FormData = z.infer<typeof formSchema>;

export function StrategicForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    
    try {
      // Aqui integrará com o Webhook configurável (ex: process.env.NEXT_PUBLIC_WEBHOOK_URL)
      const webhookUrl = process.env.NEXT_PUBLIC_WEBHOOK_URL;
      
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
        });
      } else {
        // Simulação de envio para demonstração sem endpoint
        await new Promise(resolve => setTimeout(resolve, 1500));
      }
      
      setSubmitStatus("success");
      reset();
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-12 space-y-6">
        <CheckCircle2 className="w-16 h-16 text-primary" />
        <h3 className="text-2xl font-serif text-foreground">Solicitação enviada com sucesso</h3>
        <p className="text-foreground/70 font-light max-w-md">
          Nossa equipe analisará as informações preliminares e entrará em contato em breve para os próximos passos.
        </p>
        <button 
          onClick={() => setSubmitStatus("idle")}
          className="mt-8 border border-white/20 px-8 py-3 text-sm hover:bg-white/5 transition-colors"
        >
          Enviar nova solicitação
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {submitStatus === "error" && (
        <div className="bg-red-950/30 border border-red-500/50 p-4 flex items-start gap-3 text-red-200">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <p className="text-sm">Ocorreu um erro ao enviar a solicitação. Por favor, tente novamente ou entre em contato via WhatsApp.</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Seção 1: Dados Pessoais e da Empresa */}
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-widest text-foreground/50">Nome Completo</label>
          <input 
            {...register("nome")}
            className="w-full bg-background border border-white/10 px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
            placeholder="Seu nome"
          />
          {errors.nome && <span className="text-red-400 text-xs">{errors.nome.message}</span>}
        </div>
        
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-widest text-foreground/50">Cargo</label>
          <input 
            {...register("cargo")}
            className="w-full bg-background border border-white/10 px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
            placeholder="Sócio, Diretor, CFO..."
          />
          {errors.cargo && <span className="text-red-400 text-xs">{errors.cargo.message}</span>}
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-widest text-foreground/50">Empresa</label>
          <input 
            {...register("empresa")}
            className="w-full bg-background border border-white/10 px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
          />
          {errors.empresa && <span className="text-red-400 text-xs">{errors.empresa.message}</span>}
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-widest text-foreground/50">CNPJ (Opcional)</label>
          <input 
            {...register("cnpj")}
            className="w-full bg-background border border-white/10 px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-widest text-foreground/50">E-mail Corporativo</label>
          <input 
            type="email"
            {...register("email")}
            className="w-full bg-background border border-white/10 px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
          />
          {errors.email && <span className="text-red-400 text-xs">{errors.email.message}</span>}
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-widest text-foreground/50">WhatsApp</label>
          <input 
            {...register("whatsapp")}
            className="w-full bg-background border border-white/10 px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
            placeholder="(00) 00000-0000"
          />
          {errors.whatsapp && <span className="text-red-400 text-xs">{errors.whatsapp.message}</span>}
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-widest text-foreground/50">Cidade e Estado</label>
          <input 
            {...register("cidade")}
            className="w-full bg-background border border-white/10 px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
          />
          {errors.cidade && <span className="text-red-400 text-xs">{errors.cidade.message}</span>}
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-widest text-foreground/50">Segmento</label>
          <input 
            {...register("segmento")}
            className="w-full bg-background border border-white/10 px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
            placeholder="Ex: Agronegócio, Indústria, Varejo"
          />
          {errors.segmento && <span className="text-red-400 text-xs">{errors.segmento.message}</span>}
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-widest text-foreground/50">Faturamento Anual</label>
          <select 
            {...register("faturamento")}
            className="w-full bg-background border border-white/10 px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors appearance-none"
          >
            <option value="" disabled selected>Selecione uma faixa</option>
            <option value="Até R$ 5 milhões">Até R$ 5 milhões</option>
            <option value="R$ 5 a R$ 20 milhões">R$ 5 a R$ 20 milhões</option>
            <option value="R$ 20 a R$ 50 milhões">R$ 20 a R$ 50 milhões</option>
            <option value="R$ 50 a R$ 100 milhões">R$ 50 a R$ 100 milhões</option>
            <option value="Acima de R$ 100 milhões">Acima de R$ 100 milhões</option>
          </select>
          {errors.faturamento && <span className="text-red-400 text-xs">{errors.faturamento.message}</span>}
        </div>

        {/* Seção 2: Dados da Operação */}
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-widest text-foreground/50">Objetivo Principal</label>
          <select 
            {...register("objetivo")}
            className="w-full bg-background border border-white/10 px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors appearance-none"
          >
            <option value="" disabled selected>Selecione o objetivo</option>
            <option value="Expansão">Expansão</option>
            <option value="Captação de recursos">Captação de recursos</option>
            <option value="Reestruturação de passivos">Reestruturação de passivos</option>
            <option value="Antecipação de recebíveis">Antecipação de recebíveis</option>
            <option value="Máquinas e equipamentos">Máquinas e equipamentos</option>
            <option value="Mercado de capitais">Mercado de capitais</option>
            <option value="Operação internacional">Operação internacional</option>
            <option value="Outro">Outro</option>
          </select>
          {errors.objetivo && <span className="text-red-400 text-xs">{errors.objetivo.message}</span>}
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-widest text-foreground/50">Valor Aproximado (R$)</label>
          <input 
            {...register("valorOperacao")}
            className="w-full bg-background border border-white/10 px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
          />
          {errors.valorOperacao && <span className="text-red-400 text-xs">{errors.valorOperacao.message}</span>}
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-widest text-foreground/50">Prazo Estimado</label>
          <input 
            {...register("prazoEstimado")}
            className="w-full bg-background border border-white/10 px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
            placeholder="Ex: 30 dias, 6 meses..."
          />
          {errors.prazoEstimado && <span className="text-red-400 text-xs">{errors.prazoEstimado.message}</span>}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase tracking-widest text-foreground/50">
          A empresa possui garantias reais, recebíveis ou contratos firmados?
        </label>
        <select 
          {...register("garantias")}
          className="w-full bg-background border border-white/10 px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors appearance-none"
        >
          <option value="" disabled selected>Selecione uma opção</option>
          <option value="Sim">Sim</option>
          <option value="Não">Não</option>
          <option value="Parcialmente">Parcialmente</option>
          <option value="Não sei informar">Não sei informar</option>
        </select>
        {errors.garantias && <span className="text-red-400 text-xs">{errors.garantias.message}</span>}
      </div>

      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase tracking-widest text-foreground/50">Contexto Adicional (Opcional)</label>
        <textarea 
          {...register("contexto")}
          rows={4}
          className="w-full bg-background border border-white/10 px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
          placeholder="Forneça mais detalhes sobre o momento da empresa e o objetivo da operação."
        />
      </div>

      <div className="space-y-4 pt-4 border-t border-white/10">
        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="relative flex items-center justify-center mt-0.5">
            <input 
              type="checkbox" 
              {...register("lgpd")}
              className="peer appearance-none w-5 h-5 border border-white/30 bg-transparent checked:bg-primary checked:border-primary transition-colors cursor-pointer"
            />
            <CheckCircle2 className="w-3 h-3 text-dark absolute opacity-0 peer-checked:opacity-100 pointer-events-none" />
          </div>
          <span className="text-sm font-light text-foreground/70 group-hover:text-foreground/90 transition-colors text-balance">
            Estou ciente e concordo que os dados fornecidos serão utilizados exclusivamente para análise de enquadramento da operação pela Southsea Investments, conforme a Política de Privacidade (LGPD).
          </span>
        </label>
        {errors.lgpd && <span className="text-red-400 text-xs block pl-8">{errors.lgpd.message}</span>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-dark py-5 text-lg font-medium hover:bg-primary-light transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" /> Processando
          </>
        ) : (
          "Enviar para análise"
        )}
      </button>
    </form>
  );
}
