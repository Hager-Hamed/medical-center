import { getBlogs } from "@/app/lib/api";
import Link from "next/link";
import { Locale } from "@/app/types/blog";

interface BlogPageProps {
  params: {
    locale: Locale;
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const locale: Locale = params.locale === "ar" ? "ar" : "en";
  const blogs = await getBlogs();

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        {locale === "ar" ? "المدونة" : "Blog"}
      </h1>



      <div className="grid gap-6">
       {blogs.map((blog) => (
  <Link
    key={blog.id}
    href={`/${locale}/blog/${blog.slug}`}
    className="block p-4 border rounded"
  >
    <h2>{blog.title[locale]}</h2>
    <p>{blog.excerpt[locale]}</p>
  </Link>
))}
      </div>
    </div>
  );
}
