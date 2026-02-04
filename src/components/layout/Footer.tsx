"use client";

import React from 'react';
import { Linkedin, Instagram, Github, ArrowUp } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full pb-phi-8 px-phi-5 flex justify-center z-10 pointer-events-none noise">
      <div className="w-full max-w-5xl rounded-full glass-panel pointer-events-auto px-phi-8 py-phi-3 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 transition-all duration-500 border border-border/50 shadow-volumetric">
        
        {/* LEFT: Branding + Copyright */}
        <div className="flex items-center space-x-3 shrink-0">
           <div className="w-8 h-8 rounded-full border border-border/50 flex items-center justify-center bg-background shadow-lg relative overflow-hidden group">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-electric-blue)_0%,transparent_70%)] opacity-20 group-hover:opacity-40 transition-opacity" />
             <span className="font-black text-[9px] tracking-tighter text-foreground relative z-10">M&T</span>
           </div>
           <span className="font-black tracking-tighter text-xs uppercase text-foreground">© 2026 Nexus</span>
        </div>

        {/* CENTER: Social Networks (The 2026 Standard) */}
        <div className="flex items-center gap-8 text-muted-foreground/60">
           <a href="#" className="hover:text-foreground hover:scale-125 transition-all duration-300">
             <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4 fill-current">
               <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
             </svg>
           </a>
           <a href="#" className="hover:text-foreground hover:scale-125 transition-all duration-300"><Linkedin size={16} /></a>
           <a href="#" className="hover:text-foreground hover:scale-125 transition-all duration-300"><Instagram size={16} /></a>
           <a href="#" className="hover:text-foreground hover:scale-125 transition-all duration-300"><Github size={16} /></a>
        </div>

        {/* RIGHT: Legal & Compliance */}
        <div className="flex items-center space-x-8 shrink-0 text-[9px] font-black uppercase tracking-[0.3em] text-muted-foreground">
          <Link href="/legal/privacidad" className="hover:text-foreground transition-all">Privacidad</Link>
          <Link href="/legal/terminos" className="hover:text-foreground transition-all">Términos</Link>
          
          <div className="w-px h-3 bg-border mx-2 opacity-50"></div>
          
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-primary transition-all group p-2 rounded-full hover:bg-primary/5">
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}


