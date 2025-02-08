import Image from "next/image";
import { useTranslations } from "next-intl";

const Partners = () => {
  const t = useTranslations("Partners");

  const images = Array.from(
    { length: 8 },
    (_, i) => `/images/partner/partner_${i + 1}.png`
  );

  return (
    <section className="lg:mb-[120px] mb-14 text-center">
      <h1 className="lg:text-[56px] text-3xl lg:leading-[78px] leading-10 font-bold lg:mb-6 mb-4">
        {t("title")}
      </h1>
      <p className="font-medium lg:text-2xl text-base lg:leading-8 leading-6 mb-8">
        {t("description")}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center lg:gap-y-[50px] gap-6">
        {images.map((src, index) => (
          <div key={index} className="relative flex justify-center">
            <Image
              src={src}
              alt={`Partner ${index + 1}`}
              width={200}
              height={48}
              className="h-[28px] md:h-[48px] w-auto object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
