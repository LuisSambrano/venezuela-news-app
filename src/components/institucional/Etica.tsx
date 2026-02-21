import React from 'react';
import { HeaderClearance } from "@/components/layout/HeaderClearance";

export default function EticaComponent() {
  return (
    <main className="max-w-[1400px] mx-auto p-6 lg:p-10 space-y-24 text-center">
      <HeaderClearance />
      <header className="space-y-8 max-w-5xl mx-auto">
         <h1 className="text-6xl md:text-[120px] font-black uppercase tracking-tighter leading-none italic">Código Ética</h1>
         <p className="text-3xl font-light text-zinc-500 dark:text-zinc-400 italic leading-tight">&quot;Compromiso con la verdad, la independencia editorial y el servicio al lector&quot;.</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16 text-left">
         {["Independencia", "Precisión", "Transparencia"].map((title, i) => (
           <div key={i} className="p-12 border-l-4 border-zinc-100 dark:border-zinc-800 space-y-8 italic group hover:border-blue-600 transition-all">
              <h4 className="font-black uppercase tracking-[0.4em] text-blue-600">Principio 0{i+1}.</h4>
              <h5 className="text-4xl font-black uppercase tracking-tighter">{title}</h5>
              <p className="text-xl text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">Nuestro compromiso es con el lector. Publicamos información verificada, sin sesgos partidistas y con total apertura sobre nuestras fuentes y métodos.</p>
           </div>
         ))}
      </div>
    </main>
  );
}
