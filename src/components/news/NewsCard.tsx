"use client";

import { memo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Clock } from 'lucide-react';

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

export const NewsCard = memo(({ item }: { item: NewsItem }) => {
  const timeAgo = (date: string) => {
    try {
      const dateObj = new Date(date);
      if (isNaN(dateObj.getTime())) return 'Recently';

      const seconds = Math.floor((new Date().getTime() - dateObj.getTime()) / 1000);
      if (seconds < 60) return 'Just now';
      if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
      if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
      return `${Math.floor(seconds / 86400)}d ago`;
    } catch {
      return 'Recently';
    }
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      viewport={{ once: true }}
      className="flex flex-col gap-5 group cursor-pointer"
    >
      <div className="relative aspect-16/10 rounded-[24px] overflow-hidden border border-zinc-200 dark:border-white/5 shadow-md hover:shadow-xl transition-all duration-500">
        <Image 
          src={item.image_url} 
          alt={item.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Unified Overlay: No more hardcoded colors, using semantic overlay */}
        <div className="absolute inset-0 bg-zinc-950/10 group-hover:bg-transparent transition-colors" />
        
        {/* Noise Texture for Consistency */}
        <div className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>
      <div className="space-y-3 px-1">
        <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-zinc-400">
          <span className="text-blue-600 dark:text-blue-400 group-hover:text-blue-500 transition-colors">{item.category}</span>
          <span className="flex items-center gap-1.5"><Clock size={12} /> {timeAgo(item.published_at)}</span>
        </div>
        <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 line-clamp-2 leading-[1.2] group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {item.title}
        </h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed font-medium">
          {item.subtitle}
        </p>
      </div>
    </motion.article>
  );
});

NewsCard.displayName = 'NewsCard';
