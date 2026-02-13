"use client";

import { m as motion } from "framer-motion";

export default function ActOne() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-6 relative snap-center">
      <div className="max-w-4xl mx-auto text-center space-y-12 z-10">
        
        {/* Status Pill - Apple Style */}
        {/* Status Pill Removed for Sober Aesthetic */}

        {/* Headline - Pragmatic & Sober */}
        <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-8xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 leading-[0.9]"
        >
            Venezuela. <br/>
            <span className="text-zinc-400 dark:text-zinc-600">Lo que no se dice.</span>
        </motion.h1>

        {/* Subtext - Clear Definition */}
        <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto font-light leading-relaxed"
        >
            Plataforma de inteligencia ciudadana. <br/>
            Registro de censura y base de datos forense.
        </motion.p>

      </div>
    </section>
  );
}
