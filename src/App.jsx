import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Features />
        <Showcase />
        <Contact />
        <footer className="py-10 border-t border-white/10 bg-slate-950/80">
          <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
            <div className="flex items-center gap-3">
              <div className="h-7 w-7 rounded-md bg-gradient-to-tr from-blue-500 via-cyan-400 to-indigo-500 ring-1 ring-white/20" />
              <span>© {new Date().getFullYear()} NovaForge — All rights reserved</span>
            </div>
            <div className="opacity-80">Crafted with performance, accessibility and play.</div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
