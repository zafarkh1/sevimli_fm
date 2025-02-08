import { useTranslations } from "next-intl";

const BrandPromotion = () => {
  const t = useTranslations("BrandPromotion");

  return (
    <section className="lg:py-[120px] py-14 text-center">
      <h2 className="font-bold lg:text-[40px] text-2xl lg:leading-[56px] leading-8">
        {t("title")}
      </h2>
      <p className="font-medium lg:text-xl text-base mt-6">
        <span className="text-primary">Sevimli.fm</span> {t("description")}
      </p>
      <button className="py-[10px] font-semibold rounded-full lg:w-[440px] sm:w-[300px] w-full bg-primary hover:bg-primaryHover text-white mt-10 transition-all duration-300 ease-out">
        {t("download")}
      </button>
    </section>
  );
};

export default BrandPromotion;
