"use client";

import { Locale } from "@/app/lib/locale";
import { useRouter, usePathname } from "next/navigation";

interface LanguageSwitcherProps {
  currentLocale: Locale;
}

export default function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = () => {
    const newLocale: Locale = currentLocale === "en" ? "ar" : "en";
    
    // حفظ اللغة في Cookie للاستخدام في Middleware
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", newLocale);
      document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
    }

    const segments = pathname.split("/").filter(Boolean);
    if (segments.length > 0) {
        // استبدال الجزء الأول (ar/en) باللغة الجديدة
        segments[0] = newLocale;
    } else {
        // في حالة المسار الجذري، نضيف اللغة
        segments.push(newLocale);
    }

    const newPath = "/" + segments.join("/");
    router.push(newPath);
  };

  return (
    <button
      onClick={switchLocale}
      className="px-4 py-2 border rounded hover:bg-gray-100 transition text-sm font-medium"
    >
      {currentLocale === "en" ? "العربية" : "English"}
    </button>
  );
}
