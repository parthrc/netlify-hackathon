import { useCurrentBgStore, useCurrentImageStore } from "@/store";
import DesktopMockup from "@/components/desktop-mockup";
import IphoneMockup from "@/components/iphone-mockup";
import TabletMockup from "@/components/tablet-mockup";
import LaptopMockup from "@/components/laptop-mockup";

import { Button } from "./ui/button";
import { useToPng } from "@hugocxl/react-to-image";
import { cn } from "@/lib/utils";

export default function Mockups() {
  // Function save component as Image
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

  // Current bg color from ZUSTAND store
  const { currentBg, updateBg } = useCurrentBgStore();

  // create netlify Image CDN call using edgestore url
  const netlifyImageUrl = `https://master--polite-bienenstitch-cc3c05.netlify.app/.netlify/images?url=${imageUrl}`;

  return (
    <>
      <div
        ref={ref}
        className={cn(" h-[600px] flex w-full flex-col ")}
        style={{ backgroundColor: currentBg }}
      >
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
      </div>
      <Button className=" w-fit" onClick={convert}>
        Download
      </Button>
    </>
  );
}
