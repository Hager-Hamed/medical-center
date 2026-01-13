import Link from "next/link";
import Image from "next/image";
import {
  getServices,
  getDoctors,
  getBranches,
  getNews,
  getOffers,
  getDepartments,
  getBlogs,
} from "@/app/lib/api";
import { Locale } from "@/app/lib/locale";

interface PageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function Home({ params }: PageProps) {
  const { locale: localeStr } = await params;
  const locale = (localeStr === "ar" ? "ar" : "en") as Locale;

  // Fetch all data in parallel
  const [services, doctors, branches, news, offers, departments, blogs] = await Promise.all([
    getServices(),
    getDoctors(),
    getBranches(),
    getNews(),
    getOffers(),
    getDepartments(),
    getBlogs(),
  ]);

  const labels = {
    more: locale === "ar" ? "عرض المزيد" : "View All",
    services: locale === "ar" ? "خدماتنا" : "Our Services",
    doctors: locale === "ar" ? "أطباؤنا" : "Our Doctors",
    branches: locale === "ar" ? "فروعنا" : "Our Branches",
    news: locale === "ar" ? "آخر الأخبار" : "Latest News",
    offers: locale === "ar" ? "العروض الحالية" : "Current Offers",
    departments: locale === "ar" ? "الأقسام" : "Departments",
    blog: locale === "ar" ? "المدونة" : "Blog",
    readMore: locale === "ar" ? "اقرأ المزيد" : "Read More",
  };

  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {locale === "ar" ? "مرحباً بكم في المركز الطبي" : "Welcome to Medical Center"}
        </h1>
        <p className="text-xl max-w-2xl mx-auto px-4 opacity-90 leading-relaxed">
          {locale === "ar"
            ? "نقدم أفضل رعاية صحية لك ولعائلتك بأحدث التقنيات وأمهر الأطباء."
            : "Providing the best healthcare for you and your family with the latest technology and expert doctors."}
        </p>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8 border-b pb-4">
          <h2 className="text-3xl font-bold text-gray-800">{labels.services}</h2>
          <Link href={`/${locale}/services`} className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1">
            {labels.more} <span className="text-lg">{locale === "ar" ? "←" : "→"}</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service) => (
            <Link key={service.id} href={`/${locale}/services/${service.slug}`} className="block group h-full">
              <div className="border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 bg-white h-full flex flex-col">
                {service.image && (
                  <div className="relative h-56 w-full">
                     <Image src={service.image} alt={service.name[locale]} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                )}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{service.name[locale]}</h3>
                  <p className="text-gray-600 line-clamp-3 text-sm leading-relaxed mb-4 flex-1">{service.description[locale]}</p>
                  <span className="text-blue-600 font-medium text-sm mt-auto inline-flex items-center">
                    {labels.readMore}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Departments Section */}
       <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8 border-b border-gray-200 pb-4">
            <h2 className="text-3xl font-bold text-gray-800">{labels.departments}</h2>
            <Link href={`/${locale}/departments`} className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1">
              {labels.more} <span className="text-lg">{locale === "ar" ? "←" : "→"}</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {departments.slice(0, 4).map((dept) => (
              <Link key={dept.id} href={`/${locale}/departments/${dept.slug}`} className="block text-center p-8 bg-white rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-gray-100">
                 <h3 className="font-bold text-lg text-gray-800">{dept.name[locale]}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8 border-b pb-4">
          <h2 className="text-3xl font-bold text-gray-800">{labels.doctors}</h2>
          <Link href={`/${locale}/doctors`} className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1">
            {labels.more} <span className="text-lg">{locale === "ar" ? "←" : "→"}</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.slice(0, 4).map((doctor) => (
            <Link key={doctor.id} href={`/${locale}/doctors/${doctor.slug}`} className="group h-full">
              <div className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 text-center h-full pb-6">
                 {doctor.image && (
                  <div className="relative h-72 w-full mb-4 overflow-hidden">
                     <Image src={doctor.image} alt={doctor.name[locale]} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                )}
                <div className="px-4">
                    <h3 className="text-lg font-bold group-hover:text-blue-600 transition-colors mb-1">{doctor.name[locale]}</h3>
                    <p className="text-blue-500 text-sm font-medium">{doctor.specialty[locale]}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

       {/* Offers Section */}
      <section className="bg-blue-50 py-16">
         <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8 border-b border-blue-200 pb-4">
            <h2 className="text-3xl font-bold text-gray-800">{labels.offers}</h2>
            <Link href={`/${locale}/offers`} className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1">
              {labels.more} <span className="text-lg">{locale === "ar" ? "←" : "→"}</span>
            </Link>
          </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offers.slice(0, 2).map((offer) => (
               <Link key={offer.id} href={`/${locale}/offers/${offer.slug}`} className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                  {offer.image && (
                    <div className="relative h-56 md:h-auto md:w-2/5 overflow-hidden">
                      <Image src={offer.image} alt={offer.title[locale]} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  )}
                  <div className="p-8 flex-1 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{offer.title[locale]}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{offer.description[locale]}</p>
                    <span className="text-blue-600 font-bold flex items-center gap-2">
                      {labels.readMore} <span className="transition-transform group-hover:translate-x-1">{locale === "ar" ? "←" : "→"}</span>
                    </span>
                  </div>
               </Link>
            ))}
           </div>
         </div>
      </section>

      {/* Blog & News Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
           {/* Blog */}
           <div>
              <div className="flex justify-between items-center mb-8 border-b pb-4">
                <h2 className="text-2xl font-bold text-gray-800">{labels.blog}</h2>
                <Link href={`/${locale}/blog`} className="text-blue-600 text-sm hover:underline font-medium">{labels.more}</Link>
              </div>
              <div className="space-y-8">
                {blogs.slice(0, 3).map((blog) => (
                   <Link key={blog.id} href={`/${locale}/blog/${blog.slug}`} className="flex gap-6 group items-start">
                      {blog.image && (
                        <div className="relative w-32 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                           <Image src={blog.image} alt={blog.title[locale]} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                      )}
                      <div>
                        <h3 className="font-bold text-lg group-hover:text-blue-600 transition-colors mb-2">{blog.title[locale]}</h3>
                        <p className="text-sm text-gray-500 mb-2 line-clamp-2 leading-relaxed">{blog.excerpt[locale]}</p>
                        <p className="text-xs text-gray-400 font-medium">{blog.created_at}</p>
                      </div>
                   </Link>
                ))}
              </div>
           </div>

           {/* News */}
           <div>
              <div className="flex justify-between items-center mb-8 border-b pb-4">
                <h2 className="text-2xl font-bold text-gray-800">{labels.news}</h2>
                <Link href={`/${locale}/news`} className="text-blue-600 text-sm hover:underline font-medium">{labels.more}</Link>
              </div>
               <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
                {news.slice(0, 3).map((item, idx) => (
                   <div key={item.id} className={`py-5 ${idx !== news.length - 1 ? 'border-b border-gray-200' : ''}`}>
                      <Link href={`/${locale}/news/${item.slug}`} className="block group">
                         <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors">{item.title[locale]}</h3>
                         <div className="flex items-center gap-2 text-xs text-gray-500">
                           <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">News</span>
                           <span>{item.created_at}</span>
                         </div>
                      </Link>
                   </div>
                ))}
              </div>
           </div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="bg-gray-900 text-white py-20 mt-8">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-3xl font-bold mb-12">{labels.branches}</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {branches.slice(0, 3).map((branch) => (
                 <Link key={branch.id} href={`/${locale}/branches/${branch.slug}`} className="block p-8 border border-gray-700 rounded-xl hover:bg-gray-800 transition-all duration-300 group text-start">
                    <h3 className="text-xl font-bold mb-3 text-blue-400 group-hover:text-blue-300">{branch.name[locale]}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{branch.address[locale]}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <span>📞</span>
                      <span className="font-mono">{branch.phone}</span>
                    </div>
                 </Link>
              ))}
           </div>
           <div>
             <Link href={`/${locale}/branches`} className="inline-block px-10 py-3 border-2 border-white rounded-full font-bold hover:bg-white hover:text-gray-900 transition-all duration-300">
               {labels.more}
             </Link>
           </div>
        </div>
      </section>

    </div>
  );
}
