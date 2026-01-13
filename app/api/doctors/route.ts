import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    data: [
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
    ],
  });
}
