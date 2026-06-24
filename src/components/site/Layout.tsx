import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 animate-fade-in">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({ eyebrow, title, sub, image }: { eyebrow: string; title: string; sub?: string; image: string }) {
  return (
    <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-onyx/70 via-onyx/40 to-onyx" />
      <div className="relative z-10 mx-auto flex h-full max-w-[1500px] flex-col items-center justify-center px-6 text-center">
        <p className="eyebrow animate-fade-up">{eyebrow}</p>
        <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1] gold-text animate-fade-up" style={{ animationDelay: "0.15s" }}>{title}</h1>
        {sub && <p className="mt-6 max-w-xl text-cream/70 animate-fade-up" style={{ animationDelay: "0.3s" }}>{sub}</p>}
      </div>
    </section>
  );
}
