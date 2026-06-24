import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { ProductCard } from "@/components/site/ProductCard";
import { products } from "@/lib/catalog";

export const Route = createFileRoute("/shop")({
  head: () => ({ meta: [{ title: "Shop — Flamora Marketplace" }, { name: "description", content: "Shop all Flamora pieces." }] }),
  component: ShopPage,
});

function Group({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="border-b border-white/10 pb-6">
      <p className="eyebrow mb-4">{title}</p>
      <ul className="space-y-2">
        {items.map((i) => (
          <li key={i}>
            <label className="flex items-center gap-3 text-sm text-cream/70 hover:text-gold cursor-pointer">
              <input type="checkbox" className="accent-gold" /> {i}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ShopPage() {
  const [sort, setSort] = useState("Newest");
  return (
    <SiteLayout>
      <section className="mx-auto max-w-[1500px] px-6 pt-16 pb-8">
        <p className="eyebrow">Marketplace</p>
        <h1 className="mt-4 font-display text-5xl md:text-6xl gold-text">Shop All</h1>
      </section>
      <section className="mx-auto max-w-[1500px] grid gap-10 px-6 pb-24 md:grid-cols-[260px_1fr]">
        <aside className="space-y-8">
          <Group title="Category" items={["Clothing", "Jewellery", "Accessories"]} />
          <Group title="Price" items={["Under €500", "€500 – €1,500", "€1,500 – €5,000", "Above €5,000"]} />
          <Group title="Size" items={["XS", "S", "M", "L", "XL"]} />
          <Group title="Colour" items={["Noir", "Ivory", "Gold", "Burgundy"]} />
          <Group title="Material" items={["Silk", "Cashmere", "18k Gold", "Diamond"]} />
          <Group title="Rating" items={["★ 4.5+", "★ 4.0+"]} />
        </aside>
        <div>
          <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
            <p className="text-sm text-cream/60">{products.length} pieces</p>
            <select value={sort} onChange={(e) => setSort(e.target.value)} className="bg-transparent text-xs uppercase tracking-[0.28em] text-cream/70 outline-none">
              <option>Newest</option>
              <option>Price Low–High</option>
              <option>Price High–Low</option>
              <option>Popular</option>
            </select>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => <ProductCard key={p.id} p={p} />)}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
