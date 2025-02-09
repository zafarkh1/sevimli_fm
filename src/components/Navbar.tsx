"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { IconClose, IconMenuBurger } from "./icons/icons";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const currentLang = pathname.split("/")[1] || "en";
  const t = useTranslations("Navbar");

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);

    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Enable scrolling again
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = ""; // Cleanup
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed lg:top-0 left-0 right-0 z-20 transition-all duration-300 ease-linear ${
        scrolled ? "bg-[#000] backdrop-blur-sm" : ""
      }`}
    >
      <div className="myContainer relative lg:pt-16 lg:pb-12 flex justify-between xl:items-center text-lg">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center xl:gap-14 lg:gap-8">
          <Link href={`/${currentLang}`}>{t("home")}</Link>
          <Link href={`/${currentLang}/about`}>{t("about")}</Link>
          <Link href={`/${currentLang}/cooperation`}>{t("management")}</Link>
        </div>

        {/* Logo */}
        <Link
          href={`/${currentLang}`}
          className="lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2"
        >
          <Image
            src="/images/logo/logo_desktop.svg"
            width={205}
            height={120}
            alt="logo"
            className="hidden lg:block"
          />
          <Image
            src="/images/logo/logo_mobile.svg"
            width={100}
            height={50}
            alt="logo"
            className="lg:hidden"
          />
        </Link>

        {/* Desktop Right Side */}
        <div className="hidden lg:flex items-center xl:gap-14 lg:gap-8">
          <Link href={`/${currentLang}`}>{t("radio")}</Link>
          <Link href={`/${currentLang}/contact`}>{t("contact")}</Link>
          <LanguageSwitcher />
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center">
          <div className="mr-14">
            <LanguageSwitcher />
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute right-4 cursor-pointer z-10 p-[10px]"
          >
            <IconMenuBurger className="size-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-[75%] max-w-xs bg-[#0A0A0A] px-8 py-6 transform ${
            isOpen ? "translate-x-0 z-50" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out lg:hidden`}
        >
          <Image
            src="/images/logo/logo_mobile.svg"
            width={100}
            height={50}
            alt="logo"
            className="lg:hidden"
          />
          <div className="flex flex-col space-y-6 mt-10">
            <Link href={`/${currentLang}`}>{t("home")}</Link>
            <Link href={`/${currentLang}/about`}>{t("about")}</Link>
            <Link href={`/${currentLang}/cooperation`}>{t("management")}</Link>
            <Link href={`/${currentLang}/radio`}>{t("radio")}</Link>
            <Link href={`/${currentLang}/contact`}>{t("contact")}</Link>
          </div>
          <button onClick={() => setIsOpen(false)}>
            <IconClose className="size-8 absolute top-10 right-4 cursor-pointer" />
          </button>
        </div>

        {/* Overlay to close menu */}
        {isOpen && (
          <div
            className="fixed inset-0 lg:bg-transparent bg-[#00000099] z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </header>
  );
};

export default Navbar;
