// Mock Data for all entities

// Blog Data
export const blogsData = [
  {
    id: 1,
    slug: "health-tips",
    title: { ar: "نصائح صحية", en: "Health Tips" },
    excerpt: { ar: "نصائح سريعة...", en: "Quick tips..." },
    content: { ar: "محتوى كامل...", en: "Full content..." },
    image: "/images/blog/1.jpg",
    seo: {
      title: { ar: "نصائح صحية | المركز الطبي", en: "Health Tips | Medical Center" },
      description: { ar: "أفضل النصائح الصحية", en: "Best health tips" },
    },
    created_at: "2026-01-01",
  },
  {
    id: 2,
    slug: "nutrition-tips",
    title: { ar: "نصائح غذائية", en: "Nutrition Tips" },
    excerpt: { ar: "نصائح سريعة...", en: "Quick tips..." },
    content: { ar: "محتوى كامل...", en: "Full content..." },
    image: "/images/blog/2.jpg",
    seo: {
      title: { ar: "نصائح غذائية | المركز الطبي", en: "Nutrition Tips | Medical Center" },
      description: { ar: "أفضل النصائح الغذائية", en: "Best nutrition tips" },
    },
    created_at: "2026-01-05",
  },
];

// Services Data
export const servicesData = [
  {
    id: 1,
    slug: "cardiology",
    name: { ar: "قسم القلب", en: "Cardiology" },
    description: { ar: "أفضل رعاية قلبية", en: "Best cardiac care" },
    image: "/images/services/1.png",
    seo: {
      title: { ar: "قسم القلب | المركز الطبي", en: "Cardiology | Medical Center" },
      description: { ar: "أفضل رعاية قلبية", en: "Best cardiac care" },
    },
  },
  {
    id: 2,
    slug: "dermatology",
    name: { ar: "قسم الجلدية", en: "Dermatology" },
    description: { ar: "أفضل رعاية جلدية", en: "Best dermatology care" },
    image: "/images/services/2.png",
    seo: {
      title: { ar: "قسم الجلدية | المركز الطبي", en: "Dermatology | Medical Center" },
      description: { ar: "أفضل رعاية جلدية", en: "Best dermatology care" },
    },
  },
];

// Doctors Data
export const doctorsData = [
  {
    id: 1,
    slug: "dr-ahmed",
    name: { ar: "د. أحمد علي", en: "Dr. Ahmed Ali" },
    specialty: { ar: "قلب", en: "Cardiology" },
    bio: { ar: "خبير في القلب", en: "Heart specialist" },
    image: "/images/doctors/1.jpg",
  },
  {
    id: 2,
    slug: "dr-fatma",
    name: { ar: "د. فاطمة محمد", en: "Dr. Fatma Mohamed" },
    specialty: { ar: "جلدية", en: "Dermatology" },
    bio: { ar: "خبيرة الجلدية", en: "Dermatology specialist" },
    image: "/images/doctors/2.jpg",
  },
];

// Branches Data
export const branchesData = [
  {
    id: 1,
    slug: "nasr-city",
    name: { ar: "فرع مدينة نصر", en: "Nasr City Branch" },
    address: { ar: "مدينة نصر، القاهرة", en: "Nasr City, Cairo" },
    phone: "+20123456789",
    map_url: "https://maps.google.com/...",
  },
  {
    id: 2,
    slug: "maadi",
    name: { ar: "فرع المعادي", en: "Maadi Branch" },
    address: { ar: "المعادي، القاهرة", en: "Maadi, Cairo" },
    phone: "+20198765432",
    map_url: "https://maps.google.com/...",
  },
];

// Departments Data
export const departmentsData = [
  {
    id: 1,
    slug: "cardiology",
    name: { ar: "قسم القلب", en: "Cardiology" },
    description: { ar: "وصف القسم", en: "Department description" },
    image: "/images/departments/1.jpg",
  },
  {
    id: 2,
    slug: "dermatology",
    name: { ar: "قسم الجلدية", en: "Dermatology" },
    description: { ar: "وصف القسم", en: "Department description" },
    image: "/images/departments/2.jpg",
  },
];

// News Data
export const newsData = [
  {
    id: 1,
    slug: "new-equipment",
    title: { ar: "أجهزة جديدة", en: "New Equipment" },
    content: { ar: "تم شراء أجهزة جديدة", en: "New equipment purchased" },
    image: "/images/news/1.jpg",
    created_at: "2026-01-10",
  },
];

// Offers Data
export const offersData = [
  {
    id: 1,
    slug: "heart-checkup",
    title: { ar: "عرض فحص القلب", en: "Heart Checkup Offer" },
    description: { ar: "خصم 20٪ على فحص القلب", en: "20% off heart checkup" },
    image: "/images/offers/1.jpg",
    valid_until: "2026-02-28",
  },
];
