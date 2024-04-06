import Image from "next/image";
import Music from "./home";


export default function Home() {
  return (
    <main className="flex flex-col bg-[#DECF83]/30 w-full h-screen">
      <div className="h-[90%] flex">
        <div className="h-full w-[70%]">
          <Music />
        </div>
        <div className="h-full w-[30%] bg-[#EBD564] border-2 border-[#E7E7E7]/70">List</div>
      </div>
      <div className="bg-black h-[10%]">
        <audio src="/audio1.mp3" controls></audio>
      </div>
    </main>
  );
}
