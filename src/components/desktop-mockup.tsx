import Image from "next/image";

interface DesktopMockupProps {
  imageUrl: string;
  style: string;
}

export default function DesktopMockup({ imageUrl, style }: DesktopMockupProps) {
  return (
    <div className={style}>
      <div className="relative mx-auto border-gray-800  bg-gray-800 border-[8px] rounded-t-xl h-[294px] w-[512px] ">
        <div className="rounded-xl overflow-hidden h-[140px] md:h-[262px]">
          <Image
            src={imageUrl}
            alt="desktop-mockup"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="relative mx-auto bg-gray-700  rounded-b-xl  h-[42px] w-[512px]"></div>
      <div className="relative mx-auto bg-gray-800 rounded-b-xl h-[95px] w-[142px]"></div>
    </div>
  );
}


