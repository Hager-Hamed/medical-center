import { getBlogs } from "@/app/lib/api";
import Link from "next/link";

interface BlogPageProps {
  params: { locale: string };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const locale = params.locale === "ar" ? "ar" : "en";
  const blogs = await getBlogs();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        {locale === "ar" ? "المدونة" : "Blogs"}
      </h1>
      <div className="grid gap-6">
        {blogs.map((blog) => (
          <Link
            key={blog.id}
            href={`/${locale}/blog/${blog.slug}`}
            className="block p-4 border rounded hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold">{blog.title[locale]}</h2>
            <p className="text-gray-600">{blog.excerpt?.[locale]}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
