import React from "react";
import { Heart, Play } from 'lucide-react';
import {
  Carousel,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";

const Cover = () => {
  return (
    <Carousel className="mb-2">
      <CarouselItem className="bg-[#EBD564] flex h-[13rem]">
        <div className="pl-5 py-8 w-[70%]">
          <div className="flex gap-4 font-semibold font-mono">
            <div className="bg-[#F4EAB3] px-1 w-20">
              <p>#radio</p>
            </div>
            <div className="bg-[#F4EAB3] w-20">
              <p>#house</p>
            </div>
          </div>
          <h1 className=" font-semibold py-1 ">
            Best Progressive House (All - Time)
          </h1>
          <p className=" text-sm opacity-50">Westcoast Radio (EDM)</p>
          <div className="flex gap-5 py-4">
            <button className="bg-black flex text-white px-12 py-3 items-center">
              Play{" "}
              <span className="px-4">
                <Play color="#EBD564" />
              </span>
            </button>
            <button className="border-2 border-black px-2">
              <Heart fill="True" size={30}/>
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
        <div className="hidden lg:block h-full w-[18%] bg-[#F4EAB3]/60"></div>
      </CarouselItem>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Cover;
