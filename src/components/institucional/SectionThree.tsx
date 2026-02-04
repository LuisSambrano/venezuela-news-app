"use client";

import { motion } from "framer-motion";
import { ArrowRight, Database, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SectionThree() {
  return (
    <section className="relative w-full py-32 bg-background flex flex-col items-center overflow-hidden">
      
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="container px-4 z-10 flex flex-col items-center">
        
        {/* Value Proposition Header */}
        <div className="text-center max-w-3xl mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tighter"
          >
            Inteligencia Descentralizada <span className="text-venezuela-gold">Anti-Censura</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl"
          >
            Accede al dashboard de inteligencia ciudadana más avanzado. Verificación forense, base de datos de represores y noticias en tiempo real.
          </motion.p>
        </div>

        {/* Feature Cards / Interface Preview */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
                {
                    title: "OSINT Forense",
                    desc: "Análisis de fuentes abiertas para verificar incidentes y desmentir propaganda.",
                    icon: <Zap className="h-6 w-6 text-electric-blue" />
                },
                {
                    title: "Base de Datos Segura",
                    desc: "Registro inmutable de violaciones de DDHH y perfiles de cadenas de mando.",
                    icon: <Database className="h-6 w-6 text-venezuela-gold" />
                },
                {
                    title: "Anonimato Total",
                    desc: "Navegación y denuncias protegidas con cifrado de grado militar.",
                    icon: <ShieldCheck className="h-6 w-6 text-green-500" />
                }
            ].map((feature, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className="glass p-8 rounded-2xl border border-white/5 hover:border-electric-blue/30 transition-all duration-300 flex flex-col items-center text-center group"
                >
                    <div className="mb-4 p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                        {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.desc}</p>
                </motion.div>
            ))}
        </div>

        {/* Final CTA */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="relative group"
        >
            <div className="absolute -inset-1 bg-gradient-to-r from-electric-blue to-venezuela-gold rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <Link href="/news">
                <Button size="xl" className="relative h-16 px-12 text-lg font-bold bg-background text-foreground border border-white/10 hover:bg-zinc-900 rounded-full">
                    INICIAR SISTEMA DE INTELIGENCIA
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
            </Link>
        </motion.div>

      </div>
    </section>
  );
}
