import { TranslatedField, SEO } from "./common";

export interface News {
  id: number;
  slug: string;
  title: TranslatedField;
  content: TranslatedField;
  image?: string;
  seo?: SEO;
  created_at: string;
}
