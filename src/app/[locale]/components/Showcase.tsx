"use client";

import { useState } from "react";
import { IconMusicPause, IconMusicPlay } from "@/components/icons/icons";

const Showcase = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="lg:mt-36">
      <div className="flex items-center justify-center lg:gap-16 gap-6 min-h-[calc(100vh-200px)]">
        {isPaused ? (
          <IconMusicPlay
            className="lg:size-40 size-12 cursor-pointer"
            onClick={() => setIsPaused(false)}
          />
        ) : (
          <IconMusicPause
            className="lg:size-40 size-12 cursor-pointer"
            onClick={() => setIsPaused(true)}
          />
        )}
        <img
          src="/images/showcase.png"
          alt="showcase"
          className="lg:w-fit w-1/2"
        />
      </div>
    </section>
  );
};

export default Showcase;
