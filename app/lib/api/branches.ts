import { Branch } from "@/app/types/branch";
import { branchesData } from "../mock-data";

export async function getBranches(): Promise<Branch[]> {
  return branchesData;
}

export async function getBranchBySlug(slug: string): Promise<Branch | null> {
  const branches = await getBranches();
  return branches.find((b) => b.slug === slug) || null;
}
