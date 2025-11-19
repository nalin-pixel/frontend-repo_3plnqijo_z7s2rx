import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[92vh] overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 h-full flex items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-black/40 ring-1 ring-white/10 px-3 py-1 mb-6">
            <span className="h-2 w-2 rounded-full bg-[#84CC16] animate-pulse"></span>
            <span className="text-xs text-white/80">Live football data</span>
          </div>
          <h1 className="text-4xl sm:text-6xl leading-tight font-semibold text-white tracking-tight">
            Football management that feels fast, minimal and alive
          </h1>
          <p className="mt-5 text-white/70 text-base sm:text-lg">
            Track live matches, organize tournaments, and manage squads in one sleek, distraction-free workspace.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#live" className="rounded-full bg-[#84CC16] px-6 py-3 text-black font-medium hover:brightness-95 transition">See live matches</a>
            <a href="#tournaments" className="rounded-full border border-white/15 px-6 py-3 text-white/80 hover:border-white/40 transition">Explore tournaments</a>
          </div>
        </div>
      </div>
    </section>
  );
}
