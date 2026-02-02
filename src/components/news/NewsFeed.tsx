"use client";

import React, { useState } from 'react';
import { 
  Layers, Globe2, TrendingUp, Cpu, Trophy, HeartPulse, Music, Map, 
  CheckCircle2, Clock, MessageSquare, ArrowUpRight, Activity, Scan, ChevronDown, ChevronLeft, ChevronRight
} from 'lucide-react';
import { HeaderClearance } from "@/components/layout/HeaderClearance";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { cn } from "@/lib/utils";

export default function NewsFeed() {
  const [activeVector, setActiveVector] = useState('Todas');
  const [showAll, setShowAll] = useState(false);

  const vectors = [
    { name: 'Todas', icon: <Layers size={14} />, count: 142 },
    { name: 'Internacional', icon: <Globe2 size={14} />, count: 24 },
    { name: 'Locales', icon: <Map size={14} />, count: 56 },
    { name: 'Negocios', icon: <TrendingUp size={14} />, count: 18 },
    { name: 'Ciencia y Tec', icon: <Cpu size={14} />, count: 12 },
    { name: 'Deportes', icon: <Trophy size={14} />, count: 9 },
    { name: 'Salud', icon: <HeartPulse size={14} />, count: 15 },
    { name: 'Entretenimiento', icon: <Music size={14} />, count: 8 }
  ];

  return (
    <main className="max-w-[1550px] mx-auto p-phi-5 lg:p-phi-8 space-y-phi-13">
      <HeaderClearance />
      
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-phi-5">
        {/* Main Feed: 8/12 (~61.8% in 12-col grid approximation) */}
        <div className="lg:col-span-8 group h-full">
          <div className="group relative h-full rounded-[32px] overflow-hidden bg-card border border-border hover:border-sidebar-accent transition-all duration-500 shadow-sm">
            <div className="aspect-golden-l overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80" className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-80 transition-all duration-1000 group-hover:scale-105" alt="Principal" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
              <div className="absolute top-phi-8 left-phi-8">
                <span className="glass px-phi-3 py-phi-2 rounded-full text-caption font-bold uppercase tracking-widest text-muted-foreground border border-border">{activeVector === 'Todas' ? 'Dossier Especial' : activeVector}</span>
              </div>
              <div className="absolute bottom-phi-8 left-phi-8 right-phi-8 space-y-phi-2">
                <div className="flex items-center space-x-3 text-muted-foreground font-bold text-caption uppercase tracking-widest"><CheckCircle2 size={14} /><span>Nodo Verificado</span></div>
                <h2 className="text-title md:text-hero font-semibold tracking-tighter leading-[0.9] text-card-foreground">La Red Que <br/> Apagó El País</h2>
              </div>
            </div>
            <div className="p-phi-8 space-y-phi-5">
               <p className="text-subtitle font-light text-muted-foreground leading-relaxed max-w-3xl">Investigación forense sobre los flujos financieros ilícitos vinculados al colapso del sistema eléctrico nacional.</p>
               <div className="flex items-center justify-between border-t border-border pt-phi-5 mt-auto">
                  <div className="flex items-center space-x-phi-5 text-caption font-bold uppercase tracking-widest text-muted-foreground">
                    <span className="flex items-center"><Clock size={14} className="mr-2" /> 15 min</span>
                    <span className="flex items-center"><MessageSquare size={14} className="mr-2" /> 42</span>
                  </div>
                  <button className="flex items-center space-x-2 text-card-foreground text-caption font-bold uppercase tracking-widest group-hover:text-primary transition-colors">
                    <span>Leer Informe</span><ArrowUpRight size={14} />
                  </button>
               </div>
            </div>
          </div>
        </div>

        {/* Sidebar Terminal: 4/12 (~38.2%) */}
        <div className="lg:col-span-4 flex flex-col gap-phi-3">
          {/* Monitor Económico (Minimal) */}
          <div className="bg-card p-phi-5 rounded-[32px] border border-border flex flex-col justify-between h-auto shadow-sm">
             <header className="flex justify-between items-center mb-phi-3 text-caption font-bold uppercase tracking-widest text-muted-foreground">
                <h3>Monitor</h3>
                <Activity size={16} className="text-primary animate-pulse" />
             </header>
             <div>
                <div className="group cursor-pointer space-y-phi-1">
                  <p className="text-caption font-bold text-muted-foreground uppercase tracking-widest">Dólar Paralelo</p>
                  <div className="flex justify-between items-baseline">
                    <p className="text-title font-semibold tracking-tighter text-card-foreground">Bs. 52,40</p>
                    <span className="text-micro font-bold text-emerald-500">+1.2%</span>
                  </div>
                </div>
             </div>
          </div>

          {/* Terminal de Vectores (Standard List) */}
          <div className="bg-card p-phi-5 rounded-[32px] border border-border flex-grow shadow-sm">
             <header className="flex justify-between items-center mb-phi-3 pb-phi-2 border-b border-border">
                <h4 className="text-caption font-bold uppercase tracking-widest text-muted-foreground">Vectores</h4>
                <Scan size={14} className="text-muted-foreground" />
             </header>
             <nav className="space-y-phi-1">
                {vectors.map((v) => (
                  <button 
                    key={v.name}
                    onClick={() => setActiveVector(v.name)}
                    className={cn(
                      "w-full flex justify-between items-center px-4 py-3 rounded-xl transition-all text-caption uppercase tracking-widest group border border-transparent",
                      activeVector === v.name 
                      ? 'bg-primary/5 text-primary border-primary/10' 
                      : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                    )}
                  >
                    <div className="flex items-center space-x-3">
                       <span>{v.icon}</span>
                       <span>{v.name}</span>
                    </div>
                    <span className="opacity-40 font-mono text-micro">[{v.count}]</span>
                  </button>
                ))}
             </nav>
          </div>
        </div>
      </section>

      <SectionDivider label={`Feed: ${activeVector}`} number="01" />

      {/* Secondary Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-phi-5">
        {Array.from({ length: showAll ? 12 : 6 }).map((_, i) => (
          <article key={i} className="group cursor-pointer bg-card rounded-[24px] overflow-hidden border border-border hover:border-foreground/20 hover:shadow-2xl transition-all duration-500 flex flex-col shadow-sm">
            <div className="aspect-golden-l overflow-hidden relative bg-secondary">
               <div className="absolute top-4 left-4 z-10 w-full pr-8">
                 <span className="bg-background/80 backdrop-blur-md text-foreground text-caption font-bold uppercase px-3 py-1 rounded-full border border-border">{activeVector === 'Todas' ? 'Análisis' : activeVector}</span>
               </div>
               {/* Placeholder gradient instead of image for abstract feel */}
               <div className="w-full h-full bg-gradient-to-br from-secondary to-background group-hover:scale-105 transition-transform duration-700"></div>
            </div>
            <div className="p-phi-5 flex flex-col flex-grow space-y-phi-2">
              <h4 className="text-subtitle font-semibold leading-tight text-card-foreground group-hover:text-primary transition-colors">Informe procesado de interés para el nodo {activeVector} {i + 1}</h4>
              <div className="flex items-center justify-between text-muted-foreground text-caption font-bold uppercase tracking-widest pt-phi-3 mt-auto border-t border-border">
                 <span>FEB 01</span><ArrowUpRight size={14} />
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Pagination / Load More Control */}
      <div className="flex justify-center pt-phi-8 pb-phi-13">
         {!showAll ? (
            <button 
               onClick={() => setShowAll(true)}
               className="group relative px-8 py-3 rounded-full bg-background border border-border hover:border-foreground/20 transition-all duration-300"
            >
               <span className="text-caption font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Desplegar Vector Completo (12)
                  <ChevronDown size={14} />
               </span>
            </button>
         ) : (
            // Google-style Pagination (Forensic Interpretation)
            <div className="flex items-center gap-phi-3 bg-secondary/30 p-2 rounded-full border border-border backdrop-blur-sm">
               <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-background text-muted-foreground hover:text-foreground transition-colors">
                  <ChevronLeft size={16} />
               </button>
               
               {[1, 2, 3, 4, 5].map((page) => (
                  <button 
                     key={page}
                     className={cn(
                        "w-10 h-10 rounded-full text-caption font-bold flex items-center justify-center transition-all",
                        page === 1 
                           ? "bg-foreground text-background shadow-md" 
                           : "text-muted-foreground hover:bg-background hover:text-foreground"
                     )}
                  >
                     {page}
                  </button>
               ))}
               
               <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-background text-muted-foreground hover:text-foreground transition-colors">
                  <ChevronRight size={16} />
               </button>
            </div>
         )}
      </div>
    </main>
  );
}
