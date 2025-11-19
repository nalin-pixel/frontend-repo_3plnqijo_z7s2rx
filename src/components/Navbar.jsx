import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="absolute top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <a href="#" className="inline-flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-[#84CC16] text-black grid place-items-center font-black">FM</div>
          <span className="text-white/90 font-medium tracking-wide">FootManage</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#live" className="text-white/70 hover:text-white transition">Live</a>
          <a href="#tournaments" className="text-white/70 hover:text-white transition">Tournaments</a>
          <a href="#features" className="text-white/70 hover:text-white transition">Features</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#" className="hidden sm:inline-block rounded-full border border-white/10 px-4 py-2 text-xs text-white/80 hover:border-white/30 transition">Sign in</a>
          <button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/80 hover:border-white/30 md:hidden">
            <Menu size={18} />
          </button>
          <a href="#" className="hidden md:inline-block rounded-full bg-[#84CC16] px-5 py-2 text-sm font-medium text-black hover:brightness-95 transition">Get Started</a>
        </div>
      </div>
    </header>
  );
}
