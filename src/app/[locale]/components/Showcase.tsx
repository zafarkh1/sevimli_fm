"use client";

import { useState } from "react";
import AudioVisualizer from "@/components/AudioVisualizer";
import PlayerFooter from "./PlayerFooter";

const Showcase = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1); // Default volume (1 = 100%)

  return (
    <section className="lg:mt-36 flex items-center justify-center lg:gap-[150px] gap-6 min-h-[calc(100vh-200px)]">
      <AudioVisualizer
        isPlaying={isPlaying}
        togglePlay={() => setIsPlaying(!isPlaying)}
        volume={volume}
      />
      <PlayerFooter
        isPlaying={isPlaying}
        togglePlay={() => setIsPlaying(!isPlaying)}
        volume={volume}
        setVolume={setVolume}
      />
    </section>
  );
};

export default Showcase;
