import { getOfferBySlug } from "@/app/lib/api";
import { Locale } from "@/app/lib/locale";
import { notFound } from "next/navigation";
import Image from "next/image";

interface PageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export default async function OfferPage({ params }: PageProps) {
  const { locale: localeStr, slug } = await params;
  const locale = (localeStr === "ar" ? "ar" : "en") as Locale;
  
  const offer = await getOfferBySlug(slug);

  if (!offer) {
    notFound();
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{offer.title[locale]}</h1>
      
      {offer.valid_until && (
        <div className="mb-4 text-red-600 font-semibold">
          {locale === "ar" ? "ساري حتى: " : "Valid until: "} {offer.valid_until}
        </div>
      )}

      {offer.image && (
        <div className="relative w-full h-64 mb-6">
           <Image 
             src={offer.image} 
             alt={offer.title[locale]} 
             fill
             className="object-cover rounded"
           />
        </div>
      )}

      <div className="prose max-w-none whitespace-pre-wrap">
        {offer.description[locale]}
      </div>
    </div>
  );
}
