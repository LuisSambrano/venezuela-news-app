import React from 'react';
import { ShieldAlert, Users, FileSearch } from 'lucide-react';
import { HeaderClearance } from "@/components/layout/HeaderClearance";

export default function RegistryDashboard() {
  return (
    <main className="max-w-[1550px] mx-auto p-6 lg:p-10 space-y-24">
      <HeaderClearance />
      <header className="max-w-4xl space-y-10 px-6">
         <h1 className="text-6xl md:text-[140px] font-black uppercase tracking-tighter leading-none italic">Registro <br/> Central</h1>
         <p className="text-3xl md:text-4xl font-light text-muted-foreground italic border-l-8 border-red-600 pl-12 leading-tight">&quot;Repositorio inmutable de evidencias técnicas para la reconstrucción democrática&quot;.</p>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10">
         {[
           { title: "Casos DDHH", count: "1,240 Entradas", icon: <ShieldAlert className="text-red-600" /> },
           { title: "Presos Políticos", count: "284 Perfiles", icon: <Users className="text-blue-600" /> },
           { title: "Tramas Corrupción", count: "48 Dossiers", icon: <FileSearch className="text-orange-600" /> }
         ].map((cat, i) => (
           <div key={i} className="glass-panel p-12 rounded-[64px] shadow-xl group hover:border-blue-500 transition-all flex flex-col justify-between h-[420px]">
              <div className="w-20 h-20 rounded-[32px] bg-muted/50 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">{cat.icon}</div>
              <div className="space-y-4">
                 <h3 className="text-5xl font-black uppercase tracking-tighter leading-none italic">{cat.title}</h3>
                 <p className="text-muted-foreground font-bold uppercase text-[11px] tracking-[0.3em]">{cat.count}</p>
              </div>
           </div>
         ))}
      </section>
    </main>
  );
}
