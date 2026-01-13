import { Offer } from "@/app/types/offer";
import { API_URL } from "./utils";

export async function getOffers(): Promise<Offer[]> {
  const url = `${API_URL}/api/offers`;
  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error(`Failed to fetch offers: ${res.status}`);
    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error("Error in getOffers:", error);
    return [];
  }
}

export async function getOfferBySlug(slug: string): Promise<Offer | null> {
  try {
    const offers = await getOffers();
    return offers.find((o) => o.slug === slug) || null;
  } catch (error) {
    console.error(`Error fetching offer with slug ${slug}:`, error);
    return null;
  }
}
