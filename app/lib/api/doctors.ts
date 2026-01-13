import { Doctor } from "@/app/types/doctor";
import { doctorsData } from "../mock-data";

export async function getDoctors(): Promise<Doctor[]> {
  return doctorsData;
}

export async function getDoctorBySlug(slug: string): Promise<Doctor | null> {
  const doctors = await getDoctors();
  return doctors.find((d) => d.slug === slug) || null;
}
