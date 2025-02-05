"use client";

import { useEffect, useRef, useState } from "react";

const AudioVisualizer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [audioCtx, setAudioCtx] = useState<AudioContext | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!canvasRef.current || !audioRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const audio = audioRef.current;
    let newAudioCtx: AudioContext | null = null;
    let analyser: AnalyserNode;
    let source: MediaElementAudioSourceNode;
    let animationFrameId: number;

    const toggleAudio = () => {
      if (audio) {
        if (audio.paused) {
          audio.play();
        } else {
          audio.pause();
        }
      }
    };

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

      setIsPlaying(true);
      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      const draw = () => {
        animationFrameId = requestAnimationFrame(draw);
        analyser.getByteFrequencyData(dataArray);

        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = 90;

        // 260-degree wave with 90° (top) open
        const startAngle = (3 * Math.PI) / 2 + (50 * Math.PI) / 180; // Start at 120° (to keep 90° open at top)
        const waveArc = (260 * Math.PI) / 180; // 260° in radians
        const endAngle = startAngle + waveArc;

        // Draw reference arc
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.strokeStyle = "#FFF";
        ctx.lineWidth = 2;
        ctx.stroke();

        const spacing = 3;

        for (let i = 0; i < bufferLength; i += spacing) {
          // Map bars across the 260-degree arc
          const angle = startAngle + (i / bufferLength) * waveArc;
          const barHeight = dataArray[i] / 2;
          const x = centerX + Math.cos(angle) * (radius + barHeight);
          const y = centerY + Math.sin(angle) * (radius + barHeight);
          const x2 = centerX + Math.cos(angle) * radius;
          const y2 = centerY + Math.sin(angle) * radius;

          ctx.beginPath();
          ctx.moveTo(x2, y2);
          ctx.lineTo(x, y);
          ctx.strokeStyle = `rgb(${barHeight + 100}, 50, 150)`;
          ctx.lineWidth = 3;
          ctx.stroke();
        }
      };

      draw();
    };

    // Play/Pause on click or touch
    document.addEventListener("click", toggleAudio);
    document.addEventListener("touchstart", toggleAudio);

    audio.addEventListener("play", handleUserInteraction);
    audio.addEventListener("pause", () => setIsPlaying(false));

    return () => {
      document.removeEventListener("click", toggleAudio);
      document.removeEventListener("touchstart", toggleAudio);
      audio.removeEventListener("play", handleUserInteraction);
      audio.removeEventListener("pause", () => setIsPlaying(false));
      if (newAudioCtx) {
        newAudioCtx.close();
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="vz-wrapper">
      <audio
        ref={audioRef}
        src="/audio/audio.mp3"
        data-author="Beethoven"
        data-title="Allegro"
        controls
      ></audio>
      <div className="vz-wrapper -canvas">
        <canvas ref={canvasRef} width={800} height={400}></canvas>
      </div>
    </div>
  );
};

export default AudioVisualizer;
