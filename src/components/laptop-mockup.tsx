import Image from "next/image";

interface LaptopMockupProps {
  imageUrl: string;
  style: string;
}

export default function LaptopMockup({ imageUrl, style }: LaptopMockupProps) {
  return (
    <div className={style}>
      <div className="relative mx-auto border-gray-800  bg-gray-800 border-[8px] rounded-t-xl h-[220px] w-[350px]">
        <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white">
    
          <Image
            src={imageUrl}
            alt="desktop-mockup"
            fill
            className="object-contain "
          />
        </div>
      </div>
      <div className="relative mx-auto bg-gray-700  rounded-b-xl rounded-t-sm h-[21px] w-[380px]">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[96px] h-[8px] bg-gray-800"></div>
      </div>
    </div>
  );
}
