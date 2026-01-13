import { getDepartments } from "@/app/lib/api";
import Link from "next/link";
import { Locale } from "@/app/lib/locale";

interface PageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function DepartmentsPage({ params }: PageProps) {
  const { locale: localeStr } = await params;
  const locale = (localeStr === "ar" ? "ar" : "en") as Locale;
  const departments = await getDepartments();

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        {locale === "ar" ? "الأقسام" : "Departments"}
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
       {departments.map((dept) => (
          <Link
            key={dept.id}
            href={`/${locale}/departments/${dept.slug}`}
            className="block p-4 border rounded hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold mb-2">{dept.name[locale]}</h2>
            <p className="text-gray-600 line-clamp-3">{dept.description[locale]}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
