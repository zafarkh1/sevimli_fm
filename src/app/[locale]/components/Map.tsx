"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import stateComponents from "./stateComponent";

const Map = () => {
  const t = useTranslations();
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ left: 0, top: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="lg:mb-[120px] mb-14 text-center">
      <h1 className="lg:text-[56px] text-3xl lg:leading-[78px] leading-8 font-bold">
        <span className="text-primary">Sevimli.fm</span> {t("Map.title")}
      </h1>

      <div className="relative lg:mt-[120px] mt-4 h-[224px] lg:h-[600px] w-[343px] lg:w-[920px] mx-auto">
        {Object.entries(stateComponents).map(
          ([key, { component: Icon, left, top, width, height }]) => (
            <div
              key={key}
              style={{
                position: "absolute",
                left: isMobile ? left.mobile : left.desktop,
                top: isMobile ? top.mobile : top.desktop,
              }}
            >
              <Icon
                width={isMobile ? width.mobile : width.desktop}
                height={isMobile ? height.mobile : height.desktop}
                onMouseEnter={() => {
                  setHoveredState(key);
                  setTooltipPosition({
                    left: parseInt(isMobile ? left.mobile : left.desktop) + 40,
                    top: parseInt(isMobile ? top.mobile : top.desktop) + 20,
                  });
                }}
                onMouseLeave={() => setHoveredState(null)}
              />
            </div>
          )
        )}

        {hoveredState && (
          <>
            <div
              className="absolute bg-primary text-white text-xs font-semibold py-2 w-28 rounded-lg text-center"
              style={{
                left: `${tooltipPosition.left}px`,
                top: `${tooltipPosition.top}px`,
                transform: "translate(-50%, -120%)",
              }}
            >
              {stateComponents[hoveredState]?.fill
                ? "Тут вы можете слушать нас"
                : "Скоро"}
            </div>
            <span
              className="w-3 h-3 bg-primary absolute rotate-45"
              style={{
                left: `${tooltipPosition.left}px`,
                top: `${tooltipPosition.top}px`,
                transform: "translate(-50%, -125%) rotate(45deg)",
              }}
            ></span>
          </>
        )}
      </div>
    </section>
  );
};

export default Map;
