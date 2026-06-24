import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — Flamora" }] }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-[1500px] px-6 pt-16 pb-24">
        <p className="eyebrow">Concierge</p>
        <h1 className="mt-4 font-display text-5xl md:text-7xl gold-text">Get in touch</h1>
        <p className="mt-6 max-w-xl text-cream/70">Our concierge responds within twelve hours. For private appointments, please request below.</p>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <form className="glass p-10 space-y-6">
            <div>
              <span className="eyebrow text-cream/50">Name</span>
              <input className="mt-2 w-full border-b border-white/20 bg-transparent py-3 text-cream outline-none focus:border-gold" />
            </div>
            <div>
              <span className="eyebrow text-cream/50">Email</span>
              <input type="email" className="mt-2 w-full border-b border-white/20 bg-transparent py-3 text-cream outline-none focus:border-gold" />
            </div>
            <div>
              <span className="eyebrow text-cream/50">Message</span>
              <textarea rows={5} className="mt-2 w-full border-b border-white/20 bg-transparent py-3 text-cream outline-none focus:border-gold resize-none" />
            </div>
            <button type="button" className="bg-gold px-8 py-4 text-[10px] uppercase tracking-[0.32em] text-onyx hover:bg-gold-soft">Send message</button>
          </form>
          <div className="space-y-8">
            {[
              { i: Mail, l: "Email", v: "concierge@flamora.com" },
              { i: Phone, l: "Téléphone", v: "+33 1 84 88 22 19" },
              { i: MapPin, l: "Boutique", v: "14 rue Saint-Honoré, 75001 Paris" },
            ].map((c) => (
              <div key={c.l} className="flex items-start gap-5 glass p-6">
                <div className="grid h-12 w-12 place-items-center rounded-full border border-gold/40 text-gold"><c.i className="h-5 w-5" /></div>
                <div>
                  <p className="eyebrow text-cream/50">{c.l}</p>
                  <p className="mt-1 font-display text-xl text-cream">{c.v}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
