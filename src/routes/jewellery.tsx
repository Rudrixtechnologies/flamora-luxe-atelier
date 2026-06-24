import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { ProductCard } from "@/components/site/ProductCard";
import { images, products } from "@/lib/catalog";

export const Route = createFileRoute("/jewellery")({
  head: () => ({ meta: [{ title: "Jewellery — Flamora Joaillerie" }, { name: "description", content: "Heirloom jewellery. Rings, necklaces, earrings, bracelets." }] }),
  component: JewelleryPage,
});

const cats = ["Rings", "Necklaces", "Earrings", "Bracelets"];

function JewelleryPage() {
  const items = products.filter((p) => p.category === "Jewellery");
  return (
    <SiteLayout>
      <PageHero eyebrow="La Joaillerie" title="Diamond Collection" sub="Recycled gold, ethically sourced stones. Edition pieces from our Paris atelier." image={images.catJewellery} />
      <section className="mx-auto max-w-[1500px] px-6 py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cats.map((c) => (
            <button key={c} className="group relative overflow-hidden gold-border bg-noir aspect-[4/3]">
              <div className="absolute inset-0 grid place-items-center">
                <span className="font-display text-2xl text-cream group-hover:text-gold transition-colors">{c}</span>
              </div>
            </button>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-[1500px] px-6 pb-24">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[...items, ...items].slice(0, 8).map((p, i) => <ProductCard key={p.id + i} p={p} />)}
        </div>
      </section>
    </SiteLayout>
  );
}
