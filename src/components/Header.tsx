"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navigation } from "@/data/content";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300",
        isScrolled || isOpen
          ? "border-white/10 bg-[#080808]/95 shadow-[0_12px_36px_rgba(0,0,0,0.22)] backdrop-blur-xl"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="container mx-auto flex h-[76px] items-center justify-between px-5 md:px-10">
        <Link href="/" className="font-serif text-xl font-semibold tracking-[0.08em] text-foreground" onClick={closeMenu}>
          SOUTHSEA <span className="align-middle font-sans text-[0.52em] font-medium tracking-[0.22em] text-primary">INVESTMENTS</span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-5 xl:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-foreground/70 transition-colors hover:text-primary">
              {item.label}
            </Link>
          ))}
          <Link href="/analise-estrategica" className="button-primary ml-2 px-4 py-2.5 text-xs">
            Solicitar análise estratégica
          </Link>
        </nav>

        <button
          type="button"
          className="rounded-sm p-2 text-foreground xl:hidden"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            aria-label="Navegação mobile"
            initial={shouldReduceMotion ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.18 }}
            className="border-t border-white/10 bg-[#080808] px-5 pb-6 pt-4 xl:hidden"
          >
            <div className="container mx-auto flex flex-col gap-1">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} onClick={closeMenu} className="rounded-sm px-3 py-3 text-base text-foreground/80 hover:bg-white/5 hover:text-primary">
                  {item.label}
                </Link>
              ))}
              <Link href="/analise-estrategica" onClick={closeMenu} className="button-primary mt-3 text-center">
                Solicitar análise estratégica
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}