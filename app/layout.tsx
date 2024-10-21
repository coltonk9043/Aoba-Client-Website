import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aoba Utility Mod for Minecraft Java Edition",
  description: "Aoba Utility Mod for Minecraft. Download links to Aoba Hacked Client 1.20.X - 1.21.X for Minecraft Java edition",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  const publisherId =  process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID;
  
  return (
    <html lang="en" className={openSans.className}>
      <head>
        <link rel="icon" href="/icon.ico" sizes="any" />
      </head>
      <body className="bg-zinc-900">{children}</body>
      <Script id="nextjs-google-adsense"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-${publisherId}`}
            crossOrigin="anonymous"/>
    </html>
  );
}
