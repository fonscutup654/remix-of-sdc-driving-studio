import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/sdc-logo.png";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`}>
      <div className="mx-auto max-w-7xl px-4">
        <div className={`flex items-center justify-between rounded-2xl px-4 md:px-6 py-3 transition-all duration-500 ${scrolled ? "glass shadow-[0_8px_40px_-12px_oklch(0.14_0.012_60/0.18)] border border-border" : "bg-transparent"}`}>
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="SDC Driving School" className="h-10 w-auto" />
            <div className="hidden sm:block leading-tight">
              <div className="font-display text-lg font-semibold text-ink">SDC Driving School</div>
              <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">East London</div>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {links.map(l => (
              <Link key={l.to} to={l.to} activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-ink bg-secondary" }}
                className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-ink hover:bg-secondary transition">
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link to="/contact" className="hidden md:inline-flex items-center gap-2 rounded-full bg-ink text-cream px-5 py-2.5 text-sm font-medium hover:bg-ink/90 transition shadow-lg shadow-ink/20">
              Book Lessons
            </Link>
            <button aria-label="Menu" onClick={() => setOpen(o => !o)} className="md:hidden p-2 rounded-full bg-secondary">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden mt-2 glass rounded-2xl border border-border p-3">
            {links.map(l => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-xl text-sm font-medium hover:bg-secondary">
                {l.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="block mt-2 text-center bg-ink text-cream px-4 py-3 rounded-xl text-sm font-medium">
              Book Lessons
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
