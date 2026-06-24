import { createFileRoute } from "@tanstack/react-router";
import { TrendingUp, TrendingDown, DollarSign, ShoppingBag, Users, Package } from "lucide-react";

export const Route = createFileRoute("/admin/")({
  head: () => ({ meta: [{ title: "Admin — Flamora" }] }),
  component: AdminDashboard,
});

const cards = [
  { l: "Total Sales", v: "€428,920", d: "+12.4%", up: true, i: DollarSign },
  { l: "Orders", v: "1,284", d: "+8.1%", up: true, i: ShoppingBag },
  { l: "Customers", v: "9,420", d: "+22%", up: true, i: Users },
  { l: "Revenue (mo)", v: "€82,310", d: "-3.2%", up: false, i: Package },
];

function AdminDashboard() {
  return (
    <>
      <header className="flex items-end justify-between">
        <div>
          <p className="eyebrow">Console</p>
          <h1 className="mt-3 font-display text-4xl gold-text">Dashboard</h1>
        </div>
        <p className="text-sm text-cream/50">Today · 24 Jun 2026</p>
      </header>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => (
          <div key={c.l} className="glass p-6">
            <div className="flex items-center justify-between">
              <p className="eyebrow text-cream/50">{c.l}</p>
              <c.i className="h-4 w-4 text-gold" />
            </div>
            <p className="mt-4 font-display text-3xl text-cream">{c.v}</p>
            <p className={`mt-2 flex items-center gap-1 text-xs ${c.up ? "text-gold" : "text-red-400"}`}>
              {c.up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />} {c.d}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <div className="glass p-8 lg:col-span-2">
          <h2 className="font-display text-2xl text-cream">Revenue trajectory</h2>
          <div className="mt-8 flex h-56 items-end gap-3">
            {[40,62,48,75,58,80,72,90,68,84,95,78].map((h, i) => (
              <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-gold/60 to-gold" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
        <div className="glass p-8">
          <h2 className="font-display text-2xl text-cream">Recent activity</h2>
          <ul className="mt-6 space-y-4 text-sm">
            {["Order #FLM-208441 paid","New client: Beatrice L.","Halcyon Chain restocked","Order #FLM-208440 shipped"].map((a) => (
              <li key={a} className="flex items-start gap-3 border-b border-white/5 pb-3 text-cream/70">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold" /> {a}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
