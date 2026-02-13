"use client";

import React, { useState, useEffect, useMemo, useCallback, memo } from 'react';
import { 
  TrendingUp, Activity, 
  ChevronLeft, ChevronRight, Globe2, Cpu, Landmark, ShieldCheck,
  Plus
} from 'lucide-react';
import { m as motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { cn } from "@/lib/utils";
import { HeaderClearance } from "@/components/layout/HeaderClearance";
import { supabase } from '@/lib/supabase';
import { GlassCard } from "@/components/ui/glass-card"; 
import { NewsCard } from "@/components/news/NewsCard"; 
import { DolarService } from "@/lib/services/dolar";
import { Currency } from "@/lib/types/currency";

// ... TYPES (Keep existing)
interface NewsItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image_url: string;
  published_at: string;
  author: string;
  slug: string;
}

// ... NewsStructuredData (Keep existing)
const NewsStructuredData = memo(({ items }: { items: NewsItem[] }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "NewsArticle",
        "headline": item.title,
        "description": item.subtitle,
        "image": item.image_url,
        "datePublished": item.published_at,
        "author": {
          "@type": "Person",
          "name": item.author
        },
        "publisher": {
          "@type": "Organization",
          "name": "M&T Venezuela",
          "logo": {
            "@type": "ImageObject",
            "url": "https://mtvenezuela.com/logo.png"
          }
        }
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
});
NewsStructuredData.displayName = 'NewsStructuredData';

const ArrowUpRight = memo(({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
));
ArrowUpRight.displayName = 'ArrowUpRight';

const HeroCarousel = memo(({ items }: { items: NewsItem[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!items.length) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [items.length]);

  if (!items.length) return null;
  const currentItem = items[currentIndex];

  return (
    <div className="col-span-12 lg:col-span-9 relative aspect-video md:aspect-cinema rounded-[32px] overflow-hidden group shadow-2xl dark:shadow-black/50">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <Image 
            src={currentItem.image_url} 
            alt={currentItem.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 66vw"
          />
          {/* GRADIENT OVERLAY FOR CONTRAST - Standardized */}
          <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
          
          <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full max-w-3xl space-y-4">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="px-4 py-1.5 rounded-full bg-blue-500/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-lg"
            >
              Noticia Destacada
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.05] drop-shadow-2xl"
            >
              {currentItem.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-zinc-200 text-base md:text-xl line-clamp-2 font-medium max-w-2xl"
            >
              {currentItem.subtitle}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* CAROUSEL CONTROLS */}
      <div className="absolute bottom-8 right-8 flex items-center gap-2 z-20">
        <button 
          onClick={() => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)}
          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
        >
          <ChevronLeft size={18} />
        </button>
        <div className="flex gap-1.5 px-3">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                idx === currentIndex ? "w-8 bg-white" : "w-1.5 bg-white/40"
              )}
            />
          ))}
        </div>
        <button 
          onClick={() => setCurrentIndex((prev) => (prev + 1) % items.length)}
          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
});
HeroCarousel.displayName = 'HeroCarousel';

const Sidebar = memo(() => {
  const [rates, setRates] = useState<{ paralelo: Currency | null, bcv: Currency | null }>({ paralelo: null, bcv: null });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const data = await DolarService.getAll();
        const bcvRate = data.find(r => r.code === 'oficial') || null;
        const paraleloRate = data.find(r => r.code === 'paralelo') || null;
        
        setRates({
          paralelo: paraleloRate,
          bcv: bcvRate
        });
      } catch (err) {
        console.error("Failed to load rates", err);
      } finally {
        setLoading(false);
      }
    };
    fetchRates();
  }, []);

  return (
    <aside className="col-span-12 lg:col-span-3 flex flex-col gap-6">
      {/* MONITOR - Using GlassCard */}
      <GlassCard className="flex-1 p-8 flex flex-col justify-between">
        <div className="flex justify-between items-center border-b border-zinc-100 dark:border-white/5 pb-4">
          <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-800 dark:text-zinc-200">Monitor</h3>
          <Activity size={16} className="text-blue-500" />
        </div>
        <div className="space-y-6 pt-4">
          <div className="flex justify-between items-end">
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Paralelo</span>
            <div className="text-right">
              {loading ? (
                <div className="h-8 w-24 bg-zinc-200 dark:bg-zinc-800 animate-pulse rounded" />
              ) : (
                <>
                  <p className="text-2xl font-black tracking-tighter text-zinc-900 dark:text-white">
                    Bs. {rates.paralelo?.sell.toFixed(2) || '---'}
                  </p>
                  <span className="text-[10px] font-bold text-green-600 dark:text-green-400">
                     {rates.paralelo?.variation || '+0.0%'}
                  </span>
                </>
              )}
            </div>
          </div>
          <div className="flex justify-between items-end">
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">BCV</span>
            <div className="text-right">
               {loading ? (
                <div className="h-8 w-24 bg-zinc-200 dark:bg-zinc-800 animate-pulse rounded" />
              ) : (
                <>
                  <p className="text-2xl font-black tracking-tighter text-zinc-900 dark:text-white">
                    Bs. {rates.bcv?.sell.toFixed(2) || '---'}
                  </p>
                  <span className="text-[10px] font-bold text-zinc-500">
                    {rates.bcv?.variation || '0.0%'}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </GlassCard>

      {/* TENDENCIAS - Using GlassCard */}
      <GlassCard className="flex-1 p-8">
        <div className="flex justify-between items-center border-b border-zinc-100 dark:border-white/5 pb-4 mb-4">
          <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-800 dark:text-zinc-200">Trends</h3>
          <TrendingUp size={16} className="text-zinc-400" />
        </div>
        <ul className="space-y-3">
          {['#Esequibo', '#DolarHoy', '#CriptoVzla'].map((tag) => (
            <li key={tag} className="flex justify-between items-center group cursor-pointer hover:translate-x-1 transition-transform">
              <span className="text-[11px] font-bold text-zinc-500 dark:text-zinc-400 uppercase italic">
                {tag}
              </span>
              <ArrowUpRight size={12} className="text-zinc-300 group-hover:text-blue-500 transition-colors" />
            </li>
          ))}
        </ul>
      </GlassCard>
    </aside>
  );
});
Sidebar.displayName = 'Sidebar';

const Pagination = memo(() => (
  <nav className="flex items-center justify-center gap-2 pt-16">
    <button className="w-10 h-10 rounded-full border border-zinc-100 dark:border-white/5 flex items-center justify-center text-zinc-400 hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors">
      <ChevronLeft size={18} />
    </button>
    {[1, 2, 3].map((p) => (
      <button 
        key={p}
        className={cn(
          "w-10 h-10 rounded-full text-xs font-bold transition-all",
          p === 1 
            ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 shadow-lg scale-110" 
            : "text-zinc-400 hover:bg-zinc-50 dark:hover:bg-white/5"
        )}
      >
        {p}
      </button>
    ))}
    <button className="w-10 h-10 rounded-full border border-zinc-100 dark:border-white/5 flex items-center justify-center text-zinc-400 hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors">
      <ChevronRight size={18} />
    </button>
  </nav>
));
Pagination.displayName = 'Pagination';

// --- MAIN FEED ---

export default function NewsFeed() {
  const [limit, setLimit] = useState(6);
  const [activeTag, setActiveTag] = useState('Todas');
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  useEffect(() => {
    async function fetchInitialNews() {
      setLoading(true);
      try {
        let query = supabase
          .from('articles')
          .select('id, title, subtitle, category, image_url, published_at, author, slug', { count: 'exact' })
          .order('published_at', { ascending: false })
          .range(0, 23); // Initial batch of 24

        if (activeTag !== 'Todas') {
          query = query.eq('category', activeTag);
        }

        const { data, error, count } = await query;

        if (error) throw error;
        setNews(data || []);
        setTotalCount(count || 0);
        setLimit(6); // Reset display limit when tag changes
      } catch (err) {
        console.error('Error fetching news:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchInitialNews();
  }, [activeTag]);

  const tags = useMemo(() => [
    { name: 'Todas', icon: <Globe2 size={12} /> },
    { name: 'Economía', icon: <Landmark size={12} /> },
    { name: 'Tecnología', icon: <Cpu size={12} /> },
    { name: 'Política', icon: <ShieldCheck size={12} /> },
  ], []);

  const { heroItems, feedItems } = useMemo(() => {
    return {
      heroItems: news.slice(0, 3),
      feedItems: news.slice(3)
    };
  }, [news]);

  const handleLoadMore = useCallback(async () => {
    const nextLimit = limit + 6;

    // If we need more data than what we have in memory
    if (nextLimit + 3 > news.length && news.length < totalCount) {
      setIsFetchingMore(true);
      try {
        let query = supabase
          .from('articles')
          .select('id, title, subtitle, category, image_url, published_at, author, slug')
          .order('published_at', { ascending: false })
          .range(news.length, news.length + 11); // Fetch next 12

        if (activeTag !== 'Todas') {
          query = query.eq('category', activeTag);
        }

        const { data, error } = await query;
        if (error) throw error;
        setNews(prev => [...prev, ...(data || [])]);
      } catch (err) {
        console.error('Error fetching more news:', err);
      } finally {
        setIsFetchingMore(false);
      }
    }

    setLimit(nextLimit);
  }, [limit, news.length, totalCount, activeTag]);

  const handleTagClick = useCallback((tagName: string) => {
    setActiveTag(tagName);
  }, []);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
    </div>
  );

  return (
    <div className="w-full px-6 lg:px-12 pb-32">
      <HeaderClearance />
      <NewsStructuredData items={news} />
      
      <div className="max-w-7xl mx-auto">
        
        {/* TOP SECTION */}
        <section className="grid grid-cols-12 gap-8 mb-16">
          <HeroCarousel items={heroItems} />
          <Sidebar />
        </section>

        {/* DIVIDER + TAG SELECTOR */}
        <div className="relative py-12 flex flex-col items-center">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-zinc-200 dark:bg-zinc-800 -z-10" />
          <div className="bg-background px-8 flex items-center gap-4 overflow-x-auto no-scrollbar max-w-full">
            {tags.map((tag) => (
              <button
                key={tag.name}
                onClick={() => handleTagClick(tag.name)}
                className={cn(
                  "flex items-center gap-2.5 px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all whitespace-nowrap border shadow-sm",
                  activeTag === tag.name 
                    ? "bg-zinc-900 border-zinc-900 text-white dark:bg-zinc-100 dark:border-zinc-100 dark:text-zinc-900 scale-105" 
                    : "bg-white border-zinc-200 text-zinc-400 hover:border-zinc-400 dark:bg-zinc-900 dark:border-white/10 dark:text-zinc-500"
                )}
              >
                {tag.icon}
                {tag.name}
              </button>
            ))}
          </div>
        </div>

        {/* GRID SECTION */}
        <section className="space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
            <AnimatePresence>
              {feedItems.slice(0, limit).map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
            </AnimatePresence>
          </div>

          {/* VER MAS BUTTON */}
          {(limit < feedItems.length || news.length < totalCount) && (
            <div className="flex justify-center">
              <button 
                onClick={handleLoadMore}
                disabled={isFetchingMore}
                className="group flex items-center gap-3 px-12 py-4 rounded-full border-2 border-zinc-900 dark:border-zinc-100 text-[11px] font-black uppercase tracking-[0.3em] hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-100 dark:hover:text-zinc-900 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Plus size={16} className={cn(
                  "transition-transform duration-500",
                  isFetchingMore ? "animate-spin" : "group-hover:rotate-90"
                )} />
                {isFetchingMore ? 'Cargando...' : 'Ver más noticias'}
              </button>
            </div>
          )}

          {feedItems.length > 24 && limit >= feedItems.length && <Pagination />}
        </section>
      </div>
    </div>
  );
}
