"use client";

import React from 'react';
import { Linkedin, Instagram, Github, ArrowUp } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full pb-6 px-4 flex justify-center z-10 pointer-events-none">
      <div className="w-full max-w-4xl rounded-full glass-panel pointer-events-auto px-6 py-3 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 transition-all duration-300">
        
        {/* LEFT: Branding + Copyright */}
        <div className="flex items-center space-x-3 shrink-0">
           <div className="w-6 h-6 rounded-full bg-foreground flex items-center justify-center">
             <span className="text-background font-black text-[8px]">M&T</span>
           </div>
           <span className="font-black tracking-tighter text-xs uppercase text-foreground">© 2026</span>
        </div>

        {/* CENTER: Social Networks (The 2026 Standard) */}
        <div className="flex items-center gap-6 text-muted-foreground/80">
           <a href="#" className="hover:text-foreground hover:scale-110 transition-all">
             {/* X Logo (formerly Twitter) */}
             <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4 fill-current">
               <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
             </svg>
           </a>
           <a href="#" className="hover:text-foreground hover:scale-110 transition-all"><Linkedin size={16} /></a>
           <a href="#" className="hover:text-foreground hover:scale-110 transition-all"><Instagram size={16} /></a>
           <a href="#" className="hover:text-foreground hover:scale-110 transition-all"><Github size={16} /></a>
        </div>

        {/* RIGHT: Legal & Compliance */}
        <div className="flex items-center space-x-6 shrink-0 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          <Link href="/legal/privacidad" className="hover:text-foreground transition-colors">Privacidad</Link>
          <Link href="/legal/terminos" className="hover:text-foreground transition-colors">Términos</Link>
          <Link href="/legal/cookies" className="hover:text-foreground transition-colors">Cookies</Link>
          
          <div className="w-px h-3 bg-border mx-2"></div>
          
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-foreground transition-colors group">
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}


