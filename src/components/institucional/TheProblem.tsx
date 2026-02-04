"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, EyeOff, Lock, ServerCrash } from "lucide-react";

const stats = [
  {
    icon: <EyeOff className="h-8 w-8 text-destructive" />,
    value: "60+",
    label: "Medios Censurados",
    description: "Bloqueos digitales sistemáticos para silenciar la realidad."
  },
  {
    icon: <Lock className="h-8 w-8 text-venezuela-gold" />,
    value: "2,000+",
    label: "Prisioneros Políticos",
    description: "Detenciones arbitrarias registradas y verificadas."
  },
  {
    icon: <ServerCrash className="h-8 w-8 text-electric-blue" />,
    value: "24/7",
    label: "Desinformación",
    description: "Campañas de bots y propaganda estatal masiva."
  }
];

export default function TheProblem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="relative w-full py-24 bg-background text-foreground overflow-hidden">
      {/* Background Glitch Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-destructive/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/4 h-full bg-electric-blue/5 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-2 text-destructive font-mono uppercase tracking-widest text-sm">
              <AlertTriangle className="h-4 w-4" />
              <span>Estado de Alerta Global</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
              Una Guerra <span className="text-destructive relative inline-block">
                Asimétrica
                <span className="absolute bottom-1 left-0 w-full h-1 bg-destructive/50 skew-x-12"></span>
              </span> de Información
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              En Venezuela, la verdad es el primer objetivo militar. El aparato de censura estatal ha creado un agujero negro informativo donde los hechos son reescritos y la disidencia es borrada.
            </p>
            
            <p className="text-lg text-foreground font-medium border-l-4 border-venezuela-gold pl-4 italic">
              &quot;No es solo censura. Es la aniquilación sistemática de la memoria histórica.&quot;
            </p>

            <div className="pt-4">
               <span className="text-xs font-mono text-muted-foreground">FUENTE: MONITOREO M&T VENEZUELA 2024-2025</span>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 + (index * 0.2) }}
                className="glass p-6 rounded-xl hover:bg-white/5 transition-all duration-300 group border border-white/5 hover:border-white/10"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-background/50 rounded-lg backdrop-blur-md border border-white/5 shadow-inner">
                    {stat.icon}
                  </div>
                  <span className="text-4xl font-black tracking-tighter text-foreground/90 tabular-nums">
                    {stat.value}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-electric-blue transition-colors">
                  {stat.label}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
