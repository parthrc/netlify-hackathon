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
