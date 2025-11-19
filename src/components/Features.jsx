import { Sparkles, Gauge, ShieldCheck, Code2, Rocket, Wand2 } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Innovative UX",
    desc: "Playful interactions and thoughtful motion that make products feel delightful.",
  },
  {
    icon: Gauge,
    title: "Blazing Performance",
    desc: "Ship fast sites with top-tier Lighthouse scores and Core Web Vitals.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    desc: "Best practices, reviews and monitoring baked into every build.",
  },
  {
    icon: Code2,
    title: "Full-Stack Craft",
    desc: "From idea to deploy — frontend, backend, and data — handled end-to-end.",
  },
  {
    icon: Rocket,
    title: "SaaS Ready",
    desc: "Auth, billing, dashboards and APIs to launch your product quickly.",
  },
  {
    icon: Wand2,
    title: "Custom Websites",
    desc: "Brand-forward marketing sites tailored to your story and goals.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">What we deliver</h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">A tightly integrated stack of design and engineering, optimized for craft and speed.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl bg-slate-900/50 ring-1 ring-white/10 p-6 hover:ring-white/20 transition relative overflow-hidden">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-tr from-blue-500/10 to-cyan-400/10 blur-2xl group-hover:opacity-100 opacity-0 transition" />
              <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center text-white mb-4 ring-1 ring-white/15">
                <Icon size={20} />
              </div>
              <h3 className="text-white font-semibold">{title}</h3>
              <p className="text-slate-300 mt-2 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
