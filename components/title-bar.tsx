"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MenuIcon, XIcon } from "lucide-react";

export default function TitleBar() {
  const [navbarExpanded, setNavbarExpanded] = useState(false);

  const onClickHandler = () => {
    setNavbarExpanded((prevNav) => !prevNav);
  };

  return (
    <div className="inline z-20 relative md:static">
      <div className="z-50 sticky top-0 bg-zinc-900 border-zinc-500 border-b">
        <div className="flex items-center justify-center w-full p-2 bg-yellow-300">
          <p className="text-black">SITE UNDER CONSTRUCTION</p>
        </div>
        <div className="flex items-center justify-between w-full h-16 gap-0 sm:gap-3">
          <Link
            className="w-[64px] h-[64px] hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500 rounded-lg"
            href="/"
          >
            <Image
              className="relative top-[15%] left-[10%]"
              src="/images/aoba.png"
              width={50}
              height={50}
              alt="Aoba Logo"
            />
          </Link>

          <div className="hidden grow justify-center h-full md:flex">
            <Link
              className="p-5 hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500 rounded-lg"
              href="/download/"
            >
              Download
            </Link>
            <Link
              className="p-5 hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500 rounded-lg"
              href="/wiki/"
            >
              Wiki
            </Link>
            <Link
              className="p-5 hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500 rounded-lg"
              href="https://github.com/sponsors/coltonk9043"
            >
              Support Us
            </Link>
          </div>

          <button
            className="visible m-2 hover:cursor-pointer md:hidden"
            onClick={onClickHandler}
          >
            <MenuIcon />
          </button>

          <div className="hidden md:flex">
            <Link
              className="w-[64px] h-[64px] hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500 rounded-lg"
              href="https://discord.gg/HyZ3uGrwgs"
            >
              <Image
                className="relative top-[13%] left-[10%]"
                src="/images/discord.png"
                width={50}
                height={50}
                alt="Aoba Fan Club (Unofficial)"
              />
            </Link>
            <Link
              className="w-[64px] h-[64px] hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500 rounded-lg"
              href="https://github.com/coltonk9043/Aoba-Client"
            >
              <Image
                className="relative top-[13%] left-[10%]"
                src="/images/github.png"
                width={50}
                height={50}
                alt="GitHub Logo"
              />
            </Link>
          </div>
        </div>

        {navbarExpanded && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setNavbarExpanded(false)}
          />
        )}

        <nav
          className={`flex flex-col items-center bg-black text-white text-2xl transition-transform duration-500 ease-in-out ${
            navbarExpanded ? "translate-x-0" : "translate-x-full"
          } fixed top-0 right-0 h-full w-full md:hidden overflow-y-auto z-50`}
        >
          <button
            className="fixed top-4 right-4 z-50 p-2 hover:bg-gray-800 rounded-full bg-black bg-opacity-50"
            onClick={() => setNavbarExpanded(false)}
          >
            <XIcon className="text-white w-6 h-6" />
          </button>
          <div className="mt-20 w-full">
            <Link
              className="p-5 w-full block hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500"
              href="/download/"
            >
              Download
            </Link>
            <Link
              className="p-5 w-full block hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500"
              href="/wiki/"
            >
              Wiki
            </Link>
            <Link
              className="p-5 w-full block hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500"
              href="https://github.com/sponsors/coltonk9043"
            >
              Support Us
            </Link>
          </div>
          <div className="mt-8 flex flex-col items-center">
            <Link
              className="w-[128px] h-[128px] mx-auto mb-4 hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500 rounded-lg"
              href="https://discord.gg/HyZ3uGrwgs"
            >
              <Image
                src="/images/discord.png"
                width={96}
                height={96}
                alt="Aoba Fan Club (Unofficial)"
              />
            </Link>
            <Link
              className="w-[128px] h-[128px] mx-auto hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500 rounded-lg"
              href="https://github.com/coltonk9043/Aoba-Client"
            >
              <Image
                src="/images/github.png"
                width={96}
                height={96}
                alt="GitHub Logo"
              />
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
