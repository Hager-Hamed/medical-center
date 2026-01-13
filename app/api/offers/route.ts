import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    data: [
      {
        id: 1,
        slug: "heart-checkup",
        title: { ar: "عرض فحص القلب", en: "Heart Checkup Offer" },
        description: { ar: "خصم 20٪ على فحص القلب", en: "20% off heart checkup" },
        image: "/images/offers/1.jpg",
        valid_until: "2026-02-28",
      },
    ],
  });
}
