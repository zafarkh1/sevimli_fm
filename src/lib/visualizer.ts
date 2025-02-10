export const initVisualizer = (
  audioElement: HTMLAudioElement,
  canvasElement: HTMLCanvasElement
) => {
  if (!audioElement || !canvasElement) {
    console.error("Audio or Canvas element is missing!");
    return;
  }

  const canvasCtx = canvasElement.getContext("2d");
  if (!canvasCtx) {
    console.error("Failed to get canvas context");
    return;
  }

  const audioCtx = new (window.AudioContext ||
    (window as any).webkitAudioContext)();
  const analyser = audioCtx.createAnalyser();
  const source = audioCtx.createMediaElementSource(audioElement);

  source.connect(analyser);
  analyser.connect(audioCtx.destination);

  analyser.fftSize = 256;
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);

  const draw = () => {
    requestAnimationFrame(draw);
    analyser.getByteFrequencyData(dataArray);

    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    canvasCtx.fillStyle = "#000";
    canvasCtx.fillRect(0, 0, canvasElement.width, canvasElement.height);

    const barWidth = (canvasElement.width / bufferLength) * 2.5;
    let barHeight;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
      barHeight = dataArray[i];
      canvasCtx.fillStyle = `rgb(${barHeight + 100}, 50, 150)`;
      canvasCtx.fillRect(
        x,
        canvasElement.height - barHeight / 2,
        barWidth,
        barHeight / 2
      );
      x += barWidth + 1;
    }
  };

  audioElement.onplay = () => {
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }
    draw();
  };

  console.log("Audio Visualizer Initialized!");
};
