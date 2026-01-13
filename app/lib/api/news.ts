import { News } from "@/app/types/news";
import { newsData } from "../mock-data";

export async function getNews(): Promise<News[]> {
  return newsData;
}

export async function getNewsBySlug(slug: string): Promise<News | null> {
  const newsList = await getNews();
  return newsList.find((n) => n.slug === slug) || null;
}
