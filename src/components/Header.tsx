"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteData } from "@/data/content";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="text-xl md:text-2xl font-serif font-semibold tracking-wide text-foreground">
          SOUTHSEA<span className="text-primary text-sm tracking-normal align-top ml-1">INVESTMENTS</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {siteData.header.menu.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-foreground/80 hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={siteData.header.cta.href}
            className="text-sm bg-primary/10 border border-primary/30 text-primary px-5 py-2.5 hover:bg-primary hover:text-dark transition-all duration-300"
          >
            {siteData.header.cta.label}
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-white/5 py-6 px-6 lg:hidden flex flex-col gap-6"
          >
            {siteData.header.menu.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-lg text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={siteData.header.cta.href}
              className="text-center text-sm bg-primary/10 border border-primary/30 text-primary px-5 py-3 mt-4 hover:bg-primary hover:text-dark transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {siteData.header.cta.label}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
