"use client";

/**
 * CTASection — Pre-launch final CTA with large countdown + email capture.
 * No external links. Pure conversion-focused landing section.
 */

import { useState, useEffect, useRef } from "react";
import { m as motion, useInView } from "framer-motion";
import { RollingCounter } from "@/components/ui/RollingCounter";
import { HandDrawnUnderline } from "@/components/ui/HandDrawnUnderline";
import { ArrowRight } from "lucide-react";

const LAUNCH_DATE = new Date("2026-03-01T00:00:00-04:00").getTime();

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-150px" });
  const [days, setDays] = useState(0);

  useEffect(() => {
    function calc() {
      const diff = Math.max(0, LAUNCH_DATE - Date.now());
      setDays(Math.floor(diff / (1000 * 60 * 60 * 24)));
    }
    calc();
    const interval = setInterval(calc, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen flex flex-col justify-center py-40 px-6 text-center relative overflow-hidden">
      {/* Background depth */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-3xl mx-auto space-y-12 relative z-10">
        {/* Big countdown number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, type: "spring", damping: 15 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="glass-panel rounded-3xl px-8 py-6 inline-flex">
            <RollingCounter
              value={days}
              fontSize={80}
              gap={4}
              horizontalPadding={8}
              fontWeight={900}
              gradientFrom="transparent"
              gradientTo="transparent"
              gradientHeight={0}
            />
          </div>
          <span className="text-sm font-mono text-zinc-500 tracking-[0.3em] uppercase">
            Días para el lanzamiento
          </span>
        </motion.div>

        {/* CTA Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-black tracking-tighter text-zinc-900 dark:text-white leading-tight"
        >
          Sé el primero en{" "}
          <HandDrawnUnderline color="#3b82f6" strokeWidth={6} delay={0.5}>
            saber
          </HandDrawnUnderline>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="text-lg text-zinc-500 max-w-md mx-auto font-light"
        >
          Déjanos tu correo y te avisamos cuando estemos en línea.
        </motion.p>

        {/* Email capture */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="tu@email.com"
            aria-label="Correo electrónico"
            className="flex-1 w-full h-14 px-6 rounded-full bg-white/80 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
          />
          <button
            type="submit"
            className="h-14 px-8 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm flex items-center gap-2 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all shrink-0"
          >
            Notifícame
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.form>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-xs text-zinc-400"
        >
          Sin spam. Solo una notificación el día del lanzamiento.
        </motion.p>
      </div>
    </section>
  );
}
