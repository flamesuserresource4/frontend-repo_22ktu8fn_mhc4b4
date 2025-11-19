import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950" id="hero">
      {/* Gradient aura */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-20 h-[40rem] w-[40rem] bg-gradient-to-tr from-blue-600/30 via-cyan-400/20 to-indigo-500/20 blur-3xl rounded-full" />
        <div className="absolute -bottom-40 -right-20 h-[35rem] w-[35rem] bg-gradient-to-tr from-indigo-600/30 via-fuchsia-400/20 to-cyan-500/20 blur-3xl rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 mb-4">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Building fluid web experiences
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white leading-tight">
            SaaS, Sites & Systems that feel alive
          </h1>
          <p className="mt-4 text-slate-300 text-lg max-w-prose">
            We design and build custom websites and product experiences with performance, accessibility and polish at the core.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-5 py-3 font-semibold shadow-lg shadow-white/10 hover:bg-slate-100 transition">
              Start a project
            </a>
            <a href="#work" className="inline-flex items-center justify-center rounded-lg bg-slate-800/50 text-white px-5 py-3 font-semibold ring-1 ring-white/10 hover:bg-slate-700/60 transition">
              See our work
            </a>
          </div>
        </div>
        <div className="relative h-[420px] md:h-[520px] lg:h-[600px] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-slate-900/40">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          {/* soft overlay to improve contrast */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-slate-950" />
    </section>
  );
}
