"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, ArrowDown, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function OracleHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-background text-foreground flex flex-col items-center justify-center">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-electric-blue)_0%,_transparent_70%)] opacity-10 animate-pulse-slow" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      {/* Floating Elements (Data Streams) */}
      <div className="absolute w-full h-full pointer-events-none z-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 text-xs font-mono text-electric-blue/50"
        >
          Analyzing Data Streams...
        </motion.div>
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: [0.1, 0.4, 0.1] }}
           transition={{ duration: 7, repeat: Infinity, delay: 1 }}
           className="absolute bottom-1/3 right-1/4 text-xs font-mono text-venezuela-gold/50"
        >
           Verifying Source Integrity...
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center space-x-2 text-venezuela-gold text-sm font-mono tracking-widest uppercase border border-venezuela-gold/30 px-3 py-1 rounded-full bg-venezuela-gold/5 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-venezuela-gold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-venezuela-gold"></span>
          </span>
          <span>System Status: Optimal | Live Feed</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
        >
          LA VERDAD <br />
          <span className="text-electric-blue drop-shadow-[0_0_30px_rgba(0,255,255,0.4)]">ES PODER</span>
        </motion.h1>

        <motion.p
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1, delay: 0.4 }}
           className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
        >
          Un búnker digital de inteligencia contra la censura.
          <br className="hidden md:block" />
          Monitoreo en tiempo real. Análisis profundo. Archivo histórico.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 pt-4"
        >
          <Link href="/noticias">
            <Button 
              size="lg" 
              className="bg-electric-blue text-background hover:bg-electric-blue/80 font-bold tracking-wide shadow-[0_0_20px_rgba(0,255,255,0.3)]"
            >
              <Globe className="mr-2 h-4 w-4" />
              EXPLORAR INTELIGENCIA
            </Button>
          </Link>
          <Link href="/registro-central">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10 hover:text-electric-blue transition-colors duration-300"
            >
              <ShieldAlert className="mr-2 h-4 w-4" />
              REGISTRO DE PRISIONEROS
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
}
