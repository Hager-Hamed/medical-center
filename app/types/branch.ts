import { TranslatedField } from "./common";

export interface Branch {
  id: number;
  slug: string;
  name: TranslatedField;
  address: TranslatedField;
  phone?: string;
  map_url?: string;
}
