// "use client";
// import { useState, useEffect } from "react";
// import { Locale, getCurrentLocale } from "@/app/lib/locale";
// import { useRouter, usePathname } from "next/navigation";

// export default function LanguageSwitcher() {
//   const router = useRouter();
//   const pathname = usePathname();

//   // lazy initializer لتفادي setState في effect
//   const [locale, setLocale] = useState<Locale>(() => {
//     // تحقق إذا في window عشان ما يحصل Hydration mismatch
//     if (typeof window !== "undefined") {
//       return getCurrentLocale();
//     }
//     return "ar"; // قيمة افتراضية للسيرفر
//   });

//   // تحديث direction و html lang
//   useEffect(() => {
//     document.documentElement.lang = locale;
//     document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
//     localStorage.setItem("locale", locale);
//   }, [locale]);

//   const switchLocale = () => {
//     const newLocale: Locale = locale === "en" ? "ar" : "en";
//     setLocale(newLocale);

//     const segments = pathname.split("/").filter(Boolean);
//     if (segments.length > 0) {
//       segments[0] = newLocale;
//     } else {
//       segments.push(newLocale);
//     }
//     const newPath = "/" + segments.join("/");
//     router.push(newPath);
//   };

//   return (
//     <button
//       onClick={switchLocale}
//       className="px-4 py-2 border rounded hover:bg-gray-100 transition"
//     >
//       {locale === "en" ? "العربية" : "English"}
//     </button>
//   );
// }
"use client";
import { useState, useEffect } from "react";
import { Locale, getCurrentLocale } from "@/app/lib/locale";
import { useRouter, usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window !== "undefined") return getCurrentLocale();
    return "ar";
  });

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    localStorage.setItem("locale", locale);
  }, [locale]);

  const switchLocale = () => {
    const newLocale: Locale = locale === "en" ? "ar" : "en";
    setLocale(newLocale);

    const segments = pathname.split("/").filter(Boolean);
    if (segments.length > 0) segments[0] = newLocale;
    else segments.push(newLocale);

    router.push("/" + segments.join("/"));
  };

  return (
    <button
      onClick={switchLocale}
      className="px-4 py-2 border rounded hover:bg-gray-100 transition"
    >
      {locale === "en" ? "العربية" : "English"}
    </button>
  );
}
