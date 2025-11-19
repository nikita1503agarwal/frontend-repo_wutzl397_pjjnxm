import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-100">
      {/* soft background pattern */}
      <div className="absolute inset-0 pointer-events-none"> 
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.08),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(14,165,233,0.06),transparent_40%)]" />
      </div>

      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Contact />
        <footer className="py-10 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 text-sm text-blue-300/70 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p>© {new Date().getFullYear()} Nick Dos Santos. All rights reserved.</p>
            <a href="/test" className="hover:text-white">System status</a>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
