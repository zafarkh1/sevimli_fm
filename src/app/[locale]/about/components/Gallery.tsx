import { useTranslations } from "next-intl";

const Gallery = () => {
  const t = useTranslations("About");
  return (
    <section className="lg:mt-36 lg:pt-32 pt-28 pb-14 lg:pb-24">
      <h1 className="lg:text-[56px] text-2xl font-semibold lg:leading-[65px] leading-7 text-center lg:mb-40">
        <span className="text-primary">Sevimli.fm </span> {t("title")}
      </h1>
      <p className="lg:text-2xl text-base font-semibold lg:w-2/3 lg:my-8 mt-6 mb-9">
        {t("description1")}
      </p>
      <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-x-[30px] gap-x-4 lg:gap-y-5 gap-y-4 place-self-center">
        <img
          src="/images/about/about_1.png"
          alt="about"
          className="col-span-1 order-1"
        />
        <img
          src="/images/about/about_2.png"
          alt="about"
          className="col-span-1 order-1"
        />
        <img
          src="/images/about/about_3.png"
          alt="about"
          className="col-span-1 lg:order-1 order-2"
        />
        <img
          src="/images/about/about_4.png"
          alt="about"
          className="col-span-1 lg:order-1 order-2"
        />
        <img
          src="/images/about/about_5.png"
          alt="about"
          className="col-span-2 lg:order-2 order-1"
        />
        <img
          src="/images/about/about_6.png"
          alt="about"
          className="col-span-2 lg:order-2 order-3"
        />
      </div>
      <p className="lg:text-2xl text-base font-semibold lg:w-2/3 lg:ml-auto mt-10">
        {t("description2")}
      </p>
    </section>
  );
};

export default Gallery;
