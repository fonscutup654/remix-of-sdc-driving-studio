import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Eyebrow } from "@/components/site/Section";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact SDC Driving School — Book Lessons in East London" },
      { name: "description", content: "Get in touch with SDC Driving School. Book lessons, ask questions, or request a quote for driving tuition in East London." },
      { property: "og:title", content: "Contact SDC Driving School" },
      { property: "og:description", content: "Reach out to book your East London driving lessons." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  phone: z.string().trim().min(7).max(20),
  email: z.string().trim().email().max(120),
  message: z.string().trim().min(5).max(800),
});

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach(i => { errs[i.path[0] as string] = i.message; });
      setErrors(errs); setStatus("error"); return;
    }
    setErrors({}); setStatus("ok"); e.currentTarget.reset();
  }

  const input = "w-full rounded-xl bg-white border border-border px-4 py-3 text-sm placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-gold/60 focus:border-gold transition";

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative pt-36 pb-12">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cream to-background" />
        <div className="mx-auto max-w-4xl px-4 text-center reveal">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-5 font-display text-5xl md:text-6xl text-ink leading-[1] text-balance">Let's get you on the road.</h1>
          <p className="mt-5 text-lg text-muted-foreground">Send us a message — we typically reply within a few hours.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-4">
            {[
              { icon: Phone, label: "Call us", value: "020 0000 0000" },
              { icon: Mail, label: "Email us", value: "hello@sdcdriving.co.uk" },
              { icon: MapPin, label: "Coverage", value: "All East London postcodes" },
              { icon: Clock, label: "Hours", value: "Mon–Sat · 7am – 9pm" },
            ].map(c => (
              <div key={c.label} className="flex items-start gap-4 rounded-2xl bg-white border border-border p-5 hover:shadow-lg transition">
                <div className="h-12 w-12 rounded-xl bg-ink text-gold flex items-center justify-center"><c.icon size={20} /></div>
                <div>
                  <div className="text-xs tracking-[0.25em] uppercase text-muted-foreground">{c.label}</div>
                  <div className="font-display text-lg mt-1">{c.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={onSubmit} className="rounded-3xl glass border border-border p-8 shadow-xl">
              <h3 className="font-display text-2xl">Send a message</h3>
              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                <div>
                  <input name="name" placeholder="Name" className={input} />
                  {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                </div>
                <div>
                  <input name="phone" placeholder="Phone" className={input} />
                  {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
                </div>
                <div className="sm:col-span-2">
                  <input name="email" placeholder="Email" className={input} />
                  {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                </div>
                <div className="sm:col-span-2">
                  <textarea name="message" rows={5} placeholder="How can we help?" className={input} />
                  {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                </div>
              </div>
              <button className="mt-5 w-full rounded-xl bg-ink text-cream py-3.5 text-sm font-medium hover:bg-ink/90 transition">Send Message</button>
              {status === "ok" && <p className="text-sm text-green-700 mt-3">Thanks — we'll be in touch shortly.</p>}
            </form>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-[2rem] overflow-hidden border border-border h-[420px] relative bg-secondary">
            <iframe
              title="East London map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-0.1%2C51.5%2C0.1%2C51.6&layer=mapnik"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
