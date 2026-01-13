import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    data: [
      {
        id: 1,
        slug: "new-equipment",
        title: { ar: "أجهزة جديدة", en: "New Equipment" },
        content: { ar: "تم شراء أجهزة جديدة", en: "New equipment purchased" },
        image: "/images/news/1.jpg",
        created_at: "2026-01-10",
      },
    ],
  });
}
