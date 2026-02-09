import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus, Newspaper, Globe, PenLine } from "lucide-react";
import NewsTable from "./components/NewsTable";

export default async function NewsAdminPage() {
  const supabase = await createClient();

  const { data: articles } = await supabase
    .from("articles")
    .select("*")
    .order("published_at", { ascending: false });

  // Calculate stats
  const totalArticles = articles?.length || 0;
  const publishedCount = articles?.filter(a => a.published !== false).length || 0;
  const draftCount = totalArticles - publishedCount;
  const manualCount = articles?.filter(a => a.source === "manual").length || 0;
  const aggregatedCount = totalArticles - manualCount;

  // Category breakdown
  const categories: Record<string, number> = {};
  articles?.forEach(a => {
    categories[a.category] = (categories[a.category] || 0) + 1;
  });

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">Noticias</h1>
          <p className="text-zinc-500 dark:text-zinc-400">Gestión de contenido de inteligencia.</p>
        </div>
        <Link href="/admin/news/new">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6">
            <Plus className="mr-2 h-4 w-4" />
            Nueva Noticia
          </Button>
        </Link>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <StatCard icon={<Newspaper className="h-4 w-4" />} label="Total" value={totalArticles} />
        <StatCard icon={<div className="w-2 h-2 rounded-full bg-emerald-500" />} label="Publicados" value={publishedCount} color="emerald" />
        <StatCard icon={<div className="w-2 h-2 rounded-full bg-amber-500" />} label="Borradores" value={draftCount} color="amber" />
        <StatCard icon={<PenLine className="h-4 w-4" />} label="Manuales" value={manualCount} color="blue" />
        <StatCard icon={<Globe className="h-4 w-4" />} label="Agregados" value={aggregatedCount} color="purple" />
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2">
        {Object.entries(categories)
          .sort(([, a], [, b]) => b - a)
          .map(([cat, count]) => (
            <span key={cat} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white/5 text-zinc-400 border border-white/10">
              {cat} <span className="text-zinc-600">({count})</span>
            </span>
          ))
        }
      </div>

      <div className="glass-panel rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
        <NewsTable articles={articles || []} />
      </div>
    </div>
  );
}

function StatCard({ icon, label, value, color }: { icon: React.ReactNode; label: string; value: number; color?: string }) {
  const colorMap: Record<string, string> = {
    emerald: "text-emerald-400",
    amber: "text-amber-400",
    blue: "text-blue-400",
    purple: "text-purple-400",
  };

  return (
    <div className="p-4 rounded-xl glass-panel border border-zinc-200 dark:border-zinc-800">
      <div className="flex items-center gap-2 text-zinc-500 mb-1">
        {icon}
        <span className="text-[10px] font-mono uppercase tracking-wider">{label}</span>
      </div>
      <p className={`text-2xl font-bold font-mono ${color ? colorMap[color] : "text-white"}`}>{value}</p>
    </div>
  );
}
