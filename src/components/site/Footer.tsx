import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-32 border-t bg-noir/50" style={{ borderTopColor: "oklch(0.52 0.20 155 / 0.12)" }}>
      <div className="mx-auto grid max-w-[1500px] gap-12 px-6 py-20 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="font-display text-3xl tracking-[0.3em] gold-text">FLĀMORĀ</div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/60">
            A maison for considered clothing and heirloom jewellery — crafted slowly, by few hands, for those who dress with intention.
          </p>
          <form className="mt-8 flex max-w-sm items-center gap-0 border-b border-gold/40 pb-2">
            <input placeholder="Your email" className="flex-1 bg-transparent text-sm text-cream placeholder:text-cream/40 outline-none" />
            <button className="eyebrow text-gold">Subscribe</button>
          </form>
        </div>
        <div>
          <p className="eyebrow mb-5">Maison</p>
          <ul className="space-y-3 text-sm text-cream/70">
            <li><Link to="/about" className="hover:text-gold">Our story</Link></li>
            <li><Link to="/about" className="hover:text-gold">Craftsmanship</Link></li>
            <li><Link to="/about" className="hover:text-gold">Sustainability</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Boutiques</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-5">Shop</p>
          <ul className="space-y-3 text-sm text-cream/70">
            <li><Link to="/clothing" className="hover:text-gold">Clothing</Link></li>
            <li><Link to="/jewellery" className="hover:text-gold">Jewellery</Link></li>
            <li><Link to="/shop" className="hover:text-gold">All</Link></li>
            <li><Link to="/wishlist" className="hover:text-gold">Wishlist</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-5">Care</p>
          <ul className="space-y-3 text-sm text-cream/70">
            <li><Link to="/order-tracking" className="hover:text-gold">Order tracking</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Concierge</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Aftercare</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Press</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t" style={{ borderTopColor: "oklch(0.52 0.20 155 / 0.10)" }}>
        <div className="mx-auto flex max-w-[1500px] flex-col gap-2 px-6 py-6 text-[10px] uppercase tracking-[0.32em] text-cream/40 md:flex-row md:items-center md:justify-between">
          <span>© 2026 Maison Flāmorā. All rights reserved.</span>
          <span>Privacy · Terms · Cookies</span>
        </div>
      </div>
    </footer>
  );
}
