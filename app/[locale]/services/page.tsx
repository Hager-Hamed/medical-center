import { getServices } from "@/app/lib/api";
import Link from "next/link";
import { Locale } from "@/app/lib/locale";

interface PageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function ServicesPage({ params }: PageProps) {
  const { locale: localeStr } = await params;
  const locale = (localeStr === "ar" ? "ar" : "en") as Locale;
  const services = await getServices();

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        {locale === "ar" ? "خدماتنا" : "Our Services"}
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
       {services.map((service) => (
          <Link
            key={service.id}
            href={`/${locale}/services/${service.slug}`}
            className="block p-4 border rounded hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold mb-2">{service.name[locale]}</h2>
            <p className="text-gray-600 line-clamp-3">{service.description[locale]}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
