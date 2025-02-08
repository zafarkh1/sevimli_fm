import Image from "next/image";
import { useTranslations } from "next-intl";

const Map = () => {
  const t = useTranslations();

  return (
    <section className="lg:mb-[120px] mb-14 text-center">
      <h1 className="lg:text-[56px] text-3xl lg:leading-[78px] leading-8 font-bold">
        <span className="text-primary">Sevimli.fm</span> {t("Map.title")}
      </h1>
      <div className="relative h-[224px] lg:h-[600px] w-[343px] lg:w-[920px] mx-auto lg:mt-[120px] mt-4">
        <Image src="/images/map.png" alt="Map" fill className="object-cover" />
      </div>
    </section>
  );
};

export default Map;
