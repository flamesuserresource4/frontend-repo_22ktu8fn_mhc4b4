import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  const NavLink = ({ id, label }) => (
    <button onClick={() => scrollTo(id)} className="px-4 py-2 text-slate-200 hover:text-white/90">
      {label}
    </button>
  );

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-slate-900/60 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-500 via-cyan-400 to-indigo-500 shadow-lg ring-1 ring-white/20" />
            <span className="font-semibold tracking-tight text-white">NovaForge</span>
          </div>
          <nav className="hidden md:flex items-center gap-1">
            <NavLink id="features" label="Features" />
            <NavLink id="work" label="Work" />
            <NavLink id="contact" label="Contact" />
            <a href="#contact" onClick={() => scrollTo('contact')} className="ml-4 inline-flex items-center rounded-lg bg-white text-slate-900 px-4 py-2 text-sm font-semibold hover:bg-slate-100 transition">
              Get a Quote
            </a>
          </nav>
          <button className="md:hidden text-white" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 animate-in">
            <div className="flex flex-col gap-2">
              <NavLink id="features" label="Features" />
              <NavLink id="work" label="Work" />
              <NavLink id="contact" label="Contact" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
