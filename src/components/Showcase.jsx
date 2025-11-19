export default function Showcase() {
  const items = [
    { title: "Fintech Dashboard", tag: "SaaS UI", img: "https://images.unsplash.com/photo-1551281044-8d8d6d1a6a63?q=80&w=1200&auto=format&fit=crop" },
    { title: "AI Portfolio", tag: "Marketing Site", img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1200&auto=format&fit=crop" },
    { title: "E‑commerce", tag: "Storefront", img: "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=1200&auto=format&fit=crop" },
  ];

  return (
    <section id="work" className="relative py-20 bg-slate-950">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Selected work</h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">A peek at recent builds and experiments.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.title} className="group rounded-2xl overflow-hidden ring-1 ring-white/10 bg-slate-900/40">
              <div className="relative h-56 overflow-hidden">
                <img src={item.img} alt={item.title} className="h-full w-full object-cover group-hover:scale-105 transition" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <div className="text-xs text-slate-300">{item.tag}</div>
                <div className="text-white font-semibold">{item.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
