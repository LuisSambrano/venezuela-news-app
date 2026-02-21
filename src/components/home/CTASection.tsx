"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="min-h-screen flex flex-col justify-center py-40 px-6 text-center snap-center">
      <div className="max-w-2xl mx-auto space-y-8">
        <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-zinc-900 dark:text-white decoration-electric-blue/30 underline decoration-4 underline-offset-8">
            Explora las noticias.
        </h2>
        <p className="text-xl text-zinc-500">
            Venezuela merece información confiable y accesible para todos.
        </p>
        <div className="pt-8">
            <Link href="/noticias">
                <Button size="xl" className="h-16 px-12 rounded-full text-xl font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-2xl hover:shadow-blue-500/20 transition-all">
                    Ver Noticias
                </Button>
            </Link>
        </div>
      </div>
    </section>
  );
}
