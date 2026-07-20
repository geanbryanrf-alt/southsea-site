"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { solutions } from "@/data/content";

export function SolutionsCarousel() {
  const [activeCard, setActiveCard] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({ active: false, moved: false, startX: 0, startScrollLeft: 0 });
  const maxCardIndex = Math.max(0, solutions.length - cardsPerView);

  useEffect(() => {
    const updateCardsPerView = () => {
      setCardsPerView(window.innerWidth >= 1100 ? 3 : window.innerWidth >= 700 ? 2 : 1);
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
    const card = carousel?.querySelector<HTMLElement>("[data-solution-card]");
    if (!carousel || !card) return;

    const gap = Number.parseFloat(window.getComputedStyle(carousel).gap) || 0;
    carousel.scrollTo({
      left: activeCard * (card.offsetWidth + gap),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  }, [activeCard, cardsPerView]);

  useEffect(() => {
    if (isPaused || maxCardIndex === 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = window.setInterval(() => {
      setActiveCard((current) => (current >= maxCardIndex ? 0 : current + 1));
    }, 5200);

    return () => window.clearInterval(interval);
  }, [isPaused, maxCardIndex]);

  const syncActiveCard = (carousel: HTMLDivElement) => {
    const card = carousel.querySelector<HTMLElement>("[data-solution-card]");
    if (!card) return;
    const gap = Number.parseFloat(window.getComputedStyle(carousel).gap) || 0;
    const nextIndex = Math.round(carousel.scrollLeft / (card.offsetWidth + gap));
    setActiveCard(Math.max(0, Math.min(nextIndex, maxCardIndex)));
  };

  const moveCarousel = (direction: "previous" | "next") => {
    setActiveCard((current) => {
      if (direction === "previous") return current <= 0 ? maxCardIndex : current - 1;
      return current >= maxCardIndex ? 0 : current + 1;
    });
  };

  return (
    <div
      className="mt-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <div
        ref={carouselRef}
        role="region"
        aria-label="Carrossel de soluções da Southsea"
        aria-roledescription="carrossel"
        className="flex cursor-grab snap-x snap-mandatory select-none gap-4 overflow-x-auto overscroll-x-contain pb-3 touch-pan-y active:cursor-grabbing [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onPointerDown={(event) => {
          dragState.current = {
            active: true,
            moved: false,
            startX: event.clientX,
            startScrollLeft: event.currentTarget.scrollLeft,
          };
          event.currentTarget.setPointerCapture(event.pointerId);
          setIsPaused(true);
        }}
        onPointerMove={(event) => {
          if (!dragState.current.active) return;
          const movement = event.clientX - dragState.current.startX;
          if (Math.abs(movement) > 5) dragState.current.moved = true;
          event.currentTarget.scrollLeft = dragState.current.startScrollLeft - movement;
        }}
        onPointerUp={(event) => {
          dragState.current.active = false;
          syncActiveCard(event.currentTarget);
          setIsPaused(false);
        }}
        onPointerCancel={(event) => {
          dragState.current.active = false;
          syncActiveCard(event.currentTarget);
          setIsPaused(false);
        }}
        onClickCapture={(event) => {
          if (!dragState.current.moved) return;
          event.preventDefault();
          event.stopPropagation();
          dragState.current.moved = false;
        }}

      >
        {solutions.map((solution, index) => (
          <motion.article
            key={solution.slug}
            data-solution-card
            className="group relative flex min-h-[330px] w-[86%] shrink-0 snap-start flex-col overflow-hidden border border-white/10 bg-[#080808] p-7 sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.68rem)]"
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-primary via-primary-light to-transparent transition-transform duration-500 group-hover:scale-x-100" />
            <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-primary/0 blur-3xl transition-colors duration-500 group-hover:bg-primary/10" />
            <span className="relative text-xs font-semibold tracking-[0.16em] text-primary">0{index + 1}</span>
            <h3 className="relative mt-10 font-serif text-3xl text-foreground transition-colors duration-300 group-hover:text-primary">{solution.title}</h3>
            <p className="relative mt-4 flex-1 text-sm leading-6 text-foreground/60">{solution.description}</p>
            <Link href={`/solucoes/${solution.slug}`} className="relative mt-8 inline-flex w-fit items-center gap-2 text-sm text-primary">
              Explorar solução <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </motion.article>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-5">
        <button
          type="button"
          aria-label="Ver soluções anteriores"
          onClick={() => moveCarousel("previous")}
          className="group flex h-12 w-12 items-center justify-center border border-white/20 text-foreground/70 transition-all duration-300 hover:-translate-x-0.5 hover:border-primary hover:text-primary"
        >
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-0.5" />
        </button>
        <span className="min-w-16 text-center text-xs font-semibold tracking-[0.2em] text-foreground/50" aria-live="polite">
          {String(activeCard + 1).padStart(2, "0")} / {String(maxCardIndex + 1).padStart(2, "0")}
        </span>
        <button
          type="button"
          aria-label="Ver próximas soluções"
          onClick={() => moveCarousel("next")}
          className="group flex h-12 w-12 items-center justify-center border border-primary/50 text-primary transition-all duration-300 hover:translate-x-0.5 hover:bg-primary hover:text-[#080808]"
        >
          <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </div>
  );
}
