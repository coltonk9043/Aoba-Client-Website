"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const TestComponent = () => {
    const [nav, setNav] = useState(true);

    const onClickHandler = () => {
        setNav(prevNav => !prevNav);
    }

  return (
    <>
      <div className="z-50 sticky top-0 bg-zinc-800 border-zinc-500 border-1 border-b">
        <div className="flex items-center justify-between w-full h-16 gap-0 sm:gap-3">
          <Link className="m-2 hover:bg-purple-300 w-50px h-50px" href="/">
            <Image src="/aoba.png" width={50} height={50} alt="Aoba Logo" />
          </Link>
          <div className="m-2 hover:cursor-pointer" onClick={() => {onClickHandler()}}>
            <Image width={50} height={50} src="/menu.svg" alt="Menu" />
          </div>
        </div>
      </div>
      <div>
        <div className={nav ? "fixed right-0 overflow-x-hidden duration-500 ease-in bg-black w-0" : "fixed right-0 overflow-x-hidden duration-500 ease-in bg-black w-full"}>
          <div className="w-full p-5 hover:bg-purple-300">
            <Link className="w-full" href="/download/">
              Download
            </Link>
          </div>
          <div className="w-full p-5 hover:bg-purple-300">
            <Link className="w-full" href="/wiki/">
              Wiki
            </Link>
          </div>
          <div className="w-full p-5 hover:bg-purple-300">
            <Link className="w-full" href="/contact/">
              Contact
            </Link>
          </div>
          <div className="w-full p-5 hover:bg-purple-300">
            <Link className="w-full" href="/">
              Donate
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestComponent;
