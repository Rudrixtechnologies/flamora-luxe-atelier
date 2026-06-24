import { createFileRoute, Link } from "@tanstack/react-router";
import { X, ShoppingBag } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { products } from "@/lib/catalog";

export const Route = createFileRoute("/wishlist")({
  head: () => ({ meta: [{ title: "Wishlist — Flamora" }] }),
  component: WishlistPage,
});

function WishlistPage() {
  const saved = products.slice(0, 6);
  return (
    <SiteLayout>
      <section className="mx-auto max-w-[1500px] px-6 pt-16 pb-24">
        <p className="eyebrow">Saved pieces</p>
        <h1 className="mt-4 font-display text-5xl md:text-6xl gold-text">Wishlist</h1>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {saved.map((p) => (
            <div key={p.id} className="group relative gold-border bg-noir overflow-hidden">
              <Link to="/product/$id" params={{ id: p.id }}>
                <img src={p.image} alt={p.name} className="aspect-[4/5] w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              </Link>
              <button className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full glass text-cream hover:text-gold"><X className="h-4 w-4" /></button>
              <div className="p-5">
                <p className="eyebrow text-cream/40">{p.subcategory}</p>
                <div className="mt-2 flex items-center justify-between">
                  <h3 className="font-display text-lg text-cream">{p.name}</h3>
                  <p className="font-display text-lg text-gold">€{p.price.toLocaleString()}</p>
                </div>
                <button className="mt-4 flex w-full items-center justify-center gap-2 bg-gold py-3 text-[10px] uppercase tracking-[0.32em] text-onyx hover:bg-gold-soft">
                  <ShoppingBag className="h-3.5 w-3.5" /> Move to Bag
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
