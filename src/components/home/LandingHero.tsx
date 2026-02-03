"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function LandingHero() {
  return (
    <div className="relative min-h-screen w-full bg-[#fcfcfc] dark:bg-zinc-950 flex flex-col items-center justify-center overflow-hidden">
      
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.02]" 
           style={{ backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px)', backgroundSize: '8.333% 100%' }} 
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-2"
        >
          <h1 className="text-[12vw] md:text-[140px] font-black tracking-[-0.04em] leading-[0.9] text-zinc-900 dark:text-white uppercase px-4">
            La Verdad
          </h1>
          
          <div className="flex items-center gap-6 my-2">
            <div className="h-px w-8 bg-zinc-200 dark:bg-zinc-800" />
            <span className="text-xs md:text-sm font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.6em]">
              es
            </span>
            <div className="h-px w-8 bg-zinc-200 dark:bg-zinc-800" />
          </div>

          <h1 className="text-[12vw] md:text-[140px] font-black tracking-[-0.04em] leading-[0.9] uppercase px-4 bg-linear-to-b from-zinc-900 to-zinc-400 bg-clip-text text-transparent dark:from-white dark:to-zinc-600">
            Poder
          </h1>
        </motion.div>
      </div>

      {/* DESCUBRE INDICATOR */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400 dark:text-zinc-500 ml-1">
          Descubre
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-zinc-300 dark:text-zinc-700" />
        </motion.div>
      </motion.div>
    </div>
  );
}
