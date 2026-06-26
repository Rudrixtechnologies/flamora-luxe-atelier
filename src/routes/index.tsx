import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { ProductCard } from "@/components/site/ProductCard";
import { images, products, benefits } from "@/lib/catalog";
import { ScrollExperience } from "@/components/site/ScrollExperience";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Flamora — Luxury Jewellery & Fashion Maison" },
      { name: "description", content: "Flamora is a luxury lifestyle maison for considered clothing and heirloom jewellery. Discover timeless elegance." },
      { property: "og:title", content: "Flamora — Luxury Jewellery & Fashion Maison" },
      { property: "og:description", content: "Discover timeless elegance." },
    ],
  }),
  component: HomePage,
});

function Splash() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 2200);
    return () => clearTimeout(t);
  }, []);
  if (done) return null;
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-onyx" style={{ animation: "fade-in 0.4s ease-out reverse 1.9s both" }}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,oklch(0.22_0.09_155_/_0.35),transparent_70%)]" />
      <div className="relative">
        <div className="absolute -inset-32 opacity-50 shimmer" />
        <div className="absolute -inset-32 opacity-20 emerald-shimmer" />
        <div className="relative font-display text-5xl md:text-7xl tracking-[0.3em] gold-text animate-gold-reveal">FLĀMORĀ</div>
        <div className="mt-6 hairline-gold animate-fade-in" style={{ animationDelay: "0.8s" }} />
        <p className="mt-4 text-center eyebrow text-cream/60 animate-fade-in" style={{ animationDelay: "1.1s" }}>Maison de luxe</p>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <Splash />
      <SiteLayout>
        {/* Hero */}
        <section className="relative h-[92vh] min-h-[640px] overflow-hidden">
          <img src={images.heroDark} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-onyx/50 via-onyx/25 to-onyx" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_30%_40%,oklch(0.20_0.09_158_/_0.18),transparent_70%)]" />
          <div className="relative z-10 mx-auto grid h-full max-w-[1500px] grid-cols-12 items-end gap-6 px-6 pb-24">
            <div className="col-span-12 md:col-span-7">
              <p className="eyebrow animate-fade-up">Spring · MMXXVI</p>
              <h1 className="mt-6 font-display text-6xl md:text-8xl leading-[0.95] text-cream animate-fade-up" style={{ animationDelay: "0.15s" }}>
                Choose<br /><span className="gold-text italic">Your Luxury</span>
              </h1>
              <p className="mt-6 max-w-md text-cream/70 animate-fade-up" style={{ animationDelay: "0.3s" }}>
                Discover timeless elegance — heirloom jewellery and considered clothing, crafted by the few for the discerning.
              </p>
              <div className="mt-10 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.45s" }}>
                <Link to="/shop" className="group inline-flex items-center gap-3 bg-gold px-8 py-4 text-[10px] uppercase tracking-[0.32em] text-onyx hover:bg-gold-soft transition-colors">
                  Discover the Maison <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/jewellery" className="inline-flex items-center gap-3 gold-border px-8 py-4 text-[10px] uppercase tracking-[0.32em] text-cream hover:bg-gold/10 transition-colors">
                  Jewellery Atelier
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Cinematic 3D scroll showcase */}
        <ScrollExperience />

        {/* Category Select */}
        <section className="mx-auto max-w-[1500px] px-6 py-24">
          <div className="mb-16 text-center">
            <p className="eyebrow">Two houses, one maison</p>
            <h2 className="mt-4 font-display text-4xl md:text-6xl gold-text">Choose your métier</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { to: "/clothing", img: images.catClothing, label: "Clothing", sub: "Atelier", desc: "Silk, cashmere, hand-finished tailoring." },
              { to: "/jewellery", img: images.catJewellery, label: "Jewellery", sub: "Joaillerie", desc: "Recycled gold, ethically sourced stones." },
            ].map((c) => (
              <Link key={c.to} to={c.to} className="group relative block overflow-hidden gold-border luxury-shadow">
                <img src={c.img} alt={c.label} className="aspect-[4/5] w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-10">
                  <p className="eyebrow">{c.sub}</p>
                  <h3 className="mt-3 font-display text-5xl md:text-6xl gold-text">{c.label}</h3>
                  <p className="mt-3 max-w-sm text-cream/70">{c.desc}</p>
                  <span className="mt-6 inline-flex items-center gap-3 border-b border-gold pb-1 text-[10px] uppercase tracking-[0.32em] text-gold">
                    Explore {c.label} <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Editorial */}
        <section className="mx-auto grid max-w-[1500px] gap-12 px-6 py-24 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <img src={images.editorial} alt="" className="aspect-[5/6] w-full object-cover gold-border" loading="lazy" />
          </div>
          <div className="md:col-span-5">
            <p className="eyebrow">Pièce signature</p>
            <h3 className="mt-6 font-display text-5xl gold-text">The Halcyon Chain</h3>
            <p className="mt-6 text-cream/70 leading-relaxed">
              A single braid of 18k recycled gold, set with a solitaire cushion-cut sapphire. Edition of forty, hand-finished in our Paris atelier.
            </p>
            <div className="mt-8 hairline-gold" />
            <dl className="mt-8 grid grid-cols-3 gap-6 text-xs uppercase tracking-[0.2em] text-cream/60">
              <div><dt className="eyebrow text-cream/40">Material</dt><dd className="mt-2 text-cream">18k gold</dd></div>
              <div><dt className="eyebrow text-cream/40">Stones</dt><dd className="mt-2 text-cream">Ceylon sapphire</dd></div>
              <div><dt className="eyebrow text-cream/40">Edition</dt><dd className="mt-2 text-cream">40 pieces</dd></div>
            </dl>
            <Link to="/product/$id" params={{ id: "halcyon-chain" }} className="mt-10 inline-flex items-center gap-3 bg-gold px-8 py-4 text-[10px] uppercase tracking-[0.32em] text-onyx hover:bg-gold-soft transition-colors">
              €4,280 — Reserve
            </Link>
          </div>
        </section>

        {/* Product grid */}
        <section className="mx-auto max-w-[1500px] px-6 py-24">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="eyebrow">Recently arrived</p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl gold-text">The new collection</h2>
            </div>
            <Link to="/shop" className="hidden md:inline-flex eyebrow border-b border-gold pb-1 text-gold">View all</Link>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {products.slice(0, 4).map((p) => <ProductCard key={p.id} p={p} />)}
          </div>
        </section>

        {/* Benefits */}
        <section className="mx-auto max-w-[1500px] px-6 py-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <div key={b.t} className={`p-8 ${i % 2 === 0 ? "glass" : "glass-emerald"}`}>
                <div className={`mb-4 grid h-10 w-10 place-items-center rounded-full border text-gold ${i % 2 === 0 ? "border-gold/40" : "border-emerald/40"}`}>
                  <Check className="h-4 w-4" />
                </div>
                <h4 className="font-display text-xl text-cream">{b.t}</h4>
                <p className="mt-2 text-sm text-cream/60">{b.d}</p>
              </div>
            ))}
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
