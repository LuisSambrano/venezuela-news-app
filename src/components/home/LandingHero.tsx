"use client";

import React, { useRef } from 'react';
import { ChevronDown, ArrowRight, Zap, Target, Activity } from 'lucide-react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { Spotlight } from '@/components/ui/spotlight';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export default function LandingHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, 200]), { stiffness: 100, damping: 30 });
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <div ref={ref} className="bg-background text-foreground relative w-full">
      
      {/* SECTION 1: HERO (Reference: LA VERDAD - ES - PODER) */}
      <section className="min-h-screen sticky top-0 z-0 overflow-hidden bg-background snap-center flex flex-col items-center justify-center">
        <AuroraBackground className="h-full w-full absolute inset-0" showRadialGradient={false}>
          <motion.div 
            style={{ y, opacity }} 
            className="relative z-10 flex flex-col items-center justify-center h-full w-full px-phi-5 text-center"
          >
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center justify-center space-y-2 md:space-y-4 select-none"
            >
               {/* TOP LINE */}
               <h1 className="text-[12vw] md:text-[150px] leading-[0.85] font-black tracking-tighter text-foreground uppercase mix-blend-difference">
                 La Verdad
               </h1>
               
               {/* MIDDLE CONNECTOR */}
               <div className="flex items-center gap-4 py-2">
                  <div className="w-12 h-px bg-foreground/30"></div>
                  <span className="text-sm md:text-xl font-mono text-muted-foreground uppercase tracking-[0.2em]">Es</span>
                  <div className="w-12 h-px bg-foreground/30"></div>
               </div>

               {/* BOTTOM LINE (Gradient) */}
               <h1 className="text-[12vw] md:text-[150px] leading-[0.85] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/0 uppercase">
                 Poder
               </h1>
            </motion.div>

            {/* SCROLL INDICATOR (Bottom Dock) */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 1, duration: 1 }}
               className="absolute bottom-phi-8 flex flex-col items-center gap-2"
            >
               <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-medium">Descubre</span>
               <ChevronDown className="w-4 h-4 text-muted-foreground animate-bounce opacity-50" />
            </motion.div>

          </motion.div>
        </AuroraBackground>
      </section>

      {/* SECTION 2: THE PROBLEM (Deep Dark Bento) - PERFECT SYMMETRY ENFORCED */}
      <section className="relative z-10 bg-background min-h-screen flex flex-col items-center justify-center py-phi-21 px-phi-8 border-t border-border snap-center">
         <div className="max-w-6xl mx-auto space-y-phi-21 w-full flex flex-col items-center">
            <header className="max-w-3xl text-center space-y-phi-5">
               <h2 className="text-hero font-semibold tracking-tighter text-foreground">
                  Filtrando el caos.
               </h2>
               <p className="text-muted-foreground text-subtitle font-light leading-relaxed px-phi-8">
                 Nuestra arquitectura elimina el ruido mediante verificación criptográfica y análisis de sentimiento automatizado.
               </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-phi-5 w-full">
               {[
                  { title: "Verificación IA", desc: "Análisis de patrones en tiempo real.", active: true, icon: <Zap className="text-foreground" /> },
                  { title: "Cifrado", desc: "Protección de grado militar.", active: false, icon: <Target className="text-muted-foreground" /> },
                  { title: "Tiempo Real", desc: "Datos bursátiles al instante.", active: false, icon: <Activity className="text-muted-foreground" /> },
               ].map((item, i) => (
                  <motion.div 
                    key={i}
                    viewport={{ once: true }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className={cn(
                       "relative overflow-hidden rounded-[var(--radius-lg)] p-phi-8 flex flex-col justify-between h-[320px] transition-all duration-500 text-left group",
                       item.active 
                         ? "bg-card border border-border shadow-lg" 
                         : "bg-background border border-border hover:border-foreground/20 hover:scale-[1.02]"
                    )}
                  >
                     {item.active && <Spotlight className="-top-20 -left-20 from-foreground/10 to-transparent" fill="currentColor" />}
                     <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center backdrop-blur-md mb-phi-8 ring-1 ring-border group-hover:bg-foreground/10 transition-colors">{item.icon}</div>
                     <div>
                        <h3 className={cn("text-title font-medium mb-phi-2", item.active ? "text-card-foreground" : "text-muted-foreground group-hover:text-foreground")}>{item.title}</h3>
                        <p className="text-muted-foreground text-body leading-snug">{item.desc}</p>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* SECTION 3: CTA (Minimalist) */}
      <section className="relative z-10 bg-background min-h-[60vh] flex flex-col items-center justify-center px-phi-5 snap-center">
         <div className="text-center space-y-phi-8">
           <h3 className="text-hero font-semibold tracking-tighter text-foreground">
              Entrar.
           </h3>
           <Link href="/noticias">
              <Button size="lg" className="h-16 px-12 text-body glass border-primary/20 hover:bg-primary/10 text-foreground">
                 Iniciar Sesión
              </Button>
           </Link>
         </div>
      </section>
    </div>
  );
}
