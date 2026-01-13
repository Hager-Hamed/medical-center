import { getBlogBySlug } from "@/app/lib/api/blog";
import { Locale } from "@/app/types/blog";
import { notFound } from "next/navigation";
import Image from "next/image";

interface BlogPostProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { locale: localeStr, slug } = await params;
  const locale = (localeStr === "ar" ? "ar" : "en") as Locale;
  
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{blog.title[locale]}</h1>
      <div className="text-gray-500 mb-6 text-sm">{blog.created_at}</div>
      
      {blog.image && (
        <div className="relative w-full h-64 mb-6">
           {/* Using simple img tag if domain not configured in next.config, 
               but Image is better. Assuming local images or configured domains. 
               If simple path, Image works with width/height or fill. */}
           <Image 
             src={blog.image} 
             alt={blog.title[locale]} 
             fill
             className="object-cover rounded"
           />
        </div>
      )}

      <div className="prose max-w-none whitespace-pre-wrap">
        {blog.content[locale]}
      </div>
    </div>
  );
}
