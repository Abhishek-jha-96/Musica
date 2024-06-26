import Image from "next/image";
import Music from "./home";
import Player from "@/components/Player";
import SideBar from "@/components/SideBar";


export default function Home() {
  return (
    <main className="flex flex-col bg-[#DECF83]/30 w-full h-screen">
      <div className="h-[90%] flex">
        <div className="h-full w-[70%]">
          <Music />
        </div>
        <div className="h-full w-[30%] bg-[#EBD564] border-2 border-[#E7E7E7]/70">
          <SideBar></SideBar>
        </div>
      </div>
      <div className="bg-black h-[10%]">
        <Player />
      </div>
    </main>
  );
}
