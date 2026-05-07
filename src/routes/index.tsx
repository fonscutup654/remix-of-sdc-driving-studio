import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { SectionHeading, Eyebrow } from "@/components/site/Section";
import hero from "@/assets/hero-driving.jpg";
import eastLondon from "@/assets/east-london.jpg";
import { ShieldCheck, HeartHandshake, Trophy, Cog, MapPin, Clock, Star, ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SDC Driving School — Driving Lessons in East London from £41/hr" },
      { name: "description", content: "Learn to drive with confidence in East London. DVSA approved instructors, manual & automatic lessons, intensive courses. Book your first lesson today." },
      { property: "og:title", content: "SDC Driving School — East London" },
      { property: "og:description", content: "Premium driving lessons in East London from £41/hr." },
    ],
  }),
  component: HomePage,
});

const features = [
  { icon: ShieldCheck, title: "DVSA Approved", text: "Fully qualified, government-vetted instructors you can trust." },
  { icon: HeartHandshake, title: "Patient & Friendly", text: "Calm, structured tuition that builds genuine confidence." },
  { icon: Trophy, title: "High Pass Rates", text: "Proven first-time pass results across East London test centres." },
  { icon: Cog, title: "Manual & Automatic", text: "Modern dual-control vehicles for both gearbox preferences." },
  { icon: MapPin, title: "East London Coverage", text: "Door-to-door pickup across all East London postcodes." },
  { icon: Clock, title: "Flexible Times", text: "Evenings, weekends and intensive blocks to suit your week." },
];

const pricing = [
  { name: "1 Hour Lesson", price: "£41", note: "Per single hour", features: ["Door-to-door pickup", "Dual-control vehicle", "Personalised feedback"] },
  { name: "2 Hour Lesson", price: "£82", note: "Recommended", features: ["More road time", "Faster progress", "Best value per session"], featured: true },
  { name: "Intensive Course", price: "POA", note: "Custom plan", features: ["Crash-style schedule", "Test in weeks", "Tailored quote"] },
];

const testimonials = [
  { name: "Aisha R.", area: "Stratford", text: "Passed first time after 30 hours. The structured plan and calm coaching made all the difference.", rating: 5 },
  { name: "Marcus L.", area: "Walthamstow", text: "Best decision I made. SDC felt premium from the first lesson — modern car, clear lessons, real progress.", rating: 5 },
  { name: "Priya S.", area: "Ilford", text: "I was a nervous learner. My instructor was unbelievably patient. I now drive everywhere with confidence.", rating: 5 },
];

const faqs = [
  { q: "How much do lessons cost?", a: "Lessons start from £41/hr. Final pricing depends on your postcode and chosen package." },
  { q: "Do you offer automatic lessons?", a: "Yes — we provide both manual and automatic tuition with modern dual-control vehicles." },
  { q: "Where do you operate?", a: "We cover all of East London including Stratford, Walthamstow, Ilford, Romford and surrounding areas." },
  { q: "Do you offer intensive courses?", a: "Absolutely. Intensive courses are tailored to your goals — contact us for a personal quote." },
];

function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-cream via-background to-background" />
          <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-gold/20 blur-3xl" />
          <div className="absolute top-40 -left-40 h-[500px] w-[500px] rounded-full bg-ink/10 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 reveal">
            <Eyebrow>East London · DVSA Approved</Eyebrow>
            <h1 className="mt-5 font-display text-5xl sm:text-6xl md:text-7xl leading-[0.98] text-ink text-balance">
              Learn to drive with <span className="gold-text">confidence</span> in East London.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Calm, structured driving tuition from professional instructors. Modern dual-control cars, real progress every lesson, and a clear path to your full licence.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex items-baseline gap-2">
                <span className="text-xs tracking-[0.25em] uppercase text-muted-foreground">From</span>
                <span className="font-display text-4xl text-ink">£41</span>
                <span className="text-sm text-muted-foreground">/ hour</span>
              </div>
              <span className="text-xs text-muted-foreground/80 max-w-[220px]">Prices may vary depending on postcode/location.</span>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-ink text-cream px-7 py-3.5 text-sm font-medium hover:bg-ink/90 transition shadow-xl shadow-ink/20 group">
                Book Lessons <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur border border-border px-7 py-3.5 text-sm font-medium hover:bg-white transition">
                Contact Us
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1 text-gold">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <span>Rated 5.0 by hundreds of East London learners</span>
            </div>
          </div>

          <div className="lg:col-span-5 reveal reveal-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-gold/30 via-transparent to-ink/10 rounded-[2rem] blur-2xl" />
              <div className="relative rounded-[2rem] overflow-hidden border border-border shadow-[0_40px_100px_-30px_oklch(0.14_0.012_60/0.45)]">
                <img src={hero} alt="Driving lesson in East London at golden hour" width={1600} height={1100} className="w-full h-[420px] object-cover" />
                <div className="absolute bottom-4 left-4 right-4 glass-dark text-cream rounded-2xl p-4 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-gold tracking-[0.2em] uppercase">Today</div>
                    <div className="text-sm">Next available slot · Tomorrow 10:00</div>
                  </div>
                  <Link to="/contact" className="text-xs bg-gold text-ink font-semibold px-3 py-2 rounded-full">Book</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENQUIRY FORM */}
      <section className="relative -mt-6 pb-24">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <Eyebrow>Get a quote</Eyebrow>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-ink leading-[1.05]">Start your driving journey in under a minute.</h2>
            <p className="mt-4 text-muted-foreground">Tell us a few details and we'll respond with availability, pricing for your postcode, and the right plan for you.</p>
            <ul className="mt-6 space-y-3 text-sm">
              {["Free, no-obligation quote", "Tailored lesson plan", "Reply within a few hours"].map(t => (
                <li key={t} className="flex items-center gap-2"><CheckCircle2 size={18} className="text-gold" /> {t}</li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7">
            <EnquiryForm />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-ink text-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-30" />
        <div className="mx-auto max-w-7xl px-4 relative">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-gold">
              <span className="h-px w-8 bg-gold" /> Why SDC
            </div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-cream leading-[1.05]">Built around how people actually learn to drive.</h2>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <div key={f.title} className="group rounded-2xl border border-cream/10 bg-cream/[0.03] p-7 hover:bg-cream/[0.06] transition">
                <div className="h-12 w-12 rounded-xl bg-gold/15 text-gold flex items-center justify-center group-hover:scale-110 transition">
                  <f.icon size={22} />
                </div>
                <div className="mt-5 font-display text-xl">{f.title}</div>
                <p className="mt-2 text-sm text-cream/60">{f.text}</p>
                <div className="mt-5 text-xs text-gold/80">0{i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="Transparent pricing" title="Simple, honest pricing." subtitle="No hidden fees. Choose what suits your week — switch anytime." center />
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {pricing.map(p => (
              <div key={p.name} className={`relative rounded-3xl p-8 border ${p.featured ? "bg-ink text-cream border-ink shadow-[0_30px_80px_-30px_oklch(0.14_0.012_60/0.45)]" : "bg-white border-border"}`}>
                {p.featured && <div className="absolute -top-3 left-8 bg-gold text-ink text-[10px] tracking-[0.25em] uppercase font-semibold px-3 py-1 rounded-full">Most popular</div>}
                <div className={`text-xs tracking-[0.25em] uppercase ${p.featured ? "text-gold" : "text-muted-foreground"}`}>{p.note}</div>
                <div className="mt-3 font-display text-2xl">{p.name}</div>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="font-display text-5xl">{p.price}</span>
                </div>
                <ul className="mt-6 space-y-2 text-sm">
                  {p.features.map(f => (
                    <li key={f} className="flex items-center gap-2">
                      <CheckCircle2 size={16} className={p.featured ? "text-gold" : "text-ink"} /> {f}
                    </li>
                  ))}
                </ul>
                <Link to="/pricing" className={`mt-8 inline-flex w-full items-center justify-center rounded-xl py-3 text-sm font-medium transition ${p.featured ? "bg-gold text-ink hover:bg-gold-soft" : "bg-secondary hover:bg-ink hover:text-cream"}`}>
                  See full pricing
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-muted-foreground">Prices may vary depending on postcode.</p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="Real students" title="Hundreds of confident drivers across East London." center />
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {testimonials.map(t => (
              <figure key={t.name} className="rounded-3xl bg-white border border-border p-7 shadow-sm hover:shadow-xl transition">
                <div className="flex items-center gap-1 text-gold">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <blockquote className="mt-4 text-ink leading-relaxed">"{t.text}"</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-gold to-ink/70 text-cream flex items-center justify-center font-display">{t.name[0]}</div>
                  <div>
                    <div className="text-sm font-medium">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.area}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeading eyebrow="FAQ" title="Frequently asked." center />
          <div className="mt-12 space-y-3">
            {faqs.map((f, i) => (
              <button key={f.q} onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className={`w-full text-left rounded-2xl border p-6 transition ${openFaq === i ? "bg-ink text-cream border-ink" : "bg-white border-border hover:border-ink/40"}`}>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-display text-lg">{f.q}</span>
                  <span className={`h-7 w-7 rounded-full flex items-center justify-center text-sm ${openFaq === i ? "bg-gold text-ink" : "bg-secondary"}`}>{openFaq === i ? "−" : "+"}</span>
                </div>
                {openFaq === i && <p className={`mt-3 text-sm ${openFaq === i ? "text-cream/70" : "text-muted-foreground"}`}>{f.a}</p>}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-border">
            <img src={eastLondon} alt="East London streets at dusk" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/80 to-ink/40" />
            <div className="relative p-10 md:p-16 text-cream max-w-2xl">
              <Eyebrow>Ready when you are</Eyebrow>
              <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05]">Your full UK licence starts with one lesson.</h2>
              <p className="mt-4 text-cream/70">Book your first session today and get a personalised lesson plan from a DVSA approved instructor.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gold text-ink px-7 py-3.5 text-sm font-semibold hover:bg-gold-soft transition">Book Lessons <ArrowRight size={16} /></Link>
                <Link to="/pricing" className="inline-flex items-center gap-2 rounded-full bg-cream/10 border border-cream/20 text-cream px-7 py-3.5 text-sm font-medium hover:bg-cream/20 transition">View Pricing</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
