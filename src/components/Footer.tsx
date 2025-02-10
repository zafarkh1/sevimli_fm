"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { IconArrowTop } from "./icons/icons";

const Footer = () => {
  const pathname = usePathname();
  const t = useTranslations("Footer"); // Use translations from JSON

  const currentLang = pathname.split("/")[1] || "en";

  return (
    <div className="border-t border-t-[#545454] bg-[#0A0A0A]">
      <section className="myContainer lg:pt-14 pt-12 pb-10">
        <div className="grid lg:grid-cols-5 grid-cols-2 lg:gap-6 gap-3 text-sm font-medium uppercase">
          <p>
            <Link href={`/${currentLang}/`}>{t("home")}</Link>
          </p>
          <span>
            <Link href={`/${currentLang}/about`}>{t("about")}</Link>
          </span>
          <div className="flex flex-col">
            <span>
              <Link href={`/${currentLang}/`}>{t("projects")}</Link>
            </span>
            <span className="mt-3 mb-1 text-[#797979]">{t("sevimli_fm")}</span>
            <span className="text-[#797979]">{t("sevimli_tv")}</span>
          </div>

          <div className="flex flex-col">
            <span>
              <Link href={`/${currentLang}/`}>{t("poytaxt_radio")}</Link>
            </span>
            <span className="text-[#797979] mt-3 mb-1">{t("frequency_1")}</span>
            <span className="text-[#797979]">{t("frequency_2")}</span>
          </div>

          <span>
            <Link href={`/${currentLang}/contact`}>{t("contacts")}</Link>
          </span>
        </div>

        <div className="relative flex lg:flex-row flex-col justify-between lg:items-center gap-3 mt-10 lg:border-b lg:border-b-[#545454] pb-4">
          <button
            className="px-[14px] py-[13px] rounded-full bg-primary hover:bg-primaryHover justify-center items-center hidden lg:flex"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <IconArrowTop />
          </button>
          <div>
            <p className="text-[#797979]">{t("contact")}</p>
            <p>{t("phone")}</p>
          </div>
          <div>
            <p className="text-[#797979]">Email</p>
            <p>{t("email")}</p>
          </div>
          <div>
            <p className="text-[#797979]">{t("address")}</p>
            <p>{t("address")}</p>
          </div>
          <button className="bg-primary hover:bg-primaryHover py-[10px] px-6 rounded-full hidden lg:block">
            {t("write")}
          </button>
          <button
            className="px-[14px] py-[13px] rounded-full bg-primary hover:bg-primaryHover justify-center items-center flex absolute top-0 right-0 lg:hidden"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <IconArrowTop />
          </button>
        </div>

        <div className="justify-between items-center mt-4 hidden lg:flex">
          <p>{t("copyright")}</p>
          <p className="space-x-8">
            <span className="underline">{t("terms")}</span>
            <span className="underline">{t("privacy_policy")}</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
