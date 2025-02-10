import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("Management");
  return (
    <div className="myContainer lg:mt-36 lg:pt-28 pt-20 lg:pb-48 pb-14 flex flex-col lg:flex-row gap-10">
      <div className="w-full lg:w-[513px]">
        <img
          src="/images/team/team_5.png"
          alt="management"
          className="object-cover rounded-3xl w-full lg:h-full h-[400px]"
        />
      </div>
      <div className="lg:w-[700px]">
        <h2 className="lg:text-[40px] text-3xl font-bold lg:leading-[56px] leading-10 mb-6">
          Amélie Laurent
        </h2>
        <p className="lg:text-2xl font-semibold lg:leading-8 leading-6">
          {t("text")}
        </p>
      </div>
    </div>
  );
};

export default Page;
