import { Link } from "@tanstack/react-router";
import { Search, User, Heart, ShoppingBag, Menu } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/clothing", label: "Clothing" },
  { to: "/jewellery", label: "Jewellery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function TopBar() {
  return (
    <div className="border-b border-white/5 bg-onyx/80">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-2 text-[10px] tracking-[0.32em] uppercase text-cream/60">
        <span className="hidden md:inline">Complimentary worldwide shipping over €300</span>
        <span>Maison Flamora — Paris · Milan · Jaipur</span>
        <span className="hidden md:inline">EN / EUR</span>
      </div>
    </div>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <TopBar />
      <header className="sticky top-0 z-40 border-b border-white/5 bg-onyx/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-6 px-6 py-5">
          <button onClick={() => setOpen(true)} className="md:hidden text-cream/80" aria-label="Menu">
            <Menu className="h-5 w-5" />
          </button>
          <Link to="/" className="font-display text-2xl tracking-[0.3em] gold-text">FLAMORA</Link>
          <nav className="hidden md:flex items-center gap-9 text-[11px] uppercase tracking-[0.28em] text-cream/75">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="hover:text-gold transition-colors" activeProps={{ className: "text-gold" }}>
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-5 text-cream/80">
            <Link to="/shop" aria-label="Search"><Search className="h-4 w-4 hover:text-gold transition-colors" /></Link>
            <Link to="/login" aria-label="Account"><User className="h-4 w-4 hover:text-gold transition-colors" /></Link>
            <Link to="/wishlist" aria-label="Wishlist"><Heart className="h-4 w-4 hover:text-gold transition-colors" /></Link>
            <Link to="/cart" aria-label="Bag" className="relative">
              <ShoppingBag className="h-4 w-4 hover:text-gold transition-colors" />
              <span className="absolute -top-2 -right-2 grid h-4 w-4 place-items-center rounded-full bg-gold text-[9px] text-onyx">2</span>
            </Link>
          </div>
        </div>
      </header>
      {open && (
        <div className="fixed inset-0 z-50 bg-onyx/95 backdrop-blur-xl md:hidden animate-fade-in" onClick={() => setOpen(false)}>
          <nav className="flex h-full flex-col items-center justify-center gap-8 text-cream">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="font-display text-3xl tracking-wide hover:text-gold" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
