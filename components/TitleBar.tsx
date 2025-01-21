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

  return (
    <div className="inline z-20 relative md:static">
      <div className="z-50 sticky top-0 bg-background-titlebar">
        <div className="flex items-center justify-between w-full gap-2 sm:gap-3">
          <div className="hidden grow shrink justify-center md:flex md:visible my-2">
            <Link className="px-5 py-3 transition-[all] duration-[0.3] rounded-lg border border-transparent hover:bg-[#9C27B01A] hover:border-[#9C27B04D]" href="/">
              Home
            </Link>
            <Link className="px-5 py-3 transition-[all] duration-[0.3] rounded-lg border border-transparent hover:bg-[#9C27B01A] hover:border-[#9C27B04D]" href="/download/">
              Download
            </Link>
            <Link className="px-5 py-3 transition-[all] duration-[0.3] rounded-lg border border-transparent hover:bg-[#9C27B01A] hover:border-[#9C27B04D]" href="/wiki/">
              Wiki
            </Link>
            <Link className="px-5 py-3 transition-[all] duration-[0.3] rounded-lg border border-transparent hover:bg-[#9C27B01A] hover:border-[#9C27B04D]" href="https://github.com/sponsors/coltonk9043">
              Support Us
            </Link>
            <Link className="px-5 py-3 transition-[all] duration-[0.3] rounded-lg border border-transparent hover:bg-[#9C27B01A] hover:border-[#9C27B04D]" href="https://discord.gg/HyZ3uGrwgs">
              Discord
            </Link>
            <Link className="px-5 py-3 transition-[all] duration-[0.3] rounded-lg border border-transparent hover:bg-[#9C27B01A] hover:border-[#9C27B04D]" href="https://github.com/coltonk9043/Aoba-Client">
              GitHub
            </Link>
          </div>

          <div className="visible m-2 hover:cursor-pointer md:hidden"
            onClick={() => {
              onClickHandler();
            }}>
            <Image width={50} height={50} src="/menu.svg" alt="Menu" />
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
          <Link className="w-[128px] h-[128px] mx-auto hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500" href="https://github.com/coltonk9043/Aoba-Client">
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
