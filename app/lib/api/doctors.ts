import { Doctor } from "@/app/types/doctor";
import { API_URL } from "./utils";

export async function getDoctors(): Promise<Doctor[]> {
  const url = `${API_URL}/api/doctors`;
  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error(`Failed to fetch doctors: ${res.status}`);
    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error("Error in getDoctors:", error);
    return [];
  }
}

export async function getDoctorBySlug(slug: string): Promise<Doctor | null> {
  try {
    const doctors = await getDoctors();
    return doctors.find((d) => d.slug === slug) || null;
  } catch (error) {
    console.error(`Error fetching doctor with slug ${slug}:`, error);
    return null;
  }
}
