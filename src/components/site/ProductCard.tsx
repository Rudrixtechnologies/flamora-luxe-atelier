import { Link } from "@tanstack/react-router";
import { Heart, Eye, Star } from "lucide-react";
import type { Product } from "@/lib/catalog";

export function ProductCard({ p }: { p: Product }) {
  return (
    <Link
      to="/product/$id"
      params={{ id: p.id }}
      className="group block"
    >
      <div className="relative overflow-hidden bg-noir gold-border">
        <img
          src={p.image}
          alt={p.name}
          loading="lazy"
          className="aspect-[4/5] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-onyx/70 via-transparent to-transparent" />
        {p.tag && (
          <span className="absolute left-4 top-4 eyebrow border border-gold/40 bg-onyx/60 px-3 py-1 backdrop-blur-md">
            {p.tag}
          </span>
        )}
        <div className="absolute right-4 top-4 flex flex-col gap-2 opacity-0 transition-opacity group-hover:opacity-100">
          <button className="grid h-9 w-9 place-items-center rounded-full glass text-cream hover:text-gold" aria-label="Wishlist">
            <Heart className="h-3.5 w-3.5" />
          </button>
          <button className="grid h-9 w-9 place-items-center rounded-full glass text-cream hover:text-gold" aria-label="Quick view">
            <Eye className="h-3.5 w-3.5" />
          </button>
        </div>
        <div className="absolute inset-x-4 bottom-4 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="block w-full border border-gold/50 bg-onyx/70 px-4 py-2.5 text-center text-[10px] uppercase tracking-[0.32em] text-gold backdrop-blur-md">
            View piece
          </span>
        </div>
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow mb-1 text-cream/40">{p.subcategory}</p>
          <h3 className="font-display text-lg text-cream group-hover:text-gold transition-colors">{p.name}</h3>
          <div className="mt-1 flex items-center gap-1 text-[11px] text-cream/50">
            <Star className="h-3 w-3 fill-gold text-gold" /> {p.rating}
          </div>
        </div>
        <p className="font-display text-lg text-gold">€{p.price.toLocaleString()}</p>
      </div>
    </Link>
  );
}
