import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SectionHeading, Eyebrow } from "@/components/site/Section";
import instructor from "@/assets/instructor.jpg";
import { ShieldCheck, HeartHandshake, Trophy, Sparkles } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About SDC Driving School — East London Driving Instructors" },
      { name: "description", content: "Meet SDC Driving School. DVSA approved instructors building safe, confident drivers across East London with patient, professional tuition." },
      { property: "og:title", content: "About SDC Driving School" },
      { property: "og:description", content: "Patient, professional driving tuition across East London." },
      { property: "og:image", content: instructor },
    ],
  }),
  component: AboutPage,
});

const stats = [
  { n: "1,200+", l: "Students taught" },
  { n: "94%", l: "Pass satisfaction" },
  { n: "12+", l: "Years on the road" },
  { n: "5.0★", l: "Average rating" },
];

const values = [
  { icon: ShieldCheck, title: "Safety first", text: "We teach defensive, road-aware driving — not just test-passing." },
  { icon: HeartHandshake, title: "Patience always", text: "Calm, judgement-free coaching for every learner, every lesson." },
  { icon: Trophy, title: "Real progress", text: "Structured plans with measurable milestones each session." },
  { icon: Sparkles, title: "Premium experience", text: "Modern dual-control vehicles and a polished, professional service." },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative pt-36 pb-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cream to-background" />
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 reveal">
            <Eyebrow>About SDC</Eyebrow>
            <h1 className="mt-5 font-display text-5xl md:text-6xl leading-[1] text-ink text-balance">
              East London's calmest, most considered driving school.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              SDC Driving School was built on a simple belief: learning to drive should feel structured, supportive and genuinely enjoyable. We blend DVSA standards with a premium, modern teaching approach.
            </p>
          </div>
          <div className="lg:col-span-5 reveal reveal-2">
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-tr from-gold/40 to-transparent rounded-[2rem] blur-2xl" />
              <img src={instructor} alt="SDC driving instructor" loading="lazy" className="relative rounded-[2rem] w-full h-[520px] object-cover border border-border shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(s => (
            <div key={s.l} className="rounded-3xl bg-ink text-cream p-8 text-center">
              <div className="font-display text-4xl md:text-5xl gold-text">{s.n}</div>
              <div className="mt-2 text-xs tracking-[0.25em] uppercase text-cream/60">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="What we stand for" title="Standards that show in every lesson." />
          <div className="mt-12 grid md:grid-cols-2 gap-5">
            {values.map(v => (
              <div key={v.title} className="rounded-3xl border border-border bg-white p-8 hover:shadow-xl transition">
                <div className="h-12 w-12 rounded-xl bg-ink text-gold flex items-center justify-center"><v.icon size={22} /></div>
                <div className="mt-5 font-display text-2xl">{v.title}</div>
                <p className="mt-2 text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/40">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <Eyebrow>Our promise</Eyebrow>
          <p className="mt-6 font-display text-3xl md:text-4xl leading-snug text-ink text-balance">
            "We don't just prepare you for the test — we prepare you for a lifetime of safe, confident driving across East London and beyond."
          </p>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink text-cream px-7 py-3.5 text-sm font-medium hover:bg-ink/90 transition">
            Book your first lesson
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
