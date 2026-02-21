import React from 'react';
import { Fingerprint } from 'lucide-react';
import { HeaderClearance } from "@/components/layout/HeaderClearance";

export default function AboutUs() {
  return (
    <main className="max-w-[1400px] mx-auto p-6 lg:p-10 space-y-32">
      <HeaderClearance />
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
         <div className="lg:col-span-8 space-y-16">
            <h2 className="text-6xl md:text-[120px] font-black uppercase tracking-tighter leading-[0.8] italic">Quiénes <br/> somos</h2>
            <p className="text-3xl md:text-5xl font-light text-zinc-500 dark:text-zinc-400 leading-[1.1] italic border-l-8 border-blue-600 pl-12 max-w-2xl">&quot;Medio de comunicación independiente dedicado a cubrir la realidad venezolana con rigor y transparencia&quot;.</p>
         </div>
         <div className="lg:col-span-4 aspect-4/5 bg-zinc-200 dark:bg-zinc-800 rounded-[64px] overflow-hidden flex items-center justify-center text-zinc-400 opacity-20 border dark:border-zinc-800 shadow-2xl">
            <Fingerprint size={280} strokeWidth={1} />
         </div>
      </section>
    </main>
  );
}
