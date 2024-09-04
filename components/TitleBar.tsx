"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./TitleBar.css";

export const TitleBar = () => {
  const [navbarExpanded, setNavbarExpanded] = useState(false);

  const onClickHandler = () => {
    setNavbarExpanded((prevNav) => !prevNav);
  };

  return(
    <div className="inline z-20 relative md:static">
      <div className="z-50 sticky top-0 bg-zinc-900 border-zinc-500 border-1 border-b">
        <div className='flex items-center justify-center w-full p-2 bg-yellow-300'>
          <p className='text-black'>SITE UNDER CONSTRUCTION</p>
        </div>
        <div className="flex items-center justify-between w-full h-16 gap-0 sm:gap-3">
          <Link className="w-[64px] h-[64px] hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500 rounded-lg" href="/">
            <Image className="relative top-[15%] left-[10%]"
              src="/aoba.png"
              width={50}
              height={50}
              alt="Aoba Logo"/>
          </Link>

          <div className="hidden grow shrink justify-center h-full  md:flex md:visible">
              <Link className="p-5 hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500 rounded-lg" href="/download/">
                Download
              </Link>
              <Link className="p-5 hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500 rounded-lg" href="/wiki/">
                Wiki
              </Link>
              <Link className="p-5 hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500 rounded-lg" href="https://github.com/sponsors/coltonk9043">
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
              <Link className="w-[64px] h-[64px] hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500 rounded-lg" href="https://discord.gg/HyZ3uGrwgs">
                <Image className="relative top-[13%] left-[10%]"
                  src="/discord.png"
                  width={50}
                  height={50}
                  alt="Aoba Fan Club (Unofficial)" />
              </Link>
              <Link className="w-[64px] h-[64px] hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500 rounded-lg" href="https://github.com/coltonk9043/Aoba-MC-Hacked-Client">
                <Image className="relative top-[13%] left-[10%]"
                  src="/github.png"
                  width={50}
                  height={50}
                  alt="GitHub Logo" />
              </Link>
            </div>
        </div>

        <nav key={'title-navbar'} className={navbarExpanded ? "nav nav-open md:hidden" : "nav hidden"}>
            <Link className="w-full content-center text-2xl p-5 hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500" href="/download/">Download</Link>
            <Link className="w-full content-center text-2xl p-5 hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500" href="/wiki/">Wiki</Link>
            <Link className="w-full content-center text-2xl p-5 hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500" href="/">Support Us</Link>
            <Link className="w-[128px] h-[128px] mx-auto hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500" href="https://discord.gg/HyZ3uGrwgs">
                <Image className="relative top-[13%] left-[10%]"
                  src="/discord.png"
                  width={96}
                  height={96}
                  alt="Aoba Fan Club (Unofficial)" />
              </Link>
              <Link className="w-[128px] h-[128px] mx-auto hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500" href="https://github.com/coltonk9043/Aoba-MC-Hacked-Client">
                <Image className="relative top-[13%] left-[10%]"
                  src="/github.png"
                  width={96}
                  height={96}
                  alt="GitHub Logo" />
              </Link>
          </nav>
      </div>
    </div>
  )
};

export default TitleBar;
