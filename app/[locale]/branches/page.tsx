import { getBranches } from "@/app/lib/api";
import Link from "next/link";
import { Locale } from "@/app/lib/locale";

interface PageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function BranchesPage({ params }: PageProps) {
  const { locale: localeStr } = await params;
  const locale = (localeStr === "ar" ? "ar" : "en") as Locale;
  const branches = await getBranches();

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        {locale === "ar" ? "فروعنا" : "Our Branches"}
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
       {branches.map((branch) => (
          <Link
            key={branch.id}
            href={`/${locale}/branches/${branch.slug}`}
            className="block p-4 border rounded hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold mb-2">{branch.name[locale]}</h2>
            <p className="text-gray-600 mb-2">{branch.address[locale]}</p>
            {branch.phone && <p className="text-blue-600 text-sm">{branch.phone}</p>}
          </Link>
        ))}
      </div>
    </div>
  );
}
