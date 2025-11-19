import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LiveMatches from './components/LiveMatches'
import Tournaments from './components/Tournaments'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 -z-10 opacity-[0.07] pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_10%_-10%,#84CC16_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_110%_10%,#84CC16_0%,transparent_65%)]" />
      </div>

      <Navbar />
      <Hero />

      <main>
        <LiveMatches />
        <Tournaments />
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">© {new Date().getFullYear()} FootManage — minimal football management</p>
          <a href="#" className="rounded-full bg-[#84CC16] px-5 py-2 text-sm font-medium text-black hover:brightness-95 transition">Get early access</a>
        </div>
      </footer>
    </div>
  )
}

export default App
