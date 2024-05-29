"use client";
import Image from "next/image";
import { SongsProps } from "@/constants/ImageData";
import { useEffect, useState } from "react";

export default function CardElm() {
  const url = "http://localhost:8000/toptracks/";
  const [trackData, setTrackData] = useState<SongsProps[]>([]);

  useEffect(() => {
    async function fetchTopTrack() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const Data: SongsProps[] = await response.json();
        setTrackData(Data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    }
    fetchTopTrack();
  }, []);
  return (
    <div className="flex justify-between w-full">
      {trackData.map((music, index) => (
        <div
          key={index}
          className="bg-black flex flex-col items-center px-2 py-3"
        >
          <Image
            src={music.cover_url}
            width={150}
            height={100}
            alt={music.song_name}
          />
          <h4 className="text-white py-2">{music.song_name}</h4>
        </div>
      ))}
    </div>
  );
}
