"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export default function AuthPage() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-background relative overflow-hidden">
      {/* BACKGROUND NOISE & GRADIENTS */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_var(--color-electric-blue)_0%,_transparent_50%)] opacity-5" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
      </div>

      {/* GLASS PANEL */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md p-8 rounded-3xl glass-panel border border-white/10 shadow-2xl space-y-8"
      >
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-12 h-12 rounded-full border border-zinc-200 dark:border-white/10 flex items-center justify-center bg-white dark:bg-zinc-900 shadow-sm overflow-hidden relative group">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-electric-blue)_0%,transparent_70%)] opacity-20 group-hover:opacity-40 transition-opacity" />
             <span className="font-black text-xs tracking-tighter text-zinc-900 dark:text-white relative z-10">M&T</span>
          </div>
          
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground">Acceso de Inteligencia</h1>
            <p className="text-sm text-muted-foreground mt-2">Introduce tus credenciales para acceder al nodo.</p>
          </div>
        </div>

        <div className="space-y-4">
            <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground pl-1">Identificador</label>
                <input 
                  type="email" 
                  placeholder="agente@mt-venezuela.com" 
                  className="w-full h-12 rounded-xl glass px-4 text-sm outline-none focus:ring-2 focus:ring-electric-blue/50 transition-all placeholder:text-muted-foreground/50"
                  disabled
                />
            </div>
            <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground pl-1">Llave de Acceso</label>
                <input 
                  type="password" 
                  placeholder="••••••••••••" 
                  className="w-full h-12 rounded-xl glass px-4 text-sm outline-none focus:ring-2 focus:ring-electric-blue/50 transition-all placeholder:text-muted-foreground/50"
                  disabled
                />
            </div>
        </div>

        <div className="space-y-4 pt-2">
            <Button className="w-full h-11 rounded-full bg-electric-blue text-background font-bold tracking-wide hover:bg-electric-blue/90 transition-colors shadow-[0_0_20px_rgba(0,255,255,0.3)]">
                <ShieldCheck className="w-4 h-4 mr-2" />
                VERIFICAR CREDENCIALES
            </Button>
            
            <Link href="/" className="flex items-center justify-center text-xs text-muted-foreground hover:text-foreground transition-colors group">
                <ArrowLeft className="w-3 h-3 mr-1 group-hover:-translate-x-1 transition-transform" />
                Volver a Operaciones
            </Link>
        </div>

        <div className="absolute bottom-4 left-0 right-0 text-center">
            <span className="text-[9px] uppercase tracking-widest text-muted-foreground/30 font-mono">Protocolo Seguro v2.0</span>
        </div>
      </motion.div>
    </main>
  );
}
