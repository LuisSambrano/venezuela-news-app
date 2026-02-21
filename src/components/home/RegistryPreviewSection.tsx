"use client";

/**
 * RegistryPreviewSection — Value proposition: Why choose LibertadVNZL.
 * Dark immersive section with staggered scroll reveals.
 */

import { useRef } from "react";
import { m as motion, useInView } from "framer-motion";
import { HandDrawnUnderline } from "@/components/ui/HandDrawnUnderline";
import { Shield, Eye, Zap } from "lucide-react";

const FEATURES = [
  {
    icon: Eye,
    title: "Transparencia Total",
    description: "Cada fuente es citada. Cada dato es trazable. Sin agendas ocultas ni patrocinadores políticos.",
  },
  {
    icon: Shield,
    title: "Verificación Rigurosa",
    description: "Doble confirmación editorial en cada artículo. No publicamos rumores, publicamos hechos.",
  },
  {
    icon: Zap,
    title: "Cobertura en Tiempo Real",
    description: "Mientras otros esperan, nosotros publicamos. Monitoreo continuo de lo que pasa en Venezuela.",
  },
];

export default function RegistryPreviewSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-150px" });

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center py-32 px-6 bg-zinc-900 dark:bg-black text-white rounded-[3rem] my-10 mx-4 md:mx-10 shadow-2xl relative overflow-hidden"
    >
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
      {/* Depth glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 space-y-20">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <span className="text-blue-400 font-mono text-xs tracking-[0.3em] uppercase">
            Por qué elegirnos
          </span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9]">
            Información{" "}
            <HandDrawnUnderline color="#60a5fa" strokeWidth={6}>
              verificada
            </HandDrawnUnderline>
            ,<br />
            siempre.
          </h2>
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-blue-500/20 transition-all duration-500 group space-y-6"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold tracking-tight">{feature.title}</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
