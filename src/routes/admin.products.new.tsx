import { createFileRoute } from "@tanstack/react-router";
import { Upload } from "lucide-react";

export const Route = createFileRoute("/admin/products/new")({
  head: () => ({ meta: [{ title: "New product — Flamora Admin" }] }),
  component: NewProduct,
});

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="eyebrow text-cream/50">{label}</span>
      <input {...rest} className="mt-2 w-full border-b border-white/20 bg-transparent py-3 text-cream placeholder:text-cream/30 outline-none focus:border-gold" />
    </label>
  );
}

function NewProduct() {
  return (
    <>
      <header>
        <p className="eyebrow">Catalog</p>
        <h1 className="mt-3 font-display text-4xl gold-text">Add product</h1>
      </header>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
        <div className="glass p-10 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Field label="Product name" placeholder="Halcyon Chain" />
            <label className="block">
              <span className="eyebrow text-cream/50">Category</span>
              <select className="mt-2 w-full border-b border-white/20 bg-transparent py-3 text-cream outline-none focus:border-gold">
                <option>Jewellery</option><option>Clothing</option><option>Watches</option><option>Bags</option>
              </select>
            </label>
          </div>
          <label className="block">
            <span className="eyebrow text-cream/50">Description</span>
            <textarea rows={5} className="mt-2 w-full border-b border-white/20 bg-transparent py-3 text-cream outline-none focus:border-gold resize-none" placeholder="A single braid of 18k recycled gold…" />
          </label>
          <div className="grid gap-6 md:grid-cols-3">
            <Field label="Price (€)" placeholder="4280" />
            <Field label="Stock" placeholder="40" />
            <Field label="SKU" placeholder="FLM-HC-001" />
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Field label="Sizes" placeholder="XS, S, M, L, XL" />
            <Field label="Colours" placeholder="Noir, Ivory, Gold" />
          </div>
        </div>
        <aside className="space-y-6">
          <div className="glass p-8">
            <p className="eyebrow text-cream/50">Images</p>
            <div className="mt-4 grid place-items-center aspect-square gold-border border-dashed text-cream/40">
              <div className="text-center">
                <Upload className="mx-auto h-6 w-6 text-gold" />
                <p className="mt-3 text-sm">Drop images here</p>
                <p className="text-xs">or click to browse</p>
              </div>
            </div>
          </div>
          <button className="w-full bg-gold py-4 text-[10px] uppercase tracking-[0.32em] text-onyx hover:bg-gold-soft">Save product</button>
          <button className="w-full gold-border py-4 text-[10px] uppercase tracking-[0.32em] text-cream hover:bg-gold/10">Save as draft</button>
        </aside>
      </div>
    </>
  );
}
