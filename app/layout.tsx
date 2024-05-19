import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aoba Hacked Client for Minecraft",
  description: "Aoba Hacked Client webpage for Minecraft. Download links to Aoba Hacked Client 1.20.4.",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" className={openSans.className}>
      <body className="bg-zinc-900">{children}</body>
    </html>
  );
}
