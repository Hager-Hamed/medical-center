// import { NextResponse } from "next/server";

// export async function GET() {
//   return NextResponse.json({
//     data: [
//       {
//         id: 1,
//         slug: "cardiology",
//         name: {
//           ar: "قسم القلب",
//           en: "Cardiology",
//         },
//         description: {
//           ar: "وصف القسم...",
//           en: "Department description...",
//         },
//         image: "/images/services/1.png",
//         seo: {
//           title: {
//             ar: "قسم القلب | المركز الطبي",
//             en: "Cardiology | Medical Center",
//           },
//           description: {
//             ar: "أفضل رعاية قلبية",
//             en: "Best cardiac care",
//           },
//         },
//       },
//     ],
//   });
// }

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    data: [
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
    ],
  });
}
