import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex mt-5 w-full py-4 items-center bg-black text-white justify-center">
      Built with 💖 using Netlify by{" "}
      <a href="https://parthc.com" className="underline pl-1" target="_blank">
        {" "}
        Parth Chawande
      </a>
    </div>
  );
}
