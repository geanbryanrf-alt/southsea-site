"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Building2, CheckCircle2, FileCheck2, Globe2, Handshake, ShieldCheck, Star, User, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SolutionsCarousel } from "@/components/SolutionsCarousel";
import { operatingModel } from "@/data/content";
import { stepIcons } from "@/lib/icons";

const areas = ["Expansão empresarial", "Crédito estruturado", "Reestruturação de passivos", "BNDES e crédito rural", "Mercado de capitais", "Operações internacionais", "Estruturação societária", "Patrimônio e governança"];
const moments = [
  ["Crescimento com estrutura", "Quando a estratégia de expansão precisa caminhar com uma arquitetura de capital e execução compatível."],
  ["Captação com critério", "Quando a companhia avalia fontes de recursos, garantias e prazos para um movimento relevante."],
  ["Reorganização financeira", "Quando obrigações, vencimentos e caixa exigem uma leitura coordenada antes da decisão."],
  ["Operações complexas", "Quando a iniciativa demanda articulação entre finanças, jurídico, governança e especialistas."],
];

export function HomeClient() {
  const heroImageBlock = (
    <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative mx-auto w-full max-w-md lg:max-w-none">
      <motion.div animate={{ y: [0, -7, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}>
        <div className="absolute -inset-4 border border-primary/30" />
        <div className="relative aspect-[4/5] overflow-hidden border border-white/10 bg-[#111111]">
          <Image src="/images/executivo-1.png" alt="Munaretto, advisor da Southsea Investments" fill priority sizes="(max-width: 1024px) 448px, 42vw" className="object-cover object-top grayscale-[20%] transition-all duration-700 hover:scale-[1.025] hover:grayscale-0" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent p-6 pt-24">
            <p className="text-xs font-medium uppercase tracking-[0.17em] text-primary">Southsea Investments</p>
          </div>
          <motion.div className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/4 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/10 to-transparent" animate={{ x: ["0%", "650%"] }} transition={{ duration: 7, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }} />
        </div>
      </motion.div>
    </motion.div>
  );

  const munarettoImageBlock = (
    <div className="group relative mx-auto aspect-[4/5] w-full max-w-sm border border-primary/30">
      <div className="absolute -bottom-3 -right-3 h-full w-full border border-primary/20 transition-transform duration-500 group-hover:translate-x-1.5 group-hover:translate-y-1.5" />
      <div className="relative h-full w-full overflow-hidden">
        <Image src="/images/executivo-sentado.jpeg" alt="Munaretto, Executive Director of Structured Operations da Southsea Investments" fill sizes="(max-width: 1024px) 384px, 30vw" className="object-cover grayscale-[25%] transition-all duration-700 group-hover:scale-[1.025] group-hover:grayscale-0" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent p-6 pt-20">
          <p className="font-serif text-xl tracking-[0.06em] text-foreground">MUNARETTO</p>
          <p className="mt-1 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-primary">Executive Director of Structured Operations</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="overflow-hidden">
      <section className="relative isolate overflow-hidden bg-[#050505] pb-16 pt-32 lg:pb-24 lg:pt-40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_88%_12%,rgba(194,142,70,0.14),transparent_27%),radial-gradient(circle_at_4%_80%,rgba(255,255,255,0.035),transparent_38%)]" />
        <div className="container mx-auto grid items-center gap-12 px-5 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }} className="max-w-3xl">
            <p className="eyebrow">Corporate Advisory & Consulting</p>
            <h1 className="font-serif text-4xl leading-[1.02] text-foreground sm:text-5xl lg:text-7xl">Estruturação financeira para empresas em expansão, reestruturação ou captação de capital.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-foreground/70 sm:text-xl">A Southsea atua ao lado de empresários, conselhos e diretorias na análise, modelagem e execução de operações financeiras complexas.</p>
            <div className="mt-10 mb-2 lg:hidden">
              {heroImageBlock}
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Link href="/analise-estrategica" className="button-primary gap-2">Solicitar análise estratégica <ArrowUpRight size={17} /></Link><Link href="/solucoes" className="button-secondary gap-2">Conhecer soluções <ArrowRight size={17} /></Link></div>
            <p className="mt-7 text-xs uppercase tracking-[0.16em] text-foreground/40">Atuação estratégica · Processo confidencial · Critérios de enquadramento</p>
          </motion.div>
          <div className="hidden lg:block">
            {heroImageBlock}
          </div>
        </div>
      </section>

      <section aria-label="Áreas de atuação" className="group overflow-hidden border-y border-white/10 bg-[#030303] py-6">
        <div className="marquee-mask">
          <div className="marquee-track group-hover:[animation-play-state:paused]">
            {[false, true].map((isDuplicate, copyIndex) => (
              <div key={copyIndex} className="marquee-segment" aria-hidden={isDuplicate || undefined}>
                {areas.map((area) => <span key={`${copyIndex}-${area}`} className="inline-flex items-center gap-7 whitespace-nowrap text-xs font-medium uppercase tracking-[0.15em] text-foreground/60"><span className="h-1 w-1 rounded-full bg-primary/70" />{area}</span>)}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-24"><div className="container mx-auto px-5 md:px-10"><Reveal className="max-w-2xl"><p className="eyebrow">Quando a Southsea entra</p><h2 className="section-title">As decisões mais importantes da empresa exigem estratégia antes de execução.</h2><p className="section-copy mt-5">A atuação começa quando a empresa precisa transformar uma decisão relevante em uma operação financeiramente viável e executável.</p></Reveal><div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{moments.map(([title, text], index) => <Reveal key={title} delay={index * 0.06} className="border border-white/10 bg-[#101010] p-6"><FileCheck2 className="mb-6 text-primary" size={22} /><h3 className="font-serif text-2xl text-foreground">{title}</h3><p className="mt-3 text-sm leading-6 text-foreground/60">{text}</p></Reveal>)}</div></div></section>

      <section className="relative overflow-hidden border-y border-white/10 bg-[#030303] py-20 lg:py-24"><div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[55rem] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(194,142,70,0.09),transparent_68%)]" /><div className="container relative mx-auto px-5 md:px-10"><Reveal className="max-w-4xl"><p className="eyebrow">Soluções estratégicas</p><h2 className="section-title">Cada empresa exige uma arquitetura financeira própria.</h2><p className="section-copy mt-5 max-w-2xl">Desenhamos estruturas sob medida para transformar decisões complexas em operações viáveis, seguras e orientadas a resultados.</p></Reveal><SolutionsCarousel /></div></section>

      <section className="bg-background py-20 lg:py-24"><div className="container mx-auto px-5 md:px-10"><Reveal className="max-w-2xl"><p className="eyebrow">Modelo de atuação</p><h2 className="section-title">Um processo estruturado para operações complexas.</h2><p className="section-copy mt-5">Cada operação segue um processo estruturado, adaptado ao contexto da empresa, preservando rigor técnico, governança e segurança em todas as etapas.</p></Reveal><div className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-5">{operatingModel.map((step, index) => { const StepIcon = stepIcons[step.icon]; return <Reveal key={step.number} delay={index * 0.05} className="group bg-background p-6 transition-colors duration-300 hover:bg-[#101010]"><div className="flex items-center justify-between"><StepIcon className="text-primary" size={22} /><span className="font-serif text-2xl text-primary/40">{step.number}</span></div><h3 className="mt-8 font-serif text-xl text-foreground">{step.title}</h3><p className="mt-3 text-sm leading-6 text-foreground/60">{step.text}</p></Reveal>; })}</div><Link href="/como-atuamos" className="mt-8 inline-flex items-center gap-2 text-sm text-primary hover:text-primary-light">Entender como atuamos <ArrowRight size={16} /></Link></div></section>

      <section className="border-y border-white/10 bg-[#101010] py-20 lg:py-24"><div className="container mx-auto grid gap-10 px-5 md:px-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20"><Reveal><p className="eyebrow">Cases</p><h2 className="section-title">Confidencialidade faz parte da estratégia.</h2><p className="section-copy mt-5">A Southsea não publica nomes, cifras, resultados ou detalhes operacionais sem autorização formal das partes envolvidas.</p><Link href="/cases" className="mt-7 inline-flex items-center gap-2 text-sm text-primary hover:text-primary-light">Nossa política de cases <ArrowRight size={16} /></Link></Reveal><Reveal className="border border-white/10 bg-[#080808] p-6 sm:p-8"><div className="grid gap-7 sm:grid-cols-2">{[["Contexto", "Apresentado somente quando houver autorização e preservação de informações sensíveis."], ["Necessidade", "Definida a partir do diagnóstico específico de cada companhia."], ["Estrutura desenhada", "Descrita conforme escopo autorizado e obrigações de confidencialidade."], ["Resultado autorizado", "Nenhum resultado é divulgado sem validação e permissão expressa."]].map(([title, text]) => <div key={title}><p className="eyebrow !mb-2">{title}</p><p className="text-sm leading-6 text-foreground/70">{text}</p></div>)}</div></Reveal></div></section>

      <section className="bg-background py-20 lg:py-24"><div className="container mx-auto grid items-center gap-12 px-5 md:px-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20"><Reveal className="hidden lg:block">{munarettoImageBlock}</Reveal><Reveal><p className="eyebrow">Munaretto</p><h2 className="section-title">Advisor para decisões financeiras estratégicas que moldam o futuro das empresas.</h2><p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-primary">Executive Director of Structured Operations</p><div className="mt-8 mb-4 lg:hidden"><Reveal>{munarettoImageBlock}</Reveal></div><p className="section-copy mt-5">Munaretto atua na Southsea Investments como advisor, apoiando empresários, conselhos e diretorias na leitura estratégica de operações financeiras complexas.</p><p className="section-copy mt-4">A prática combina visão de capital, organização de premissas, diálogo multidisciplinar e relacionamento corporativo no Brasil e em operações internacionais.</p><Link href="/sobre" className="mt-8 inline-flex items-center gap-2 text-sm text-primary hover:text-primary-light">Conhecer a Southsea <ArrowRight size={16} /></Link></Reveal></div></section>

      <section className="border-y border-white/10 bg-[#030303] py-20 lg:py-24">
        <div className="container mx-auto px-5 md:px-10">
          <Reveal className="max-w-3xl">
            <h2 className="section-title">Corporate Advisory para operações que definem o <span className="text-primary">futuro</span> da empresa.</h2>
            <p className="section-copy mt-5">A Southsea Investments assessora empresários, conselhos de administração e diretorias na estruturação, coordenação e execução de operações estratégicas. Cada projeto é desenvolvido a partir do contexto da empresa, integrando capital, governança, especialistas e execução em uma única <span className="text-primary">estrutura de decisão</span>.</p>
          </Reveal>

          <div className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
            {[
              { icon: User, title: "Munaretto", subtitle: "Executive Director of Structured Operations · Corporate Advisor", text: "Atua na estruturação e coordenação de operações complexas, conduzindo a integração entre empresários, instituições financeiras, investidores e especialistas para transformar decisões estratégicas em operações executáveis." },
              { icon: FileCheck2, title: "Visão estratégica da operação", text: "Cada decisão é analisada sob a perspectiva financeira, societária, operacional e estratégica, garantindo coerência entre capital, governança e crescimento sustentável da empresa." },
              { icon: Users, title: "Coordenação multidisciplinar", text: "Integração entre especialistas financeiros, jurídicos, tributários, societários e operacionais, coordenados conforme a natureza e a complexidade da operação." },
              { icon: Handshake, title: "Interlocução executiva", text: "Coordenação institucional com empresários, conselhos, investidores e instituições para alinhamento estratégico, tomada de decisão e execução com total discrição." },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06} className="group bg-[#080808] p-6 transition-colors duration-300 hover:bg-[#111111] active:bg-[#111111] sm:p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary/10 group-active:border-primary group-active:bg-primary/10"><item.icon size={20} strokeWidth={1.6} /></span>
                <h3 className="mt-7 font-serif text-2xl text-foreground transition-colors duration-300 group-hover:text-primary group-active:text-primary">{item.title}</h3>
                {item.subtitle && <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-primary">{item.subtitle}</p>}
                <div className="mt-3 h-px w-10 bg-primary/40 transition-all duration-300 group-hover:w-16 group-active:w-16" />
                <p className="mt-4 text-sm leading-6 text-foreground/60">{item.text}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-4 grid gap-8 border border-white/10 bg-[#080808] p-7 sm:p-8 lg:grid-cols-[1.4fr_1fr]">
            <div className="flex gap-4">
              <ShieldCheck className="mt-0.5 shrink-0 text-primary" size={26} strokeWidth={1.6} />
              <div>
                <h3 className="font-serif text-xl text-foreground">Confidencialidade, rigor técnico e compromisso com resultados.</h3>
                <p className="mt-2 text-sm leading-6 text-foreground/60">Cada operação é conduzida com metodologia proprietária, critérios rigorosos e alinhamento estratégico, preservando integralmente a confidencialidade e os interesses das partes envolvidas.</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              {[
                { icon: Star, title: "+10 anos", text: "de experiência" },
                { icon: Building2, title: "Diversos segmentos", text: "e portes de empresa" },
                { icon: Globe2, title: "Operações estruturadas", text: "com impacto real e mensurável" },
              ].map((stat) => (
                <div key={stat.title}>
                  <stat.icon className="text-primary" size={20} strokeWidth={1.6} />
                  <p className="mt-3 font-serif text-lg leading-tight text-primary">{stat.title}</p>
                  <p className="mt-1 text-xs leading-5 text-foreground/50">{stat.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-24"><div className="container mx-auto px-5 md:px-10"><Reveal className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between"><div className="max-w-2xl"><p className="eyebrow">Indicadores validados</p><h2 className="section-title">Transparência antes de qualquer métrica.</h2><p className="section-copy mt-5">Cifras, prazos, localizações, quantidade de empresas e resultados institucionais são divulgados somente após validação com o cliente e, quando aplicável, autorização das partes.</p></div><ShieldCheck className="text-primary" size={34} /></Reveal><div className="mt-10 grid gap-4 md:grid-cols-3">{["Operações e volumes", "Prazos e marcos", "Resultados e referências"].map((item) => <Reveal key={item} className="border border-white/10 p-6"><p className="font-serif text-2xl text-foreground">{item}</p><p className="mt-3 text-sm leading-6 text-foreground/60">Informações institucionais em processo de validação antes de eventual publicação.</p></Reveal>)}</div></div></section>

      <section className="border-y border-white/10 bg-[#101010] py-20 lg:py-24"><div className="container mx-auto grid gap-10 px-5 md:px-10 lg:grid-cols-2"><Reveal><p className="eyebrow">Governança e conformidade</p><h2 className="section-title">Rigor de processo para decisões sensíveis.</h2><p className="section-copy mt-5">A atuação considera critérios de enquadramento, organização das informações, confidencialidade e a participação dos profissionais habilitados para cada frente.</p></Reveal><Reveal className="grid gap-5 sm:grid-cols-2">{["Confidencialidade e tratamento responsável de informações", "Coordenação com especialistas conforme a natureza da operação", "Decisões apoiadas por premissas e documentação organizada", "Acompanhamento de marcos e obrigações definidos no escopo"].map((item) => <div key={item} className="flex gap-3 border border-white/10 bg-[#080808] p-5 text-sm leading-6 text-foreground/70"><CheckCircle2 className="mt-0.5 shrink-0 text-primary" size={17} />{item}</div>)}</Reveal></div></section>

      <section className="bg-background py-20 lg:py-24"><div className="container mx-auto px-5 md:px-10"><Reveal className="border border-white/10 bg-[linear-gradient(115deg,#111111,#080808_52%,#101010)] p-7 sm:p-10"><div className="flex items-center gap-3"><p className="eyebrow !mb-0">Educação executiva</p><span className="inline-flex items-center border border-primary/40 px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-primary">Em breve</span></div><div className="mt-4 grid items-end gap-7 lg:grid-cols-[1.25fr_0.75fr]"><div><h2 className="section-title">O Código Financeiro Corporativo</h2><p className="section-copy mt-5">Programa executivo criado por Munaretto sobre capital, estrutura financeira e decisões corporativas. Em produção — entre na lista de espera para ser um dos primeiros a receber o acesso.</p></div><Link href="/curso" className="button-secondary justify-center gap-2 border-primary/50 text-primary hover:bg-primary hover:text-[#080808]">Conhecer o programa <ArrowRight size={17} /></Link></div></Reveal></div></section>

      <section className="bg-[#030303] py-20 lg:py-24"><div className="container mx-auto px-5 text-center md:px-10"><Reveal className="mx-auto max-w-3xl"><p className="eyebrow">Próximo passo</p><h2 className="section-title">Vamos entender o contexto da sua operação.</h2><p className="section-copy mt-5">Compartilhe as informações iniciais. A análise de enquadramento considera o momento da empresa, o objetivo e os elementos disponíveis para estruturação.</p><Link href="/analise-estrategica" className="button-primary mt-8 gap-2">Solicitar análise estratégica <ArrowUpRight size={17} /></Link></Reveal></div></section>
    </div>
  );
}