import { cn } from "@/lib/utils";
import Image from "next/image";

interface TabletMockupProps {
  imageUrl: string;
  style: string;
}

export default function TabletMockup({ imageUrl, style }: TabletMockupProps) {
  return (
    <div className={cn(style)}>
      <div className="relative mx-auto border-gray-800  bg-gray-800 border-[8px] rounded-[2.5rem] w-[240px] ">
        <div className="h-[32px] w-[3px] bg-gray-800  absolute -start-[11px] top-[72px] rounded-s-lg"></div>

        <div className="h-[46px] w-[3px] bg-gray-800  absolute -start-[11px] top-[124px] rounded-s-lg"></div>

        <div className="h-[46px] w-[3px] bg-gray-800  absolute -start-[11px] top-[178px] rounded-s-lg"></div>

        <div className="h-[64px] w-[3px] bg-gray-800  absolute -end-[11px] top-[142px] rounded-e-lg"></div>

        <div className="rounded-[2rem] overflow-hidden h-[300px] bg-white">
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
