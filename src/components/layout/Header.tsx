"use client";

"use client";

import Link from "next/link";
import { Search, Sun, Moon, User, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Handle Scroll Effect & Hydration
  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return null; 
  }

  const isActive = (path: string) => pathname.startsWith(path);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-100 transition-all duration-500">
      <div className={cn(
        "flex justify-between items-center px-6 py-3 rounded-full backdrop-blur-3xl transition-all duration-500 border",
        scrolled 
          ? "bg-background/80 border-border shadow-sm" 
          : "bg-transparent border-transparent"
      )}>
        {/* LOGO */}
        <Link href="/" className="flex items-center space-x-3 cursor-pointer group">
          <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center transition-all group-hover:scale-105">
            <span className="text-background font-black text-[10px]">M&T</span>
          </div>
          <div className="leading-none flex flex-col">
            <span className="font-black tracking-tighter text-xs uppercase text-foreground">M&T Venezuela</span>
            <p className="text-[7px] uppercase tracking-[0.2em] text-muted-foreground font-bold italic">Nodo de Datos</p>
          </div>
        </Link>
        
        {/* NAVIGATION */}
        <div className="hidden md:flex space-x-8 text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground">
          <Link href="/noticias" className={cn("transition-colors hover:text-foreground", isActive("/noticias") && "text-foreground underline underline-offset-4 decoration-border")}>Noticias</Link>
          <Link href="/registro-central" className={cn("transition-colors hover:text-foreground", isActive("/registro-central") && "text-foreground underline underline-offset-4 decoration-border")}>Registro</Link>
          <Link href="/institucional/nosotros" className={cn("transition-colors hover:text-foreground", isActive("/institucional") && "text-foreground underline underline-offset-4 decoration-border")}>Nosotros</Link>
        </div>

        {/* ACTIONS */}
        <div className="flex items-center space-x-4">
          <button onClick={toggleTheme} className="text-muted-foreground hover:text-foreground transition-colors">
            {theme === "light" ? <Sun size={14} /> : <Moon size={14} />}
          </button>
          <Link href="/auth" className="glass px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-foreground/5 transition-all hidden sm:block text-foreground">
            Acceso
          </Link>
        </div>
      </div>
    </nav>
  );
}
