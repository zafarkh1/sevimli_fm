import {
  IconMusicPause,
  IconMusicPlay,
  IconMusicSound,
} from "@/components/icons/icons";

const PlayerFooter = ({
  isPlaying,
  togglePlay,
  volume,
  setVolume,
}: {
  isPlaying: boolean;
  togglePlay: () => void;
  volume: number;
  setVolume: (vol: number) => void;
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40">
      <div className="bg-[#141414] lg:px-16 px-4 lg:pt-4 pt-2 lg:pb-9 pb-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/images/player_logo.png"
            alt="player_logo"
            className="lg:w-14 lg:h-14"
          />
          <p className="font-semibold flex flex-col gap-1">
            <span className="text-lg">Sevimli.fm</span>
            <span>104.5</span>
          </p>
        </div>

        <button
          className="bg-black bg-opacity-50 p-2 rounded-full"
          onClick={togglePlay}
        >
          {isPlaying ? (
            <IconMusicPause className="size-20 text-white" />
          ) : (
            <IconMusicPlay className="size-20 text-white" />
          )}
        </button>

        <div className="flex items-center gap-3">
          <IconMusicSound />
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-24 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default PlayerFooter;
