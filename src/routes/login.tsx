import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Sign in — Flamora" }] }),
  component: LoginPage,
});

function LoginPage() {
  return (
    <SiteLayout>
      <section className="mx-auto grid min-h-[80vh] max-w-md place-items-center px-6 py-20">
        <div className="w-full glass p-10 luxury-shadow">
          <p className="eyebrow text-center">Maison Flamora</p>
          <h1 className="mt-4 text-center font-display text-4xl gold-text">Welcome back</h1>
          <p className="mt-3 text-center text-sm text-cream/60">Sign in to your private salon.</p>
          <form className="mt-10 space-y-6">
            <div>
              <span className="eyebrow text-cream/50">Email</span>
              <input type="email" className="mt-2 w-full border-b border-white/20 bg-transparent py-3 text-cream outline-none focus:border-gold" />
            </div>
            <div>
              <span className="eyebrow text-cream/50">Password</span>
              <input type="password" className="mt-2 w-full border-b border-white/20 bg-transparent py-3 text-cream outline-none focus:border-gold" />
            </div>
            <button type="button" className="w-full bg-gold py-4 text-[10px] uppercase tracking-[0.32em] text-onyx hover:bg-gold-soft transition-colors">Enter</button>
          </form>
          <div className="my-8 flex items-center gap-4 text-[10px] uppercase tracking-[0.32em] text-cream/40">
            <div className="h-px flex-1 bg-white/10" /> or <div className="h-px flex-1 bg-white/10" />
          </div>
          <button className="w-full gold-border py-4 text-[11px] uppercase tracking-[0.28em] text-cream hover:bg-gold/10 transition-colors">Continue with Google</button>
          <p className="mt-8 text-center text-sm text-cream/60">
            New to Flamora? <Link to="/register" className="text-gold border-b border-gold/40">Create an account</Link>
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
