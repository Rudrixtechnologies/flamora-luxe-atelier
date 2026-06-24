import { createFileRoute } from "@tanstack/react-router";
import { Check, Package, Truck, Home } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/order-tracking")({
  head: () => ({ meta: [{ title: "Order tracking — Flamora" }] }),
  component: TrackingPage,
});

const stages = [
  { l: "Order Placed", d: "12 Jun · 14:02", i: Check, done: true },
  { l: "Processing", d: "12 Jun · 17:30", i: Package, done: true },
  { l: "Shipped", d: "13 Jun · 09:15", i: Truck, done: true },
  { l: "Delivered", d: "ETA 15 Jun", i: Home, done: false },
];

function TrackingPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-4xl px-6 pt-16 pb-24">
        <p className="eyebrow">Concierge</p>
        <h1 className="mt-4 font-display text-5xl gold-text">Order #FLM-208441</h1>
        <p className="mt-3 text-cream/60">Halcyon Chain · 18k gold</p>

        <div className="mt-16 glass p-10 luxury-shadow">
          <div className="relative">
            {stages.map((s, i) => (
              <div key={s.l} className="relative flex gap-6 pb-10 last:pb-0">
                {i < stages.length - 1 && <div className={`absolute left-5 top-12 h-full w-px ${s.done ? "bg-gold" : "bg-white/10"}`} />}
                <div className={`relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full ${s.done ? "bg-gold text-onyx" : "gold-border text-cream/40"}`}>
                  <s.i className="h-4 w-4" />
                </div>
                <div className="pt-1.5">
                  <p className={`font-display text-xl ${s.done ? "text-cream" : "text-cream/50"}`}>{s.l}</p>
                  <p className="mt-1 text-sm text-cream/60">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
