"use client";

import Footer from "@/components/footer";
import Mockups from "@/components/mockups";
import SelectBackground from "@/components/select-background";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEdgeStore } from "@/lib/edgestore";
import { useCurrentImageStore } from "@/store";

import { ChangeEvent, useState } from "react";
import { toast } from "sonner";

const ALLOWED_IMAGE_TYPES = [
  "image/webp",
  "image/jpg",
  "image/jpeg",
  "image/png",
];

export default function Home() {
  // Current image url ZUSTAND store
  const { imageUrl, updateUrl, removeUrl } = useCurrentImageStore();

  const { edgestore } = useEdgeStore();

  // Current file state
  const [file, setFile] = useState<File | null>();

  //handle file upload
  const handleFileUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    // If files exist select the first one
    const file = event.target.files && event.target.files[0];

    setFile(file);
  };

  // handle upload to edgestore
  const handleSubmit = async () => {
    if (!file) {
      return toast.error("Please select an Image file!");
    }
    if (file && !ALLOWED_IMAGE_TYPES.includes(file.type)) {
      return toast.error("Select an IMAGE only!");
    }
    if (file && ALLOWED_IMAGE_TYPES.includes(file.type)) {
      try {
        // Upload to edgestore
        const res = await edgestore.publicFiles.upload({
          file,
        });
        if (res.url) {
          updateUrl(res.url);
        }
        console.log(res);
      } catch (error) {
        setFile(null);
        toast.error("Error uploading image");
      } finally {
        console.log(imageUrl);
        toast.success("Image uploaded successfully");
      }
    }
  };

  return (
    <div className="mx-auto flex max-w-screen-xl w-full  flex-col items-center min-h-screen px-4 gap-y-4 pt-5">
      <h1 className="text-3xl uppercase font-bold mb-8">Mockups Generator</h1>

      <div className="flex items-center gap-x-4 p-1 drop-shadow-sm gap-1">
        {/* File upload horizontal */}
        <div className=" p-4 flex flex-col gap-y-2 bg-slate-200 rounded-sm">
          <Label htmlFor="picture">Upload your picture</Label>
          <Input type="file" id="picture" onChange={handleFileUpload} />

          <Button className="mt-2 w-fit" onClick={handleSubmit}>
            Upload
          </Button>
        </div>
        <SelectBackground />
      </div>

      <Mockups />
      <Footer />
    </div>
  );
}
