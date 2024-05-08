import { useCurrentBgStore } from "@/store";
import { Label } from "./ui/label";
import { ChromePicker } from "react-color";

export default function SelectBackground() {
  const { currentBg, updateBg } = useCurrentBgStore();
  return (
    <div className=" p-4 flex flex-col gap-y-2 bg-slate-200 rounded-sm">
      <Label htmlFor="picture">Select background:</Label>
      <div>
        <ChromePicker
          color={currentBg}
          onChange={(color) => {
            updateBg(color.hex);
          }}
          onChangeComplete={(color) => updateBg(color.hex)}
        />
      </div>
    </div>
  );
}
