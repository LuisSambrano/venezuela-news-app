"use client";

import { m as motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center p-6 relative overflow-hidden pt-32">
      {/* Background gradients for soft sophisticated lighting */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-zinc-800/10 dark:bg-zinc-800/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-zinc-500/5 dark:bg-zinc-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center space-y-12 z-10 relative">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 text-zinc-500 dark:text-zinc-400 font-medium text-xs tracking-widest uppercase border border-border/50 bg-background/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm"
        >
          <span className="w-1.5 h-1.5 bg-zinc-400 dark:bg-zinc-500 rounded-full animate-pulse" />
          Actualidad y Contexto
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 leading-[1.1] md:leading-[1.05]"
        >
          La verdad como <span className="text-transparent bg-clip-text bg-linear-to-r from-zinc-700 to-zinc-500 dark:from-zinc-200 dark:to-zinc-500">raíz.</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto font-medium leading-relaxed"
        >
          Periodismo de investigación independiente para una Venezuela libre.<br className="hidden md:block"/>
          Rigor, transparencia y datos trazables.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <Link href="/noticias" className="w-full sm:w-auto px-8 py-4 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 rounded-full font-bold text-sm hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-xl shadow-black/5 dark:shadow-white/5">
            Últimas Noticias
            <ArrowRight size={16} />
          </Link>
          <Link href="/investigacion" className="w-full sm:w-auto px-8 py-4 bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white border border-border/50 rounded-full font-bold text-sm hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2">
            Investigaciones
          </Link>
        </motion.div>
      </div>

      {/* Subtle noise overlay for texture */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-5 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay" />
    </section>
  );
}
