import { MetadataRoute } from 'next'
import { createClient } from '@/lib/supabase/server'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://venezuelanews.app'
  const supabase = await createClient()

  const { data: articles } = await supabase
    .from('articles')
    .select('slug, published_at')
    .eq('published', true)
    .order('published_at', { ascending: false })
    .limit(1000)

  const newsUrls = (articles || []).map((article) => ({
    url: `${baseUrl}/noticias/${article.slug}`,
    lastModified: new Date(article.published_at),
    changeFrequency: 'hourly' as const,
    priority: 0.8,
  }))

  return newsUrls
}
