import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, X } from "lucide-react";
import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { products } from "@/lib/catalog";

export const Route = createFileRoute("/cart")({
  head: () => ({ meta: [{ title: "Shopping Bag — Flamora" }] }),
  component: CartPage,
});

function CartPage() {
  const initial = products.slice(0, 3).map((p) => ({ ...p, qty: 1 }));
  const [items, setItems] = useState(initial);
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = subtotal > 300 ? 0 : 25;
  return (
    <SiteLayout>
      <section className="mx-auto max-w-[1500px] px-6 pt-16 pb-24">
        <p className="eyebrow">Maison</p>
        <h1 className="mt-4 font-display text-5xl md:text-6xl gold-text">Shopping Bag</h1>
        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_400px]">
          <div className="space-y-6">
            {items.map((p, idx) => (
              <div key={p.id} className="grid grid-cols-[120px_1fr_auto] gap-6 gold-border bg-noir/50 p-5">
                <img src={p.image} alt={p.name} className="aspect-[4/5] w-full object-cover" />
                <div className="flex flex-col">
                  <p className="eyebrow text-cream/50">{p.subcategory}</p>
                  <h3 className="mt-1 font-display text-xl text-cream">{p.name}</h3>
                  <p className="mt-1 text-sm text-cream/60">{p.material}</p>
                  <div className="mt-auto flex items-center gap-3">
                    <button onClick={() => setItems((s) => s.map((x, i) => i === idx ? { ...x, qty: Math.max(1, x.qty - 1) } : x))} className="grid h-8 w-8 place-items-center gold-border text-cream hover:text-gold"><Minus className="h-3 w-3" /></button>
                    <span className="w-6 text-center text-cream">{p.qty}</span>
                    <button onClick={() => setItems((s) => s.map((x, i) => i === idx ? { ...x, qty: x.qty + 1 } : x))} className="grid h-8 w-8 place-items-center gold-border text-cream hover:text-gold"><Plus className="h-3 w-3" /></button>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <button onClick={() => setItems((s) => s.filter((_, i) => i !== idx))} className="text-cream/40 hover:text-gold"><X className="h-4 w-4" /></button>
                  <p className="font-display text-xl text-gold">€{(p.price * p.qty).toLocaleString()}</p>
                </div>
              </div>
            ))}
            {items.length === 0 && <p className="text-cream/60">Your bag is empty.</p>}
          </div>
          <aside className="glass p-8 h-fit luxury-shadow sticky top-32">
            <h2 className="font-display text-2xl text-cream">Summary</h2>
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between text-cream/70"><span>Subtotal</span><span>€{subtotal.toLocaleString()}</span></div>
              <div className="flex justify-between text-cream/70"><span>Shipping</span><span>{shipping === 0 ? "Complimentary" : `€${shipping}`}</span></div>
              <div className="hairline-gold my-4" />
              <div className="flex justify-between font-display text-xl"><span className="text-cream">Total</span><span className="text-gold">€{(subtotal + shipping).toLocaleString()}</span></div>
            </div>
            <Link to="/checkout" className="mt-8 block w-full bg-gold px-8 py-4 text-center text-[10px] uppercase tracking-[0.32em] text-onyx hover:bg-gold-soft transition-colors">Proceed to Checkout</Link>
            <Link to="/shop" className="mt-3 block text-center text-xs text-cream/60 hover:text-gold">Continue shopping</Link>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}
