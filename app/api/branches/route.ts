import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    data: [
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
    ],
  });
}
