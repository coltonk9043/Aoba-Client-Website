"use client";

import { useState, useCallback, memo } from "react";
import Link from "next/link";
import Image from "next/image";
import "./TitleBar.css";

const TitleBarComponent = () => {
  const [navbarExpanded, setNavbarExpanded] = useState(false);

  const toggleNavbar = useCallback(() => {
    setNavbarExpanded((prev) => !prev);
  }, []);

  return (
    <div className="inline z-20 relative md:static">
      <div className="z-50 sticky top-0 bg-background-titlebar">
        <div className="flex items-center justify-between w-full gap-2 sm:gap-3">
          <div className="hidden grow shrink justify-center md:flex md:visible my-2">
            <Link className="px-5 py-3 transition-colors duration-300 rounded-lg border border-transparent hover:bg-[#9C27B01A] hover:border-[#9C27B04D] focus:outline-none focus:ring-2 focus:ring-aoba-purple" href="/">Home</Link>
            <Link className="px-5 py-3 transition-colors duration-300 rounded-lg border border-transparent hover:bg-[#9C27B01A] hover:border-[#9C27B04D] focus:outline-none focus:ring-2 focus:ring-aoba-purple" href="/download/">Download</Link>
            <Link className="px-5 py-3 transition-colors duration-300 rounded-lg border border-transparent hover:bg-[#9C27B01A] hover:border-[#9C27B04D] focus:outline-none focus:ring-2 focus:ring-aoba-purple" href="/wiki/">Wiki</Link>
            <Link className="px-5 py-3 transition-colors duration-300 rounded-lg border border-transparent hover:bg-[#9C27B01A] hover:border-[#9C27B04D] focus:outline-none focus:ring-2 focus:ring-aoba-purple" href="https://github.com/sponsors/coltonk9043">Support Us</Link>
            <Link className="px-5 py-3 transition-colors duration-300 rounded-lg border border-transparent hover:bg-[#9C27B01A] hover:border-[#9C27B04D] focus:outline-none focus:ring-2 focus:ring-aoba-purple" href="https://discord.gg/HyZ3uGrwgs">Discord</Link>
            <Link className="px-5 py-3 transition-colors duration-300 rounded-lg border border-transparent hover:bg-[#9C27B01A] hover:border-[#9C27B04D] focus:outline-none focus:ring-2 focus:ring-aoba-purple" href="https://github.com/coltonk9043/Aoba-Client">GitHub</Link>
          </div>

          <button
            className="m-2 p-1 rounded-lg cursor-pointer md:hidden focus:outline-none focus:ring-2 focus:ring-aoba-purple"
            onClick={toggleNavbar}
            aria-label={navbarExpanded ? "Close menu" : "Open menu"}
            aria-expanded={navbarExpanded}
          >
            <Image width={50} height={50} src="/menu.svg" alt="" aria-hidden="true" />
          </button>
        </div>

        <nav
          className={navbarExpanded ? "nav nav-open md:hidden" : "nav hidden"}
          aria-label="Mobile navigation"
        >
          <Link className="w-full content-center text-2xl p-5 hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500 focus:outline-none focus:bg-gradient-to-r focus:from-violet-500 focus:to-fuchsia-500" href="/">Home</Link>
          <Link className="w-full content-center text-2xl p-5 hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500 focus:outline-none focus:bg-gradient-to-r focus:from-violet-500 focus:to-fuchsia-500" href="/download/">Download</Link>
          <Link className="w-full content-center text-2xl p-5 hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500 focus:outline-none focus:bg-gradient-to-r focus:from-violet-500 focus:to-fuchsia-500" href="/wiki/">Wiki</Link>
          <Link className="w-full content-center text-2xl p-5 hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500 focus:outline-none focus:bg-gradient-to-r focus:from-violet-500 focus:to-fuchsia-500" href="https://github.com/sponsors/coltonk9043">Support Us</Link>
          <Link className="w-[128px] h-[128px] mx-auto hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500" href="https://discord.gg/HyZ3uGrwgs" aria-label="Join Discord">
            <Image
              className="relative top-[13%] left-[10%]"
              src="/discord.png"
              width={96}
              height={96}
              alt=""
              aria-hidden="true"
            />
          </Link>
          <Link className="w-[128px] h-[128px] mx-auto hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500" href="https://github.com/coltonk9043/Aoba-Client" aria-label="View on GitHub">
            <Image
              className="relative top-[13%] left-[10%]"
              src="/github.png"
              width={96}
              height={96}
              alt=""
              aria-hidden="true"
            />
          </Link>
        </nav>
      </div>
    </div>
  );
};

export const TitleBar = memo(TitleBarComponent);
export default TitleBar;
