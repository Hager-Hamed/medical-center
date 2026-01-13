import { getNews } from "@/app/lib/api";
import Link from "next/link";
import { Locale } from "@/app/lib/locale";

interface PageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function NewsListPage({ params }: PageProps) {
  const { locale: localeStr } = await params;
  const locale = (localeStr === "ar" ? "ar" : "en") as Locale;
  const newsList = await getNews();

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        {locale === "ar" ? "الأخبار" : "News"}
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
       {newsList.map((news) => (
          <Link
            key={news.id}
            href={`/${locale}/news/${news.slug}`}
            className="block p-4 border rounded hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold mb-2">{news.title[locale]}</h2>
            <p className="text-gray-500 text-sm mb-2">{news.created_at}</p>
            {/* Excerpt could be added here if available in type, or truncated content */}
          </Link>
        ))}
      </div>
    </div>
  );
}
