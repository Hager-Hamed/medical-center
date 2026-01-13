import { Service } from "@/app/types/service";
import { servicesData } from "../mock-data";

export async function getServices(): Promise<Service[]> {
  return servicesData;
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  const services = await getServices();
  return services.find((s) => s.slug === slug) || null;
}
