import Image from "next/image";
import { cn } from "@/lib/utils";

interface IphoneMockupProps {
  imageUrl: string;
  style: string;
}

export default function IphoneMockup({ imageUrl, style }: IphoneMockupProps) {
  return (
    <div className={cn(style)}>
      <div className="relative mx-auto border-gray-800  bg-gray-800 border-[6px] rounded-[12px] h-[220px] w-[120px] shadow-xl">
        <div className="w-[70px] h-[5px] bg-gray-800 top-0 rounded-b-[30px] left-1/2 -translate-x-1/2 absolute"></div>

        <div className="h-[22px] w-[3px] bg-gray-800 absolute -start-[8px] top-[40px] rounded-s-lg"></div>

        <div className="h-[22px] w-[3px] bg-gray-800 absolute -start-[8px] top-[65px] rounded-s-lg"></div>

        <div className="h-[34px] w-[3px] bg-gray-800 absolute -end-[8px] top-[45px] rounded-e-lg"></div>

        <div className="rounded-[10px] overflow-hidden w-[108px] h-[208px] bg-white ">
          <Image
            src={imageUrl}
            alt="desktop-mockup"
            fill
            className="object-contain "
          />
        </div>
      </div>
    </div>
  );
}
