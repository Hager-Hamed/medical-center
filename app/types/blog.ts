export type Locale = "ar" | "en";

export interface Blog {
  id: number;
  slug: string;
  title: Record<Locale, string>;
  excerpt: Record<Locale, string>;
  content: Record<Locale, string>;
  image: string;
  seo: {
    title: Record<Locale, string>;
    description: Record<Locale, string>;
  };
  created_at: string;
}

export interface BlogResponse {
  data: Blog[];
  meta: {
    current_page: number;
    total_pages: number;
    total_items: number;
  };
}
