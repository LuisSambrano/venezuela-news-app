"use client";

// import { m as motion } from "framer-motion"; // Removing to fix LCP

export default function ActOne() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-6 relative snap-center">
      <div className="max-w-4xl mx-auto text-center space-y-12 z-10">
        
        {/* Status Pill - Apple Style */}
        {/* Status Pill Removed for Sober Aesthetic */}

        {/* Headline - Pragmatic & Sober */}
        <h1
            className="text-6xl md:text-8xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 leading-[0.9] animate-enter"
        >
            Venezuela. <br/>
            <span className="text-zinc-400 dark:text-zinc-600">Lo que no se dice.</span>
        </h1>

        {/* Subtext - Clear Definition */}
        <p
            className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto font-light leading-relaxed animate-enter [animation-delay:200ms]"
        >
            Plataforma de inteligencia ciudadana. <br/>
            Registro de censura y base de datos forense.
        </p>

      </div>
    </section>
  );
}
