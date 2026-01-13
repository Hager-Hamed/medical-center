import { Blog, BlogResponse } from "@/app/types/blog";
import { API_URL } from "./utils";

export async function getBlogs(): Promise<Blog[]> {
  const url = `${API_URL}/api/blog`;
  try {
    const res = await fetch(url, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch blogs from ${url}: ${res.status} ${res.statusText}`);
    }

    const json: BlogResponse = await res.json();
    return json.data;
  } catch (error) {
    console.error("Error in getBlogs:", error);
    throw error;
  }
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  try {
    const blogs = await getBlogs();
    return blogs.find((b) => b.slug === slug) || null;
  } catch (error) {
    console.error(`Error fetching blog with slug ${slug}:`, error);
    return null;
  }
}
