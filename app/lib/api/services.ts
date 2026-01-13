import { Service } from "@/app/types/service";
import { API_URL } from "./utils";

export async function getServices(): Promise<Service[]> {
  const url = `${API_URL}/api/services`;
  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error(`Failed to fetch services: ${res.status}`);
    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error("Error in getServices:", error);
    return [];
  }
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  try {
    const services = await getServices();
    return services.find((s) => s.slug === slug) || null;
  } catch (error) {
    console.error(`Error fetching service with slug ${slug}:`, error);
    return null;
  }
}
