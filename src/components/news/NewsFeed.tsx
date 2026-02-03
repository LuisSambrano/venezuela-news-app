"use client";

import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, Activity, Clock, 
  ChevronLeft, ChevronRight, Globe2, Cpu, Landmark, ShieldCheck,
  Plus
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { cn } from "@/lib/utils";
import { HeaderClearance } from "@/components/layout/HeaderClearance";

// --- TYPES ---
interface NewsItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  time: string;
  datePublished: string;
  author: string;
  url: string;
}

// --- SEO STRUCTURED DATA COMPONENT ---
const NewsStructuredData = ({ items }: { items: NewsItem[] }) => {
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
        "image": item.image,
        "datePublished": item.datePublished,
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
};

// --- COMPONENTS ---

const ArrowUpRight = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);

const HeroCarousel = ({ items }: { items: NewsItem[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [items.length]);

  const currentItem = items[currentIndex];

  return (
    <div className="col-span-12 lg:col-span-9 relative aspect-video md:aspect-cinema rounded-[32px] overflow-hidden group shadow-xl">
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
            src={currentItem.image} 
            alt={currentItem.title}
            fill
            className="object-cover"
            priority
          />
          {/* GRADIENT OVERLAY FOR CONTRAST */}
          <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-90" />
          
          <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full max-w-3xl space-y-4">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="px-4 py-1.5 rounded-full bg-blue-600/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-lg"
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
      <div className="absolute bottom-8 right-8 flex items-center gap-2">
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
};

const Sidebar = () => (
  <aside className="col-span-12 lg:col-span-3 flex flex-col gap-6">
    {/* MONITOR */}
    <div className="flex-1 p-8 rounded-[32px] bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-white/5 shadow-sm flex flex-col justify-between">
      <div className="flex justify-between items-center border-b border-zinc-100 dark:border-white/5 pb-4">
        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-800 dark:text-zinc-200">Monitor</h3>
        <Activity size={16} className="text-blue-500" />
      </div>
      <div className="space-y-6 pt-4">
        <div className="flex justify-between items-end">
          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Paralelo</span>
          <div className="text-right">
            <p className="text-2xl font-black tracking-tighter text-zinc-900 dark:text-white">Bs. 52.40</p>
            <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">+1.2%</span>
          </div>
        </div>
        <div className="flex justify-between items-end">
          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">BCV</span>
          <div className="text-right">
            <p className="text-2xl font-black tracking-tighter text-zinc-900 dark:text-white">Bs. 48.15</p>
            <span className="text-[10px] font-bold text-zinc-300">0.0%</span>
          </div>
        </div>
      </div>
    </div>

    {/* TENDENCIAS */}
    <div className="flex-1 p-8 rounded-[32px] bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-white/5 shadow-sm">
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
    </div>
  </aside>
);

const NewsCard = ({ item }: { item: NewsItem }) => (
  <motion.article
    layout
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    viewport={{ once: true }}
    className="flex flex-col gap-5 group cursor-pointer"
  >
    <div className="relative aspect-16/10 rounded-[24px] overflow-hidden border border-zinc-100 dark:border-white/5 shadow-md">
      <Image 
        src={item.image} 
        alt={item.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-zinc-900/5 group-hover:bg-transparent transition-colors" />
    </div>
    <div className="space-y-3 px-1">
      <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-zinc-400">
        <span className="text-blue-600 dark:text-blue-400">{item.category}</span>
        <span className="flex items-center gap-1.5"><Clock size={12} /> {item.time}</span>
      </div>
      <h3 className="text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 line-clamp-2 leading-[1.2] group-hover:text-blue-600 transition-colors">
        {item.title}
      </h3>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed">
        {item.subtitle}
      </p>
    </div>
  </motion.article>
);

const Pagination = () => (
  <nav className="flex items-center justify-center gap-2 pt-16">
    <button className="w-10 h-10 rounded-full border border-zinc-100 dark:border-white/5 flex items-center justify-center text-zinc-400 hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors">
      <ChevronLeft size={18} />
    </button>
    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((p) => (
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
);

// --- MAIN FEED ---

export default function NewsFeed() {
  const [limit, setLimit] = useState(6);
  const [activeTag, setActiveTag] = useState('Todas');

  const tags = [
    { name: 'Todas', icon: < Globe2 size={12} /> },
    { name: 'Economía', icon: <Landmark size={12} /> },
    { name: 'Tecnología', icon: <Cpu size={12} /> },
    { name: 'Política', icon: <ShieldCheck size={12} /> },
  ];

  const heroItems: NewsItem[] = Array.from({ length: 3 }).map((_, i) => ({
    id: `hero-${i}`,
    title: `Noticia Destacada ${i + 1}: Transformación del Mercado Cambiario`,
    subtitle: 'Un análisis exhaustivo sobre los cambios regulatorios y el impacto en la soberanía informativa nacional.',
    category: 'Economía',
    image: `https://images.unsplash.com/photo-${1518546305927 + i}?auto=format&fit=crop&q=80`,
    time: `${i + 1}h ago`,
    datePublished: new Date().toISOString(),
    author: "M&T Intelligence",
    url: `/articulo/hero-${i}`
  }));

  const news: NewsItem[] = Array.from({ length: 12 }).map((_, i) => ({
    id: `${i + 1}`,
    title: `Reporte Especial: Dinámicas del Sector ${i + 1}`,
    subtitle: 'Un análisis exhaustivo sobre los cambios regulatorios y el impacto en la soberanía informativa nacional.',
    category: tags[i % tags.length].name,
    image: `https://images.unsplash.com/photo-${1518546305927 + i + 10}?auto=format&fit=crop&q=80`,
    time: `${i + 1}h ago`,
    datePublished: new Date().toISOString(),
    author: "M&T Intelligence",
    url: `/articulo/${i + 1}`
  }));

  return (
    <main className="min-h-screen bg-[#fcfcfc] dark:bg-zinc-950 px-6 lg:px-12 pb-32">
      <HeaderClearance />
      <NewsStructuredData items={[...heroItems, ...news]} />
      
      <div className="max-w-7xl mx-auto">
        
        {/* TOP SECTION: HERO CAROUSEL + SIDEBAR (80/20) */}
        <section className="grid grid-cols-12 gap-8 mb-16">
          <HeroCarousel items={heroItems} />
          <Sidebar />
        </section>

        {/* DIVIDER + TAG SELECTOR */}
        <div className="relative py-12 flex flex-col items-center">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-zinc-200 dark:bg-zinc-800 -z-10" />
          <div className="bg-[#fcfcfc] dark:bg-zinc-950 px-8 flex items-center gap-4 overflow-x-auto no-scrollbar max-w-full">
            {tags.map((tag) => (
              <button
                key={tag.name}
                onClick={() => setActiveTag(tag.name)}
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
              {news.slice(0, limit).map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
            </AnimatePresence>
          </div>

          {/* VER MAS BUTTON */}
          {limit < 12 && (
            <div className="flex justify-center">
              <button 
                onClick={() => setLimit(12)}
                className="group flex items-center gap-3 px-12 py-4 rounded-full border-2 border-zinc-900 dark:border-zinc-100 text-[11px] font-black uppercase tracking-[0.3em] hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-100 dark:hover:text-zinc-900 transition-all duration-300"
              >
                <Plus size={16} className="group-hover:rotate-90 transition-transform duration-500" />
                Ver más noticias
              </button>
            </div>
          )}

          {/* PAGINATION (1-9) - ONLY VISIBLE AFTER EXPANDING */}
          {limit >= 12 && <Pagination />}
        </section>
      </div>
    </main>
  );
}
