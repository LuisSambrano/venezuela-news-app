"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { Search, Sun, Moon, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/primitives/button";

// Hydration-safe mounted check without setState in useEffect
const emptySubscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export function Header() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  // Prevents hydration mismatch: returns false on server, true on client
  const mounted = useSyncExternalStore(emptySubscribe, getSnapshot, getServerSnapshot);

  const isActive = (path: string) => pathname.startsWith(path);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        <div className="flex items-center gap-4 md:gap-6">
          <button aria-label="Buscar" className="text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300 transition-colors">
            <Search size={18} />
          </button>
          <button 
            aria-label="Cambiar tema"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300 transition-colors"
          >
            {mounted ? (theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />) : <Moon size={18} />}
          </button>
          <Link href="/auth" className="hidden md:block">
            <Button variant="outline" size="sm" className="rounded-full px-6 border-zinc-200 dark:border-white/10 text-[9px] font-bold uppercase tracking-widest flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-blue-500" />
              Acceder
            </Button>
          </Link>

          {/* MOBILE MENU TOGGLE */}
          <button 
            className="md:hidden text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[100px] z-40 md:hidden bg-background/95 backdrop-blur-lg flex flex-col items-center justify-start py-8 gap-8 border-t border-zinc-200 dark:border-white/10">
          <Link href="/noticias" className="text-sm font-bold uppercase tracking-widest text-zinc-900 dark:text-white" onClick={() => setIsMobileMenuOpen(false)}>Noticias</Link>
          <Link href="/institucional" className="text-sm font-bold uppercase tracking-widest text-zinc-900 dark:text-white" onClick={() => setIsMobileMenuOpen(false)}>Institucional</Link>
          <Link href="/registro-central" className="text-sm font-bold uppercase tracking-widest text-zinc-900 dark:text-white" onClick={() => setIsMobileMenuOpen(false)}>Registro Central</Link>
          <Link href="/auth" className="mt-4" onClick={() => setIsMobileMenuOpen(false)}>
            <Button variant="outline" size="sm" className="rounded-full px-8 py-6 border-zinc-200 dark:border-white/10 text-[11px] font-bold uppercase tracking-widest flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              Acceder
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}
