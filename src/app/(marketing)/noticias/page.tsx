import NewsFeed from "@/components/news/NewsFeed";
import { DolarService } from "@/lib/services/dolar";

export default async function NewsPage() {
  const rates = await DolarService.getAll();
  return <NewsFeed initialRates={rates} />;
}
