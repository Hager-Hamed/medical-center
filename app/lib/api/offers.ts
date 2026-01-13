import { Offer } from "@/app/types/offer";
import { offersData } from "../mock-data";

export async function getOffers(): Promise<Offer[]> {
  return offersData;
}

export async function getOfferBySlug(slug: string): Promise<Offer | null> {
  const offers = await getOffers();
  return offers.find((o) => o.slug === slug) || null;
}
