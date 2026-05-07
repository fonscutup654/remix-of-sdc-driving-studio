import { useState } from "react";
import { z } from "zod";
import { ArrowRight } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(80),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  email: z.string().trim().email("Invalid email").max(120),
  postcode: z.string().trim().min(3, "Enter postcode").max(10),
  lessonType: z.string().min(1, "Select a lesson"),
  message: z.string().trim().max(800).optional().or(z.literal("")),
});

export function EnquiryForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd) as Record<string, string>;
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach(i => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      setStatus("error");
      return;
    }
    setErrors({});
    setStatus("ok");
    e.currentTarget.reset();
  }

  const input = "w-full rounded-xl bg-white/80 border border-border px-4 py-3 text-sm placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-gold/60 focus:border-gold transition";

  return (
    <form onSubmit={onSubmit} className={`relative ${compact ? "" : "p-6 md:p-8"} rounded-3xl ${compact ? "" : "glass border border-border shadow-[0_30px_80px_-30px_oklch(0.14_0.012_60/0.35)]"}`}>
      {!compact && (
        <div className="mb-5">
          <div className="text-xs tracking-[0.25em] uppercase text-gold">Free Quote</div>
          <h3 className="font-display text-2xl mt-1">Send us an enquiry</h3>
          <p className="text-sm text-muted-foreground mt-1">We'll get back to you within a few hours.</p>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <input name="name" placeholder="Full name" className={input} />
          {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
        </div>
        <div>
          <input name="phone" placeholder="Phone number" className={input} />
          {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
        </div>
        <div>
          <input name="email" placeholder="Email address" className={input} />
          {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
        </div>
        <div>
          <input name="postcode" placeholder="Postcode" className={input} />
          {errors.postcode && <p className="text-xs text-destructive mt-1">{errors.postcode}</p>}
        </div>
        <div className="sm:col-span-2">
          <select name="lessonType" defaultValue="" className={input}>
            <option value="" disabled>Lesson type</option>
            <option>Manual — 1 Hour</option>
            <option>Manual — 2 Hours</option>
            <option>Automatic — 1 Hour</option>
            <option>Automatic — 2 Hours</option>
            <option>Intensive Course</option>
            <option>Pass Plus / Refresher</option>
          </select>
          {errors.lessonType && <p className="text-xs text-destructive mt-1">{errors.lessonType}</p>}
        </div>
        <div className="sm:col-span-2">
          <textarea name="message" rows={3} placeholder="Tell us a bit about your experience (optional)" className={input} />
        </div>
      </div>
      <button type="submit" className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-ink text-cream py-3.5 text-sm font-medium hover:bg-ink/90 transition group">
        Send Enquiry
        <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
      </button>
      {status === "ok" && <p className="text-sm text-green-700 mt-3">Thanks — your enquiry has been received.</p>}
    </form>
  );
}
