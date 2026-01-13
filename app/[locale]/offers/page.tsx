import { getOffers } from "@/app/lib/api";
import Link from "next/link";
import { Locale } from "@/app/lib/locale";

interface PageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function OffersPage({ params }: PageProps) {
  const { locale: localeStr } = await params;
  const locale = (localeStr === "ar" ? "ar" : "en") as Locale;
  const offers = await getOffers();

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        {locale === "ar" ? "العروض" : "Offers"}
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
       {offers.map((offer) => (
          <Link
            key={offer.id}
            href={`/${locale}/offers/${offer.slug}`}
            className="block p-4 border rounded hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold mb-2">{offer.title[locale]}</h2>
            <p className="text-gray-600 mb-2 line-clamp-3">{offer.description[locale]}</p>
            {offer.valid_until && (
              <p className="text-red-500 text-sm">
                {locale === "ar" ? "ساري حتى: " : "Valid until: "} {offer.valid_until}
              </p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
