import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, User, Tag } from "lucide-react";
import type { Metadata } from "next";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Generates dynamic metadata for SEO and OG tags
 * based on the article content fetched from Supabase.
 */
export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const supabase = await createClient();

  const { data: article } = await supabase
    .from("articles")
    .select("title, subtitle, image_url, category, author")
    .eq("slug", slug)
    .eq("published", true)
    .single();

  if (!article) {
    return { title: "Artículo no encontrado | LibertadVNZL" };
  }

  return {
    title: `${article.title} | LibertadVNZL`,
    description: article.subtitle,
    openGraph: {
      title: article.title,
      description: article.subtitle,
      type: "article",
      url: `https://venezuelanews.app/noticias/${slug}`,
      images: article.image_url ? [{ url: article.image_url, width: 1200, height: 630 }] : [],
      siteName: "LibertadVNZL",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.subtitle,
      images: article.image_url ? [article.image_url] : [],
    },
    alternates: {
      canonical: `https://venezuelanews.app/noticias/${slug}`,
    }
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const supabase = await createClient();

  const { data: article } = await supabase
    .from("articles")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .single();

  if (!article) {
    notFound();
  }

  // Fetch related articles from the same category, excluding the current one
  const { data: relatedArticles } = await supabase
    .from("articles")
    .select("id, title, subtitle, slug, image_url, category, published_at")
    .eq("category", article.category)
    .eq("published", true)
    .neq("id", article.id)
    .order("published_at", { ascending: false })
    .limit(3);

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString("es-VE", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return "Fecha desconocida";
    }
  };

  // Simple markdown-to-HTML paragraphs for content rendering
  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, i) => {
      const trimmed = block.trim();
      if (!trimmed) return null;

      if (trimmed.startsWith("### ")) {
        return (
          <h3 key={i} className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-3">
            {trimmed.slice(4)}
          </h3>
        );
      }
      if (trimmed.startsWith("## ")) {
        return (
          <h2 key={i} className="text-2xl font-bold text-zinc-900 dark:text-white mt-10 mb-4">
            {trimmed.slice(3)}
          </h2>
        );
      }
      if (trimmed.startsWith("# ")) {
        return (
          <h2 key={i} className="text-2xl font-bold text-zinc-900 dark:text-white mt-10 mb-4">
            {trimmed.slice(2)}
          </h2>
        );
      }
      if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
        const items = trimmed.split("\n").filter((line) => line.startsWith("- ") || line.startsWith("* "));
        return (
          <ul key={i} className="list-disc list-inside space-y-1 text-zinc-600 dark:text-zinc-300 my-4">
            {items.map((item, j) => (
              <li key={j}>{item.slice(2)}</li>
            ))}
          </ul>
        );
      }
      if (trimmed.startsWith("> ")) {
        return (
          <blockquote key={i} className="border-l-4 border-blue-500 pl-4 py-2 my-6 text-zinc-600 dark:text-zinc-400 italic bg-zinc-100/50 dark:bg-white/5 rounded-r-lg">
            {trimmed.slice(2)}
          </blockquote>
        );
      }

      // Render bold text within paragraphs
      const parts = trimmed.split(/(\*\*[^*]+\*\*)/g);
      return (
        <p key={i} className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-300 mb-4">
          {parts.map((part, j) => {
            if (part.startsWith("**") && part.endsWith("**")) {
              return <strong key={j} className="text-zinc-900 dark:text-white font-semibold">{part.slice(2, -2)}</strong>;
            }
            return part;
          })}
        </p>
      );
    });
  };

  return (
    <main className="min-h-screen">
      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "NewsArticle",
              "headline": article.title,
              "image": article.image_url ? [article.image_url] : [],
              "datePublished": article.published_at,
              "dateModified": article.published_at,
              "author": [{
                  "@type": "Organization",
                  "name": article.author,
                  "url": "https://venezuelanews.app"
              }],
              "publisher": {
                  "@type": "Organization",
                  "name": "LibertadVNZL",
                  "logo": {
                      "@type": "ImageObject",
                      "url": "https://venezuelanews.app/icon.png"
                  }
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [{
                "@type": "ListItem",
                "position": 1,
                "name": "Inicio",
                "item": "https://venezuelanews.app"
              },{
                "@type": "ListItem",
                "position": 2,
                "name": "Noticias",
                "item": "https://venezuelanews.app/noticias"
              },{
                "@type": "ListItem",
                "position": 3,
                "name": article.category,
                "item": `https://venezuelanews.app/noticias?category=${encodeURIComponent(article.category)}`
              },{
                "@type": "ListItem",
                "position": 4,
                "name": article.title
              }]
            }
          ])
        }}
      />

      {/* Hero Image */}
      {article.image_url && (
        <div className="relative w-full h-[40vh] md:h-[50vh] lg:h-[60vh]">
          <Image
            src={article.image_url}
            alt={article.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />
          <div className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

          {/* Back Button */}
          <Link
            href="/noticias"
            className="absolute top-6 left-6 z-20 flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            Volver
          </Link>
        </div>
      )}

      {/* Article Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 -mt-32 md:-mt-40">
        {/* Category Badge */}
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-blue-600/20 text-blue-400 border border-blue-500/20">
            <Tag size={12} />
            {article.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1] mb-6">
          {article.title}
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-8 font-medium">
          {article.subtitle}
        </p>

        {/* Author & Date */}
        <div className="flex flex-wrap items-center gap-4 pb-8 mb-8 border-b border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center gap-2 text-sm text-zinc-500">
            <User size={14} />
            <span>{article.author}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-zinc-500">
            <Clock size={14} />
            <time dateTime={article.published_at}>{formatDate(article.published_at)}</time>
          </div>
        </div>

        {/* Article Body */}
        <article className="prose-custom">
          {renderContent(article.content || "")}
        </article>

        {/* Related Articles */}
        {relatedArticles && relatedArticles.length > 0 && (
          <section className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-6">
              Más en {article.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((related) => (
                <Link
                  key={related.id}
                  href={`/noticias/${related.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-video rounded-xl overflow-hidden border border-zinc-200 dark:border-white/5 mb-3">
                    {related.image_url && (
                      <Image
                        src={related.image_url}
                        alt={related.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                  </div>
                  <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 line-clamp-2 group-hover:text-blue-500 transition-colors">
                    {related.title}
                  </h3>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Bottom Spacer */}
        <div className="h-20" />
      </div>
    </main>
  );
}
