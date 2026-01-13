import { getDepartmentBySlug } from "@/app/lib/api";
import { Locale } from "@/app/lib/locale";
import { notFound } from "next/navigation";
import Image from "next/image";

interface PageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export default async function DepartmentPage({ params }: PageProps) {
  const { locale: localeStr, slug } = await params;
  const locale = (localeStr === "ar" ? "ar" : "en") as Locale;
  
  const department = await getDepartmentBySlug(slug);

  if (!department) {
    notFound();
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{department.name[locale]}</h1>
      
      {department.image && (
        <div className="relative w-full h-64 mb-6">
           <Image 
             src={department.image} 
             alt={department.name[locale]} 
             fill
             className="object-cover rounded"
           />
        </div>
      )}

      <div className="prose max-w-none whitespace-pre-wrap">
        {department.description[locale]}
      </div>
    </div>
  );
}
