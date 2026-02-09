/**
 * Seed script: Fetches real Venezuela news from GNews API
 * and inserts them into the Supabase `articles` table.
 *
 * Usage:
 *   GNEWS_API_KEY=xxx npx ts-node scripts/seed-articles.ts
 *
 * Or with dotenvx (if .env.local has GNEWS_API_KEY):
 *   npx ts-node scripts/seed-articles.ts
 */
import dotenv from "dotenv";
import path from "path";
import { createClient } from "@supabase/supabase-js";

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const GNEWS_API_KEY = process.env.GNEWS_API_KEY!;

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY || !GNEWS_API_KEY) {
  console.error("❌ Missing env vars. Need: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, GNEWS_API_KEY");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

interface GNewsArticle {
  title: string;
  description: string;
  content: string;
  url: string;
  image: string;
  publishedAt: string;
  source: {
    name: string;
    url: string;
  };
}

interface GNewsResponse {
  totalArticles: number;
  articles: GNewsArticle[];
}

/**
 * Generates a URL-friendly slug from a title string.
 * Handles Spanish characters (accents, ñ) gracefully.
 */
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics (accents)
    .replace(/ñ/g, "n")
    .replace(/[^a-z0-9\s-]/g, "") // Remove non-alphanumeric
    .replace(/\s+/g, "-") // Spaces to hyphens
    .replace(/-+/g, "-") // Collapse multiple hyphens
    .replace(/^-|-$/g, "") // Trim leading/trailing hyphens
    .slice(0, 80); // Limit length
}

/**
 * Maps GNews categories to our app's categories based on keyword analysis.
 */
function inferCategory(title: string, description: string): string {
  const text = `${title} ${description}`.toLowerCase();

  if (/dólar|bolívar|inflación|economía|petróleo|precio|banco|mercado|pib|salario|deuda/.test(text)) {
    return "Economía";
  }
  if (/maduro|guaidó|elección|gobierno|oposición|diputad|asamblea|política|sanciones|diplomacia/.test(text)) {
    return "Política";
  }
  if (/bitcoin|cripto|usdt|blockchain|minería digital|binance/.test(text)) {
    return "Cripto";
  }
  if (/tecnología|internet|digital|app|startup|innovación|ia|inteligencia artificial/.test(text)) {
    return "Tecnología";
  }
  return "General";
}

/**
 * Fetches news from GNews API for Venezuela in Spanish.
 * Makes multiple requests to get ~20 unique articles.
 */
async function fetchVenezuelaNews(): Promise<GNewsArticle[]> {
  const allArticles: GNewsArticle[] = [];
  const seenTitles = new Set<string>();

  // Fetch general Venezuela news
  const queries = [
    "Venezuela",
    "Venezuela economía",
    "Venezuela política",
  ];

  for (const query of queries) {
    try {
      const url = `https://gnews.io/api/v4/search?q=${encodeURIComponent(query)}&lang=es&country=ve&max=10&apikey=${GNEWS_API_KEY}`;
      const response = await fetch(url);

      if (!response.ok) {
        console.warn(`⚠️  GNews returned ${response.status} for query "${query}"`);
        continue;
      }

      const data: GNewsResponse = await response.json();
      console.log(`📡 Fetched ${data.articles.length} articles for "${query}"`);

      for (const article of data.articles) {
        // Deduplicate by title
        const normalizedTitle = article.title.toLowerCase().trim();
        if (!seenTitles.has(normalizedTitle)) {
          seenTitles.add(normalizedTitle);
          allArticles.push(article);
        }
      }
    } catch (error) {
      console.error(`❌ Error fetching "${query}":`, error);
    }
  }

  return allArticles;
}

/**
 * Transforms GNews articles into Supabase article rows and inserts them.
 */
async function seedArticles() {
  console.log("\n🚀 Iniciando seed de noticias reales de Venezuela...\n");

  const articles = await fetchVenezuelaNews();

  if (articles.length === 0) {
    console.error("❌ No se obtuvieron artículos de GNews. Verifica tu API key.");
    process.exit(1);
  }

  console.log(`\n📰 Total artículos únicos: ${articles.length}\n`);

  // Transform to our schema
  const rows = articles.map((article) => ({
    title: article.title,
    subtitle: article.description || article.title,
    content: buildArticleContent(article),
    category: inferCategory(article.title, article.description),
    image_url: article.image || "https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=1200",
    slug: generateSlug(article.title),
    author: article.source.name || "M&T Intelligence",
    published_at: article.publishedAt,
  }));

  // Insert in batch
  const { data, error } = await supabase
    .from("articles")
    .upsert(rows, { onConflict: "slug" })
    .select("id, title, category");

  if (error) {
    console.error("❌ Error insertando artículos:", error.message);
    process.exit(1);
  }

  console.log(`\n✅ ${data.length} artículos insertados exitosamente:\n`);

  // Summary by category
  const categories: Record<string, number> = {};
  for (const article of data) {
    categories[article.category] = (categories[article.category] || 0) + 1;
    console.log(`  📄 [${article.category}] ${article.title}`);
  }

  console.log("\n📊 Resumen por categoría:");
  for (const [cat, count] of Object.entries(categories)) {
    console.log(`  • ${cat}: ${count} artículos`);
  }

  console.log("\n🎉 ¡Seed completado! Las noticias ya están visibles en la app.\n");
}

/**
 * Builds markdown content for an article from GNews data.
 * GNews free tier provides truncated content, so we create
 * a well-structured article with source attribution.
 */
function buildArticleContent(article: GNewsArticle): string {
  const content = article.content || article.description || "";
  // GNews truncates content with "... [XXX chars]" - clean it up
  const cleanContent = content.replace(/\.\.\.\s*\[\d+ chars\]$/, "...");

  return `${cleanContent}

---

*Fuente: [${article.source.name}](${article.url})*
*Publicado: ${new Date(article.publishedAt).toLocaleDateString("es-VE", { year: "numeric", month: "long", day: "numeric" })}*`;
}

// Execute
seedArticles().catch((err) => {
  console.error("❌ Error fatal:", err);
  process.exit(1);
});
