import { supabase } from '@/lib/supabase';
import { DolarService } from '@/lib/services/dolar';
import { Currency } from '@/lib/types/currency';
import NewsFeed from "@/components/news/NewsFeed";
import { logger } from "@/lib/logger";

export const revalidate = 60; // ISR: Revalidate every 60 seconds

async function getInitialNews() {
  try {
    const { data, error, count } = await supabase
      .from('articles')
      .select('id, title, subtitle, category, image_url, published_at, author, slug', { count: 'exact' })
      .order('published_at', { ascending: false })
      .range(0, 23);

    if (error) {
      logger.error("Error fetching initial news", { error });
      return { news: [], count: 0 };
    }

    return { news: data || [], count: count || 0 };
  } catch (error) {
    logger.error("Unexpected error fetching initial news", { error });
    return { news: [], count: 0 };
  }
}

async function getInitialRates() {
  try {
    const data = await DolarService.getAll();
    const bcvRate = data.find(r => r.code === 'oficial') || null;
    const paraleloRate = data.find(r => r.code === 'paralelo') || null;

    return {
      bcv: bcvRate,
      paralelo: paraleloRate
    };
  } catch (error) {
    logger.error("Error fetching initial rates", { error });
    return { bcv: null, paralelo: null };
  }
}

export default async function NewsPage() {
  const { news, count } = await getInitialNews();
  const rates = await getInitialRates();

  return (
    <NewsFeed
      initialNews={news}
      initialTotalCount={count}
      initialRates={rates}
    />
  );
}
