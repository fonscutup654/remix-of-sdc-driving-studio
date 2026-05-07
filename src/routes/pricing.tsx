import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SectionHeading, Eyebrow } from "@/components/site/Section";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — SDC Driving School Lessons from £41/hr" },
      { name: "description", content: "Transparent driving lesson pricing across East London. Manual & automatic, single hours, blocks and intensive courses. From £41/hr." },
      { property: "og:title", content: "SDC Pricing — Driving Lessons East London" },
      { property: "og:description", content: "Manual, automatic and intensive driving lesson pricing." },
    ],
  }),
  component: PricingPage,
});

const tiers = [
  {
    name: "Single Lessons",
    tag: "Pay as you go",
    price: "£41",
    unit: "/ hour",
    features: ["1 hour or 2 hour slots", "Manual or automatic", "Door-to-door pickup", "No commitment"],
  },
  {
    name: "10 Hour Block",
    tag: "Most popular",
    price: "£395",
    unit: "saves £15",
    featured: true,
    features: ["10 hours of tuition", "Structured lesson plan", "Progress tracking", "Priority booking"],
  },
  {
    name: "Intensive Course",
    tag: "Fast-track",
    price: "POA",
    unit: "tailored quote",
    features: ["Test-ready in weeks", "Custom hourly plan", "Theory support", "Mock test included"],
  },
];

const matrix = [
  { type: "Manual — 1 Hour", price: "£41" },
  { type: "Manual — 2 Hours", price: "£82" },
  { type: "Automatic — 1 Hour", price: "£44" },
  { type: "Automatic — 2 Hours", price: "£88" },
  { type: "Pass Plus", price: "From £180" },
  { type: "Refresher Course", price: "From £120" },
];

function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative pt-36 pb-16">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cream to-background" />
        <div className="mx-auto max-w-4xl px-4 text-center reveal">
          <Eyebrow>Pricing</Eyebrow>
          <h1 className="mt-5 font-display text-5xl md:text-6xl text-ink text-balance leading-[1]">Honest pricing. No hidden fees.</h1>
          <p className="mt-5 text-lg text-muted-foreground">Pick a single lesson, save with a block, or fast-track with an intensive plan.</p>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-3 gap-6">
          {tiers.map(t => (
            <div key={t.name} className={`relative rounded-3xl p-8 border ${t.featured ? "bg-ink text-cream border-ink" : "bg-white border-border"}`}>
              {t.featured && <div className="absolute -top-3 left-8 bg-gold text-ink text-[10px] tracking-[0.25em] uppercase font-semibold px-3 py-1 rounded-full">{t.tag}</div>}
              {!t.featured && <div className="text-xs tracking-[0.25em] uppercase text-muted-foreground">{t.tag}</div>}
              <div className="mt-3 font-display text-2xl">{t.name}</div>
              <div className="mt-5 flex items-baseline gap-2">
                <span className="font-display text-5xl">{t.price}</span>
                <span className={`text-sm ${t.featured ? "text-cream/60" : "text-muted-foreground"}`}>{t.unit}</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm">
                {t.features.map(f => (
                  <li key={f} className="flex items-center gap-2"><CheckCircle2 size={16} className={t.featured ? "text-gold" : "text-ink"} /> {f}</li>
                ))}
              </ul>
              <Link to="/contact" className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-medium transition ${t.featured ? "bg-gold text-ink hover:bg-gold-soft" : "bg-secondary hover:bg-ink hover:text-cream"}`}>
                Get started <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4">
          <SectionHeading eyebrow="Lesson types" title="Detailed price list." />
          <div className="mt-10 rounded-3xl overflow-hidden border border-border bg-white divide-y divide-border">
            {matrix.map(row => (
              <div key={row.type} className="flex items-center justify-between px-6 py-5 hover:bg-secondary/40 transition">
                <span className="font-medium">{row.type}</span>
                <span className="font-display text-xl gold-text">{row.price}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">Prices may vary depending on postcode/location.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-[2.5rem] bg-ink text-cream p-10 md:p-16 text-center">
            <Eyebrow>Ready to start?</Eyebrow>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">Book your first lesson today.</h2>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold text-ink px-7 py-3.5 text-sm font-semibold hover:bg-gold-soft transition">Get a personalised quote <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
