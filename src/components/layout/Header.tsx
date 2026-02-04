"use client";

import Link from "next/link";
import { Search, Sun, Moon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/primitives/button";

export function Header() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  const isActive = (path: string) => pathname.startsWith(path);

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
            <span className="text-[8px] uppercase tracking-[0.2em] font-medium text-zinc-400 dark:text-zinc-500">Open-Source Intelligence</span>
          </div>
        </Link>
        
        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="/noticias" className={cn(
            "text-[10px] font-bold uppercase tracking-widest transition-colors",
            isActive("/noticias") ? "text-zinc-900 dark:text-white" : "text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300"
          )}>
            Noticias
          </Link>
          <Link href="/institucional" className={cn(
            "text-[10px] font-bold uppercase tracking-widest transition-colors",
            isActive("/institucional") ? "text-zinc-900 dark:text-white" : "text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300"
          )}>
            Institucional
          </Link>
          <Link href="/registro-central" className={cn(
            "text-[10px] font-bold uppercase tracking-widest transition-colors",
            isActive("/registro-central") ? "text-zinc-900 dark:text-white" : "text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300"
          )}>
            Registro Central
          </Link>
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-6">
          <button className="text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300 transition-colors">
            <Search size={18} />
          </button>
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300 transition-colors"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Link href="/auth">
            <Button variant="outline" size="sm" className="rounded-full px-6 border-zinc-200 dark:border-white/10 text-[9px] font-bold uppercase tracking-widest flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-blue-500" />
              Acceder
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
