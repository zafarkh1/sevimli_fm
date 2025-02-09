"use client";

import { usePathname } from "next/navigation";
import en from "./teamEn.json";
import ru from "./teamRu.json";
import uz from "./teamUz.json";

export const useTeamMembers = () => {
  const pathname = usePathname();

  const currentLang = pathname.split("/")[1] || "en";

  switch (currentLang) {
    case "ru":
      return ru.TeamMembers;
    case "uz":
      return uz.TeamMembers;
    default:
      return en.TeamMembers;
  }
};
