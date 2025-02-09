import { useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations("Contact");

  return (
    <section className="flex lg:flex-row flex-col lg:gap-10 gap-6 lg:mb-[224px] mb-[180px]">
      <div className="lg:w-3/5">
        <h3 className="lg:text-3xl text-2xl lg:leading-[45px] leading-8 font-semibold mb-10">
          {t("title")}
        </h3>
        <p className="text-xl font-medium mb-8 lg:w-2/3">
          {t("description")}{" "}
          <span className="text-primary">
            {t("email_info")} info@sevimli.fm
          </span>
        </p>
        <ul className="space-y-4 lg:w-1/2">
          <li>{t("address")}</li>
          <li>{t("phone")}</li>
          <li>{t("socials")}</li>
        </ul>
      </div>

      <div className="lg:w-2/5 lg:border lg:border-[#797979] rounded-[32px] lg:py-8 lg:px-6">
        <h3 className="lg:text-3xl lg:leading-[45px] text-2xl leading-8 font-semibold">
          {t("contact_form_title")}
        </h3>
        <p className="font-medium lg:text-base text-sm mt-2">
          {t("contact_form_description")}
        </p>
        <form className="mt-4 space-y-4">
          <input
            type="text"
            placeholder={t("name")}
            className="bg-transparent border border-[#797979] py-[10px] px-4 rounded-full lg:w-[49%] w-full lg:mr-2"
          />
          <input
            type="text"
            placeholder={t("surname")}
            className="bg-transparent border border-[#797979] py-[10px] px-4 rounded-full lg:w-[49%] w-full"
          />
          <input
            type="text"
            placeholder={t("phone_number")}
            className="bg-transparent border border-[#797979] py-[10px] px-4 rounded-full w-full"
          />
          <textarea
            cols={10}
            rows={5}
            placeholder={t("message_placeholder")}
            className="bg-transparent border border-[#797979] py-[10px] px-4 rounded-3xl w-full resize-none"
          ></textarea>
          <button className="py-[10px] font-semibold rounded-full w-full bg-primary hover:bg-primaryHover text-white mt-10 transition-all duration-300 ease-out">
            {t("send_button")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
