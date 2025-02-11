"use client";

import { useEffect, useRef, useState } from "react";
import {
  IconLogoText,
  IconMusicPause,
  IconMusicPlay,
  SevimliMusic,
} from "@/components/icons/icons";
import { useAudioPlayer } from "@/context/AudioContext";

const Showcase: React.FC = () => {
  const { isPlaying, togglePlay, togglePlayer, audioRef } = useAudioPlayer();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const [radius, setRadius] = useState(60);

  useEffect(() => {
    const updateRadius = () => {
      setRadius(window.innerWidth >= 1024 ? 90 : 60);
    };

    updateRadius(); // Set initial value
    window.addEventListener("resize", updateRadius);

    return () => {
      window.removeEventListener("resize", updateRadius);
    };
  }, []);

  useEffect(() => {
    if (!canvasRef.current || !audioRef.current) return;

    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext ||
        (window as any).webkitAudioContext)();
    }

    if (!analyserRef.current) {
      analyserRef.current = audioContextRef.current.createAnalyser();
      analyserRef.current.fftSize = 256;
    }

    try {
      if (!sourceRef.current) {
        sourceRef.current = audioContextRef.current.createMediaElementSource(
          audioRef.current
        );
        sourceRef.current.connect(analyserRef.current);
        analyserRef.current.connect(audioContextRef.current.destination);
      }
    } catch (error) {
      console.warn("Audio source already connected, skipping:", error);
    }

    const analyser = analyserRef.current;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const draw = () => {
      if (!canvasRef.current) return;
      const ctx = canvasRef.current.getContext("2d");
      if (!ctx) return;

      analyser.getByteFrequencyData(dataArray);

      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);

      const centerX = canvasRef.current.width / 2;
      const centerY = canvasRef.current.height / 2;
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

      animationFrameRef.current = requestAnimationFrame(draw);
    };

    const startAnimation = () => {
      if (audioContextRef.current?.state === "suspended") {
        audioContextRef.current.resume();
      }
      draw();
    };

    if (isPlaying) {
      startAnimation();
    }

    return () => {
      cancelAnimationFrame(animationFrameRef.current!);
    };
  }, [isPlaying, radius]); // 🔥 Depend on `radius` to redraw on screen size change

  // 🛠 Resume AudioContext when page is visible
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        audioContextRef.current?.resume();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <section className="lg:mt-36 flex items-center justify-center lg:gap-[150px] gap-6 min-h-[calc(100vh-200px)]">
      <div className="relative flex flex-col items-center">
        <button
          className="absolute top-0 left-0 z-10 bg-black bg-opacity-50 p-2 rounded-full"
          onClick={() => {
            togglePlay();
            togglePlayer();
          }}
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
              className="lg:w-[400px] lg:h-[400px]"
            ></canvas>
          </div>
          <div className="absolute lg:-top-28 -top-[25px] lg:-left-[90px] -left-[60px]">
            {!isPlaying && <SevimliMusic />}
          </div>
          <IconLogoText />
        </div>
      </div>
    </section>
  );
};

export default Showcase;
