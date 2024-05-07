import { useCurrentImageStore } from "@/store";
import DesktopMockup from "@/components/desktop-mockup";
import IphoneMockup from "@/components/iphone-mockup";
import TabletMockup from "@/components/tablet-mockup";
import LaptopMockup from "./laptop-mockup";

export default function Mockups() {
  // Current image url ZUSTAND store
  const { imageUrl, updateUrl, removeUrl } = useCurrentImageStore();

  const netlifyImageUrl = `https://master--polite-bienenstitch-cc3c05.netlify.app/.netlify/images?url=${imageUrl}`;

  return (
    <div className="flex border-4  border-black  w-full relative py-8">
      <IphoneMockup
        imageUrl={netlifyImageUrl}
        style="top-[310px] absolute right-[100px] z-[99999]"
      />
      <TabletMockup
        imageUrl={netlifyImageUrl}
        style="absolute right-[250px] top-[220px] z-[9999]"
      />
      <DesktopMockup imageUrl={netlifyImageUrl} style="absolute left-[30%]" />
      <LaptopMockup
        imageUrl={netlifyImageUrl}
        style="top-[220px] left-[-20px] absolute"
      />
    </div>
  );
}
