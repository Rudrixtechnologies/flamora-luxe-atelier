import heroDark from "@/assets/hero-dark.jpg";
import catClothing from "@/assets/cat-clothing.jpg";
import catJewellery from "@/assets/cat-jewellery.jpg";
import editorial from "@/assets/editorial.jpg";
import feature from "@/assets/feature-jewelry.jpg";
import atelier from "@/assets/atelier.jpg";
import pEarrings from "@/assets/product-earrings.jpg";
import pDress from "@/assets/product-dress.jpg";
import pRings from "@/assets/product-rings.jpg";
import pCoat from "@/assets/product-coat.jpg";

export const images = {
  heroDark, catClothing, catJewellery, editorial, feature, atelier,
  pEarrings, pDress, pRings, pCoat,
};

export type Product = {
  id: string;
  name: string;
  category: "Clothing" | "Jewellery";
  subcategory: string;
  price: number;
  rating: number;
  material: string;
  image: string;
  tag?: string;
};

export const products: Product[] = [
  { id: "halcyon-chain", name: "Halcyon Chain", category: "Jewellery", subcategory: "Necklaces", price: 4280, rating: 4.9, material: "18k recycled gold", image: feature, tag: "Signature" },
  { id: "solene-hoop", name: "Solène Hoop", category: "Jewellery", subcategory: "Earrings", price: 420, rating: 4.8, material: "18k gold vermeil", image: pEarrings, tag: "New" },
  { id: "ines-stack", name: "Inès Stack", category: "Jewellery", subcategory: "Rings", price: 690, rating: 4.7, material: "Solid 14k gold", image: pRings },
  { id: "aurum-cuff", name: "Aurum Cuff", category: "Jewellery", subcategory: "Bracelets", price: 1180, rating: 4.9, material: "18k gold, diamond pavé", image: pRings, tag: "Limited" },
  { id: "halcyon-slip", name: "Halcyon Slip", category: "Clothing", subcategory: "Premium Dresses", price: 1180, rating: 4.8, material: "Mulberry silk", image: pDress, tag: "New" },
  { id: "verao-coat", name: "Verão Coat", category: "Clothing", subcategory: "Formal Wear", price: 2340, rating: 4.9, material: "Italian wool, cashmere", image: pCoat },
  { id: "noir-gown", name: "Noir Gown", category: "Clothing", subcategory: "Premium Dresses", price: 3120, rating: 5.0, material: "Silk crêpe", image: catClothing, tag: "Couture" },
  { id: "atelier-tee", name: "Atelier Tee", category: "Clothing", subcategory: "Casual Luxury", price: 290, rating: 4.6, material: "Sea-island cotton", image: editorial },
];

export const benefits = [
  { t: "Complimentary Shipping", d: "Worldwide on every order above €300." },
  { t: "Secure Payment", d: "Encrypted Stripe & wallet checkout." },
  { t: "Premium Quality", d: "Made by hand in atelier workshops." },
  { t: "Concierge 24/7", d: "Private styling and aftercare support." },
];
