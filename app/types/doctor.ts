import { TranslatedField, SEO } from "./common";

export interface Doctor {
  id: number;
  slug: string;
  name: TranslatedField;
  specialty: TranslatedField;
  bio: TranslatedField;
  image?: string;
  seo?: SEO;
}
