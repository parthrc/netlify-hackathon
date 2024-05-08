import { Label } from "./ui/label";

export default function SelectBackground() {
  return (
    <div className=" p-4 flex flex-col gap-y-2 bg-slate-200 rounded-sm">
      <Label htmlFor="picture">Select background:</Label>
    </div>
  );
}
