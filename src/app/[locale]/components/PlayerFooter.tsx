import {
  IconMusicMute,
  IconMusicSound,
  IconMusicX,
  IconPlayerPlay,
  IconPlayerStop,
} from "@/components/icons/icons";
import { useAudioPlayer } from "@/context/AudioContext";

const PlayerFooter = () => {
  const { isPlaying, togglePlay, volume, setVolume, hidePlayer } =
    useAudioPlayer();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40">
      <div className="bg-[#141414] lg:px-16 px-4 pt-4 lg:pb-9 pb-4 space-y-2">
        <div className="flex items-center gap-3">
          <img
            src="/images/player_logo.png"
            alt="player_logo"
            className="w-14 h-14 lg:hidden"
          />
          <p className="font-semibold flex flex-col gap-1 lg:hidden">
            <span className="text-lg">Sevimli.fm</span>
            <span>104.5</span>
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={hidePlayer}>
              <IconMusicX className="lg:size-8 size-6 mr-10" />
            </button>
            <img
              src="/images/player_logo.png"
              alt="player_logo"
              className="w-14 h-14 hidden lg:block"
            />
            <p className="font-semibold flex-col gap-1 hidden lg:flex">
              <span className="text-lg">Sevimli.fm</span>
              <span>104.5</span>
            </p>
          </div>

          <button className="" onClick={togglePlay}>
            {isPlaying ? (
              <IconPlayerStop className="" />
            ) : (
              <IconPlayerPlay className="" />
            )}
          </button>

          <div className="flex items-center gap-3">
            {volume === 0 ? <IconMusicMute /> : <IconMusicSound />}
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-24 cursor-pointer appearance-none bg-transparent"
              style={{
                background: `linear-gradient(to right, white ${
                  volume * 100
                }%, rgba(255,255,255,0.3) ${volume * 100}%)`,
                height: "4px",
                borderRadius: "2px",
                outline: "none",
                transition: "background 0.3s ease",
                WebkitAppearance: "none",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerFooter;
