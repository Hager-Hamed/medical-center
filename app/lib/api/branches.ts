import { Branch } from "@/app/types/branch";
import { API_URL } from "./utils";

export async function getBranches(): Promise<Branch[]> {
  const url = `${API_URL}/api/branches`;
  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error(`Failed to fetch branches: ${res.status}`);
    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error("Error in getBranches:", error);
    return [];
  }
}

export async function getBranchBySlug(slug: string): Promise<Branch | null> {
  try {
    const branches = await getBranches();
    return branches.find((b) => b.slug === slug) || null;
  } catch (error) {
    console.error(`Error fetching branch with slug ${slug}:`, error);
    return null;
  }
}
