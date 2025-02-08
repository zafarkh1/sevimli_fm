import Image from "next/image";
import { useTranslations } from "next-intl";

const HomeAbout = () => {
  const t = useTranslations("HomeAbout");

  return (
    <section className="">
      <h1 className="lg:text-[56px] text-2xl font-semibold lg:leading-[65px] leading-7">
        {t("title")}
      </h1>
      <p className="lg:text-2xl text-base font-semibold lg:w-1/2 lg:ml-auto lg:my-8 mt-6 mb-9">
        {t("description")}
      </p>
      <div className="relative w-full h-[240px] lg:h-[670px]">
        <Image
          src="/images/home_about.png"
          alt="about"
          fill
          className="object-cover rounded-xl"
        />
      </div>
    </section>
  );
};

export default HomeAbout;
