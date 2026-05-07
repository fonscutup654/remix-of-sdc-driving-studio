import { Link } from "@tanstack/react-router";
import logo from "@/assets/sdc-logo.png";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-ink text-cream/90 mt-24">
      <div className="mx-auto max-w-7xl px-4 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="SDC" className="h-12 w-auto" />
            <div>
              <div className="font-display text-xl">SDC Driving School</div>
              <div className="text-xs tracking-[0.25em] uppercase text-gold">East London</div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm text-cream/60 leading-relaxed">
            Premium driving tuition across East London. DVSA approved instructors, modern dual-control vehicles, and a calm, structured path to your full licence.
          </p>
        </div>
        <div>
          <div className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Explore</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-gold">Home</Link></li>
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/pricing" className="hover:text-gold">Pricing</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Contact</div>
          <ul className="space-y-3 text-sm text-cream/70">
            <li className="flex items-start gap-2"><Phone size={16} className="mt-0.5 text-gold" /> 020 0000 0000</li>
            <li className="flex items-start gap-2"><Mail size={16} className="mt-0.5 text-gold" /> hello@sdcdriving.co.uk</li>
            <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 text-gold" /> East London, UK</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/50">
          <div>© {new Date().getFullYear()} SDC Driving School. All rights reserved.</div>
          <div>Crafted for confident drivers in East London.</div>
        </div>
      </div>
    </footer>
  );
}
