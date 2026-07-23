import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CircleCheck, Crosshair, User, CalendarClock, ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { course, courseWaitlistHref } from "@/data/content";

export const metadata: Metadata = { title: "O Código Financeiro Corporativo", description: course.description, alternates: { canonical: "/curso" } };

const learnItems = [
  "Como interpretar a estrutura financeira de uma empresa.",
  "Como analisar decisões de capital.",
  "Os fundamentos da captação de recursos.",
  "Estruturação financeira aplicada ao mercado.",
  "Como executivos avaliam riscos e oportunidades.",
  "A lógica por trás das grandes decisões corporativas.",
];

const includes = ["Acesso imediato após o lançamento", "Conteúdo 100% online", "Acesso vitalício", "Atualizações futuras do programa"];

export default function Curso() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] pb-20 pt-32">
      <div className="absolute inset-x-0 top-0 -z-10 h-[560px] bg-[radial-gradient(circle_at_76%_4%,rgba(194,142,70,0.2),transparent_33%)]" />
      <div className="container mx-auto px-5 md:px-10">
        <Breadcrumbs items={[{ label: "O Código Financeiro Corporativo" }]} />

        <section className="grid gap-12 border-b border-white/10 pb-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <span className="inline-flex items-center gap-2 border border-primary/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              <ShieldCheck size={15} /> Programa Executivo · Southsea Investments
            </span>
            <h1 className="mt-6 font-serif text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">{course.title}</h1>
            <p className="mt-6 max-w-2xl font-serif text-2xl leading-snug text-primary sm:text-3xl">Aprenda a pensar como quem estrutura empresas, negocia capital e participa das decisões que moldam grandes negócios.</p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-foreground/70">Um programa executivo desenvolvido por Munaretto, baseado em experiências reais de estruturação financeira, captação de recursos e operações corporativas.</p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-foreground/50">Mais do que conceitos, você terá acesso à lógica utilizada em operações corporativas que movimentam milhões de reais. Este é um produto educacional independente e não substitui análise estratégica, assessoria jurídica, contábil ou financeira dedicada.</p>
          </div>

          <aside id="checkout" className="flex flex-col border border-primary/40 bg-[#12100b] p-7 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Acesso ao programa</p>
            <div className="mt-6 flex items-baseline gap-3">
              <span className="font-serif text-4xl text-foreground">{course.status}</span>
            </div>
            <p className="mt-3 text-sm leading-6 text-foreground/60">O programa está em produção. Entre na lista de espera para ser um dos primeiros a receber o acesso no lançamento.</p>
            <ul className="mt-7 space-y-3">
              {includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-foreground/70"><CircleCheck className="mt-0.5 shrink-0 text-primary" size={17} />{item}</li>
              ))}
            </ul>
            <Link href={courseWaitlistHref} target="_blank" rel="noreferrer" className="button-primary mt-8 w-full gap-2">Quero entrar na lista de espera <ArrowRight size={17} /></Link>
            <p className="mt-5 flex items-start gap-2 border-t border-white/10 pt-5 text-xs leading-5 text-foreground/50"><CalendarClock className="mt-0.5 shrink-0 text-primary" size={15} /> Lançamento em breve. As inscrições serão abertas em breve. Cadastre-se para receber o acesso ao programa.</p>
          </aside>
        </section>

        <section className="grid gap-10 py-16 md:grid-cols-3">
          <div>
            <User className="text-primary" size={26} strokeWidth={1.5} />
            <h2 className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">Para quem é</h2>
            <p className="mt-4 text-sm leading-7 text-foreground/70">Empresários, executivos, diretores financeiros, investidores e profissionais que desejam compreender o funcionamento da alta gestão financeira.</p>
          </div>
          <div>
            <BookOpen className="text-primary" size={26} strokeWidth={1.5} />
            <h2 className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">O que você vai aprender</h2>
            <ul className="mt-4 space-y-2.5">
              {learnItems.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-6 text-foreground/70"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <Crosshair className="text-primary" size={26} strokeWidth={1.5} />
            <h2 className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">Metodologia</h2>
            <p className="mt-4 text-sm leading-7 text-foreground/70">Conteúdo prático, direto ao ponto e baseado em casos reais do mercado. Aprendizado aplicado à tomada de decisão.</p>
          </div>
        </section>

        <section className="flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2"><User size={15} className="text-primary" /> Programa criado por Munaretto</p>
          <p className="uppercase tracking-[0.14em] text-foreground/40">Executive Director of Structured Operations</p>
        </section>
      </div>
    </div>
  );
}
