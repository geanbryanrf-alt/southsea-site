import { siteData } from "@/data/content";
import Image from "next/image";
import munarettoImage from "../../../7G2A2370.jpg.jpeg";

export const metadata = {
  title: "Sobre | Southsea Investments",
  description: "Conheça a Southsea Investments e a liderança de Munaretto."
};

export default function Sobre() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-background relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-60 pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative aspect-[4/5] max-h-[700px] w-full group">
            <div className="absolute inset-0 bg-primary/20 translate-x-4 translate-y-4 z-0 transition-transform duration-700 ease-out" />
            <Image
              src={munarettoImage}
              alt="Munaretto"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 z-10 relative shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-80" />
        </div>

        <div className="max-w-2xl z-20">
          <span className="text-primary text-xs font-semibold tracking-widest uppercase mb-4 flex items-center gap-2">
            <div className="w-8 h-[1px] bg-primary/50" />
            {siteData.aboutJocimar.eyebrow}
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-4">{siteData.aboutJocimar.title}</h1>
          <p className="text-2xl text-primary/80 font-serif italic mb-12">{siteData.aboutJocimar.role}</p>
          
          <div className="space-y-6 text-foreground/80 font-light text-lg leading-relaxed">
            {siteData.aboutJocimar.text.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
          
          <blockquote className="relative p-8 mt-12 bg-[#0A0A0A] border border-white/5">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
            <p className="text-2xl font-serif text-foreground/90 italic leading-snug">
              "{siteData.aboutJocimar.quote}"
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
