import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check, CreditCard, Wallet, Lock } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/checkout")({
  head: () => ({ meta: [{ title: "Checkout — Flamora" }] }),
  component: CheckoutPage,
});

const steps = ["Bag", "Address", "Payment", "Confirmation"];

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="eyebrow text-cream/50">{label}</span>
      <input {...rest} className="mt-2 w-full border-b border-white/20 bg-transparent py-3 text-cream placeholder:text-cream/30 outline-none focus:border-gold transition-colors" />
    </label>
  );
}

function CheckoutPage() {
  const [step, setStep] = useState(1);
  const [method, setMethod] = useState("card");
  return (
    <SiteLayout>
      <section className="mx-auto max-w-4xl px-6 pt-16 pb-24">
        <p className="eyebrow text-center">Maison Checkout</p>
        <h1 className="mt-4 text-center font-display text-5xl gold-text">Complete your order</h1>
        <div className="mt-12 flex items-center justify-between">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center flex-1 last:flex-none">
              <div className={`grid h-10 w-10 place-items-center rounded-full text-xs ${i <= step ? "bg-gold text-onyx" : "gold-border text-cream/60"}`}>
                {i < step ? <Check className="h-4 w-4" /> : i + 1}
              </div>
              <span className="ml-3 hidden md:inline text-[11px] uppercase tracking-[0.28em] text-cream/70">{s}</span>
              {i < steps.length - 1 && <div className={`mx-4 h-px flex-1 ${i < step ? "bg-gold" : "bg-white/10"}`} />}
            </div>
          ))}
        </div>

        <div className="mt-16 glass p-10 luxury-shadow">
          {step === 1 && (
            <>
              <h2 className="font-display text-3xl text-cream">Delivery address</h2>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <Field label="Full name" placeholder="Isabella Moreau" />
                <Field label="Phone" placeholder="+33 1 23 45 67 89" />
                <Field label="Address" placeholder="14 rue Saint-Honoré" />
                <Field label="Country" placeholder="France" />
                <Field label="City" placeholder="Paris" />
                <Field label="Postal code" placeholder="75001" />
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <h2 className="font-display text-3xl text-cream">Payment method</h2>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {[{k:"card",l:"Card",i:CreditCard},{k:"stripe",l:"Stripe",i:Lock},{k:"wallet",l:"Wallet",i:Wallet}].map((m) => (
                  <button key={m.k} onClick={() => setMethod(m.k)} className={`flex flex-col items-center gap-3 p-6 transition-all ${method===m.k?"bg-gold/10 gold-border":"border border-white/10 hover:border-gold/40"}`}>
                    <m.i className="h-6 w-6 text-gold" />
                    <span className="text-sm text-cream">{m.l}</span>
                  </button>
                ))}
              </div>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <Field label="Card number" placeholder="4242 4242 4242 4242" />
                <Field label="Cardholder" placeholder="Isabella Moreau" />
                <Field label="Expiry" placeholder="12 / 28" />
                <Field label="CVC" placeholder="123" />
              </div>
            </>
          )}
          {step === 3 && (
            <div className="py-12 text-center">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gold text-onyx">
                <Check className="h-8 w-8" />
              </div>
              <h2 className="mt-8 font-display text-4xl gold-text">Merci.</h2>
              <p className="mt-4 text-cream/70">Order #FLM-208441 confirmed. A concierge will be in touch shortly.</p>
              <Link to="/order-tracking" className="mt-8 inline-block bg-gold px-8 py-4 text-[10px] uppercase tracking-[0.32em] text-onyx hover:bg-gold-soft">Track your order</Link>
            </div>
          )}
          {step < 3 && (
            <div className="mt-10 flex justify-between border-t border-white/10 pt-6">
              <button onClick={() => setStep(Math.max(0, step - 1))} className="text-xs uppercase tracking-[0.28em] text-cream/60 hover:text-gold">← Back</button>
              <button onClick={() => setStep(step + 1)} className="bg-gold px-8 py-4 text-[10px] uppercase tracking-[0.32em] text-onyx hover:bg-gold-soft">Continue</button>
            </div>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
