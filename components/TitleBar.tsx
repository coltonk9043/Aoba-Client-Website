"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "./TitleBar.css";

export const TitleBar = () => {
  const [nav, setNav] = useState(true);

  const onClickHandler = () => {
    setNav((prevNav) => !prevNav);
  };

  return(
    <div className="inline z-20 relative md:static">
      <div className="z-50 sticky top-0 bg-zinc-800 border-zinc-500 border-1 border-b">
        <div className='flex items-center justify-center w-full p-2 bg-yellow-300'>
          <p className='text-black'>SITE UNDER CONSTRUCTION</p>
        </div>
        <div className="flex items-center justify-between w-full h-16 gap-0 sm:gap-3">
          <Link className="hover:bg-purple-300 w-[64px] h-[64px]" href="/">
            <Image className="relative top-[15%] left-[10%]"
              src="/aoba.png"
              width={50}
              height={50}
              alt="Aoba Logo"/>
          </Link>

          <div className="hidden grow shrink justify-center h-full  md:flex md:visible">
              <Link className="p-5 hover:bg-purple-300" href="/download/">
                Download
              </Link>
              <Link className="p-5 hover:bg-purple-300" href="/wiki/">
                Wiki
              </Link>
              <Link className="p-5 hover:bg-purple-300" href="https://github.com/sponsors/coltonk9043">
                Support Us
              </Link>
            </div>

            <div className="visible m-2 hover:cursor-pointer md:hidden"
              onClick={() => {
                onClickHandler();
              }}>
              <Image width={50} height={50} src="/menu.svg" alt="Menu" />
            </div>

            <div className="hidden md:flex md:visible">
              <a className="hover:bg-purple-300 w-[64px] h-[64px]" href="https://discord.gg/HyZ3uGrwgs">
                <Image
                  className="relative top-[13%] left-[10%]"
                  src="/discord.png"
                  width={50}
                  height={50}
                  alt="Aoba Fan Club (Unofficial)" />
              </a>
              <a className="hover:bg-purple-300 w-[64px] h-[64px]" href="https://github.com/coltonk9043/Aoba-MC-Hacked-Client">
                <Image
                  className="relative top-[13%] left-[10%]"
                  src="/github.png"
                  width={50}
                  height={50}
                  alt="GitHub Logo" />
              </a>
            </div>
        </div>
      </div>
      <div>
          <nav className={nav ? "md:hidden" : "nav-open md:hidden"}>
            <div className="link mt-[64px]">
              <Link className="w-full text-2xl p-5" href="/download/">Download</Link>
            </div>
            <div className="link">
              <Link className="w-full text-2xl p-5" href="/wiki/">Wiki</Link>
            </div>
            <div className="link">
              <Link className="w-full text-2xl p-5" href="/">Support Us</Link>
            </div>
          </nav>
        </div>
    </div>
  )
};

export default TitleBar;
