"use client";

import React from 'react';
import Linkedin from 'lucide-react/dist/esm/icons/linkedin';
import Instagram from 'lucide-react/dist/esm/icons/instagram';
import Github from 'lucide-react/dist/esm/icons/github';
import ArrowUp from 'lucide-react/dist/esm/icons/arrow-up';
import Link from 'next/link';
import { BrandLogo } from "@/components/ui/BrandLogo";

export function Footer() {
  return (
    <footer className="w-full pb-phi-8 px-phi-5 flex justify-center z-10 pointer-events-none noise">
      <div className="w-full max-w-5xl rounded-full glass-panel pointer-events-auto px-phi-8 py-phi-3 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 transition-all duration-500 border border-border/50 shadow-volumetric">
        
        {/* LEFT: Branding */}
        <div className="flex items-center shrink-0">
           <BrandLogo className="scale-[0.85] origin-center md:origin-left" />
        </div>

        {/* CENTER: Social Networks (The 2026 Standard) */}
        <div className="flex items-center gap-8 text-muted-foreground/60">
           <a href="https://x.com/libertadvnzl" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="hover:text-foreground hover:scale-125 transition-all duration-300">
             <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4 fill-current">
               <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
             </svg>
           </a>
           <a href="https://linkedin.com/company/libertadvnzl" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-foreground hover:scale-125 transition-all duration-300"><Linkedin size={16} /></a>
           <a href="https://instagram.com/libertadvnzl" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-foreground hover:scale-125 transition-all duration-300"><Instagram size={16} /></a>
           <a href="https://github.com/LuisSambrano/venezuela-news-app" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-foreground hover:scale-125 transition-all duration-300"><Github size={16} /></a>
        </div>

        {/* RIGHT: Navigation & Legal */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 md:gap-x-6 gap-y-2 shrink-0 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-all">Inicio</Link>
          <Link href="/noticias" className="hover:text-foreground transition-all">Noticias</Link>
          <Link href="/investigacion" className="hover:text-foreground border-b border-transparent hover:border-foreground transition-all">Investigación</Link>
          <Link href="/acerca" className="hover:text-foreground transition-all">Acerca</Link>
          
          <div className="hidden lg:block w-px h-3 bg-border mx-1 opacity-50"></div>
          
          <Link href="/legal/privacidad" className="hover:text-foreground transition-all">Privacidad</Link>
          <Link href="/legal/terminos" className="hover:text-foreground transition-all">Términos</Link>
          
          <button aria-label="Volver arriba" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-primary transition-all group p-2 rounded-full hover:bg-primary/5 ml-2">
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}


