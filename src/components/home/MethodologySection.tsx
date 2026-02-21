"use client";

/**
 * MethodologySection — How we work, with progressive scroll reveal.
 * Numbered steps that appear sequentially as user scrolls.
 */

import { useRef } from "react";
import { m as motion, useInView } from "framer-motion";

const STEPS = [
  {
    number: "01",
    title: "Recopilamos",
    description: "Monitoreamos fuentes oficiales, medios locales e internacionales, y testimonios directos las 24 horas del día.",
  },
  {
    number: "02",
    title: "Verificamos",
    description: "Cada dato se contrasta con al menos dos fuentes independientes. No publicamos hasta confirmar.",
  },
  {
    number: "03",
    title: "Publicamos",
    description: "Artículos claros, concisos y sin sesgos. Información que puedes citar con confianza.",
  },
];

export default function MethodologySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-200px" });

  return (
    <section ref={sectionRef} className="min-h-screen flex flex-col justify-center py-32 px-6 relative">
      <div className="max-w-4xl mx-auto space-y-20">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center space-y-4"
        >
          <span className="text-blue-500 font-mono text-xs tracking-[0.3em] uppercase">
            Nuestra metodología
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Cómo trabajamos
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="space-y-0">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.2 }}
              className="flex items-start gap-8 md:gap-12 py-12 border-b border-zinc-200 dark:border-white/5 last:border-0 group"
            >
              {/* Step number */}
              <span className="text-6xl md:text-8xl font-black tracking-tighter text-zinc-200 dark:text-zinc-800 group-hover:text-blue-500/30 transition-colors duration-500 shrink-0">
                {step.number}
              </span>
              {/* Content */}
              <div className="space-y-3 pt-2">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-zinc-500 leading-relaxed max-w-lg text-sm md:text-base">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
