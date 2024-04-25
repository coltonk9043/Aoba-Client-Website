import React from "react";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";

const Form = () => {
  return (
    <div className="text-center text-white h-screen flex flex-col justify-center">
      <h1> Contact Us </h1>
      <form className="mt-0 mb-0 m-auto flex justify-center content-center flex-col w-3/4">
        <label>Name: </label>
        <input className="text-black"></input>

        <label>Email: </label>
        <input className="text-black"></input>

        <label>Message: </label>
        <textarea className="text-black" />
        <button className="bg-purple-300 text-black mt-5 rounded w-4/5 h-1/2 m-auto">
          Send
        </button>
      </form>
      <h2 className="pt-32">Or you can reach us through our social medias:</h2>
      <div className="flex flex-wrap">
        <a className="m-auto mt-0 mb-0" href="/">
          <FaTwitterSquare className="size-16" />
        </a>
        <a className="m-auto mt-0 mb-0" href="/">
          <FaGithubSquare className="size-16" />
        </a>
        <a className="m-auto mt-0 mb-0" href="/">
          <IoLogoDiscord className="size-16" />
        </a>
      </div>
    </div>
  );
};

export default Form;
