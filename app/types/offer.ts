import { TranslatedField, SEO } from "./common";

export interface Offer {
  id: number;
  slug: string;
  title: TranslatedField;
  description: TranslatedField;
  image?: string;
  seo?: SEO;
  valid_until?: string;
}
