"use client";

import Link from "next/link";
import { Search, Sun, Moon, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button"; // Access from shadcn (we'll create this) or use html button for now
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Simple Theme Toggle (Placeholder for real provider)
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "glass h-16 border-b border-black/5 dark:border-white/10"
          : "h-20 bg-transparent border-transparent"
      )}
    >
      <div className="container mx-auto h-full px-4 flex items-center justify-between">
        {/* 1. LOGO */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-blue-400 opacity-90 group-hover:scale-105 transition-transform" />
          <div className="flex flex-col">
            <span className="font-heading font-bold text-lg leading-none tracking-tight">
              M&T<span className="text-primary">Venezuela</span>
            </span>
            <span className="text-[0.6rem] font-mono tracking-[0.2em] text-muted-foreground uppercase">
              Open-Source Intelligence
            </span>
          </div>
        </Link>

        {/* 2. NAVIGATION (Hidden on mobile) */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "NOTICIAS", href: "/noticias" },
            { label: "INSTITUCIONAL", href: "/institucional" },
            { label: "REGISTRO CENTRAL", href: "/registro-central" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-bold tracking-widest text-muted-foreground hover:text-foreground transition-colors uppercase"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* 3. ACTIONS */}
        <div className="flex items-center gap-2">
           {/* Search Trigger */}
          <button className="p-2 text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors">
            <Search className="w-4 h-4" />
          </button>

           {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="p-2 text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors"
          >
            {theme === "light" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Login Button */}
          <Link 
            href="/auth" 
            className="hidden sm:flex items-center gap-2 px-4 py-1.5 ml-2 rounded-full border border-border bg-background hover:bg-muted transition-all text-xs font-medium"
          >
            <User className="w-3 h-3" />
            <span>Acceder</span>
          </Link>
          
          {/* Mobile Menu */}
           <button className="md:hidden p-2 text-muted-foreground">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
