import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Star, Heart, Truck, ShieldCheck, RotateCcw } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { ProductCard } from "@/components/site/ProductCard";
import { products } from "@/lib/catalog";

export const Route = createFileRoute("/product/$id")({
  component: ProductPage,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-xl px-6 py-32 text-center">
        <h1 className="font-display text-4xl gold-text">Piece not found</h1>
        <Link to="/shop" className="mt-8 inline-block eyebrow border-b border-gold pb-1 text-gold">Return to shop</Link>
      </div>
    </SiteLayout>
  ),
});

function ProductPage() {
  const { id } = Route.useParams();
  const p = products.find((x) => x.id === id);
  if (!p) throw notFound();
  const [size, setSize] = useState("M");
  const [color, setColor] = useState("Noir");
  const tab = ["Details", "Material", "Shipping", "Reviews"];
  const [active, setActive] = useState(tab[0]);
  const related = products.filter((x) => x.id !== p.id).slice(0, 4);

  return (
    <SiteLayout>
      <div className="mx-auto max-w-[1500px] px-6 pt-10">
        <nav className="text-[10px] uppercase tracking-[0.28em] text-cream/40">
          <Link to="/" className="hover:text-gold">Maison</Link> / <Link to="/shop" className="hover:text-gold">Shop</Link> / <span className="text-cream/70">{p.name}</span>
        </nav>
      </div>
      <section className="mx-auto grid max-w-[1500px] gap-12 px-6 py-12 md:grid-cols-2">
        <div>
          <div className="overflow-hidden gold-border bg-noir luxury-shadow">
            <img src={p.image} alt={p.name} className="aspect-[4/5] w-full object-cover" />
          </div>
          <div className="mt-4 grid grid-cols-4 gap-3">
            {[p.image, p.image, p.image, p.image].map((src, i) => (
              <button key={i} className={`overflow-hidden ${i === 0 ? "gold-border" : "border border-white/10"}`}>
                <img src={src} alt="" className="aspect-square w-full object-cover" />
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="eyebrow">{p.subcategory}</p>
          <h1 className="mt-4 font-display text-5xl gold-text">{p.name}</h1>
          <div className="mt-3 flex items-center gap-2 text-sm text-cream/60">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`h-3.5 w-3.5 ${i < Math.floor(p.rating) ? "fill-gold text-gold" : "text-cream/20"}`} />
              ))}
            </div>
            <span>{p.rating} · 128 reviews</span>
          </div>
          <p className="mt-6 font-display text-3xl text-gold">€{p.price.toLocaleString()}</p>
          <div className="mt-8 hairline-gold" />
          <p className="mt-8 text-cream/70 leading-relaxed">
            Hand-finished in our atelier from {p.material.toLowerCase()}. A study in restraint — designed to be worn for decades, never replaced.
          </p>

          <div className="mt-10">
            <p className="eyebrow mb-3">Size</p>
            <div className="flex gap-2">
              {["XS","S","M","L","XL"].map((s) => (
                <button key={s} onClick={() => setSize(s)} className={`h-11 w-11 text-xs uppercase tracking-wider transition-colors ${size === s ? "bg-gold text-onyx" : "gold-border text-cream hover:bg-gold/10"}`}>{s}</button>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <p className="eyebrow mb-3">Colour — {color}</p>
            <div className="flex gap-3">
              {[{n:"Noir",c:"#0a0a0a"},{n:"Ivory",c:"#f0e8d8"},{n:"Champagne",c:"#c9a84c"}].map((c) => (
                <button key={c.n} onClick={() => setColor(c.n)} className={`h-9 w-9 rounded-full border-2 transition-all ${color===c.n?"border-gold":"border-white/20"}`} style={{ background: c.c }} aria-label={c.n} />
              ))}
            </div>
          </div>

          <div className="mt-10 flex gap-3">
            <button className="flex-1 bg-gold px-8 py-4 text-[10px] uppercase tracking-[0.32em] text-onyx hover:bg-gold-soft transition-colors">Add to Bag</button>
            <Link to="/checkout" className="flex-1 text-center gold-border px-8 py-4 text-[10px] uppercase tracking-[0.32em] text-cream hover:bg-gold/10 transition-colors">Buy Now</Link>
            <button className="grid h-[52px] w-[52px] place-items-center gold-border text-cream hover:text-gold" aria-label="Wishlist"><Heart className="h-4 w-4" /></button>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 text-xs text-cream/60">
            <div className="flex items-center gap-2"><Truck className="h-4 w-4 text-gold" /> Free shipping</div>
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-gold" /> Lifetime care</div>
            <div className="flex items-center gap-2"><RotateCcw className="h-4 w-4 text-gold" /> 30-day return</div>
          </div>

          <div className="mt-12 border-t border-white/10">
            <div className="flex gap-8 border-b border-white/10">
              {tab.map((t) => (
                <button key={t} onClick={() => setActive(t)} className={`py-4 text-[11px] uppercase tracking-[0.28em] ${active===t?"text-gold border-b border-gold -mb-px":"text-cream/60 hover:text-cream"}`}>{t}</button>
              ))}
            </div>
            <div className="py-6 text-sm text-cream/70 leading-relaxed">
              {active === "Details" && <p>Hand-stitched, edition piece. Numbered and certified.</p>}
              {active === "Material" && <p>{p.material}. Sourced ethically; fully traceable origin.</p>}
              {active === "Shipping" && <p>Complimentary express shipping worldwide. Delivery within 2–5 business days.</p>}
              {active === "Reviews" && <p>Rated {p.rating}/5 by our clients. Reviews moderated by the Maison concierge.</p>}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-6 pb-24">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-display text-3xl md:text-4xl gold-text">You may also love</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((r) => <ProductCard key={r.id} p={r} />)}
        </div>
      </section>
    </SiteLayout>
  );
}
