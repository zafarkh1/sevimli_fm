"use client";

import { useEffect, useRef, useState } from "react";
import {
  IconMusicPause,
  IconMusicPlay,
  SevimliMusic,
} from "@/components/icons/icons";

const AudioVisualizer: React.FC<{
  isPlaying: boolean;
  togglePlay: () => void;
  volume: number;
}> = ({ isPlaying, togglePlay, volume }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [audioCtx, setAudioCtx] = useState<AudioContext | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume; // Apply volume change
    }
  }, [volume]);

  useEffect(() => {
    if (!canvasRef.current || !audioRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const audio = audioRef.current;
    let newAudioCtx: AudioContext | null = null;
    let analyser: AnalyserNode;
    let source: MediaElementAudioSourceNode;
    let animationFrameId: number;

    const handleUserInteraction = () => {
      if (!newAudioCtx) {
        newAudioCtx = new (window.AudioContext ||
          (window as any).webkitAudioContext)();
        setAudioCtx(newAudioCtx);
        analyser = newAudioCtx.createAnalyser();
        source = newAudioCtx.createMediaElementSource(audio);
        source.connect(analyser);
        analyser.connect(newAudioCtx.destination);
        analyser.fftSize = 256;
      }
      if (newAudioCtx.state === "suspended") {
        newAudioCtx.resume();
      }

      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      const draw = () => {
        animationFrameId = requestAnimationFrame(draw);
        analyser.getByteFrequencyData(dataArray);

        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // if (!isPlaying) return; // 🔥 Don't draw anything if paused

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = 90;
        const startAngle = (35 * Math.PI) / 180;
        const waveArc = (260 * Math.PI) / 180;
        const endAngle = startAngle + waveArc;

        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.strokeStyle = "#FF3400";
        ctx.lineWidth = 4;
        ctx.stroke();

        const spacing = 3;
        ctx.lineCap = "round";

        for (let i = 0; i < bufferLength; i += spacing) {
          const angle = startAngle + (i / bufferLength) * waveArc;
          let baseHeight = dataArray[i] / 2;
          const barHeight = i % 2 === 0 ? baseHeight * 1 : baseHeight * 0.6;
          const barWidth = i % 2 === 0 ? 6 : 4;

          const x = centerX + Math.cos(angle) * (radius + barHeight);
          const y = centerY + Math.sin(angle) * (radius + barHeight);
          const x2 = centerX + Math.cos(angle) * radius;
          const y2 = centerY + Math.sin(angle) * radius;

          ctx.beginPath();
          ctx.moveTo(x2, y2);
          ctx.lineTo(x, y);

          const gradient = ctx.createLinearGradient(x2, y2, x, y);
          gradient.addColorStop(0, "#FF3400");
          gradient.addColorStop(1, "#FF6C47");

          ctx.strokeStyle = gradient;
          ctx.lineWidth = barWidth;
          ctx.stroke();
        }
      };

      draw();
    };

    audio.addEventListener("play", handleUserInteraction);

    return () => {
      audio.removeEventListener("play", handleUserInteraction);
      if (newAudioCtx) {
        newAudioCtx.close();
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div className="relative flex flex-col items-center">
      {/* Audio element */}
      <audio ref={audioRef} src="/audio/audio.mp3"></audio>

      {/* Play/Pause Button */}
      <button
        className="absolute top-0 left-0 z-10 bg-black bg-opacity-50 p-2 rounded-full"
        onClick={togglePlay}
      >
        {isPlaying ? (
          <IconMusicPause className="lg:size-[120px] size-12 text-white" />
        ) : (
          <IconMusicPlay className="lg:size-[120px] size-12 text-white" />
        )}
      </button>

      {/* Animated Logo */}
      <div className="relative flex lg:ml-64 ml-32">
        <div className="absolute -top-36 -left-40 -z-10">
          <canvas
            ref={canvasRef}
            width={400}
            height={400}
            className="w-[400px] h-[400px]"
          ></canvas>
        </div>
        <div className="absolute -top-28 -left-[90px]">
          {!isPlaying && <SevimliMusic />}
        </div>
        <img src="/images/showcase.svg" alt="showcase text" className="ml-4" />
      </div>
    </div>
  );
};

export default AudioVisualizer;
