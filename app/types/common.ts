

// أي field نصي مترجم
export type Locale = "ar" | "en";

export interface TranslatedField {
  ar: string;
  en: string;
}

// SEO لكل Item
export interface SEO {
  title: TranslatedField;
  description: TranslatedField;
  keywords?: TranslatedField;
}

// Pagination Metadata
export interface Meta {
  current_page: number;
  total_pages: number;
  total_items: number;
}
