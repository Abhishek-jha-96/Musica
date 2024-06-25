"use client";
import Image from "next/image";
import { SongsProps } from "@/constants/ImageData";
import { useEffect, useState } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

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
    <div className="w-full flex justify-between">
      {trackData.map((music, index) => (
        <HoverCard key={index}>
          <HoverCardTrigger>
            <div className="max-w-sm rounded bg-yellow overflow-hidden shadow-lg">
              <div
                style={{ backgroundImage: `url(${music.cover_url})`, width: "150px", height: "100px", backgroundSize: "cover", backgroundPosition: "center"}}
              ></div>
              <div className="px-6 py-2">
                <div className="font-bold text-xl mb-2">{music.song_name}</div>
              </div>
            </div>
          </HoverCardTrigger>
          <HoverCardContent>
            <div>
              Song Artists: {music.artists}
              <br />
              current votes: {music.votes}
            </div>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  );
}
