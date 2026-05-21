"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import React from "react";

export type AdClientProps = {
  children: React.ReactNode;
};

declare global {
  interface Window {
    adsbygoogle?: any | any[];
  }
}

export const AdClient = ({ children }: AdClientProps) => {
  const pathname = usePathname();
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error(err);
    }
  }, [pathname]);
  return <React.Fragment key={pathname}>{children}</React.Fragment>;
};
export default AdClient;
