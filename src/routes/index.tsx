import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import featureJewelry from "@/assets/feature-jewelry.jpg";
import editorialImg from "@/assets/editorial.jpg";
import atelierImg from "@/assets/atelier.jpg";
import prodEarrings from "@/assets/product-earrings.jpg";
import prodDress from "@/assets/product-dress.jpg";
import prodRings from "@/assets/product-rings.jpg";
import prodCoat from "@/assets/product-coat.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Flamora — Jewellery & Atelier" },
      { name: "description", content: "Heirloom jewellery and considered clothing, crafted in small ateliers for those who dress with intention." },
      { property: "og:title", content: "Flamora — Jewellery & Atelier" },
      { property: "og:description", content: "Heirloom jewellery and considered clothing." },
    ],
  }),
  component: Home,
});

const products = [
  { name: "Solene Hoop", category: "Earrings", price: "€ 420", img: prodEarrings, tag: "New" },
  { name: "Halcyon Slip", category: "Dress", price: "€ 1,180", img: prodDress, tag: "Atelier" },
  { name: "Ines Stack", category: "Rings", price: "€ 690", img: prodRings, tag: "Edition of 40" },
  { name: "Verão Coat", category: "Outerwear", price: "€ 2,340", img: prodCoat, tag: "" },
];

function TopBar() {
  return (
    <div className="border-b border-border/60 bg-ivory">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-2 text-[10px] tracking-[0.28em] uppercase text-muted-foreground sm:px-10">
        <span className="hidden sm:inline">Complimentary shipping over €ďż˝".replace("ďż˝\"", "300")</span>
        <span className="hidden md:inline">Atelier — Lisbon · Paris · Jaipur</span>
        <span>Book a private viewing →</span>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-ivory/85 backdrop-blur">
      <div className="mx-auto grid max-w-[1400px] grid-cols-[1fr_auto_1fr] items-center gap-6 px-6 py-5 sm:px-10">
        <nav className="hidden items-center gap-8 text-xs tracking-[0.22em] uppercase text-foreground/80 md:flex">
          <a href="#jewellery" className="hover:text-bronze transition-colors">Jewellery</a>
          <a href="#clothing" className="hover:text-bronze transition-colors">Clothing</a>
          <a href="#atelier" className="hover:text-bronze transition-colors">Atelier</a>
          <a href="#journal" className="hover:text-bronze transition-colors">Journal</a>
        </nav>
        <a href="/" className="flex items-center justify-center">
          <span className="font-display text-3xl tracking-[0.18em] sm:text-4xl">FLAMORA</span>
        </a>
        <div className="flex items-center justify-end gap-6 text-xs tracking-[0.22em] uppercase text-foreground/80">
          <button className="hidden hover:text-bronze sm:inline">Search</button>
          <button className="hidden hover:text-bronze sm:inline">Account</button>
          <button className="hover:text-bronze">Bag (0)</button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="border-b border-border/60">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 lg:grid-cols-12">
        <div className="order-2 flex flex-col justify-between gap-10 px-6 py-12 sm:px-10 lg:order-1 lg:col-span-5 lg:py-20">
          <div>
            <p className="eyebrow">Volume IV — Summer Edit</p>
            <h1 className="mt-8 font-display text-[clamp(2.75rem,6vw,5rem)] leading-[1.02] tracking-[-0.02em]">
              Dressed in <span className="italic text-bronze-deep">quiet</span> gold,
              <br />wrapped in raw silk.
            </h1>
            <p className="mt-8 max-w-md text-[15px] leading-relaxed text-muted-foreground">
              Flamora is a house of two disciplines — heirloom jewellery and considered clothing —
              composed in small editions for the woman who dresses with intention.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <a href="#jewellery" className="group inline-flex items-center gap-3 bg-ink px-8 py-4 text-[11px] tracking-[0.32em] uppercase text-ivory hover:bg-bronze-deep transition-colors">
              Shop the Edit
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#atelier" className="text-[11px] tracking-[0.32em] uppercase text-foreground border-b border-bronze pb-1 hover:text-bronze">
              Inside the Atelier
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6 border-t border-border/60 pt-8">
            <div>
              <p className="font-display text-3xl text-bronze-deep">IV</p>
              <p className="mt-2 text-[10px] tracking-[0.28em] uppercase text-muted-foreground">Seasonal Volumes</p>
            </div>
            <div>
              <p className="font-display text-3xl text-bronze-deep">40</p>
              <p className="mt-2 text-[10px] tracking-[0.28em] uppercase text-muted-foreground">Pieces per Edition</p>
            </div>
            <div>
              <p className="font-display text-3xl text-bronze-deep">3</p>
              <p className="mt-2 text-[10px] tracking-[0.28em] uppercase text-muted-foreground">Ateliers Worldwide</p>
            </div>
          </div>
        </div>

        <div className="relative order-1 lg:order-2 lg:col-span-7 border-l border-border/60">
          <img
            src={heroImg}
            alt="Bronze gold heirloom necklace draped on ivory silk"
            width={1280}
            height={1600}
            className="h-full w-full object-cover aspect-[4/5] lg:aspect-auto"
          />
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-ivory">
            <div className="text-[10px] tracking-[0.32em] uppercase">
              <p>N°IV / 2026</p>
              <p className="mt-1 opacity-80">The Halcyon Series</p>
            </div>
            <p className="font-display text-xl italic">— ph. Mara Cintra</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CategoryBand() {
  return (
    <section className="border-b border-border/60 bg-bone">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 divide-x divide-border/60">
        {[
          { label: "La Joaillerie", sub: "Jewellery", href: "#jewellery" },
          { label: "Le Vestiaire", sub: "Clothing", href: "#clothing" },
        ].map((c) => (
          <a key={c.sub} href={c.href} className="group flex items-center justify-between px-6 py-10 sm:px-12 hover:bg-ivory transition-colors">
            <div>
              <p className="eyebrow">{c.sub}</p>
              <p className="mt-2 font-display text-3xl italic sm:text-4xl">{c.label}</p>
            </div>
            <span className="font-display text-3xl text-bronze transition-transform group-hover:translate-x-2">→</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function Editorial() {
  return (
    <section id="jewellery" className="border-b border-border/60">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 lg:grid-cols-12">
        <figure className="lg:col-span-7 border-r border-border/60">
          <img
            src={featureJewelry}
            alt="Bronze gold chain necklace on linen"
            loading="lazy"
            width={1024}
            height={1536}
            className="h-full w-full object-cover aspect-[4/5]"
          />
        </figure>
        <div className="flex flex-col justify-center gap-8 px-6 py-16 sm:px-12 lg:col-span-5">
          <p className="eyebrow">Featured — N°017</p>
          <h2 className="font-display text-5xl leading-[1.05] sm:text-6xl">
            The <span className="italic">Halcyon</span>
            <br />Chain.
          </h2>
          <div className="hairline w-24" />
          <p className="max-w-md text-[15px] leading-relaxed text-muted-foreground">
            Hand-forged in 18k bronzed gold by our atelier in Jaipur. Each link is finished by a single
            artisan, with set old-mine diamonds catching the slow light of late afternoon.
          </p>
          <dl className="grid grid-cols-2 gap-y-4 text-sm">
            <dt className="eyebrow self-center">Material</dt><dd>18k Bronzed Gold</dd>
            <dt className="eyebrow self-center">Stones</dt><dd>Old-mine Diamonds, 0.42ct</dd>
            <dt className="eyebrow self-center">Edition</dt><dd>40 pieces, numbered</dd>
            <dt className="eyebrow self-center">Price</dt><dd className="font-display text-xl">€ 4,280</dd>
          </dl>
          <div className="flex items-center gap-4">
            <button className="bg-ink px-8 py-4 text-[11px] tracking-[0.32em] uppercase text-ivory hover:bg-bronze-deep">
              Reserve N°017
            </button>
            <button className="text-[11px] tracking-[0.32em] uppercase border-b border-bronze pb-1 hover:text-bronze">
              View Maison
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductGrid() {
  return (
    <section id="clothing" className="border-b border-border/60">
      <div className="mx-auto max-w-[1400px] px-6 py-20 sm:px-10">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-6 sm:flex sm:items-end sm:justify-between">
          <div className="min-w-0">
            <p className="eyebrow">The Edit — Summer MMXXVI</p>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">A composed wardrobe.</h2>
          </div>
          <a href="#" className="shrink-0 text-[11px] tracking-[0.32em] uppercase border-b border-bronze pb-1 hover:text-bronze">
            View all 42 →
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <article key={p.name} className="group">
              <div className="relative overflow-hidden bg-bone">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                {p.tag && (
                  <span className="absolute left-3 top-3 bg-ivory/95 px-3 py-1 text-[9px] tracking-[0.28em] uppercase text-bronze-deep">
                    {p.tag}
                  </span>
                )}
                <button className="absolute inset-x-3 bottom-3 translate-y-2 bg-ink/95 px-4 py-3 text-[10px] tracking-[0.32em] uppercase text-ivory opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  Quick view
                </button>
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <div className="min-w-0">
                  <p className="eyebrow">{p.category}</p>
                  <h3 className="mt-1 truncate font-display text-xl">{p.name}</h3>
                </div>
                <p className="shrink-0 font-display text-lg text-bronze-deep">{p.price}</p>
              </div>
              <p className="mt-2 text-[10px] tracking-[0.28em] uppercase text-muted-foreground">N°0{i + 12} — Atelier Lisbon</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Atelier() {
  return (
    <section id="atelier" className="border-b border-border/60 bg-ink text-ivory">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 lg:grid-cols-12">
        <div className="flex flex-col justify-center gap-8 px-6 py-20 sm:px-12 lg:col-span-5">
          <p className="eyebrow !text-bronze">The House — Est. 2017</p>
          <h2 className="font-display text-5xl leading-[1.05] sm:text-6xl">
            Made slowly,
            <br /><span className="italic text-bronze">by few hands</span>.
          </h2>
          <p className="max-w-md text-[15px] leading-relaxed text-ivory/70">
            Flamora was founded as a quiet refusal of the season. Our jewellery is hand-forged in
            Jaipur; our clothing is cut and finished in a small atelier in Lisbon. Nothing is rushed,
            nothing is repeated more than forty times.
          </p>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-4 pt-4 text-sm">
            <div>
              <p className="font-display text-3xl text-bronze">112</p>
              <p className="mt-1 text-[10px] tracking-[0.28em] uppercase text-ivory/60">Artisans</p>
            </div>
            <div>
              <p className="font-display text-3xl text-bronze">9 yrs</p>
              <p className="mt-1 text-[10px] tracking-[0.28em] uppercase text-ivory/60">Independent</p>
            </div>
            <div>
              <p className="font-display text-3xl text-bronze">100%</p>
              <p className="mt-1 text-[10px] tracking-[0.28em] uppercase text-ivory/60">Recycled Metals</p>
            </div>
          </div>
          <a href="#" className="mt-4 inline-flex w-fit items-center gap-3 border-b border-bronze pb-1 text-[11px] tracking-[0.32em] uppercase text-bronze hover:text-ivory">
            Read the House Notes →
          </a>
        </div>
        <figure className="relative lg:col-span-7">
          <img src={atelierImg} alt="Artisan at workbench" loading="lazy" width={1600} height={1100} className="h-full w-full object-cover aspect-[16/11]" />
        </figure>
      </div>
    </section>
  );
}

function JournalRow() {
  const items = [
    { kine: "Field Notes", title: "On the colour of late afternoon gold.", meta: "5 min read · Volume IV" },
    { kine: "Atelier Diary", title: "Three weeks with the Halcyon chain.", meta: "Photo essay · Jaipur" },
    { kine: "Interview", title: "Inês Vidal, on cutting silk in Lisbon.", meta: "Conversation · Mar. 2026" },
  ];
  return (
    <section id="journal" className="border-b border-border/60">
      <div className="mx-auto max-w-[1400px] px-6 py-20 sm:px-10">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-6">
          <div className="min-w-0">
            <p className="eyebrow">Le Journal</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">Slow stories.</h2>
          </div>
          <a href="#" className="shrink-0 text-[11px] tracking-[0.32em] uppercase border-b border-bronze pb-1 hover:text-bronze">All entries →</a>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {items.map((it, i) => (
            <article key={it.title} className="group flex flex-col gap-4">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-2xl text-bronze">— 0{i + 1}</span>
                <p className="eyebrow">{it.kine}</p>
              </div>
              <h3 className="font-display text-2xl leading-snug group-hover:text-bronze-deep transition-colors">
                {it.title}
              </h3>
              <p className="text-xs tracking-[0.18em] uppercase text-muted-foreground">{it.meta}</p>
              <div className="hairline w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PrivateViewing() {
  return (
    <section className="border-b border-border/60">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 lg:grid-cols-12">
        <figure className="lg:col-span-5 border-r border-border/60">
          <img src={editorialImg} alt="Editorial portrait" loading="lazy" width={1280} height={1600} className="h-full w-full object-cover aspect-[4/5]" />
        </figure>
        <div className="flex flex-col justify-center gap-8 bg-bone px-6 py-16 sm:px-12 lg:col-span-7">
          <p className="eyebrow">By Appointment</p>
          <h2 className="font-display text-5xl leading-[1.05] sm:text-6xl">
            A private viewing,
            <br /><span className="italic">at the atelier</span>.
          </h2>
          <p className="max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            For commissions, bridal, and the full Halcyon collection, we invite you to book a private
            session at our Lisbon or Paris ateliers. Tea, vinyl, and very little hurry.
          </p>
          <form className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_1fr_auto] sm:gap-0">
            <input type="text" placeholder="Your name" className="border border-border bg-ivory px-5 py-4 text-sm placeholder:text-muted-foreground focus:border-bronze focus:outline-none" />
            <input type="email" placeholder="Email address" className="border border-border bg-ivory px-5 py-4 text-sm placeholder:text-muted-foreground focus:border-bronze focus:outline-none sm:border-l-0" />
            <button type="button" className="bg-ink px-8 py-4 text-[11px] tracking-[0.32em] uppercase text-ivory hover:bg-bronze-deep">
              Request →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ivory">
      <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <p className="font-display text-4xl tracking-[0.18em]">FLAMORA</p>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              A maison of jewellery and clothing, made in small editions for those who dress with intention.
            </p>
          </div>
          {[
            { h: "Maison", l: ["Jewellery", "Clothing", "Bridal", "Commissions"] },
            { h: "House", l: ["The Story", "Ateliers", "Journal", "Press"] },
            { h: "Care", l: ["Contact", "Shipping", "Repairs", "Returns"] },
          ].map((col) => (
            <div key={col.h}>
              <p className="eyebrow">{col.h}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {col.l.map((i) => <li key={i}><a href="#" className="hover:text-bronze">{i}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-6 text-[10px] tracking-[0.28em] uppercase text-muted-foreground sm:flex-row sm:items-center">
          <p>© MMXXVI Flamora Maison — Lisbon</p>
          <p>Crafted slowly, on Earth.</p>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <main className="bg-ivory text-foreground">
      <TopBar />
      <Nav />
      <Hero />
      <CategoryBand />
      <Editorial />
      <ProductGrid />
      <Atelier />
      <JournalRow />
      <PrivateViewing />
      <Footer />
    </main>
  );
}
