import React from "react";
import Profile from "../assets/profile.jpg";

const FirstSection = () => {
  return (
    <section
      id="about"
      className="flex pt-[3rem] md:pt-16 snap-center snap-always min-h-screen w-[100%] max-w-[100rem] mx-auto text-white overflow-hidden"
    >
      <div className="max-w-[85%] flex flex-col space-y-6 lg:flex-row my-auto mx-auto">
        <div className="lg:hidden lg:w-[50%] flex text-center items-center">
          <img
            src={Profile}
            className="w-[14rem] lg:w-[20rem] hover:scale-105 transition duration-700 rounded-full mx-auto my-auto"
          ></img>
        </div>
        <div className="lg:w-[50%] flex flex-col text-center items-center ">
          <div
            className="flex flex-col space-y-4 py-2 text-center items-center mx-auto my-auto 
         min-h-[12rem]  transition duration-700 hover:scale-105 overflow-hidden"
          >
            <p className="text-[2.5rem] lg:text-[4rem] text-slate-200">
              Hi, I'm Etka.
            </p>
            <p className="text-[1.5rem] lg:text-[1.5rem] text-slate-300 max-w-[36rem]">
              I'm a Software Developer with a passion for building awesome,
              user-friendly web applications.
            </p>
            <a
              href="#skills"
              className="text-lg text-slate-100 bg-gray-800 px-4 py-2 rounded-full hover:bg-white hover:text-black transition duration-100"
            >
              Meet me!
            </a>
          </div>
        </div>
        <div className="hidden lg:w-[50%] lg:flex text-center items-center">
          <img
            src={Profile}
            className="w-[20rem] hover:scale-105 transition duration-700 rounded-full mx-auto my-auto"
          ></img>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
