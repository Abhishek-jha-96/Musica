"use client";
import Image from "next/image";
import { SongsProps } from "@/constants/ImageData";
import { useEffect, useState } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import "@/shared/cardelm.css"


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
            <div className="flex flex-col items-center rounded-sm shadow-md p-2 border-2"
            style={{backgroundColor: '#FFEEA9', borderBlockColor: "rgb(0 0 0 / 0.9)"}}>
              <div
                style={{ backgroundImage: `url(${music.cover_url})`, width: "150px", height: "100px", backgroundSize: "cover", backgroundPosition: "center"}}
              ></div>
              <div className="px-6">
                <div className="font-bold text-xl text-center mb-2" style={{width: "150px", textAlign: "center"}}>{music.song_name}</div>
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
