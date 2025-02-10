"use client";

import { useTranslations } from "next-intl";
import { useTeamMembers } from "@/data/team";
import Card from "./Card";

interface TeamMember {
  img: string;
  name: string;
  job: string;
  description: string;
}

const Team = () => {
  const teamMembers = useTeamMembers();
  const t = useTranslations("About");
  return (
    <section className="lg:mb-[157px] mb-[84px]">
      <h1 className="lg:text-[56px] text-2xl font-semibold lg:leading-[65px] leading-7 text-center mb-10">
        {t.rich("teamTitle", {
          sevimli: (chunks) => <span className="text-[#FA3402]">{chunks}</span>,
        })}
      </h1>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-x-8 lg:gap-y-12 gap-y-4">
        {teamMembers.map((member: TeamMember, index: number) => (
          <Card key={index} {...member} />
        ))}
      </div>
    </section>
  );
};

export default Team;
