import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { solutions } from "@/data/content";

type Props = { params: { slug: string } };
export function generateStaticParams() { return solutions.map(({ slug }) => ({ slug })); }
export function generateMetadata({ params }: Props): Metadata {
  const solution = solutions.find(({ slug }) => slug === params.slug);
  if (!solution) return {};
  return { title: solution.title, description: solution.description, alternates: { canonical: `/solucoes/${solution.slug}` } };
}
export default function SolucaoDetalhe({ params }: Props) {
  const solution = solutions.find(({ slug }) => slug === params.slug);
  if (!solution) notFound();
  return <div className="bg-background pb-20 pt-32 lg:pb-24"><div className="container mx-auto px-5 md:px-10"><Breadcrumbs items={[{ label: "Soluções", href: "/solucoes" }, { label: solution.title }]} /><section className="max-w-4xl border-l border-primary pl-6 sm:pl-9"><p className="eyebrow">Solução Southsea</p><h1 className="section-title">{solution.title}</h1><p className="section-copy mt-6 max-w-3xl">{solution.introduction}</p><Link href="/analise-estrategica" className="button-primary mt-8 gap-2">Solicitar análise estratégica <ArrowRight size={17} /></Link></section><section className="mt-16 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]"><div><p className="eyebrow">Escopo de trabalho</p><h2 className="font-serif text-3xl text-foreground">O que é analisado na estruturação.</h2><ul className="mt-8 space-y-4">{solution.scope.map((item) => <li key={item} className="flex gap-3 border-b border-white/10 pb-4 text-base leading-7 text-foreground/70"><CheckCircle2 className="mt-1 shrink-0 text-primary" size={17} />{item}</li>)}</ul></div><aside className="border border-white/10 bg-[#101010] p-7"><p className="eyebrow">Pontos de atenção</p><p className="text-sm leading-6 text-foreground/60">A avaliação considera o contexto e a documentação disponível. Não há promessa de aprovação, captação ou resultado.</p><ul className="mt-7 space-y-3">{solution.considerations.map((item) => <li key={item} className="border-l border-primary/60 pl-3 text-sm text-foreground/80">{item}</li>)}</ul></aside></section><section className="mt-16 border-t border-white/10 pt-10"><p className="text-sm leading-6 text-foreground/60">A atuação é definida por escopo, critérios de enquadramento e participação dos profissionais habilitados para cada frente da operação.</p></section></div></div>;
}