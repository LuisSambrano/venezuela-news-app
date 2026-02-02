import React from 'react';
import { ClipboardCheck } from 'lucide-react';
import { HeaderClearance } from "@/components/layout/HeaderClearance";

export default function VerificacionComponent() {
  return (
    <main className="max-w-[1400px] mx-auto p-6 lg:p-10 space-y-24">
      <HeaderClearance />
      <header className="space-y-8 text-center max-w-4xl mx-auto">
         <h1 className="text-6xl md:text-[110px] font-black uppercase tracking-tighter leading-none italic">Verificación</h1>
      </header>
      <div className="bg-foreground text-background p-16 lg:p-24 rounded-[72px] shadow-2xl relative overflow-hidden">
         <ClipboardCheck className="absolute top-10 right-10 opacity-10" size={200} />
         <div className="max-w-3xl space-y-12 relative z-10">
            <h3 className="text-6xl font-black uppercase italic tracking-tighter">Protocolo Triple Check</h3>
            <ul className="space-y-12 text-2xl font-light italic leading-snug">
               <li className="flex items-start gap-8 border-b dark:border-white/10 pb-8"><span className="text-blue-500 font-black text-4xl">01</span><span>Análisis Forense de Metadata para asegurar el origen cronológico inalterable del dato.</span></li>
               <li className="flex items-start gap-8 border-b dark:border-white/10 pb-8"><span className="text-blue-500 font-black text-4xl">02</span><span>Validación Geográfica Independiente mediante triangulación de fuentes abiertas y satelitales.</span></li>
               <li className="flex items-start gap-8 pb-8"><span className="text-blue-500 font-black text-4xl">03</span><span>Confirmación Cruzada por red de analistas descentralizados bajo cifrado asimétrico.</span></li>
            </ul>
         </div>
      </div>
    </main>
  );
}
