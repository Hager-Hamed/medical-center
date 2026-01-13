import { getDoctorBySlug } from "@/app/lib/api";
import { Locale } from "@/app/lib/locale";
import { notFound } from "next/navigation";
import Image from "next/image";

interface PageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export default async function DoctorPage({ params }: PageProps) {
  const { locale: localeStr, slug } = await params;
  const locale = (localeStr === "ar" ? "ar" : "en") as Locale;
  
  const doctor = await getDoctorBySlug(slug);

  if (!doctor) {
    notFound();
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{doctor.name[locale]}</h1>
      <p className="text-xl text-blue-600 mb-6">{doctor.specialty[locale]}</p>
      
      {doctor.image && (
        <div className="relative w-full h-64 mb-6">
           <Image 
             src={doctor.image} 
             alt={doctor.name[locale]} 
             fill
             className="object-cover rounded"
           />
        </div>
      )}

      <div className="prose max-w-none whitespace-pre-wrap">
        {doctor.bio[locale]}
      </div>
    </div>
  );
}
