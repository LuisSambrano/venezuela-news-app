import React from 'react';
import { ShieldAlert, Users, Search, AlertTriangle } from 'lucide-react';
import { HeaderClearance } from "@/components/layout/HeaderClearance";
import { createClient } from '@/lib/supabase/server';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface Prisoner {
    id: string;
    full_name: string;
    national_id: string;
    status: string;
}

export default async function RegistryDashboard({ searchParams }: { searchParams?: { q?: string } }) {
  const supabase = await createClient();
  const query = searchParams?.q || '';

  // Fetch Stats (Parallel)
  const [prisoners] = await Promise.all([
    supabase.from('prisoners').select('id', { count: 'exact', head: true }),
  ]);

  // Fetch Search Results if Query exists
  let searchResults: Prisoner[] = [];
  if (query.length > 2) {
      const { data } = await supabase
        .from('prisoners')
        .select('*')
        .or(`full_name.ilike.%${query}%,national_id.ilike.%${query}%`)
        .limit(10);
      searchResults = data as Prisoner[] || [];
  }

  return (
    <main className="max-w-[1550px] mx-auto p-6 lg:p-10 space-y-24 pb-40">
      <HeaderClearance />
      
      {/* HEADER */}
      <header className="max-w-4xl space-y-10 px-6">
         <h1 className="text-6xl md:text-[140px] font-black uppercase tracking-tighter leading-none italic">Registro <br/> Central</h1>
         <p className="text-3xl md:text-4xl font-light text-muted-foreground italic border-l-8 border-red-600 pl-12 leading-tight">&quot;Repositorio inmutable de evidencias técnicas para la reconstrucción democrática&quot;.</p>
      </header>

      {/* SEARCH INTERFACE */}
      <section className="px-6">
        <form className="max-w-2xl relative group">
            <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            <Input 
                name="q"
                defaultValue={query}
                placeholder="BUSCAR POR NOMBRE, C.I. O Ubicación..." 
                className="h-20 rounded-full text-xl px-8 glass-panel border-2 border-zinc-200 dark:border-white/10 shadow-2xl focus:border-red-500 transition-all font-mono uppercase placeholder:text-zinc-500"
            />
            <Button type="submit" size="icon" className="absolute right-3 top-3 h-14 w-14 rounded-full bg-red-600 hover:bg-red-700">
                <Search className="h-6 w-6" />
            </Button>
        </form>

        {/* SEARCH RESULTS */}
        {query && (
            <div className="mt-12 space-y-4">
                <h3 className="text-xl font-bold uppercase tracking-widest text-zinc-500">Resultados de Búsqueda ({searchResults.length})</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {searchResults.map((prisoner) => (
                        <div key={prisoner.id} className="glass-panel p-6 rounded-2xl flex items-start gap-4 border border-zinc-200 dark:border-white/5 hover:border-red-500/50 transition-colors">
                            <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center shrink-0">
                                <Users className="text-zinc-400" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">{prisoner.full_name}</h4>
                                <p className="text-sm font-mono text-zinc-500">{prisoner.national_id ? `C.I. ${prisoner.national_id}` : 'SIN ID'}</p>
                                <div className="mt-2 flex gap-2">
                                    <span className="px-2 py-1 rounded bg-red-100 dark:bg-red-900/30 text-red-600 text-[10px] font-bold uppercase tracking-wider">{prisoner.status}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                    {searchResults.length === 0 && (
                        <div className="col-span-2 p-12 text-center text-zinc-500 border border-dashed border-zinc-200 rounded-2xl">
                            No se encontraron registros que coincidan con &quot;{query}&quot;.
                        </div>
                    )}
                </div>
            </div>
        )}
      </section>

      {/* STATISTICS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10">
         {[
           { title: "Detenciones", count: `${prisoners.count || 0} Registros`, icon: <ShieldAlert className="text-red-600 w-10 h-10" /> },
           { title: "Verificados", count: "0 Confirmados", icon: <Users className="text-blue-600 w-10 h-10" /> },
           { title: "Alertas", count: "En Proceso", icon: <AlertTriangle className="text-orange-600 w-10 h-10" /> }
         ].map((cat, i) => (
           <div key={i} className="glass-panel p-12 rounded-[64px] shadow-xl group hover:border-blue-500 transition-all flex flex-col justify-between h-[380px]">
              <div className="w-20 h-20 rounded-[32px] bg-zinc-50 dark:bg-white/5 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">{cat.icon}</div>
              <div className="space-y-4">
                 <h3 className="text-4xl font-black uppercase tracking-tighter leading-none italic">{cat.title}</h3>
                 <p className="text-muted-foreground font-bold uppercase text-[11px] tracking-[0.3em]">{cat.count}</p>
              </div>
           </div>
         ))}
      </section>
    </main>
  );
}
