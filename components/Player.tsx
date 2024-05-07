"use client";
import Image from "next/image";
import React, { useState, useContext } from "react";
import { Play, Pause } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import ReactPlayer from "react-player/youtube";
import { MyContext } from "@/context/MyContext";

export default function Player() {
  const [play, setPlay] = useState<boolean>(false);
  const [playedSeconds, setPlayedSeconds] = useState<number>(0);

  const { data } = useContext(MyContext);
 
  const handleProgress = (progress: any) => {
    // Extracting playedSeconds from progress object and updating state
    setPlayedSeconds(progress.played);
  };

  const togglePlay = () => {
    setPlay(!play);
  };

  return (
    <div className="w-full h-full flex justify-between items-center">
      {/* Song Details  */}
      <div className="flex items-center px-5 gap-9">
        <div>
          <Image src={data.cover_url} alt="" width={50} height={50} />
        </div>
        <div>
          <h1 className=" text-yellow-400">{data.song_name}</h1>
          <h2 className="text-white/55">{data.artists}</h2>
        </div>
      </div>
      {/* play button */}
      <div className="h-full flex items-center">
        <div
          className={`bg-[#3F3F3F] p-3 rounded-[55px] transition ease-in-out duration-300 ${
            play ? "" : "drop-shadow-lg"
          }`}
          onClick={togglePlay}
        >
          {play ? <Pause color="#EBD564" /> : <Play color="#EBD564" />}
        </div>
      </div>
      {/* progress bar */}
      <div className="w-[60%] px-8">
        <Progress value={playedSeconds * 10} className=" bg-white" />
      </div>
      {/* Audio element */}
      <div className=" hidden">
        <ReactPlayer
          playing={play}
          url={data.song_url}
          onProgress={handleProgress}
        />
      </div>
    </div>
  );
}
