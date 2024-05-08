import { create } from "zustand";

interface CurrentImage {
  imageUrl: string;
  updateUrl: (newUrl: string) => void;
  removeUrl: () => void;
}

export const useCurrentImageStore = create<CurrentImage>()((set) => ({
  imageUrl: "/default.png",
  updateUrl: (newUrl) => set(() => ({ imageUrl: newUrl })),
  removeUrl: () => set(() => ({ imageUrl: "" })),
}));

//Store for background
interface CurrentBackground {
  currentBg: string;
  updateBg: (newBg: string) => void;
}

export const useCurrentBgStore = create<CurrentBackground>()((set) => ({
  currentBg: "#f1f000",
  updateBg: (newBg) => set(() => ({ currentBg: newBg })),
}));
