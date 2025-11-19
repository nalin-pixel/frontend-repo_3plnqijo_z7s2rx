import { useEffect, useState } from 'react';

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function Tournaments() {
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    async function fetchTournaments() {
      try {
        const res = await fetch(`${API}/tournaments`);
        const data = await res.json();
        setTournaments(data.tournaments || []);
      } catch (e) {
        setTournaments([]);
      }
    }
    fetchTournaments();
  }, []);

  return (
    <section id="tournaments" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl text-white font-semibold tracking-tight">Tournaments</h2>
          <span className="text-xs text-white/50">curated</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tournaments.map((t) => (
            <article key={t.id} className="rounded-2xl bg-white/5 border border-white/10 p-5 hover:border-white/20 transition">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-white/50">{t.region}</span>
                <span className="text-xs text-[#84CC16]">{t.season}</span>
              </div>
              <h3 className="text-white/90 font-medium mb-2">{t.name}</h3>
              <p className="text-white/60 text-sm">Teams: {t.teams}</p>
            </article>
          ))}
        </div>

        {tournaments.length === 0 && (
          <div className="rounded-2xl border border-white/10 p-8 text-center text-white/70 mt-6">
            No tournaments found.
          </div>
        )}
      </div>
    </section>
  );
}
