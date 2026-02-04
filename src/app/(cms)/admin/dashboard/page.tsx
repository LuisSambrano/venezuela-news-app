import { createClient } from "@/lib/supabase/server";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Newspaper, Users, ShieldAlert, Activity } from "lucide-react";

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
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">Dashboard</h1>
        <p className="text-zinc-500 dark:text-zinc-400">Resumen de operaciones de inteligencia.</p>
      </div>

      {/* KPI GRID */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard 
            title="Noticias Publicadas" 
            value={news.count || 0} 
            icon={Newspaper} 
            trend="+12% vs last month"
        />
        <StatCard 
            title="Prisioneros Registrados" 
            value={prisoners.count || 0} 
            icon={ShieldAlert} 
            trend="Needs Verification"
            alert
        />
        <StatCard 
            title="Actividad de Sistema" 
            value={logs.count || 0} 
            icon={Activity} 
            trend="Events logged"
        />
        <StatCard 
            title="Usuarios Activos" 
            value={1} 
            icon={Users} 
            trend="Admin Access"
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
        <Card className="glass-panel border-zinc-200 dark:border-zinc-800 shadow-sm relative overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
                <Icon className={`h-4 w-4 ${alert ? 'text-red-500' : 'text-blue-500'}`} />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{value}</div>
                <p className="text-xs text-muted-foreground mt-1">{trend}</p>
                {alert && <div className="absolute right-0 top-0 h-full w-1 bg-red-500/20" />}
            </CardContent>
        </Card>
    )
}
