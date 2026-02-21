"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

// Hydration-safe mounted check without setState in useEffect
const emptySubscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export function Header() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(emptySubscribe, getSnapshot, getServerSnapshot);

  return (
    <header className="fixed top-8 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="flex items-center justify-between w-full max-w-6xl h-16 px-8 rounded-full glass">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="w-10 h-10 rounded-full border border-zinc-200 dark:border-white/10 flex items-center justify-center bg-white dark:bg-zinc-900 shadow-sm transition-transform group-hover:scale-105 overflow-hidden relative">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-electric-blue)_0%,transparent_70%)] opacity-20" />
             <span className="font-black text-[10px] tracking-tighter text-zinc-900 dark:text-white relative z-10">M&T</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-base text-zinc-800 dark:text-zinc-100 italic">M&TVenezuela</span>
          </div>
        </Link>

        {/* PRE-LAUNCH: No nav links, only theme toggle */}
        <div className="flex items-center gap-4">
          <button 
            aria-label="Cambiar tema"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300 transition-colors"
          >
            {mounted ? (theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />) : <Moon size={18} />}
          </button>

          {/* Launch date badge */}
          <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 dark:border-white/10 bg-white/50 dark:bg-white/5">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              Lanzamiento 1 Mar 2026
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
}
