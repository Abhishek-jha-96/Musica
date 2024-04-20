import Image from "next/image";
import { ComponentProps } from "@/constants/ImageData";

export default function CardElm() {
    return(
        <div className="bg-white relative flex flex-col items-center px-2 py-3 w-fit gap-y-2">
            <Image
            src='/sample_img.png'
            width={100}
            height={100}
            alt="sample"
            />
            {/* <div className=" w-10 h-10 absolute z-10 top-16 right-5 bg-white">
                
            </div> */}
            <h4>Just Hits</h4>
        </div>
    )
}