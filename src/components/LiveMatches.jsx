import { useEffect, useState } from 'react';

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function LiveMatches() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMatches() {
      try {
        const res = await fetch(`${API}/live-matches`);
        const data = await res.json();
        setMatches(data.matches || []);
      } catch (e) {
        setMatches([]);
      } finally {
        setLoading(false);
      }
    }
    fetchMatches();
  }, []);

  return (
    <section id="live" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl text-white font-semibold tracking-tight">Live matches</h2>
          <span className="text-xs text-white/50">auto-refresh on load</span>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-28 rounded-xl bg-white/5 animate-pulse" />
            ))}
          </div>
        ) : matches.length === 0 ? (
          <div className="rounded-2xl border border-white/10 p-8 text-center text-white/70">
            No live matches at the moment.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {matches.map((m) => (
              <article key={m.id} className="rounded-2xl bg-white/5 border border-white/10 p-5 hover:border-white/20 transition">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-white/50">{m.league}</span>
                  <span className="text-xs text-[#84CC16]">{m.minute}'</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex-1">
                    <p className="text-white/90 font-medium truncate">{m.home}</p>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-black/50 text-white/90 text-sm font-mono">
                    {m.homeScore} - {m.awayScore}
                  </div>
                  <div className="flex-1 text-right">
                    <p className="text-white/70 font-medium truncate">{m.away}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
