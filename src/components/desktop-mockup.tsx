import Image from "next/image";

interface DesktopMockupProps {
  imageUrl: string;
}

export default function DesktopMockup({ imageUrl }: DesktopMockupProps) {
  return (
    <div>
      <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[16px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px] min-w-[500px]">
        <div className="rounded-xl overflow-hidden h-[140px] md:h-[262px]">
          <Image
            src={imageUrl}
            alt="desktop-mockup"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[512px]"></div>
      <div className="relative mx-auto bg-gray-800 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px]"></div>
    </div>
  );
}
