import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, LockKeyhole } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = { title: "Cases", description: "Política de confidencialidade e critérios para apresentação de cases da Southsea Investments.", alternates: { canonical: "/cases" } };
const caseStructure = [
  ["Contexto", "O setor, o momento da companhia e a operação só são apresentados quando há autorização expressa e informação suficiente para evitar identificação indevida."],
  ["Necessidade", "A necessidade é descrita de forma objetiva, sem ampliar escopo ou atribuir intenções que não tenham sido autorizadas."],
  ["Estrutura desenhada", "A estrutura é detalhada apenas dentro dos limites de confidencialidade, obrigações contratuais e participação dos envolvidos."],
  ["Resultado autorizado", "Métricas, prazos, valores e resultados são publicados somente quando validados e formalmente autorizados."],
];
export default function Cases() {
  return <div className="bg-background pb-20 pt-32 lg:pb-24"><div className="container mx-auto px-5 md:px-10"><Breadcrumbs items={[{ label: "Cases" }]} /><div className="max-w-3xl"><p className="eyebrow">Cases</p><h1 className="section-title">Confidencialidade antes de narrativa.</h1><p className="section-copy mt-5">A Southsea não inventa dados nem expõe informações de clientes. Cases institucionais são construídos apenas a partir de conteúdo previamente autorizado.</p></div><div className="mt-12 grid gap-4 md:grid-cols-2">{caseStructure.map(([title, text], index) => <article key={title} className="border border-white/10 bg-[#101010] p-7"><p className="text-xs font-semibold tracking-[0.16em] text-primary">0{index + 1}</p><h2 className="mt-8 font-serif text-3xl text-foreground">{title}</h2><p className="mt-4 text-sm leading-7 text-foreground/70">{text}</p></article>)}</div><div className="mt-10 flex gap-4 border border-primary/30 bg-primary/5 p-6"><LockKeyhole className="shrink-0 text-primary" size={21} /><p className="text-sm leading-6 text-foreground/75">Se houver autorização para divulgação, cada case deverá passar por validação de contexto, necessidade, estrutura desenhada e resultado autorizado antes da publicação.</p></div><Link href="/analise-estrategica" className="mt-10 inline-flex items-center gap-2 text-sm text-primary hover:text-primary-light">Iniciar uma conversa confidencial <ArrowRight size={16} /></Link></div></div>;
}