import { Metadata } from 'next';
import { createClient } from '@/lib/supabase/server';
import { ArrowLeft, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Investigaciones | LibertadVNZL',
  description: 'Reportajes especiales y periodismo de investigación a fondo sobre Venezuela.',
};

// Revalidate every 5 minutes
export const revalidate = 300;

interface Article {
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  image_url: string;
  published_at: string;
  category: string;
}

export default async function InvestigacionPage() {
  const supabase = await createClient();

  // Fetch only articles marked as 'investigacion' or high priority, sorting by publish date
  const { data: articles, error } = await supabase
    .from('articles')
    .select('*')
    .eq('published', true)
    .eq('category', 'Investigación') 
    .order('published_at', { ascending: false });

  if (error) {
    console.error('Error fetching investigations:', error);
  }

  // Si no hay categoría "Investigación" explícita, podríamos hacer fallback a las noticias destacadas o todas
  const renderArticles = articles && articles.length > 0 ? articles : [];

  return (
    <main className="min-h-screen bg-background pt-32 pb-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-6">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al Inicio
          </Link>
          
          <div className="space-y-4 max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-foreground">
              Periodismo de <span className="text-zinc-500 dark:text-zinc-600">Alta Profundidad.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Reportajes exhaustivos, análisis de datos y seguimiento detallado de eventos críticos en Venezuela. 
              Sin agendas ocultas, solo rigor periodístico.
            </p>
          </div>
        </div>

        {/* Content Grid */}
        {renderArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {renderArticles.map((article: Article) => (
              <Link
                key={article.id}
                href={`/noticias/${article.slug}`}
                className="group block"
              >
                <div className="relative aspect-video rounded-xl overflow-hidden border border-zinc-200 dark:border-white/5 mb-3">
                  {article.image_url ? (
                    <Image
                      src={article.image_url}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-zinc-100 dark:bg-zinc-800/50 flex items-center justify-center">
                      <span className="text-zinc-400 text-xs">Sin imagen</span>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 line-clamp-2 group-hover:text-blue-500 transition-colors mb-2">
                  {article.title}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2 mb-3">
                  {article.subtitle}
                </p>
                <div className="flex items-center gap-2 text-xs text-zinc-400 font-medium tracking-widest uppercase">
                  <Clock size={12} />
                  <time dateTime={article.published_at}>
                    {new Date(article.published_at).toLocaleDateString('es-VE', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </time>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center border border-dashed border-border/50 rounded-3xl bg-white/5 backdrop-blur-sm">
            <p className="text-muted-foreground">Las investigaciones profundas toman tiempo. Pronto publicaremos nuevos reportajes.</p>
          </div>
        )}
      </div>
    </main>
  );
}
