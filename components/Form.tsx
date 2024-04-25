"use client"

import React from "react";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";

const Form = () => {
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted");
  }

  return (
    <div className="text-center text-white h-screen flex flex-col justify-center md:mt-[150px] lg:mt-0">
      <h1> Contact Us </h1>
      <form className="mt-0 mb-0 m-auto flex justify-center content-center flex-col w-3/4" onSubmit={submitHandler}>
        <label>Name: </label>
        <input className="text-black md:w-80 md:m-auto"></input>

        <label>Email: </label>
        <input className="text-black md:w-80 md:m-auto"></input>

        <label>Message: </label>
        <textarea className="text-black md:w-6/12 md:m-auto" />
        <button className="border-2 border-purple-300 mt-5 rounded w-full h-1/2 m-auto hover:ring transition active:scale-75 duration-300 md:w-80">
          Send Message
        </button>
      </form>
      <h2 className="pt-32">Or you can reach us through our social medias:</h2>
      <div className="flex flex-wrap">
        <a className="m-auto mt-0 mb-0 hover:text-purple-300 duration-300" href="/">
          <FaTwitterSquare className="size-16" />
        </a>
        <a className="m-auto mt-0 mb-0 hover:text-purple-300 duration-300" href="/">
          <FaGithubSquare className="size-16" />
        </a>
        <a className="m-auto mt-0 mb-0 hover:text-purple-300 duration-300" href="/">
          <IoLogoDiscord className="size-16" />
        </a>
      </div>
    </div>
  );
};

export default Form;
