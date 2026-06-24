import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Package, Heart, MapPin, CreditCard, LogOut } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/profile")({
  head: () => ({ meta: [{ title: "Private Salon — Flamora" }] }),
  component: ProfilePage,
});

const tabs = [
  { k: "profile", l: "Profile", i: User },
  { k: "orders", l: "Orders", i: Package },
  { k: "wishlist", l: "Wishlist", i: Heart },
  { k: "addresses", l: "Addresses", i: MapPin },
  { k: "payments", l: "Payments", i: CreditCard },
];

function ProfilePage() {
  const [active, setActive] = useState("profile");
  return (
    <SiteLayout>
      <section className="mx-auto max-w-[1500px] px-6 pt-16 pb-24">
        <p className="eyebrow">Private Salon</p>
        <h1 className="mt-4 font-display text-5xl md:text-6xl gold-text">Bonsoir, Isabella</h1>
        <div className="mt-12 grid gap-10 md:grid-cols-[260px_1fr]">
          <aside className="glass p-6 h-fit">
            {tabs.map((t) => (
              <button key={t.k} onClick={() => setActive(t.k)} className={`flex w-full items-center gap-3 px-3 py-3 text-sm transition-colors ${active===t.k?"text-gold":"text-cream/70 hover:text-cream"}`}>
                <t.i className="h-4 w-4" /> {t.l}
              </button>
            ))}
            <div className="mt-4 border-t border-white/10 pt-4">
              <Link to="/login" className="flex items-center gap-3 px-3 py-3 text-sm text-cream/60 hover:text-gold"><LogOut className="h-4 w-4" /> Sign out</Link>
            </div>
          </aside>
          <div className="glass p-10">
            {active === "profile" && (
              <>
                <h2 className="font-display text-3xl text-cream">Account</h2>
                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  {[["Full name","Isabella Moreau"],["Email","isabella@flamora.com"],["Phone","+33 1 23 45 67"],["Membership","Founders Circle"]].map(([l,v]) => (
                    <div key={l}>
                      <p className="eyebrow text-cream/50">{l}</p>
                      <p className="mt-2 text-cream">{v}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
            {active === "orders" && (
              <>
                <h2 className="font-display text-3xl text-cream">Order history</h2>
                <table className="mt-8 w-full text-sm">
                  <thead className="text-left text-[10px] uppercase tracking-[0.28em] text-cream/40 border-b border-white/10">
                    <tr><th className="py-3">Order</th><th>Date</th><th>Total</th><th>Status</th></tr>
                  </thead>
                  <tbody>
                    {[["FLM-208441","12 Jun 2026","€4,280","Shipped"],["FLM-208122","02 May 2026","€1,180","Delivered"],["FLM-207331","18 Apr 2026","€690","Delivered"]].map((r) => (
                      <tr key={r[0]} className="border-b border-white/5 text-cream/80">
                        <td className="py-4">{r[0]}</td><td>{r[1]}</td><td className="text-gold">{r[2]}</td><td>{r[3]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}
            {active === "wishlist" && <p className="text-cream/70">8 pieces saved. <Link to="/wishlist" className="text-gold border-b border-gold/40">View wishlist →</Link></p>}
            {active === "addresses" && <p className="text-cream/70">Primary: 14 rue Saint-Honoré, 75001 Paris.</p>}
            {active === "payments" && <p className="text-cream/70">Visa •••• 4242 — expires 12/28.</p>}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
