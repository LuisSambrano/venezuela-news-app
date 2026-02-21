"use client";

/**
 * ContextSection — "Why Us" stats with count-up animations on scroll.
 * Persuasive social proof section with animated numbers.
 */

import { useRef } from "react";
import { m as motion, useInView } from "framer-motion";
import { CountUp } from "@/components/ui/CountUp";
import { HandDrawnUnderline } from "@/components/ui/HandDrawnUnderline";
import { Newspaper, Clock, CheckCircle2, Globe2 } from "lucide-react";

const STATS = [
  { icon: Newspaper, value: 450, suffix: "+", label: "Artículos listos para el lanzamiento" },
  { icon: Clock, value: 24, suffix: "/7", label: "Cobertura continua en tiempo real" },
  { icon: CheckCircle2, value: 100, suffix: "%", label: "Verificado antes de publicar" },
  { icon: Globe2, value: 50, suffix: "+", label: "Fuentes monitoreadas diariamente" },
];

export default function ContextSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-200px" });

  return (
    <section ref={sectionRef} className="min-h-screen flex flex-col justify-center py-32 px-6 relative">
      {/* Section depth gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-20 relative z-10">
        {/* Headline with hand-drawn underline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white leading-tight">
            Noticias que{" "}
            <HandDrawnUnderline color="#3b82f6" strokeWidth={6}>
              importan
            </HandDrawnUnderline>
          </h2>
          <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto font-light">
            Construimos el medio de comunicación que Venezuela necesita. Con rigor, sin agenda.
          </p>
        </motion.div>

        {/* Stats grid with count-up */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex flex-col items-center gap-4 p-6 md:p-8 rounded-3xl bg-white/40 dark:bg-white/[0.03] backdrop-blur-xl border border-white/20 dark:border-white/5 hover:border-blue-500/30 transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <Icon className="w-5 h-5 text-blue-500" />
                </div>
                <CountUp
                  target={stat.value}
                  suffix={stat.suffix}
                  className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 dark:text-white"
                />
                <span className="text-xs text-zinc-500 text-center leading-relaxed font-medium">
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
