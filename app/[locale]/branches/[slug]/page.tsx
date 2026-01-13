import { getBranchBySlug } from "@/app/lib/api";
import { Locale } from "@/app/lib/locale";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export default async function BranchPage({ params }: PageProps) {
  const { locale: localeStr, slug } = await params;
  const locale = (localeStr === "ar" ? "ar" : "en") as Locale;
  
  const branch = await getBranchBySlug(slug);

  if (!branch) {
    notFound();
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{branch.name[locale]}</h1>
      <p className="text-lg text-gray-700 mb-4">{branch.address[locale]}</p>
      
      {branch.phone && (
        <p className="text-lg mb-4">
          <span className="font-semibold">{locale === "ar" ? "الهاتف: " : "Phone: "}</span>
          <a href={`tel:${branch.phone}`} className="text-blue-600 hover:underline">{branch.phone}</a>
        </p>
      )}

      {branch.map_url && (
        <div className="mt-6">
           <iframe
             src={branch.map_url}
             width="100%"
             height="400"
             style={{ border: 0 }}
             allowFullScreen
             loading="lazy"
             referrerPolicy="no-referrer-when-downgrade"
             className="rounded shadow-md"
           ></iframe>
        </div>
      )}
    </div>
  );
}
