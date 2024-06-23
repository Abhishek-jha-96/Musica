"use client";
import Image from "next/image";
import Heart from "@/components/Heart";
import { useEffect, useState, useContext } from "react";
import { MyContext } from "@/context/MyContext";
import { SongsProps, AllSongsProps } from "@/constants/ImageData";

export default function SideBar() {
  const { data, handleSetData } = useContext(MyContext);
  const [allMusic, setAllMusic] = useState<SongsProps[]>([]);
  const [allData, setAllData] = useState<AllSongsProps | null>();
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  const url: string = "http://127.0.0.1:8000/songs/";

  //Initial data fetch
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const Data: SongsProps[] = await response.json();
        setAllData(allData);
        setAllMusic(Data);
        

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

// Seeding context.
  const handleClick = (index: number) => {
    setClickedIndex(index);
    handleSetData(allMusic[index]);
  };
  
  const handleVote = async (index: number) => {
    const updatedMusic = [...allMusic];
    updatedMusic[index].votes += 1;
    setAllMusic(updatedMusic);
    const update_url = "http://localhost:8000/trackvote/"
    try {
      const response = await fetch(`${update_url}${updatedMusic[index].id}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ votes: updatedMusic[index].votes }),
      });

      if (!response.ok) {
        throw new Error('Failed to update votes');
      }

      const updatedSong = await response.json();
      setAllMusic((prev) =>
        prev.map((song) => (song.id === updatedSong.id ? updatedSong : song))
      );
    } catch (error) {
      console.error('Error updating votes:', error);
    }
  };


  return (
    <div className="w-full h-full">
      <h1 className=" p-5 text-2xl font-semibold">Playing Tracks</h1>
      {allMusic.map((music, index) => (
        <div
        className={`flex justify-between items-center w-[85%] border-2 mx-7 my-5 transition-all ease-in-out duration-500 ${
          index === clickedIndex ? "bg-black/90 text-white scale-105" : "border-black/20"
        }`}
        onClick={() => handleClick(index)}
        key={index}
        >
          <Image
            src={music.cover_url}
            alt={music.song_name}
            height={60}
            width={80}
          />
          <h1>{music.song_name}</h1>
          <div className="px-2">
            <Heart fill="True" size={36} votes={music.votes} onVote={() => handleVote(index)}/>
          </div>
        </div>
      ))}
    </div>
  );
}
