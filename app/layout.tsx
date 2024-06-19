import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { TanstackProvider } from "@/providers/TanstackProvider";


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
      <head>
        <script src="http://localhost:8097" async></script>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
           <TanstackProvider>
           {children}
           </TanstackProvider>
            

          <Toaster position="top-right" />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
