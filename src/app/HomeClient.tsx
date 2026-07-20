"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { siteData } from "@/data/content";
import Link from "next/link";
import Image from "next/image";
import heroImage from "../../7G2A2370.jpg.jpeg";
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, BarChart3, Building2, Shield, Globe, Lock, Play } from "lucide-react";
import { cn } from "@/lib/utils";

// Animações refinadas (Alto Padrão)
const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export function HomeClient() {
  const [activeCard, setActiveCard] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({ active: false, startX: 0, startScrollLeft: 0 });
  const cards = siteData.whenSouthseaEnters.cards;
  const maxCardIndex = Math.max(0, cards.length - cardsPerView);

  useEffect(() => {
    const updateCardsPerView = () => {
      setCardsPerView(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1);
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
  return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  useEffect(() => {
    setActiveCard((current) => Math.min(current, maxCardIndex));
  }, [maxCardIndex]);

  useEffect(() => {
    const carousel = carouselRef.current;
    const card = carousel?.querySelector<HTMLElement>("[data-carousel-card]");
    if (!carousel || !card) return;

    const gap = Number.parseFloat(window.getComputedStyle(carousel).gap) || 0;
    carousel.scrollTo({
      left: activeCard * (card.offsetWidth + gap),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  }, [activeCard, cardsPerView]);

  useEffect(() => {
    if (isCarouselPaused || maxCardIndex === 0) return;

    const interval = window.setInterval(() => {
      setActiveCard((current) => current >= maxCardIndex ? 0 : current + 1);
    }, 5000);

  return () => window.clearInterval(interval);
  }, [isCarouselPaused, maxCardIndex]);

  const moveCarousel = (direction: "previous" | "next") => {
    setActiveCard((current) => {
      if (direction === "previous") return current === 0 ? maxCardIndex : current - 1;
      return current >= maxCardIndex ? 0 : current + 1;
    });
  };

  const syncActiveCard = (carousel: HTMLDivElement) => {
    const card = carousel.querySelector<HTMLElement>("[data-carousel-card]");
    if (!card) return;
    const gap = Number.parseFloat(window.getComputedStyle(carousel).gap) || 0;
    setActiveCard(Math.min(maxCardIndex, Math.round(carousel.scrollLeft / (card.offsetWidth + gap))));
  };
  return (
    <>
      {/* 1. HERO */}
      <section className="relative min-h-[90vh] flex items-center pt-24 bg-background overflow-hidden">
        {/* Background elements luxuosos */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background opacity-60" />
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent opacity-40 blur-3xl" />
        </div>

        <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <div className="inline-block">
              <span className="text-primary text-xs md:text-sm font-semibold tracking-widest uppercase border-b border-primary/30 pb-2 flex items-center gap-2">
                <Lock size={14} /> {siteData.hero.eyebrow}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-foreground text-balance">
              O conhecimento que estrutura <span className="text-primary italic">operações de 100 milhões</span>, agora em suas mãos.
            </h1>
            
            <p className="text-lg text-foreground/70 text-balance max-w-xl font-light leading-relaxed">
              {siteData.hero.subheadline}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <Link 
                href={siteData.hero.ctaPrimary.href}
                className="group relative overflow-hidden bg-primary text-dark px-8 py-4 text-center font-medium hover:bg-primary-light transition-colors duration-300 shadow-[0_0_20px_rgba(194,142,70,0.3)] hover:shadow-[0_0_30px_rgba(194,142,70,0.5)]"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {siteData.hero.ctaPrimary.label} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />
              </Link>
              <Link 
                href={siteData.hero.ctaSecondary.href}
                className="group border border-primary/30 bg-secondary/30 backdrop-blur-sm text-foreground px-8 py-4 text-center hover:bg-secondary/50 hover:border-primary/50 transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-2">
                  <Play size={16} className="text-primary group-hover:scale-110 transition-transform" /> {siteData.hero.ctaSecondary.label}
                </span>
              </Link>
            </div>
            
            <div className="pt-6 flex flex-col gap-3">
              <p className="text-xs text-foreground/40 font-medium uppercase tracking-wider">{siteData.hero.microtext}</p>
              <div className="flex items-center gap-2 text-xs text-primary/80 border border-primary/20 w-fit px-4 py-1.5 bg-primary/5 rounded-sm">
                <Globe size={14} className="text-primary" />
                {siteData.hero.badge}
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
            className="relative h-[650px] hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-l from-background via-transparent to-transparent z-10" />
            
            {/* Efeito de frame luxuoso */}
            <div className="absolute inset-4 border border-primary/30 z-20 pointer-events-none" />
            <div className="absolute inset-0 border border-white/5 bg-secondary/10 backdrop-blur-[2px] z-0 transform translate-x-4 translate-y-4" />
            
            <Image
              src={heroImage}
              alt="Munaretto - SOUTHSEA INVESTMENTS"
              fill
              className="object-cover object-top opacity-90 z-10 shadow-2xl shadow-black"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* 2. POSICIONAMENTO */}
      <section className="border-y border-white/5 bg-[#050505] relative z-20">
        <div className="container mx-auto px-6 md:px-12 py-12">
          <motion.p 
            {...fadeUp}
            className="text-center text-lg md:text-2xl text-foreground/80 font-serif italic tracking-wide max-w-4xl mx-auto"
          >
            &quot;{siteData.positioning}&quot;
          </motion.p>
        </div>
      </section>

      {/* 3. DORES - QUANDO A SOUTHSEA ENTRA */}
      <section className="py-24 bg-background relative">
        <div className="absolute left-0 top-1/2 w-1/4 h-1/2 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div {...fadeUp} className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6">
              {siteData.whenSouthseaEnters.title}
            </h2>
            <p className="text-primary/80 text-xl font-light text-balance mb-4">
              {siteData.whenSouthseaEnters.text}
            </p>
          </motion.div>

          <div
            className="relative"
            aria-roledescription="carrossel"
            aria-label="Fatores que comprometem a saúde financeira das empresas"
            onMouseEnter={() => setIsCarouselPaused(true)}
            onMouseLeave={() => setIsCarouselPaused(false)}
          >
            <div
              ref={carouselRef}
              className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory cursor-grab active:cursor-grabbing select-none touch-pan-y [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              onPointerDown={(event) => {
                const carousel = event.currentTarget;
                dragState.current = {
                  active: true,
                  startX: event.clientX,
                  startScrollLeft: carousel.scrollLeft,
                };
                carousel.setPointerCapture(event.pointerId);
                setIsCarouselPaused(true);
              }}
              onPointerMove={(event) => {
                if (!dragState.current.active) return;
                event.currentTarget.scrollLeft = dragState.current.startScrollLeft - (event.clientX - dragState.current.startX);
              }}
              onPointerUp={(event) => {
                if (!dragState.current.active) return;
                dragState.current.active = false;
                syncActiveCard(event.currentTarget);
                setIsCarouselPaused(false);
              }}
              onPointerCancel={(event) => {
                dragState.current.active = false;
                syncActiveCard(event.currentTarget);
                setIsCarouselPaused(false);
              }}
              onScroll={(event) => {
                const carousel = event.currentTarget;
                if (!dragState.current.active) syncActiveCard(carousel);
              }}
            >
              {cards.map((card, idx) => (
                <motion.article
                  key={idx}
                  data-carousel-card
                  variants={staggerItem}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-50px" }}
                  className="w-full shrink-0 snap-start bg-[#0A0A0A] border border-white/5 p-8 hover:border-primary/40 hover:shadow-[0_0_15px_rgba(194,142,70,0.1)] transition-all duration-300 group flex flex-col gap-4 relative overflow-hidden md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={20} className="text-primary" />
                  </div>
                  <p className="text-foreground/90 font-light leading-relaxed">{card}</p>
                </motion.article>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-between gap-6">
              <div className="flex items-center gap-2" aria-label="Navegação do carrossel">
                {Array.from({ length: maxCardIndex + 1 }).map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Ir para o card ${index + 1}`}
                    aria-current={activeCard === index ? "true" : undefined}
                    onClick={() => setActiveCard(index)}
                    className={`h-1.5 transition-all duration-300 ${activeCard === index ? "w-8 bg-primary" : "w-1.5 bg-white/20 hover:bg-white/50"}`}
                  >
                  </button>
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  aria-label="Ver cards anteriores"
                  onClick={() => moveCarousel("previous")}
                  className="w-11 h-11 border border-white/10 text-foreground/80 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                >
                  <ChevronLeft size={19} />
                </button>
                <button
                  type="button"
                  aria-label="Ver próximos cards"
                  onClick={() => moveCarousel("next")}
                  className="w-11 h-11 border border-primary/40 text-primary flex items-center justify-center hover:bg-primary hover:text-dark transition-colors"
                >
                  <ChevronRight size={19} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SOLUÇÕES (INSTITUCIONAL COMO AUTORIDADE) */}
      <section className="py-24 bg-[#050505] border-y border-white/5 relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <motion.h2 
              {...fadeUp}
              className="text-3xl md:text-5xl font-serif text-foreground max-w-2xl"
            >
              {siteData.solutions.title}
            </motion.h2>
            <motion.div {...fadeUp} className="text-xs text-primary/70 uppercase tracking-widest font-semibold border-b border-primary/30 pb-1">
              Escopo Institucional
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {siteData.solutions.items.map((item, idx) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group relative bg-[#0A0A0A] border border-white/10 p-10 flex flex-col h-full hover:border-primary/50 transition-colors duration-500"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/80 to-primary/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                
                <h3 className="text-2xl font-serif text-foreground mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-foreground/60 text-base font-light mb-10 flex-1 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="inline-flex items-center text-sm font-medium text-primary/80 group-hover:text-primary transition-colors uppercase tracking-wider">
                  Ver escopo <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SOBRE JOCIMAR (AUTORIDADE) */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-60 pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative aspect-[4/5] max-h-[700px] w-full group"
          >
            <div className="absolute inset-0 bg-primary/20 translate-x-4 translate-y-4 z-0 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-700 ease-out" />
            <Image
              src={heroImage}
              alt="Munaretto"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 z-10"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-80" />
          </motion.div>

          <motion.div {...fadeUp} className="space-y-10 z-20">
            <div>
              <span className="text-primary text-xs font-semibold tracking-widest uppercase flex items-center gap-2 mb-4">
                <div className="w-8 h-[1px] bg-primary/50" />
                {siteData.aboutJocimar.eyebrow}
              </span>
              <h2 className="text-5xl font-serif text-foreground mb-2">{siteData.aboutJocimar.title}</h2>
              <p className="text-xl text-primary/80 font-serif italic">{siteData.aboutJocimar.role}</p>
            </div>
            
            <div className="space-y-6 text-foreground/70 font-light text-lg leading-relaxed">
              {siteData.aboutJocimar.text.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
            
            <blockquote className="relative p-8 mt-8 bg-[#0A0A0A] border border-white/5">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
              <p className="text-2xl font-serif text-foreground/90 italic leading-snug">
                &quot;{siteData.aboutJocimar.quote}&quot;
              </p>
            </blockquote>
            
            <Link 
              href={siteData.aboutJocimar.cta.href}
              className="inline-flex items-center gap-3 border-b border-primary text-primary pb-1 hover:text-primary-light transition-colors font-medium uppercase tracking-wider text-sm"
            >
              {siteData.aboutJocimar.cta.label} <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 6. NÚMEROS */}
      <section className="py-24 bg-[#050505] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {siteData.indicators.items.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2, ease: "easeOut" }}
                className="pt-8 md:pt-0 md:px-8 first:pt-0 first:md:px-0 text-center md:text-left flex flex-col items-center md:items-start group"
              >
                <div className="text-5xl lg:text-7xl font-serif text-primary mb-4 group-hover:scale-105 transition-transform origin-left duration-500">{item.value}</div>
                <p className="text-foreground/70 text-sm font-medium uppercase tracking-widest">{item.label}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <p className="text-xs text-foreground/40 inline-flex items-center gap-2 bg-[#0A0A0A] border border-white/5 px-6 py-3 rounded-full uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              {siteData.indicators.note}
            </p>
          </div>
        </div>
      </section>

      {/* 7. TIMELINE */}
      <section className="py-32 bg-background relative">
        <div className="container mx-auto px-6 md:px-12">
          <motion.h2 {...fadeUp} className="text-4xl md:text-5xl font-serif text-foreground mb-24 text-center">
            {siteData.timeline.title}
          </motion.h2>

          <div className="relative">
            <div className="hidden md:block absolute top-6 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            
            <div className="flex flex-col md:flex-row gap-12 justify-between relative z-10">
              {siteData.timeline.steps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.15 }}
                  className="flex-1 flex flex-col md:items-center text-left md:text-center group"
                >
                  <div className="w-14 h-14 rounded-full bg-[#0A0A0A] border-2 border-white/10 flex items-center justify-center text-primary font-serif text-xl mb-8 group-hover:border-primary group-hover:bg-primary/10 group-hover:shadow-[0_0_15px_rgba(194,142,70,0.3)] transition-all duration-500 md:mx-auto relative">
                    {idx + 1}
                  </div>
                  <h3 className="text-foreground text-lg font-serif mb-4">{step.title.split('. ')[1]}</h3>
                  <p className="text-foreground/50 text-sm font-light text-balance leading-relaxed group-hover:text-foreground/80 transition-colors">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11. CTA FINAL - VENDENDO O CURSO */}
      <section className="relative py-32 bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/15 via-background to-background z-0" />
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-4xl">
          <motion.div {...fadeUp} className="mb-6 inline-flex items-center justify-center gap-2 text-primary font-semibold tracking-widest uppercase text-sm border border-primary/20 bg-primary/5 px-6 py-2 rounded-full">
            <Lock size={14} /> Oferta Especial
          </motion.div>
          
          <motion.h2 
            {...fadeUp}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif text-foreground mb-8 text-balance leading-tight"
          >
            {siteData.finalCta.title}
          </motion.h2>
          
          <motion.p 
            {...fadeUp}
            transition={{ delay: 0.2 }}
            className="text-xl text-foreground/60 font-light mb-12 text-balance mx-auto max-w-2xl leading-relaxed"
          >
            {siteData.finalCta.text}
          </motion.p>
          
          <motion.div 
            {...fadeUp}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link 
              href={siteData.finalCta.ctaPrimary.href}
              className="w-full sm:w-auto bg-primary text-dark px-10 py-5 text-center font-bold hover:bg-primary-light transition-all duration-300 text-lg uppercase tracking-wider shadow-[0_0_30px_rgba(194,142,70,0.2)] hover:shadow-[0_0_40px_rgba(194,142,70,0.4)] flex items-center justify-center gap-3"
            >
              {siteData.finalCta.ctaPrimary.label} <ArrowRight size={20} />
            </Link>
            <Link 
              href={siteData.finalCta.ctaSecondary.href}
              className="w-full sm:w-auto text-foreground/70 hover:text-primary transition-colors flex items-center justify-center gap-2 font-medium tracking-wide"
            >
              {siteData.finalCta.ctaSecondary.label} <ChevronRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
