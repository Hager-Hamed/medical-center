import { News } from "@/app/types/news";
import { API_URL } from "./utils";

export async function getNews(): Promise<News[]> {
  const url = `${API_URL}/api/news`;
  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error(`Failed to fetch news: ${res.status}`);
    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error("Error in getNews:", error);
    return [];
  }
}

export async function getNewsBySlug(slug: string): Promise<News | null> {
  try {
    const newsList = await getNews();
    return newsList.find((n) => n.slug === slug) || null;
  } catch (error) {
    console.error(`Error fetching news with slug ${slug}:`, error);
    return null;
  }
}
