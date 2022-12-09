import React from "react";
import Profile from "../assets/profile.jpg";

const FirstSection = () => {
  return (
    <section className="flex snap-center min-h-full w-[80%] mx-auto text-white overflow-hidden 2xl:px-52">
      <div className="lg:w-[50%] flex flex-col text-center items-center ">
        <div
          className="flex flex-col space-y-4 py-2 text-center items-center mx-auto my-auto 
         min-h-[12rem] w-[40rem] transition duration-700 hover:scale-105 overflow-hidden"
        >
          <p className="text-[4rem] text-slate-200">Hi, I'm Etka.</p>
          <p className="text-[1.5rem] text-slate-300">
            I'm a Software Developer with a passion for building awesome,
            user-friendly web applications.
          </p>
          <a href="#skills" className="text-lg text-slate-100 bg-gray-800 px-4 py-2 rounded-full hover:bg-white hover:text-black transition duration-100">
            Meet me!
          </a>
        </div>
      </div>
      <div className="lg:w-[50%] flex text-center items-center">
        <img
          src={Profile}
          className="w-[20rem] hover:scale-105 transition duration-700 rounded-full mx-auto my-auto"
        ></img>
      </div>
    </section>
  );
};

export default FirstSection;
