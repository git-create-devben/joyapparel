import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
import { Toaster } from "react-hot-toast";
import Sidebar from "./component/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joyapparel",
  description: "Joyapparel modesty fashion designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} rounded-md bg-[#060C27]`}>
        <div className="flex gap-2">
          <Sidebar />

          <div className="h-lvh w-full p-10 bg-gradient-to-tl from-[#050B26] from-90% via-30%  via-[#10216d] to-[#050B26]">
            {children}
          </div>
        </div>

        <Toaster />
      </body>
    </html>
  );
}
