import React, { useRef } from "react";
import carsnow from "../assets/projects/carsnow.png";
import fxj from "../assets/projects/fxj.png";
import eashop from "../assets/projects/eashop.png";
import portfolio from "../assets/projects/portfolio.png";

const projects = [
  {
    id: 1,
    image: carsnow,
    title: "CarsNow",
    description:
      "A platform that will allow users to list their cars for sale and interact with potential buyers.",
    liveURL: "https://carsnow.netlify.app",
    codeURL: "https://github.com/manfromny/car-sales-app",
  },
  {
    id: 2,
    image: fxj,
    title: "FX Journal",
    description:
      "A tool for financial traders to log their trades and see key statistics related to their strategy.",
    liveURL: "https://fx-journal.netlify.app",
    codeURL: "https://github.com/manfromny/trading-journal",
  },
  {
    id: 3,
    image: eashop,
    title: "EA Shop",
    description:
      "An intuitive e-commerce website that makes it easy for customers to find their desired products.",
    liveURL: "https://shop-ea.netlify.app",
    codeURL: "https://github.com/manfromny/online-shop",
  },
  {
    id: 4,
    image: portfolio,
    title: "EtkaDev",
    description:
      "A stylish and professional website that showcases my skills and experience as a web developer",
    liveURL: "https://etkadev.netlify.app",
    codeURL: "https://github.com/manfromny/portfolio-website",
  },
];

const ProjectsSection = () => {
  const carousel = useRef();

  const leftScrollHandler = () => {
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const rightScrollHandler = () => {
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <section
      id="projects"
      className="pt-[3rem] flex snap-center snap-always min-h-[100dvh] w-[100%] mx-auto text-white overflow-hidden"
    >
      <div className="flex flex-col justify-between space-y-8 pb-4 my-auto mx-auto lg:w-[80%] md:w-[90%] w-[100%]">
        <div className="my-auto mx-auto text-center">
          <p className="text-[2.5rem] px-3 text-slate-200">Projects</p>
        </div>
        <div className="sm:hidden flex relative">
          <div
            onClick={leftScrollHandler}
            className="h-full min-w-[3rem] 
          absolute z-10 cursor-pointer left-0"
          ></div>
          <div
            name="carousel"
            ref={carousel}
            className="sm:hidden flex hide-scrollbar snap-x snap-mandatory snap-always scroll-smooth
           space-x-4 px-10 min-w-[22rem] overflow-x-auto w-[100%] my-auto mx-auto
           md:mx-auto place-items-center h-96 relative"
          >
            {projects.map((el) => {
              return (
                <div
                  key={el.id}
                  className="z-0 flex flex-col snap-center justify-between min-w-[18rem] h-[22rem] 
              rounded-xl space-y-1 bg-gray-800 shadow-lg"
                >
                  <div className="h-[55%]  rounded-t-xl">
                    <img
                      src={el.image}
                      className="h-full w-full rounded-t-xl object-cover"
                    />
                  </div>
                  <div className="flex my-auto pt-1 h-[25%] px-2 text-center">
                    <p className="my-auto text-md mx-auto text-slate-200">
                      {el.description}
                    </p>
                  </div>
                  <div
                    name="buttons"
                    className="flex py-2 space-x-3 h-[20%] rounded-b-xl px-3"
                  >
                    <a
                      className="flex justify-center items-center w-[50%] h-[80%] my-auto mx-auto rounded-xl 
                  text-xl text-slate-100 bg-gray-700 hover:bg-purple-500 
                  transition duration-200"
                      href={el.liveURL}
                      target="_blank"
                    >
                      Live
                    </a>
                    <a
                      className="flex justify-center items-center w-[50%] h-[80%] my-auto mx-auto rounded-xl 
                  text-xl text-gray-700 bg-slate-100 hover:bg-cyan-300 transition duration-200"
                      href={el.codeURL}
                      target="_blank"
                    >
                      Code
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            onClick={rightScrollHandler}
            className="h-full min-w-[3rem] 
          absolute z-10 cursor-pointer right-0"
          ></div>
        </div>
        <div
          className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 2xl:grid-cols-4 
        gap-y-10 md:gap-10 w-[100%] lg:w-[80%] 2xl:w-[100%] mx-auto justify-items-center"
        >
          {projects.map((el) => {
            return (
              <div
                key={el.id}
                className="flex flex-col justify-between w-[18rem] h-[22rem] 
              rounded-xl space-y-1 bg-gray-800 shadow-lg"
              >
                <div className="h-[55%] border-green-500 rounded-t-xl">
                  <img
                    src={el.image}
                    className="h-full w-full border-purple-500 rounded-t-xl object-cover"
                  />
                </div>
                <div className="flex my-auto py-1 h-[25%] px-2 text-center">
                  <p className="my-auto text-md mx-auto text-slate-200">
                    {el.description}
                  </p>
                </div>
                <div
                  name="buttons"
                  className="flex py-2 space-x-3 h-[20%] rounded-b-xl px-3"
                >
                  <a
                    className="flex justify-center items-center w-[50%] h-[80%] my-auto mx-auto rounded-xl 
                  text-xl text-slate-100 bg-gray-700 hover:bg-purple-500 
                  transition duration-200"
                    href={el.liveURL}
                    target="_blank"
                  >
                    Live
                  </a>
                  <a
                    className="flex justify-center items-center w-[50%] h-[80%] my-auto mx-auto rounded-xl 
                  text-xl text-gray-700 bg-slate-100 hover:bg-cyan-300 transition duration-200"
                    href={el.codeURL}
                    target="_blank"
                  >
                    Code
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
