import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/register")({
  head: () => ({ meta: [{ title: "Create account — Flamora" }] }),
  component: RegisterPage,
});

function RegisterPage() {
  return (
    <SiteLayout>
      <section className="mx-auto grid min-h-[80vh] max-w-md place-items-center px-6 py-20">
        <div className="w-full glass p-10 luxury-shadow">
          <p className="eyebrow text-center">Join the Maison</p>
          <h1 className="mt-4 text-center font-display text-4xl gold-text">Create your account</h1>
          <form className="mt-10 space-y-6">
            {[
              { l: "Full name", t: "text" },
              { l: "Email", t: "email" },
              { l: "Password", t: "password" },
              { l: "Confirm password", t: "password" },
            ].map((f) => (
              <div key={f.l}>
                <span className="eyebrow text-cream/50">{f.l}</span>
                <input type={f.t} className="mt-2 w-full border-b border-white/20 bg-transparent py-3 text-cream outline-none focus:border-gold" />
              </div>
            ))}
            <button type="button" className="w-full bg-gold py-4 text-[10px] uppercase tracking-[0.32em] text-onyx hover:bg-gold-soft transition-colors">Create account</button>
          </form>
          <p className="mt-8 text-center text-sm text-cream/60">
            Already a client? <Link to="/login" className="text-gold border-b border-gold/40">Sign in</Link>
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
