import Image from "next/image";
import CardElm from "../shared/cardelm";
import NavBar from "@/components/NavBar";

export default function Music() {
  return (
    <div className="w-full h-full px-5">
        <NavBar />
        <div>
            <div className="bg-[#EBD564] flex h-[12rem]">
                <div className="pl-5 py-8 w-[70%]">
                    <div className="flex gap-4 font-semibold font-mono">
                        <div className="bg-[#F4EAB3] px-1 w-20">
                            <p>#radio</p>
                        </div>
                        <div className="bg-[#F4EAB3] w-20">
                            <p>#house</p>
                        </div>
                    </div>
                    <h1 className=" font-semibold py-1 ">Best Progressive House (All - Time)</h1>
                    <p className=" text-sm opacity-50">Westcoast Radio (EDM)</p>
                    <div className="flex gap-5 py-4">
                        <button className="bg-black flex text-white px-12 py-3 items-center">Play <span className="px-4"><Image
                        src='/play-button.png'
                        width={15}
                        height={15}
                        alt="play button"
                        /></span></button>
                        <button className="border-2 border-black px-3">
                            <Image
                            src='/heart_icon.png'
                            width={20}
                            height={20}
                            alt=""
                            />
                        </button>
                    </div>
                </div>
                <Image
                    className="mr-5"
                    src="/listening-music.png"
                    width={140}
                    height={70}
                    alt="listening music"
                />
                <div className="hidden md:block h-full w-[18%] bg-[#F4EAB3]/60"></div>
            </div>
        </div>
        <div>
            <CardElm />
        </div>
    </div>
  );
}
