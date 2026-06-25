import { Sun, Moon, Monitor, Palette } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useTheme, type ThemeMode } from "@/hooks/use-theme";

const options: { mode: ThemeMode; label: string; sub: string; Icon: typeof Sun }[] = [
  { mode: "light", label: "Light Mode", sub: "Ivory & forest green", Icon: Sun },
  { mode: "dark", label: "Dark Mode", sub: "Deep forest green", Icon: Moon },
  { mode: "system", label: "System Default", sub: "Auto match device theme", Icon: Monitor },
];

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onPointer(e: PointerEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("pointerdown", onPointer);
    return () => document.removeEventListener("pointerdown", onPointer);
  }, []);

  const ActiveIcon =
    theme === "light" ? Sun : theme === "dark" ? Moon : Monitor;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Theme options"
        className="grid h-8 w-8 place-items-center text-cream/70 hover:text-gold transition-colors"
      >
        <ActiveIcon className="h-4 w-4" />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-3 z-50 w-64 glass luxury-shadow animate-scale-in overflow-hidden">
          <div className="border-b px-4 py-3" style={{ borderColor: "oklch(0.52 0.20 155 / 0.12)" }}>
            <p className="flex items-center gap-2 eyebrow text-cream/50">
              <Palette className="h-3 w-3" />
              Theme Options
            </p>
          </div>
          <div className="p-2">
            {options.map(({ mode, label, sub, Icon }) => {
              const active = theme === mode;
              return (
                <button
                  key={mode}
                  onClick={() => { setTheme(mode); setOpen(false); }}
                  className={`flex w-full items-center gap-3 px-3 py-3 text-left transition-colors rounded-sm ${
                    active
                      ? "bg-gold/10 text-gold"
                      : "text-cream/70 hover:text-cream hover:bg-white/5"
                  }`}
                >
                  <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-colors ${
                    active ? "border-gold/50 bg-gold/15 text-gold" : "border-white/10 text-cream/50"
                  }`}>
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  <span>
                    <span className="block text-sm font-medium leading-none">{label}</span>
                    <span className="mt-1 block text-[11px] text-cream/40 leading-none">{sub}</span>
                  </span>
                  {active && (
                    <span className="ml-auto h-1.5 w-1.5 rounded-full bg-gold" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
