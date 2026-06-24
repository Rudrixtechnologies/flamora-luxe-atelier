import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { ProductCard } from "@/components/site/ProductCard";
import { images, products } from "@/lib/catalog";

export const Route = createFileRoute("/clothing")({
  head: () => ({ meta: [{ title: "Clothing — Flamora Atelier" }, { name: "description", content: "Luxury fashion: dresses, formal wear, casual luxury." }] }),
  component: ClothingPage,
});

const sections = ["New Collection", "Trending Styles", "Premium Dresses", "Formal Wear", "Casual Luxury"];

function ClothingPage() {
  const items = products.filter((p) => p.category === "Clothing");
  return (
    <SiteLayout>
      <PageHero eyebrow="Atelier — MMXXVI" title="Le Vestiaire" sub="A fashion house built on quiet confidence. Silk, cashmere, and hand-finished tailoring." image={images.catClothing} />
      <div className="mx-auto max-w-[1500px] px-6 py-12">
        <nav className="flex flex-wrap gap-x-8 gap-y-3 border-b border-white/10 pb-6 text-[11px] uppercase tracking-[0.28em] text-cream/60">
          {sections.map((s, i) => (
            <button key={s} className={i === 0 ? "text-gold border-b border-gold pb-2 -mb-[25px]" : "hover:text-gold transition-colors"}>{s}</button>
          ))}
        </nav>
      </div>
      <section className="mx-auto max-w-[1500px] px-6 pb-24">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[...items, ...items].slice(0, 8).map((p, i) => <ProductCard key={p.id + i} p={p} />)}
        </div>
      </section>
    </SiteLayout>
  );
}
