"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function Player() {
  const [play, setPlay] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audioElement = audioRef.current;
    const handleLoadedMetadata = () => {
      if (audioElement) {
        setDuration(audioElement.duration);
      }
    };

    if (audioElement) {
      audioElement.addEventListener("loadedmetadata", handleLoadedMetadata);

      // Cleanup function
      return () => {
        audioElement.removeEventListener(
          "loadedmetadata",
          handleLoadedMetadata
        );
      };
    }
  }, [audioRef.current]);

  const togglePlay = () => {
    setPlay(!play);
    if (play) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
  };

  return (
    <div className="w-full h-full flex justify-between items-center">
      {/* Song Details  */}
      <div className="flex items-center px-5 gap-9">
        <div>
          <Image src="/sample_img.png" alt="" width={50} height={50} />
        </div>
        <div>
          <h1 className=" text-yellow-400">Song Title</h1>
          <h2 className="text-white/55">Artist</h2>
          <h3 className="text-white">{duration.toFixed(2)} seconds</h3>
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
        <Progress value={duration} className=" bg-white" />
      </div>
      {/* Audio element */}
      <audio ref={audioRef}>
        <source src="/audio1.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}
