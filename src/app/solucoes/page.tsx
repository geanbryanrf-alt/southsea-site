import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { solutions } from "@/data/content";

export const metadata: Metadata = { title: "Soluções", description: "Soluções de advisory financeiro para expansão empresarial, crédito estruturado, reorganização de passivos e captação de recursos.", alternates: { canonical: "/solucoes" } };

export default function Solucoes() {
  return <div className="bg-background pb-20 pt-32 lg:pb-24"><div className="container mx-auto px-5 md:px-10"><Breadcrumbs items={[{ label: "Soluções" }]} /><div className="max-w-3xl"><p className="eyebrow">Soluções</p><h1 className="section-title">Estruturação financeira com foco na decisão e na execução.</h1><p className="section-copy mt-5">A Southsea avalia o contexto de cada companhia para organizar alternativas de capital, viabilidade e coordenação da operação.</p></div><div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{solutions.map((solution, index) => <article key={solution.slug} className="flex min-h-[300px] flex-col border border-white/10 bg-[#101010] p-6"><p className="text-xs font-semibold tracking-[0.16em] text-primary">0{index + 1}</p><h2 className="mt-7 font-serif text-3xl text-foreground">{solution.title}</h2><p className="mt-4 flex-1 text-sm leading-6 text-foreground/60">{solution.description}</p><Link href={`/solucoes/${solution.slug}`} className="mt-8 inline-flex items-center gap-2 text-sm text-primary hover:text-primary-light">Explorar solução <ArrowRight size={16} /></Link></article>)}</div></div></div>;
}