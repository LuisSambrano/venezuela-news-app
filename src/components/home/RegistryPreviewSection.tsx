import { Newspaper } from "lucide-react";

export default function RegistryPreviewSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center py-32 px-6 bg-zinc-900 dark:bg-black text-white rounded-[3rem] my-10 mx-4 md:mx-10 shadow-2xl relative overflow-hidden snap-center">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-8">
                <div className="inline-flex items-center gap-2 text-blue-400 font-mono text-sm tracking-widest uppercase">
                    <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                    Últimas Noticias
                </div>
                
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9]">
                    Información <br/> verificada.
                </h2>
                
                <p className="text-xl text-zinc-400 font-light leading-relaxed">
                    Cubrimos lo que pasa en Venezuela con rigor periodístico. Cada artículo es verificado antes de su publicación.
                </p>
            </div>

            <div className="relative h-[400px] w-full bg-zinc-800/50 rounded-2xl border border-white/10 p-8 flex items-center justify-center bg-[url('/grid.svg')]">
                <div className="text-center space-y-4">
                    <Newspaper className="w-16 h-16 mx-auto text-zinc-600" />
                    <div className="text-6xl font-mono font-black text-zinc-700">M&T</div>
                    <div className="text-sm text-zinc-500 uppercase tracking-widest">Noticias Venezuela</div>
                </div>
            </div>
        </div>
    </section>
  );
}
