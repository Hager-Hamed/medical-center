

export type Locale = "ar" | "en";

// فقط Client Component يستخدم getCurrentLocale
export function getCurrentLocale(): Locale {
  if (typeof window === "undefined") return "ar"; // SSR fallback
  return (localStorage.getItem("locale") as Locale) || "ar";
}
