"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import { useFormik } from "formik";
import { usePathname } from "next/navigation";
import { getContactValidationSchema } from "@/components/utils/validation";
import { sendContactMessage } from "@/api/api";
import toast from "react-hot-toast";

const Contact = () => {
  const t = useTranslations("Contact");
  const pathname = usePathname();
  const currentLang = pathname.split("/")[1] || "en";
  const [loading, setLoading] = useState(false);

  // Formik Configuration
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      description: "",
    },
    validationSchema: getContactValidationSchema(),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);

      const status = await sendContactMessage(values, currentLang);

      if (status === "success") {
        toast.success(t("success_message"));
        resetForm();
      } else {
        toast.error(t("error_message"));
      }

      setLoading(false);
    },
  });

  return (
    <section className="flex lg:flex-row flex-col lg:gap-10 gap-6 lg:mb-[224px] mb-[87px]">
      <div className="lg:w-3/5">
        <h3 className="lg:text-3xl text-2xl lg:leading-[45px] leading-8 font-semibold mb-10">
          {t("title")}
        </h3>
        <p className="text-xl font-medium mb-8 lg:w-2/3">
          {t("description")} {t("email_info")}{" "}
          <span className="text-primary">info@sevimli.fm</span>
        </p>
        <ul className="space-y-4 lg:w-1/2">
          <li>{t("address")}</li>
          <li>{t("phone")}</li>
          <li>
            {t("socials")}
            <Link
              href="https://www.instagram.com"
              target="_blank"
              className="underline hover:text-primary transition duration-300"
            >
              Instagram
            </Link>
            ,{" "}
            <Link
              href="https://www.telegram.org"
              target="_blank"
              className="underline hover:text-primary transition duration-300"
            >
              Telegram
            </Link>
            ,{" "}
            <Link
              href="https://www.youtube.com"
              target="_blank"
              className="underline hover:text-primary transition duration-300"
            >
              YouTube
            </Link>
          </li>
        </ul>
      </div>

      <div className="lg:w-2/5 lg:border lg:border-[#797979] rounded-[32px] lg:py-8 lg:px-6">
        <h3 className="lg:text-3xl lg:leading-[45px] text-2xl leading-8 font-semibold">
          {t("contact_form_title")}
        </h3>
        <p className="font-medium lg:text-base text-sm mt-2">
          {t("contact_form_description")}
        </p>
        <form onSubmit={formik.handleSubmit} className="mt-4 space-y-4">
          <input
            type="text"
            placeholder={t("name")}
            className="bg-transparent border border-[#797979] py-[10px] px-4 rounded-full w-full"
            {...formik.getFieldProps("first_name")}
          />
          {formik.touched.first_name && formik.errors.first_name && (
            <p className="text-red-500 text-sm">{formik.errors.first_name}</p>
          )}

          <input
            type="text"
            placeholder={t("surname")}
            className="bg-transparent border border-[#797979] py-[10px] px-4 rounded-full w-full"
            {...formik.getFieldProps("last_name")}
          />
          {formik.touched.last_name && formik.errors.last_name && (
            <p className="text-red-500 text-sm">{formik.errors.last_name}</p>
          )}

          <input
            type="email"
            placeholder={t("email")}
            className="bg-transparent border border-[#797979] py-[10px] px-4 rounded-full w-full"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-sm">{formik.errors.email}</p>
          )}

          <input
            type="text"
            placeholder={t("phone_number")}
            className="bg-transparent border border-[#797979] py-[10px] px-4 rounded-full w-full"
            {...formik.getFieldProps("phone")}
          />
          {formik.touched.phone && formik.errors.phone && (
            <p className="text-red-500 text-sm">{formik.errors.phone}</p>
          )}

          <textarea
            cols={10}
            rows={5}
            placeholder={t("message_placeholder")}
            className="bg-transparent border border-[#797979] py-[10px] px-4 rounded-3xl w-full resize-none"
            {...formik.getFieldProps("description")}
          ></textarea>
          {formik.touched.description && formik.errors.description && (
            <p className="text-red-500 text-sm">{formik.errors.description}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="py-[10px] font-semibold rounded-full w-full bg-primary hover:bg-primaryHover text-white mt-10 transition-all duration-300 ease-out"
          >
            {loading ? t("sending") : t("send_button")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
