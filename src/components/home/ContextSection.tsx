"use client";

import { m as motion } from "framer-motion";
import { Newspaper, TrendingUp, Users } from "lucide-react";

export default function ContextSection() {
  const stats = [
    { icon: <Newspaper className="w-6 h-6" />, value: "450+", label: "Artículos Publicados" },
    { icon: <TrendingUp className="w-6 h-6" />, value: "24/7", label: "Cobertura Continua" },
    { icon: <Users className="w-6 h-6" />, value: "100%", label: "Contenido Verificado" },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center py-32 px-6 snap-center">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="space-y-4 text-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white">
                Noticias que importan.
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-8 rounded-3xl bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/5 shadow-lg flex flex-col gap-4 hover:bg-white/60 dark:hover:bg-white/10 transition-colors"
                >
                    <div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-white/10 flex items-center justify-center text-zinc-900 dark:text-white">
                        {stat.icon}
                    </div>
                    <div>
                        <div className="text-5xl font-black tracking-tighter text-zinc-900 dark:text-white">{stat.value}</div>
                        <div className="text-sm font-medium text-zinc-500 uppercase tracking-wide mt-1">{stat.label}</div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
