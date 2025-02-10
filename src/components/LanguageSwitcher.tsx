import { useEffect, useState } from "react";
import { IconArrowDown, IconArrowUp } from "@/components/icons/icons";
import { usePathname, useRouter } from "next/navigation";

export const LanguageSwitcher = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  const currentLang = (pathname.split("/")[1] || "en") as "ru" | "uz" | "en";
  const router = useRouter();

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (!(e.target as HTMLElement).closest(".language-selector")) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (dropdownOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [dropdownOpen]);

  const translations: Record<
    "ru" | "uz" | "en",
    { ru: string; uz: string; en: string }
  > = {
    ru: { ru: "Русский", uz: "Узбекский", en: "Английский" },
    uz: { ru: "Rus tili", uz: "O‘zbek tili", en: "Ingliz tili" },
    en: { ru: "Russian", uz: "Uzbek", en: "English" },
  };

  const handleLanguageChange = (newLang: "ru" | "uz" | "en") => {
    if (newLang === currentLang) return;

    const newPath = `/${newLang}${pathname.replace(/^\/[a-z]{2}/, "")}`;
    router.push(newPath);
  };

  return (
    <div className="relative flex lg:items-center gap-2 lg:text-[20px] text-sm">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={toggleDropdown}
      >
        {currentLang === "ru" ? "Рус" : currentLang === "uz" ? "O‘z" : "Eng"}
        {dropdownOpen ? (
          <IconArrowUp className="size-6" />
        ) : (
          <IconArrowDown className="size-6" />
        )}
      </div>

      {/* Dropdown Menu */}
      {dropdownOpen && (
        <ul
          className={`absolute top-full right-0 lg:-left-16  mt-2 py-2 bg-[#131313] text-[#E7E7E7] border border-[#FFFFFF66] rounded-lg ${
            currentLang === "ru"
              ? "-left-14"
              : currentLang === "uz"
              ? "-left-12"
              : "-left-6"
          }`}
        >
          {Object.keys(translations[currentLang]).map((lang, index) => (
            <li key={lang} className=" hover:bg-[#333333]">
              <button
                onClick={() => handleLanguageChange(lang as "ru" | "uz" | "en")}
                className={`text-left w-full border-b border-[#FFFFFF1A] px-3 py-[6px] text-base ${
                  index === 2 && "border-none"
                }  ${lang === currentLang && "text-primary"}`}
              >
                {translations[currentLang][lang as "ru" | "uz" | "en"]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
