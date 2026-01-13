import { getNewsBySlug } from "@/app/lib/api";
import { Locale } from "@/app/lib/locale";
import { notFound } from "next/navigation";
import Image from "next/image";

interface PageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export default async function NewsPage({ params }: PageProps) {
  const { locale: localeStr, slug } = await params;
  const locale = (localeStr === "ar" ? "ar" : "en") as Locale;
  
  const news = await getNewsBySlug(slug);

  if (!news) {
    notFound();
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{news.title[locale]}</h1>
      <div className="text-gray-500 mb-6 text-sm">{news.created_at}</div>
      
      {news.image && (
        <div className="relative w-full h-64 mb-6">
           <Image 
             src={news.image} 
             alt={news.title[locale]} 
             fill
             className="object-cover rounded"
           />
        </div>
      )}

      <div className="prose max-w-none whitespace-pre-wrap">
        {news.content[locale]}
      </div>
    </div>
  );
}
