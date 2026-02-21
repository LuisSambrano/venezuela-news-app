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
            <h3 className="text-6xl font-black uppercase italic tracking-tighter">Proceso Editorial</h3>
            <ul className="space-y-12 text-2xl font-light italic leading-snug">
               <li className="flex items-start gap-8 border-b dark:border-white/10 pb-8"><span className="text-blue-500 font-black text-4xl">01</span><span>Confirmación de fuentes: cada dato se verifica con al menos dos fuentes independientes antes de publicarse.</span></li>
               <li className="flex items-start gap-8 border-b dark:border-white/10 pb-8"><span className="text-blue-500 font-black text-4xl">02</span><span>Revisión editorial: un editor senior revisa cada artículo para asegurar precisión, contexto y equilibrio informativo.</span></li>
               <li className="flex items-start gap-8 pb-8"><span className="text-blue-500 font-black text-4xl">03</span><span>Correcciones transparentes: si detectamos un error, lo corregimos públicamente y documentamos la enmienda.</span></li>
            </ul>
         </div>
      </div>
    </main>
  );
}
