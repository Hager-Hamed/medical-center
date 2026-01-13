

export type Locale = "ar" | "en";

// فقط Client Component يستخدم getCurrentLocale
export function getCurrentLocale(): Locale {
  if (typeof window === "undefined") return "en"; // SSR fallback
  return (localStorage.getItem("locale") as Locale) || "en";
}
