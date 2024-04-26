"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./TestComponent.css";

const TestComponent = () => {
  const [nav, setNav] = useState(true);

  const onClickHandler = () => {
    setNav((prevNav) => !prevNav);
  };

  return (
    <>
      <div className="z-50 sticky top-0 bg-zinc-800 border-zinc-500 border-1 border-b">
        <div className="flex items-center justify-between w-full h-16 gap-0 sm:gap-3">
          <Link className="m-2 hover:bg-purple-300 w-50px h-50px" href="/">
            <Image src="/aoba.png" width={50} height={50} alt="Aoba Logo" />
          </Link>
          <div
            className="m-2 hover:cursor-pointer"
            onClick={() => {
              onClickHandler();
            }}
          >
            <Image width={50} height={50} src="/menu.svg" alt="Menu" />
          </div>
        </div>
      </div>
      <div>
        <nav className={nav ? "" : "nav-open"}>
          <div className="link mt-[64px]">
            <Link className="w-full text-2xl p-5" href="/download/">
              Download
            </Link>
          </div>
          <div className="link">
            <Link className="w-full text-2xl p-5" href="/wiki/">
              Wiki
            </Link>
          </div>
          <div className="link">
            <Link className="w-full text-2xl p-5" href="/contact/">
              Contact
            </Link>
          </div>
          <div className="link">
            <Link className="w-full text-2xl p-5" href="/">
              Donate
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default TestComponent;
