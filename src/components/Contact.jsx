import { useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function Contact() {
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  async function onSubmit(e) {
    e.preventDefault()
    setStatus({ state: 'loading', message: 'Sending...' })

    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      company: form.get('company') || undefined,
      service: form.get('service') || undefined,
      budget: form.get('budget') || undefined,
      message: form.get('message'),
    }

    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        throw new Error(err.detail || 'Failed to submit')
      }
      setStatus({ state: 'success', message: 'Thanks! We\'ll reach out shortly.' })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ state: 'error', message: err.message })
    }
  }

  return (
    <section id="contact" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(14,165,233,0.12),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Let\'s build something remarkable</h2>
          <p className="mt-3 text-slate-300 max-w-prose">Tell us about your idea, timeline and goals. We\'ll reply within one business day.</p>
          <div className="mt-6 text-slate-400 text-sm">
            <p>Typical projects: marketing sites, SaaS MVPs, product dashboards, design systems.</p>
            <p className="mt-2">Based in the cloud • Working worldwide</p>
          </div>
        </div>
        <form onSubmit={onSubmit} className="rounded-2xl bg-slate-900/60 ring-1 ring-white/10 p-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-300 mb-1">Name</label>
              <input name="name" required className="w-full rounded-lg bg-slate-800/60 border border-white/10 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Email</label>
              <input type="email" name="email" required className="w-full rounded-lg bg-slate-800/60 border border-white/10 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="jane@company.com" />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Company</label>
              <input name="company" className="w-full rounded-lg bg-slate-800/60 border border-white/10 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Acme Inc." />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Service</label>
              <select name="service" className="w-full rounded-lg bg-slate-800/60 border border-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/40">
                <option value="">Select</option>
                <option>Website</option>
                <option>SaaS Build</option>
                <option>Design</option>
                <option>Consulting</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Budget</label>
              <select name="budget" className="w-full rounded-lg bg-slate-800/60 border border-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/40">
                <option value="">Select</option>
                <option>&lt; $5k</option>
                <option>$5k-$15k</option>
                <option>$15k-$50k</option>
                <option>$50k+</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-slate-300 mb-1">Message</label>
              <textarea name="message" required rows="5" className="w-full rounded-lg bg-slate-800/60 border border-white/10 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Tell us about your project..." />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <button disabled={status.state==='loading'} className="inline-flex items-center rounded-lg bg-white text-slate-900 px-5 py-2.5 font-semibold hover:bg-slate-100 transition disabled:opacity-60">{status.state==='loading' ? 'Sending...' : 'Send message'}</button>
            {status.state !== 'idle' && (
              <div className={`text-sm ${status.state==='success' ? 'text-emerald-400' : status.state==='error' ? 'text-rose-400' : 'text-slate-300'}`}>
                {status.message}
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
