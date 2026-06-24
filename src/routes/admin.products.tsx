import { createFileRoute, Link } from "@tanstack/react-router";
import { Plus, Edit, Trash2 } from "lucide-react";
import { products } from "@/lib/catalog";

export const Route = createFileRoute("/admin/products")({
  head: () => ({ meta: [{ title: "Products — Flamora Admin" }] }),
  component: AdminProducts,
});

function AdminProducts() {
  return (
    <>
      <header className="flex items-end justify-between">
        <div>
          <p className="eyebrow">Catalog</p>
          <h1 className="mt-3 font-display text-4xl gold-text">Products</h1>
        </div>
        <Link to="/admin/products/new" className="inline-flex items-center gap-2 bg-gold px-6 py-3 text-[10px] uppercase tracking-[0.32em] text-onyx hover:bg-gold-soft">
          <Plus className="h-3.5 w-3.5" /> Add product
        </Link>
      </header>

      <div className="mt-10 glass overflow-hidden">
        <table className="w-full text-sm">
          <thead className="text-left text-[10px] uppercase tracking-[0.28em] text-cream/40 border-b border-white/10">
            <tr>
              <th className="p-5">Image</th><th>Name</th><th>Category</th><th>Price</th><th>Stock</th><th>Status</th><th className="text-right pr-5">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, i) => (
              <tr key={p.id} className="border-b border-white/5 text-cream/80 hover:bg-white/5">
                <td className="p-5"><img src={p.image} alt="" className="h-14 w-14 object-cover gold-border" /></td>
                <td className="font-display text-base text-cream">{p.name}</td>
                <td>{p.category}</td>
                <td className="text-gold">€{p.price.toLocaleString()}</td>
                <td>{12 + i * 3}</td>
                <td><span className="px-2 py-1 text-[10px] uppercase tracking-wider bg-gold/15 text-gold border border-gold/30">Active</span></td>
                <td className="text-right pr-5">
                  <button className="text-cream/60 hover:text-gold mr-3"><Edit className="h-4 w-4 inline" /></button>
                  <button className="text-cream/60 hover:text-red-400"><Trash2 className="h-4 w-4 inline" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
