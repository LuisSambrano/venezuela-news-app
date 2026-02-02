import React from 'react';

interface SectionDividerProps {
  label: string;
  number: string;
}

export const SectionDivider = ({ label, number }: SectionDividerProps) => (
  <div className="w-full flex flex-col items-center my-12 opacity-50 px-6">
    <div className="flex items-center space-x-4 w-full max-w-6xl">
      <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-800 to-transparent"></div>
      <div className="flex items-center space-x-3 shrink-0">
        <span className="text-[10px] font-black text-zinc-500 uppercase">[{number}]</span>
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">{label}</span>
      </div>
      <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-800 to-transparent"></div>
    </div>
  </div>
);
