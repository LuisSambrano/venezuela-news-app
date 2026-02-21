import React from "react";
import Link from "next/link";
import Image from "next/image";

export function BrandLogo({ className = "" }: { className?: string }) {
  // Enfoque minimalista y sofisticado como solicitó el usuario, preservando legibilidad.
  return (
    <Link href="/" className={`flex items-center gap-2 group ${className}`}>
      {/* Torch symbol as a sophisticated minimalist hallmark */}
      <Image
        src="/logo.png"
        alt="Libertad VNZL Logo"
        width={32}
        height={32}
        className="w-6 h-6 sm:w-8 sm:h-8 group-hover:scale-105 transition-transform duration-300"
        priority
      />
      <span className="font-black tracking-tighter text-xl sm:text-2xl uppercase text-foreground">
        Libertad<span className="text-[var(--color-electric-blue)]">VNZL</span>
      </span>
    </Link>
  );
}
