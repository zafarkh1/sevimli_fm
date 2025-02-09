"use client";

import { useTranslations } from "next-intl";
import stateComponents from "./stateComponent";
import { useState } from "react";

const Map = () => {
  const t = useTranslations();
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ left: 0, top: 0 });

  return (
    <section className="lg:mb-[120px] mb-14 text-center">
      <h1 className="lg:text-[56px] text-3xl lg:leading-[78px] leading-8 font-bold">
        <span className="text-primary">Sevimli.fm</span> {t("Map.title")}
      </h1>

      <div className="relative lg:mt-[120px] mt-4 h-[224px] lg:h-[600px] w-[343px] lg:w-[920px] mx-auto">
        {Object.entries(stateComponents).map(
          ([key, { component: Icon, left, top }]) => (
            <div
              key={key}
              style={{ position: "absolute", left, top }}
              onMouseEnter={(e) => {
                setHoveredState(key);
                setTooltipPosition({ left: e.clientX, top: e.clientY });
              }}
              onMouseLeave={() => setHoveredState(null)}
            >
              <Icon />
            </div>
          )
        )}

        {hoveredState && (
          <>
            <div
              className="absolute bg-primary text-white text-xs font-semibold py-2 w-28 rounded-lg"
              style={{
                left: `${tooltipPosition.left - 260}px`,
                top: `${tooltipPosition.top - 150}px`,
              }}
            >
              {stateComponents[hoveredState]?.fill
                ? "Тут вы можете слушать нас"
                : "Скоро"}
            </div>
            <span
              className="w-3 h-3 bg-primary absolute rotate-45"
              style={{
                left: `${tooltipPosition.left - 220}px`,
                top: `${tooltipPosition.top - 125}px`,
              }}
            ></span>
          </>
        )}
      </div>
    </section>
  );
};

export default Map;

{
  /* <div className="relative h-[224px] lg:h-[600px] w-[343px] lg:w-[920px] mx-auto lg:mt-[120px] mt-4">
        <Image src="/images/map.png" alt="Map" fill className="object-cover" />
      </div> */
}
