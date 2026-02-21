import React from 'react';
import Link from 'next/link';

export function BrandLogo({ className = "" }: { className?: string }) {
  // Enfoque minimalista y sofisticado como solicitó el usuario, preservando legibilidad.
  return (
    <Link href="/" className={`flex items-center gap-2 group ${className}`}>
      {/* Torch symbol as a sophisticated minimalist hallmark */}
      <svg 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        className="w-6 h-6 sm:w-8 sm:h-8 text-foreground group-hover:scale-105 transition-transform duration-300"
        aria-hidden="true"
      >
        <path d="M12 2C8 2 6 7 6 7s2-1 4-1 4 2 4 2 2-5-2-6zM10 9c0 0-4 4-2 9h4c2-5-2-9-2-9z" />
        <path d="M9 19v3h6v-3H9z" />
      </svg>
      <span className="font-black tracking-tighter text-xl sm:text-2xl uppercase text-foreground">
        LibertadVNZL
      </span>
    </Link>
  );
}
