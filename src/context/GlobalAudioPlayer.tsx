"use client";
import { useEffect } from "react";
import { useAudioPlayer } from "@/context/AudioContext";
import PlayerFooter from "@/app/[locale]/components/PlayerFooter";

const GlobalAudioPlayer = () => {
  const { isPlaying, volume, audioRef } = useAudioPlayer();
  const { showPlayer } = useAudioPlayer();

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return <>{showPlayer && <PlayerFooter />}</>;
};

export default GlobalAudioPlayer;
