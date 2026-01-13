
// import { Blog } from "@/app/types/blog";

// export async function getBlogs(): Promise<Blog[]> {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blog`);
//   const json = await res.json();
//   return json.data;
// }

import { BlogResponse } from "@/app/types/blog";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getBlogs() {
  const res = await fetch(`${API_URL}/api/blog`, {
    cache: "no-store", // أثناء التطوير
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  const json: BlogResponse = await res.json();
  return json.data;
}


// export async function getBlogs(): Promise<Blog[]> {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blog`, {
//     cache: "no-store",
//   });
//   if (!res.ok) throw new Error("Failed to fetch blogs");
//   const json = await res.json();
//   return json.data as Blog[];
// }


// export async function getBlogBySlug(slug: string): Promise<Blog | null> {
//   const blogs = await getBlogs();
//   const blog = blogs.find((b) => b.slug === slug);
//   return blog || null;
// }


// // lib/api.ts
// import { Blog } from "@/app/types/blog";
// import { Service } from "@/app/types/service";
// import { Doctor } from "@/app/types/doctor";
// import { Department } from "@/app/types/department";
// import { Branch } from "@/app/types/branch";
// import { Offer } from "@/app/types/offer";
// import { News } from "@/app/types/news";

// // ==========================
// // Base URL حسب البيئة
// // ==========================
// // const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";
// const BASE_URL =
//   process.env.NEXT_PUBLIC_API_URL || (process.env.NODE_ENV === "development" ? "http://localhost:3000" : "");

// // ==========================
// // Generic fetch helper
// // ==========================
// async function fetchAPI<T>(endpoint: string): Promise<T> {
//   const url = `${BASE_URL}${endpoint}`;
//   try {
//     const res = await fetch(url, { cache: "no-store" });

//     if (!res.ok) {
//       console.error("Fetch failed:", res.status, res.statusText, "URL:", url);
//       throw new Error(`Failed to fetch: ${endpoint}`);
//     }

//     const json = await res.json();
//     return json.data ?? json; // يدعم API اللي بيرجع data أو array مباشر
//   } catch (err) {
//     console.error("Error fetching:", url, err);
//     throw err;
//   }
// }

// // ==========================
// // Blogs
// // ==========================
// export async function getBlogs(): Promise<Blog[]> {
//   return fetchAPI<Blog[]>("/api/blog");
// }

// export async function getBlogBySlug(slug: string): Promise<Blog> {
//   return fetchAPI<Blog>(`/api/blog/${slug}`);
// }

// // ==========================
// // Services
// // ==========================
// export async function getServices(): Promise<Service[]> {
//   return fetchAPI<Service[]>("/api/services");
// }

// export async function getServiceBySlug(slug: string): Promise<Service> {
//   return fetchAPI<Service>(`/api/services/${slug}`);
// }

// // ==========================
// // Doctors
// // ==========================
// export async function getDoctors(): Promise<Doctor[]> {
//   return fetchAPI<Doctor[]>("/api/doctors");
// }

// export async function getDoctorBySlug(slug: string): Promise<Doctor> {
//   return fetchAPI<Doctor>(`/api/doctors/${slug}`);
// }

// // ==========================
// // Departments
// // ==========================
// export async function getDepartments(): Promise<Department[]> {
//   return fetchAPI<Department[]>("/api/departments");
// }

// export async function getDepartmentBySlug(slug: string): Promise<Department> {
//   return fetchAPI<Department>(`/api/departments/${slug}`);
// }

// // ==========================
// // Branches
// // ==========================
// export async function getBranches(): Promise<Branch[]> {
//   return fetchAPI<Branch[]>("/api/branches");
// }

// export async function getBranchBySlug(slug: string): Promise<Branch> {
//   return fetchAPI<Branch>(`/api/branches/${slug}`);
// }

// // ==========================
// // Offers
// // ==========================
// export async function getOffers(): Promise<Offer[]> {
//   return fetchAPI<Offer[]>("/api/offers");
// }

// export async function getOfferBySlug(slug: string): Promise<Offer> {
//   return fetchAPI<Offer>(`/api/offers/${slug}`);
// }

// // ==========================
// // News
// // ==========================
// export async function getNews(): Promise<News[]> {
//   return fetchAPI<News[]>("/api/news");
// }

// export async function getNewsBySlug(slug: string): Promise<News> {
//   return fetchAPI<News>(`/api/news/${slug}`);
// }
