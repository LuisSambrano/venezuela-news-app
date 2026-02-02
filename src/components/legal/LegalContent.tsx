import React from 'react';
import { ShieldCheck, Terminal, Lock, LucideIcon } from 'lucide-react';
import { HeaderClearance } from "@/components/layout/HeaderClearance";

// Import icons explicitly to map them, as server components can't pass functions easily differently
const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  Terminal,
  Lock
};

interface LegalContentProps {
  title: string;
  content: string[];
  iconName: string;
}

export default function LegalContent({ title, content, iconName }: LegalContentProps) {
  const Icon = iconMap[iconName] || Lock;

  return (
    <main className="max-w-[1200px] mx-auto p-6 lg:p-10 space-y-20">
      <HeaderClearance />
      <header className="flex items-center space-x-10 border-b-2 border-zinc-950 dark:border-white pb-12 px-4">
         <div className="w-20 h-20 rounded-[32px] bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-blue-600 shadow-inner">
            <Icon size={48} />
         </div>
         <h1 className="text-5xl md:text-[100px] font-black uppercase tracking-tighter italic">{title}</h1>
      </header>
      <article className="glass-panel p-16 lg:p-28 rounded-[64px] border border-border shadow-xl space-y-phi-8 text-subtitle font-light text-muted-foreground italic leading-relaxed">
         {content.map((p, i) => <p key={i}>{p}</p>)}
      </article>
    </main>
  );
}
