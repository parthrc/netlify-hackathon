import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { EdgeStoreProvider } from "../lib/edgestore";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Netlify Mockups generator",
  description: "Device mockups generator built using Netlify",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <EdgeStoreProvider>
          <main className="bg-slate-50">{children}</main>
        </EdgeStoreProvider>
        <Toaster position="bottom-left" />
      </body>
    </html>
  );
}
