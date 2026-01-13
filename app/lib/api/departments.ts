import { Department } from "@/app/types/department";
import { API_URL } from "./utils";

export async function getDepartments(): Promise<Department[]> {
  const url = `${API_URL}/api/departments`;
  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error(`Failed to fetch departments: ${res.status}`);
    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error("Error in getDepartments:", error);
    return [];
  }
}

export async function getDepartmentBySlug(slug: string): Promise<Department | null> {
  try {
    const departments = await getDepartments();
    return departments.find((d) => d.slug === slug) || null;
  } catch (error) {
    console.error(`Error fetching department with slug ${slug}:`, error);
    return null;
  }
}
