"use client";

/**
 * HeroSection — Pre-launch hero with countdown to March 1, 2026.
 * Story scrolling entry point. No links — pure landing experience.
 */

import { useState, useEffect } from "react";
import { m as motion } from "framer-motion";
import { RollingCounter } from "@/components/ui/RollingCounter";

const LAUNCH_DATE = new Date("2026-03-01T00:00:00-04:00").getTime();

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function useCountdown(): TimeLeft {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    function calculate() {
      const now = Date.now();
      const diff = Math.max(0, LAUNCH_DATE - now);
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    }
    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, []);

  return timeLeft;
}

export default function HeroSection() {
  const { days, hours, minutes, seconds } = useCountdown();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Gradient orbs for depth */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center space-y-16 z-10">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 text-blue-400 font-mono text-xs tracking-[0.3em] uppercase"
        >
          <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          Próximo lanzamiento
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 leading-[0.85]"
        >
          M&T Venezuela
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto font-light leading-relaxed"
        >
          Periodismo independiente.<br />
          Noticias verificadas sobre Venezuela.
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-10"
        >
          {[
            { value: days, label: "Días" },
            { value: hours, label: "Horas" },
            { value: minutes, label: "Minutos" },
            { value: seconds, label: "Segundos" },
          ].map((unit) => (
            <div key={unit.label} className="flex flex-col items-center gap-3">
              <div className="glass-panel rounded-2xl px-4 py-3 md:px-6 md:py-4 min-w-[80px] md:min-w-[100px]">
                <RollingCounter
                  value={unit.value}
                  fontSize={48}
                  places={[10, 1]}
                  gap={2}
                  horizontalPadding={4}
                  textColor="inherit"
                  fontWeight={800}
                  gradientFrom="transparent"
                  gradientTo="transparent"
                  gradientHeight={0}
                />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">
                {unit.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Launch date label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-sm text-zinc-500 font-mono tracking-widest"
        >
          01 · MARZO · 2026
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-zinc-400 dark:border-zinc-600 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 bg-zinc-400 dark:bg-zinc-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
