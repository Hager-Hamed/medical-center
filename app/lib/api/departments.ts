import { Department } from "@/app/types/department";
import { departmentsData } from "../mock-data";

export async function getDepartments(): Promise<Department[]> {
  return departmentsData;
}

export async function getDepartmentBySlug(slug: string): Promise<Department | null> {
  const departments = await getDepartments();
  return departments.find((d) => d.slug === slug) || null;
}
