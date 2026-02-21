import { createClient } from "@/lib/supabase/server";
import { Newspaper, Users, ShieldAlert, Activity } from "lucide-react";
import { CountUp } from "@/components/ui/CountUp";

export default async function DashboardPage() {
  const supabase = await createClient();

  // Parallel Fetching for Dashboard Stats
  const [news, prisoners, logs] = await Promise.all([
    supabase.from("articles").select("id", { count: "exact", head: true }),
    supabase.from("prisoners").select("id", { count: "exact", head: true }),
    supabase.from("audit_logs").select("id", { count: "exact", head: true }),
  ]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black tracking-tight text-white uppercase italic">
           Dashboard
        </h1>
        <p className="text-zinc-500 text-sm mt-2">Resumen general del sistema.</p>
      </div>

      {/* KPI GRID */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard 
            title="NOTICIAS" 
            value={news.count || 0} 
            icon={Newspaper} 
            trend="Total Publicado"
        />
        <StatCard 
            title="PRISIONEROS" 
            value={prisoners.count || 0} 
            icon={ShieldAlert} 
            trend="Registrados"
            alert
        />
        <StatCard 
            title="ACTIVIDAD" 
            value={logs.count || 0} 
            icon={Activity} 
            trend="Eventos Logueados"
        />
        <StatCard 
            title="USUARIOS" 
            value={1} 
            icon={Users} 
            trend="Activos Ahora"
        />
      </div>
    </div>
  );
}

interface StatCardProps {
    title: string;
    value: number;
    icon: React.ElementType;
    trend: string;
    alert?: boolean;
}

function StatCard({ title, value, icon: Icon, trend, alert }: StatCardProps) {
    return (
        <div className="relative group overflow-hidden rounded-lg border border-white/5 bg-zinc-900/50 backdrop-blur-sm p-6 hover:border-white/10 transition-colors">
            {alert && <div className="absolute inset-0 bg-red-900/5 animate-pulse-slow pointer-events-none" />}
            
            <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 group-hover:text-zinc-300 transition-colors">
                    {title}
                </span>
                <Icon className={`h-4 w-4 ${alert ? 'text-red-500 animate-pulse' : 'text-blue-500/50 group-hover:text-blue-400'}`} />
            </div>
            
            <div className="relative">
                <CountUp 
                  target={value} 
                  className="text-4xl font-mono font-light text-white tracking-tighter" 
                  duration={1.5}
                />
                <div className={`text-[9px] font-bold uppercase mt-2 w-fit px-2 py-0.5 rounded-sm ${alert ? 'bg-red-900/30 text-red-400' : 'bg-white/5 text-zinc-500'}`}>
                    {trend}
                </div>
            </div>

            {/* DECORATIVE CORNERS */}
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/10" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/10" />
        </div>
    )
}
