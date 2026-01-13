import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    data: [
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
    ],
  });
}
