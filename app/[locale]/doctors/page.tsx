import { getDoctors } from "@/app/lib/api";
import Link from "next/link";
import { Locale } from "@/app/lib/locale";

interface PageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function DoctorsPage({ params }: PageProps) {
  const { locale: localeStr } = await params;
  const locale = (localeStr === "ar" ? "ar" : "en") as Locale;
  const doctors = await getDoctors();

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        {locale === "ar" ? "أطباؤنا" : "Our Doctors"}
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
       {doctors.map((doctor) => (
          <Link
            key={doctor.id}
            href={`/${locale}/doctors/${doctor.slug}`}
            className="block p-4 border rounded hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold mb-1">{doctor.name[locale]}</h2>
            <p className="text-blue-600 mb-2 text-sm">{doctor.specialty[locale]}</p>
            <p className="text-gray-600 line-clamp-3 text-sm">{doctor.bio[locale]}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
