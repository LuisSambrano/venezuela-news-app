import React from 'react';
import { Cpu, Server } from 'lucide-react';
import { HeaderClearance } from "@/components/layout/HeaderClearance";

export default function MetodologiaComponent() {
  return (
    <main className="max-w-[1400px] mx-auto p-6 lg:p-10 space-y-24">
      <HeaderClearance />
      <header className="space-y-8">
         <h1 className="text-6xl md:text-[110px] font-black uppercase tracking-tighter leading-none italic">Metodología</h1>
         <p className="text-3xl font-light text-zinc-500 dark:text-zinc-400 italic border-l-8 border-blue-600 pl-12 leading-tight max-w-4xl">&quot;Proceso editorial riguroso para garantizar la precisión y veracidad de cada publicación&quot;.</p>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
         <div className="glass-panel p-16 rounded-[64px] shadow-xl space-y-10 group hover:border-primary transition-all">
            <Cpu className="text-blue-600" size={56} />
            <h3 className="text-5xl font-black uppercase tracking-tighter italic">Recopilación</h3>
            <p className="text-zinc-500 dark:text-zinc-400 text-2xl font-light leading-relaxed italic">Monitoreo continuo de fuentes oficiales, medios locales e internacionales, y reportes de primera mano para construir cada historia.</p>
         </div>
         <div className="glass-panel p-16 rounded-[64px] shadow-xl space-y-10 group hover:border-primary transition-all">
            <Server className="text-blue-600 dark:text-blue-400" size={56} />
            <h3 className="text-5xl font-black uppercase tracking-tighter italic">Verificación</h3>
            <p className="text-zinc-500 dark:text-zinc-400 text-2xl font-light leading-relaxed italic">Cada dato se contrasta con múltiples fuentes independientes antes de su publicación. No publicamos sin confirmar.</p>
         </div>
      </section>
    </main>
  );
}
