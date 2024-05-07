import { useCurrentImageStore } from "@/store";
import DesktopMockup from "@/components/desktop-mockup";
import IphoneMockup from "@/components/iphone-mockup";
import TabletMockup from "@/components/tablet-mockup";
import LaptopMockup from "./laptop-mockup";
import { MutableRefObject, Ref } from "react";
import { useToSvg, useToPng } from "@hugocxl/react-to-image";
import { Button } from "./ui/button";

export default function Mockups() {
  const [_, convert, ref] = useToPng<HTMLDivElement>({
    quality: 0.8,
    onSuccess: (data) => {
      const link = document.createElement("a");
      link.download = "my-image-name.jpeg";
      link.href = data;
      link.click();
    },
  });
  // Current image url ZUSTAND store
  const { imageUrl, updateUrl, removeUrl } = useCurrentImageStore();

  const netlifyImageUrl = `https://master--polite-bienenstitch-cc3c05.netlify.app/.netlify/images?url=${imageUrl}`;

  return (
    <div ref={ref} className="bg-pink-300 h-[600px] flex w-full flex-col">
      <div className="w-full relative">
        <IphoneMockup
          imageUrl={netlifyImageUrl}
          style="top-[310px] absolute right-[100px] z-[99999]"
        />
        <TabletMockup
          imageUrl={netlifyImageUrl}
          style="absolute right-[250px] top-[220px] z-[9999]"
        />
        <DesktopMockup
          imageUrl={netlifyImageUrl}
          style="absolute left-[30%] top-10"
        />
        <LaptopMockup
          imageUrl={netlifyImageUrl}
          style="top-[280px] left-[120px] absolute"
        />
      </div>
      <Button onClick={convert}>Download</Button>
    </div>
  );
}
