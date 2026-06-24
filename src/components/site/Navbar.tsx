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
    <div className="border-b border-emerald/10 bg-noir/70">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-2 text-[10px] tracking-[0.32em] uppercase text-cream/50">
        <span className="hidden md:inline">Complimentary worldwide shipping over €300</span>
        <span className="text-cream/70">Maison Flāmorā — Paris · Milan · Jaipur</span>
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
      <header className="sticky top-0 z-40 border-b border-emerald/12 bg-onyx/92 backdrop-blur-xl" style={{ borderBottomColor: "oklch(0.52 0.20 155 / 0.10)" }}>
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-6 px-6 py-5">
          <button onClick={() => setOpen(true)} className="md:hidden text-cream/80" aria-label="Menu">
            <Menu className="h-5 w-5" />
          </button>
          <Link to="/" className="font-display text-2xl tracking-[0.3em] gold-text">FLĀMORĀ</Link>
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
        <div className="fixed inset-0 z-50 backdrop-blur-2xl md:hidden animate-fade-in" style={{ background: "oklch(0.13 0.052 158 / 0.97)" }} onClick={() => setOpen(false)}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_45%,oklch(0.22_0.09_155_/_0.25),transparent_70%)] pointer-events-none" />
          <nav className="relative flex h-full flex-col items-center justify-center gap-8 text-cream">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="font-display text-3xl tracking-wide hover:text-gold transition-colors" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <div className="mt-4 hairline-gold w-32" />
            <p className="eyebrow text-cream/40">Maison de luxe</p>
          </nav>
        </div>
      )}
    </>
  );
}
