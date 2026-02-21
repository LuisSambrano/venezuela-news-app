"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { BrandLogo } from "@/components/ui/BrandLogo";

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
        <BrandLogo />

        {/* NAVIGATION LINKS */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-xs font-bold tracking-widest text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors opacity-80 hover:opacity-100">
            INICIO
          </Link>
          <Link href="/noticias" className="text-xs font-bold tracking-widest text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors opacity-80 hover:opacity-100">
            NOTICIAS
          </Link>
          <Link href="/investigacion" className="text-xs font-bold tracking-widest text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors opacity-80 hover:opacity-100">
            INVESTIGACIÓN
          </Link>
          <Link href="/acerca" className="text-xs font-bold tracking-widest text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors opacity-80 hover:opacity-100">
            ACERCA DE
          </Link>
        </div>

        {/* THEME TOGGLE */}
        <div className="flex items-center gap-4">
          <button 
            aria-label="Cambiar tema"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300 transition-colors"
          >
            {mounted ? (theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />) : <Moon size={18} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
