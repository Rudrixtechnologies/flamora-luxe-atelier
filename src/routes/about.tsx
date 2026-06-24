import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { images } from "@/lib/catalog";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "Our story — Flamora" }, { name: "description", content: "The story behind Maison Flamora." }] }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Maison Flamora" title="A quiet kind of luxury" sub="Founded in 2017 in a Paris atelier, Flamora is a study in restraint." image={images.atelier} />
      <section className="mx-auto grid max-w-[1500px] gap-16 px-6 py-24 md:grid-cols-2 md:items-center">
        <img src={images.editorial} alt="" loading="lazy" className="aspect-[4/5] w-full object-cover gold-border" />
        <div>
          <p className="eyebrow">Our story</p>
          <h2 className="mt-4 font-display text-5xl gold-text">Made slowly, by few hands.</h2>
          <p className="mt-6 text-cream/70 leading-relaxed">
            What began as a private workshop has become a maison of 112 artisans across Paris, Milan and Jaipur — bound by a single conviction: that an object made well, once, outlives a hundred made quickly.
          </p>
          <p className="mt-4 text-cream/70 leading-relaxed">
            Every Flamora piece is hand-finished, numbered, and traceable to its source. We do not chase seasons. We craft heirlooms.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { n: "112", l: "Artisans" },
            { n: "9 yrs", l: "Of the Maison" },
            { n: "100%", l: "Recycled metals" },
          ].map((s) => (
            <div key={s.l} className="glass p-10 text-center">
              <p className="font-display text-6xl gold-text">{s.n}</p>
              <p className="mt-3 eyebrow text-cream/70">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-6 py-24">
        <p className="eyebrow">Gallery</p>
        <h2 className="mt-3 font-display text-4xl gold-text">Inside the atelier</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {[images.atelier, images.editorial, images.feature, images.catJewellery, images.catClothing, images.pEarrings, images.pRings, images.pDress].map((src, i) => (
            <img key={i} src={src} alt="" loading="lazy" className="aspect-square w-full object-cover gold-border hover:scale-[1.02] transition-transform duration-700" />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
