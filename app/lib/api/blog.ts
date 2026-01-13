import { Blog } from "@/app/types/blog";
import { blogsData } from "../mock-data";

export async function getBlogs(): Promise<Blog[]> {
  // Simulate API delay
  // await new Promise((resolve) => setTimeout(resolve, 100));
  return blogsData;
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  const blogs = await getBlogs();
  return blogs.find((b) => b.slug === slug) || null;
}
