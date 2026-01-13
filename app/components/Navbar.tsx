"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import { Locale } from "@/app/lib/locale";

interface NavbarProps {
  currentLocale: Locale;
}

interface NavItem {
  href: string;
  label: {
    ar: string;
    en: string;
  };
}

const navItems: NavItem[] = [
  { href: "/", label: { ar: "الرئيسية", en: "Home" } },
  { href: "/blog", label: { ar: "المدونة", en: "Blog" } },
  { href: "/services", label: { ar: "الخدمات", en: "Services" } },
  { href: "/doctors", label: { ar: "الأطباء", en: "Doctors" } },
  { href: "/branches", label: { ar: "الفروع", en: "Branches" } },
  { href: "/news", label: { ar: "الأخبار", en: "News" } },
  { href: "/offers", label: { ar: "العروض", en: "Offers" } },
  { href: "/departments", label: { ar: "الأقسام", en: "Departments" } },
];

export default function Navbar({ currentLocale }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string) => {
    const localizedPath = `/${currentLocale}${path === "/" ? "" : path}`;
    if (path === "/") {
      return pathname === localizedPath || pathname === `${localizedPath}/`;
    }
    return pathname.startsWith(localizedPath);
  };

  return (
    <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href={`/${currentLocale}`} className="text-2xl font-bold text-blue-600">
              {currentLocale === "ar" ? "المركز الطبي" : "Medical Center"}
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={`/${currentLocale}${item.href === "/" ? "" : item.href}`}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                {item.label[currentLocale]}
              </Link>
            ))}
            <div className="border-s ps-4 ms-2">
              <LanguageSwitcher currentLocale={currentLocale} />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden gap-4">
             <LanguageSwitcher currentLocale={currentLocale} />
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isOpen ? "block" : "hidden"}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={`/${currentLocale}${item.href === "/" ? "" : item.href}`}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive(item.href)
                  ? "bg-blue-50 text-blue-700"
                  : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              }`}
            >
              {item.label[currentLocale]}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
