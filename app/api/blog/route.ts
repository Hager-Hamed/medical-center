import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    data: [
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
    ],
    meta: {
      current_page: 1,
      total_pages: 1,
      total_items: 2,
    },
  });
}
