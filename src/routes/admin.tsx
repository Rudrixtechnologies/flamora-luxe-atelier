import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { LayoutDashboard, Package, Tag, ShoppingCart, Users, CreditCard, BarChart3 } from "lucide-react";

export const Route = createFileRoute("/admin")({
  component: AdminLayout,
});

const items: Array<{ to: string; l: string; i: typeof LayoutDashboard; exact?: boolean }> = [
  { to: "/admin", l: "Dashboard", i: LayoutDashboard, exact: true },
  { to: "/admin/products", l: "Products", i: Package },
  { to: "/admin/products/new", l: "Add Product", i: Tag },
  { to: "/admin/orders", l: "Orders", i: ShoppingCart },
  { to: "/admin/users", l: "Users", i: Users },
  { to: "/admin/payments", l: "Payments", i: CreditCard },
  { to: "/admin/analytics", l: "Analytics", i: BarChart3 },
];

function AdminLayout() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div className="min-h-screen grid md:grid-cols-[260px_1fr]">
      <aside className="border-r border-white/5 bg-noir/60 backdrop-blur-xl md:sticky md:top-0 md:h-screen">
        <div className="p-8">
          <Link to="/" className="font-display text-2xl tracking-[0.3em] gold-text">FLAMORA</Link>
          <p className="mt-1 eyebrow text-cream/40">Console</p>
        </div>
        <nav className="px-4 pb-8 space-y-1">
          {items.map((it) => {
            const active = it.exact ? path === it.to : path.startsWith(it.to);
            return (
              <a key={it.to} href={it.to} className={`flex items-center gap-3 px-4 py-3 text-sm transition-colors ${active ? "bg-gold/10 text-gold border-l-2 border-gold" : "text-cream/70 hover:text-cream hover:bg-white/5 border-l-2 border-transparent"}`}>
                <it.i className="h-4 w-4" /> {it.l}
              </a>
            );
          })}
        </nav>
      </aside>
      <main className="p-8 md:p-12">
        <Outlet />
      </main>
    </div>
  );
}
