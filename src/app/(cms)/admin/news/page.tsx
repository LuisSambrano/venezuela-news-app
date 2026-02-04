import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import NewsTable from "./components/NewsTable";

export default async function NewsAdminPage() {
  const supabase = await createClient();

  const { data: articles } = await supabase
    .from("articles")
    .select("*")
    .order("published_at", { ascending: false });

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

      <div className="glass-panel rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
        <NewsTable articles={articles || []} />
      </div>
    </div>
  );
}
