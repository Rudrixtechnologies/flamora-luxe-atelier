import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { images, products } from "@/lib/catalog";

/**
 * Cinematic scroll-driven showcase.
 * A tall (500vh) outer wrapper hosts a sticky stage; scroll progress (0..1)
 * drives GPU-only transforms (translate3d / rotate / scale / opacity) on
 * a few layered scenes. No Three.js runtime cost — same depth feel, mobile-safe.
 */
export function ScrollExperience() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const el = wrapRef.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const total = r.height - vh;
        const prog = Math.min(1, Math.max(0, -r.top / total));
        setP(prog);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // helpers — segment progress 0..1 inside [a,b]
  const seg = (a: number, b: number) =>
    Math.min(1, Math.max(0, (p - a) / (b - a)));
  const ease = (t: number) => 1 - Math.pow(1 - t, 3);

  // 4 scenes spread across progress
  const s1 = 1 - ease(seg(0.0, 0.28)); // jewelry hero (fades out)
  const sMorph = ease(seg(0.22, 0.5)); // transition
  const s2 = ease(seg(0.42, 0.7));     // clothing reveal
  const s3 = ease(seg(0.68, 1.0));     // jewelry collection
  const sOut2 = 1 - ease(seg(0.6, 0.78)); // clothing exits as collection enters

  const jewel = products.filter((x) => x.category === "Jewellery").slice(0, 3);
  const clothes = products.filter((x) => x.category === "Clothing").slice(0, 3);

  return (
    <section
      ref={wrapRef}
      className="relative"
      style={{ height: "500vh" }}
      aria-label="Flamora cinematic showcase"
    >
      <div
        className="sticky top-0 h-screen w-full overflow-hidden"
        style={{ perspective: "1400px" }}
      >
        {/* Ambient light wash */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-700"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 40%, oklch(0.55 0.10 78 / 0.18), transparent 70%)",
            opacity: 0.4 + 0.6 * Math.sin(p * Math.PI),
          }}
        />

        {/* ============ SCENE 1 — Jewellery hero ============ */}
        <Scene opacity={s1}>
          <div
            className="absolute inset-0"
            style={{
              transform: `translate3d(0, ${p * -80}px, 0) scale(${1 + p * 0.15})`,
            }}
          >
            <img
              src={images.feature}
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-onyx/50 via-onyx/30 to-onyx/80" />
          </div>
          {/* Floating product */}
          <div
            className="absolute inset-0 grid place-items-center"
            style={{
              transform: `translate3d(0, ${Math.sin(p * 6) * 12 - p * 60}px, 0) rotateX(${p * -8}deg)`,
            }}
          >
            <img
              src={images.pEarrings}
              alt="Solène Hoop"
              className="h-[55vh] w-auto object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.6)]"
              style={{ filter: `brightness(${1 + p * 0.2})` }}
            />
          </div>
          <div
            className="absolute inset-x-0 bottom-20 z-10 text-center"
            style={{ transform: `translate3d(0, ${p * -40}px, 0)`, opacity: 1 - p * 1.4 }}
          >
            <p className="eyebrow">Joaillerie · Chapitre I</p>
            <h2 className="mt-4 font-display text-5xl md:text-7xl gold-text">
              The Light of Gold
            </h2>
          </div>
        </Scene>

        {/* ============ MORPH ============ */}
        <Scene opacity={sMorph * (1 - s2)}>
          <div
            className="absolute inset-0 grid place-items-center"
            style={{
              transform: `scale(${0.6 + sMorph * 0.6}) rotate(${(1 - sMorph) * 12}deg)`,
              filter: `blur(${(1 - sMorph) * 12}px)`,
            }}
          >
            <div className="font-display text-[18vw] leading-none tracking-[0.06em] gold-text opacity-30">
              FLĀMORĀ
            </div>
          </div>
          <div
            className="absolute inset-0 grid place-items-center"
            style={{ opacity: sMorph }}
          >
            <p className="eyebrow text-gold">— Acte II —</p>
          </div>
        </Scene>

        {/* ============ SCENE 2 — Clothing reveal ============ */}
        <Scene opacity={s2 * sOut2}>
          <div className="absolute inset-0">
            <img
              src={images.catClothing}
              alt=""
              className="h-full w-full object-cover"
              style={{ transform: `scale(${1.15 - s2 * 0.15})`, filter: "saturate(0.95)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-onyx/85 via-onyx/30 to-onyx/85" />
          </div>
          <div className="absolute inset-0 mx-auto grid h-full max-w-[1500px] grid-cols-12 items-center gap-6 px-6">
            <div
              className="col-span-12 md:col-span-5"
              style={{
                transform: `translate3d(${(1 - s2) * -80}px, 0, 0)`,
                opacity: s2,
              }}
            >
              <p className="eyebrow">Vestiaire · Chapitre II</p>
              <h2 className="mt-4 font-display text-5xl md:text-7xl gold-text">
                Atelier in Motion
              </h2>
              <p className="mt-6 max-w-md text-cream/70">
                Silk that breathes. Wool spun by hand. A wardrobe choreographed for the way you live.
              </p>
            </div>
            <div className="relative col-span-12 hidden md:block md:col-span-7 h-full">
              {clothes.map((c, i) => {
                const delay = i * 0.18;
                const local = Math.min(1, Math.max(0, (s2 - delay) / (1 - delay)));
                return (
                  <div
                    key={c.id}
                    className="absolute gold-border luxury-shadow overflow-hidden bg-noir"
                    style={{
                      top: `${10 + i * 14}%`,
                      left: `${5 + i * 22}%`,
                      width: "32%",
                      transform: `translate3d(0, ${(1 - local) * 60}px, 0) rotate(${-4 + i * 4}deg) scale(${0.85 + local * 0.15})`,
                      opacity: local,
                      zIndex: 10 + i,
                    }}
                  >
                    <img
                      src={c.image}
                      alt={c.name}
                      className="aspect-[3/4] w-full object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <p className="font-display text-sm text-cream">{c.name}</p>
                      <p className="text-[10px] uppercase tracking-[0.28em] text-gold">€{c.price}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Scene>

        {/* ============ SCENE 3 — Jewelry collection re-entry ============ */}
        <Scene opacity={s3}>
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% 50%, oklch(0.20 0.05 78 / 0.5), transparent 70%)",
            }}
          />
          <div className="absolute inset-0 mx-auto grid h-full max-w-[1500px] place-items-center px-6">
            <div className="w-full">
              <div className="mb-10 text-center" style={{ opacity: s3 }}>
                <p className="eyebrow">Final · Joaillerie</p>
                <h2 className="mt-4 font-display text-5xl md:text-7xl gold-text">
                  The Collection
                </h2>
              </div>
              <div className="grid grid-cols-3 gap-6">
                {jewel.map((j, i) => {
                  const delay = i * 0.15;
                  const local = Math.min(1, Math.max(0, (s3 - delay) / (1 - delay)));
                  return (
                    <Link
                      to="/product/$id"
                      params={{ id: j.id }}
                      key={j.id}
                      className="group block gold-border overflow-hidden bg-noir"
                      style={{
                        transform: `translate3d(0, ${(1 - local) * 80}px, 0) rotateY(${(1 - local) * (i - 1) * 18}deg) scale(${0.8 + local * 0.2})`,
                        opacity: local,
                        transformStyle: "preserve-3d",
                      }}
                    >
                      <img
                        src={j.image}
                        alt={j.name}
                        className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                      />
                      <div className="p-4 text-center">
                        <p className="font-display text-cream">{j.name}</p>
                        <p className="text-[10px] uppercase tracking-[0.28em] text-gold mt-1">€{j.price}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
              <div className="mt-10 text-center" style={{ opacity: s3 }}>
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-3 bg-gold px-8 py-4 text-[10px] uppercase tracking-[0.32em] text-onyx hover:bg-gold-soft transition-colors"
                >
                  Enter the Maison <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </Scene>

        {/* Scroll hint */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-6 z-20 text-center transition-opacity"
          style={{ opacity: Math.max(0, 1 - p * 6) }}
        >
          <p className="eyebrow text-cream/50">Scroll · Défiler</p>
          <div className="mx-auto mt-2 h-8 w-px bg-gold/50 animate-pulse" />
        </div>
      </div>
    </section>
  );
}

function Scene({
  opacity,
  children,
}: {
  opacity: number;
  children: React.ReactNode;
}) {
  if (opacity <= 0.001) return null;
  return (
    <div
      className="absolute inset-0 will-change-transform"
      style={{ opacity, transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}
