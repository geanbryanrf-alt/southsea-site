"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { strategicFormSchema, type StrategicFormData } from "@/lib/strategicForm";

const fields = [
  { name: "nome", label: "Nome", placeholder: "Seu nome completo" },
  { name: "empresa", label: "Empresa", placeholder: "Nome da empresa" },
  { name: "cargo", label: "Cargo", placeholder: "Sócio, diretor, CFO..." },
  { name: "email", label: "E-mail corporativo", placeholder: "nome@empresa.com.br", type: "email" },
  { name: "whatsapp", label: "WhatsApp", placeholder: "(00) 00000-0000", type: "tel" },
  { name: "segmento", label: "Segmento", placeholder: "Indústria, agronegócio, serviços..." },
] as const;

export function StrategicForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<StrategicFormData>({ resolver: zodResolver(strategicFormSchema) });

  const onSubmit = async (data: StrategicFormData) => {
    setStatus("idle");
    setMessage("");
    try {
      const response = await fetch("/api/analise-estrategica", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.message || "Não foi possível enviar a solicitação.");
      reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Não foi possível enviar a solicitação.");
    }
  };

  if (status === "success") return <div className="flex flex-col items-center px-4 py-12 text-center"><CheckCircle2 className="text-primary" size={52} /><h2 className="mt-5 font-serif text-3xl text-foreground">Solicitação encaminhada</h2><p className="mt-3 max-w-md text-sm leading-6 text-foreground/70">Recebemos suas informações iniciais. A equipe seguirá o fluxo de análise definido para o contato.</p><button type="button" onClick={() => setStatus("idle")} className="button-secondary mt-8">Enviar nova solicitação</button></div>;

  return <form noValidate onSubmit={handleSubmit(onSubmit)} className="space-y-8">
    {status === "error" && <div role="alert" className="flex gap-3 border border-red-400/40 bg-red-950/30 p-4 text-sm leading-6 text-red-100"><AlertCircle className="mt-0.5 shrink-0" size={18} />{message}</div>}
    <fieldset><legend className="eyebrow">Empresa e contato</legend><div className="grid gap-5 md:grid-cols-2">{fields.map((field) => <div key={field.name} className="space-y-2"><label htmlFor={field.name} className="text-xs font-semibold uppercase tracking-[0.13em] text-foreground/60">{field.label}</label><input id={field.name} type={"type" in field ? field.type : "text"} autoComplete={field.name === "email" ? "email" : undefined} placeholder={field.placeholder} {...register(field.name)} className="w-full border border-white/20 bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:border-primary focus:outline-none" />{errors[field.name] && <p className="text-xs text-red-300">{errors[field.name]?.message}</p>}</div>)}</div></fieldset>
    <fieldset className="border-t border-white/10 pt-8"><legend className="eyebrow">Operação</legend><div className="grid gap-5 md:grid-cols-2"><SelectField id="faturamento" label="Faturamento aproximado" error={errors.faturamento?.message} register={register("faturamento")} options={["Até R$ 5 milhões", "R$ 5 a R$ 20 milhões", "R$ 20 a R$ 50 milhões", "R$ 50 a R$ 100 milhões", "Acima de R$ 100 milhões"]} /><SelectField id="objetivo" label="Objetivo da operação" error={errors.objetivo?.message} register={register("objetivo")} options={["Expansão empresarial", "Crédito estruturado", "Reestruturação de passivos", "BNDES e crédito rural", "Mercado de capitais", "Operação internacional", "Outro"]} /><InputField id="valorOperacao" label="Valor aproximado" placeholder="Ex.: faixa estimada da operação" error={errors.valorOperacao?.message} register={register("valorOperacao")} /><InputField id="prazo" label="Prazo" placeholder="Ex.: até 6 meses" error={errors.prazo?.message} register={register("prazo")} /><SelectField id="garantias" label="Garantias ou recebíveis" error={errors.garantias?.message} register={register("garantias")} options={["Há garantias reais", "Há recebíveis", "Há garantias e recebíveis", "Não há", "Ainda não mapeado"]} /></div><div className="mt-5 space-y-2"><label htmlFor="contexto" className="text-xs font-semibold uppercase tracking-[0.13em] text-foreground/60">Contexto</label><textarea id="contexto" rows={5} placeholder="Descreva o momento da empresa, objetivo e informações relevantes para o enquadramento inicial." {...register("contexto")} className="w-full resize-y border border-white/20 bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:border-primary focus:outline-none" />{errors.contexto && <p className="text-xs text-red-300">{errors.contexto.message}</p>}</div></fieldset>
    <fieldset className="border-t border-white/10 pt-6"><label className="flex cursor-pointer items-start gap-3"><input type="checkbox" {...register("lgpd")} className="mt-1 h-4 w-4 accent-[#c28e46]" /><span className="text-sm leading-6 text-foreground/70">Autorizo o tratamento dos dados informados exclusivamente para análise inicial da operação e contato da Southsea Investments, nos termos da Política de Privacidade.</span></label>{errors.lgpd && <p className="mt-2 text-xs text-red-300">{errors.lgpd.message}</p>}</fieldset>
    <button type="submit" disabled={isSubmitting} className="button-primary w-full gap-2 disabled:cursor-not-allowed disabled:opacity-65">{isSubmitting ? <><Loader2 className="animate-spin" size={18} />Encaminhando</> : "Enviar para análise estratégica"}</button>
  </form>;
}

function InputField({ id, label, placeholder, error, register }: { id: string; label: string; placeholder: string; error?: string; register: ReturnType<typeof useForm<StrategicFormData>>["register"] extends (name: infer N) => infer R ? R : never }) { return <div className="space-y-2"><label htmlFor={id} className="text-xs font-semibold uppercase tracking-[0.13em] text-foreground/60">{label}</label><input id={id} placeholder={placeholder} {...register} className="w-full border border-white/20 bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:border-primary focus:outline-none" />{error && <p className="text-xs text-red-300">{error}</p>}</div>; }
function SelectField({ id, label, options, error, register }: { id: string; label: string; options: string[]; error?: string; register: ReturnType<typeof useForm<StrategicFormData>>["register"] extends (name: infer N) => infer R ? R : never }) { return <div className="space-y-2"><label htmlFor={id} className="text-xs font-semibold uppercase tracking-[0.13em] text-foreground/60">{label}</label><select id={id} defaultValue="" {...register} className="w-full border border-white/20 bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none"><option value="" disabled>Selecione uma opção</option>{options.map((option) => <option key={option} value={option}>{option}</option>)}</select>{error && <p className="text-xs text-red-300">{error}</p>}</div>; }