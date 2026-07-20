"use client";


import { motion } from "framer-motion";
import { siteData } from "@/data/content";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Lock, AlertTriangle, PlayCircle, ShieldCheck } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

export function CursoClient() {
  return (
    <>
      {/* 1. HERO SALES PAGE */}
      <section className="relative min-h-screen flex items-center pt-32 pb-24 bg-[#030303] overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background opacity-60" />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent" />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 inline-flex items-center justify-center gap-2 text-primary font-bold tracking-widest uppercase text-xs md:text-sm border border-primary/20 bg-primary/10 px-6 py-2 rounded-full"
          >
            <Lock size={16} /> Método de Advisory Corporativo Revelado
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-foreground mb-8 text-balance leading-[1.1]"
          >
            Aprenda a reestruturar passivos e blindar o fluxo de caixa antes que o banco assuma o controle da sua empresa.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl text-foreground/70 font-light mb-12 text-balance mx-auto max-w-3xl leading-relaxed"
          >
            O Código Financeiro Corporativo é o treinamento de <strong className="text-primary font-medium">R$ 97,00</strong> que entrega a exata visão que as consultorias premium cobram milhões para aplicar.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col items-center gap-6"
          >
            <Link 
              href="#checkout"
              className="w-full sm:w-auto bg-primary text-dark px-12 py-5 text-center font-bold hover:bg-primary-light transition-all duration-300 text-lg uppercase tracking-wider shadow-[0_0_40px_rgba(194,142,70,0.3)] hover:shadow-[0_0_60px_rgba(194,142,70,0.5)] hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              Garantir Meu Acesso (R$ 97) <ArrowRight size={20} />
            </Link>
            
            <div className="flex items-center gap-4 text-xs text-foreground/50 font-medium uppercase tracking-wider">
              <span className="flex items-center gap-1"><ShieldCheck size={14} className="text-primary"/> 7 Dias de Garantia</span>
              <span className="w-1 h-1 rounded-full bg-primary/50" />
              <span className="flex items-center gap-1"><Lock size={14} className="text-primary"/> Pagamento Seguro</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. O PROBLEMA (A DOR) */}
      <section className="py-24 bg-background relative border-y border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-4xl mx-auto text-center mb-20">
            <AlertTriangle className="text-primary w-12 h-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6 text-balance">
              Faturar milhões não significa nada se o seu passivo está consumindo tudo.
            </h2>
            <p className="text-foreground/60 text-xl font-light text-balance leading-relaxed">
              Você trabalha, a empresa cresce, mas no fim do mês a conta não fecha. As parcelas dos bancos engolem a margem. Você pega novos créditos para cobrir os antigos e quando percebe, a operação está asfixiada. Isso não é falta de gestão comercial, é falta de <span className="text-primary font-medium italic">inteligência de crédito estruturada</span>.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Renegociação Fraca: Você aceita o que o gerente do banco impõe, sem saber usar garantias ao seu favor.",
              "Crédito Tóxico: Juros compostos comendo o lucro líquido dia após dia.",
              "Falsa Expansão: Crescimento baseado em alavancagem suicida de curto prazo."
            ].map((text, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-[#0A0A0A] border border-white/5 p-8 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-900/50 to-primary/50" />
                <p className="text-foreground/80 font-light leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. A SOLUÇÃO (MÓDULOS) */}
      <section className="py-32 bg-[#050505] relative">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="mb-20 text-center max-w-3xl mx-auto">
            <span className="text-primary text-xs font-semibold tracking-widest uppercase mb-4 block">O Que Você Vai Aprender</span>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6 text-balance">
              O Mapa para a Reestruturação
            </h2>
            <p className="text-foreground/60 text-lg font-light text-balance">
              Não ensinamos fórmulas mágicas. O Código Financeiro Corporativo é metodologia nua e crua, validada em negociações pesadas.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              { num: "01", title: "Raio-X de Passivos", desc: "Como mapear seu endividamento real e descobrir onde o banco está escondendo taxas." },
              { num: "02", title: "O Jogo das Garantias", desc: "Aprenda a travar negociações trocando o perfil das garantias dadas em créditos anteriores." },
              { num: "03", title: "Estancamento de Curto Prazo", desc: "Táticas agressivas (e legais) para segurar a saída de caixa imediata enquanto estrutura a dívida." },
              { num: "04", title: "Alongamento e Troca de Perfil", desc: "Como buscar o crédito correto, trocar dívida cara por dívida barata e recuperar a margem de lucro." }
            ].map((mod, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col md:flex-row items-start md:items-center gap-6 bg-[#0A0A0A] border border-white/5 p-6 hover:border-primary/30 transition-colors group"
              >
                <div className="text-4xl font-serif text-primary/30 group-hover:text-primary transition-colors font-bold w-16 flex-shrink-0">
                  {mod.num}
                </div>
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2 flex items-center gap-2">
                    <PlayCircle size={18} className="text-primary/70" /> {mod.title}
                  </h3>
                  <p className="text-foreground/60 font-light">{mod.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. AUTORIDADE */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square max-h-[500px] w-full"
          >
            <div className="absolute inset-0 border-2 border-primary/20 translate-x-4 translate-y-4 z-0" />
            <Image
              src="/images/7G2A2376.jpg.jpeg"
              alt="Munaretto"
              fill
              className="object-cover z-10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>

          <motion.div {...fadeUp} className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif text-foreground">Quem é Munaretto?</h2>
            <div className="w-12 h-1 bg-primary/50" />
            <p className="text-foreground/70 font-light text-lg leading-relaxed pt-4">
              Munaretto não é um teórico de finanças. Ele é o Estrategista Principal da <strong className="text-foreground font-serif">SOUTHSEA INVESTMENTS</strong>, um advisory focado em socorrer, estruturar e expandir empresas com faturamentos milionários. 
            </p>
            <p className="text-foreground/70 font-light text-lg leading-relaxed">
              Com mais de <strong className="text-foreground font-medium">R$ 8 Bilhões</strong> mapeados em operações corporativas, ele vive o campo de batalha financeiro. O Código Financeiro Corporativo é o reflexo direto das trincheiras do crédito corporativo de alto nível.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 5. OFERTA E CHECKOUT */}
      <section id="checkout" className="py-32 bg-[#050505] relative border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto bg-gradient-to-b from-[#0F0F0F] to-[#0A0A0A] border border-primary/30 p-10 md:p-16 rounded-xl shadow-[0_0_50px_rgba(194,142,70,0.1)] relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">Acesse o Código Agora</h2>
            <p className="text-foreground/60 mb-10 font-light">
              Pelo valor de um jantar comum, você acessa o método que estrutura negócios gigantes.
            </p>
            
            <div className="text-primary font-serif font-bold text-6xl md:text-7xl mb-8 flex justify-center items-start gap-2">
              <span className="text-2xl mt-2 text-primary/70">R$</span>97
            </div>
            
            <div className="space-y-4 mb-10 text-left">
              {[
                "Acesso completo ao treinamento",
                "Metodologia SOUTHSEA validada",
                "Direcionamento claro de ações práticas",
                "Suporte a dúvidas",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-foreground/80 font-light">
                  <CheckCircle2 size={18} className="text-primary flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <Link 
              href={siteData.finalCta.ctaSecondary.href} // Redirecionando para WhatsApp conforme a orientação de "ainda não temos o link"
              className="block w-full bg-primary text-dark py-5 text-center font-bold hover:bg-primary-light transition-all duration-300 text-lg uppercase tracking-wider shadow-[0_0_30px_rgba(194,142,70,0.2)] hover:-translate-y-1"
            >
              Quero Garantir Minha Vaga
            </Link>
            
            <p className="text-xs text-foreground/40 mt-6 uppercase tracking-widest font-medium">
              Vagas limitadas. Fale com a equipe via WhatsApp para finalizar o pagamento.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
