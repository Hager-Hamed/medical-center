import { TranslatedField, SEO } from "./common";

export interface Department {
  id: number;
  slug: string;
  name: TranslatedField;
  description: TranslatedField;
  image?: string;
  seo?: SEO;
}
