import React from "react";
import Profile from "../assets/profile.jpg";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import mongodb from "../assets/mongodb.png";
import node from "../assets/node.png";
import git from "../assets/git.png";

const SecondSection = () => {
  const technologies = [html, css, js, react, redux, mongodb, node, git];

  return (
    <section
      id="skills"
      // className="flex snap-center min-h-full w-[80%] mx-auto text-white overflow-hidden 2xl:px-52"
      className="pt-4 flex snap-center min-h-screen w-[90%] mx-auto text-white overflow-hidden"
    >
      <div className="flex flex-col justify-between space-y-4 py-4 my-auto mx-auto w-[100%]">
        <div className="my-auto mx-auto text-center">
          <p className="text-[2.5rem] px-3 text-slate-200">Skills</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-[100%]">
          {technologies.map((el) => {
            return (
              <div
                key={el}
                className="flex w-[6rem] h-[6rem] md:w-[8rem] md:h-[8rem] shadow-xl rounded-2xl mx-auto my-auto"
              >
                <img
                  src={el}
                  className="w-[90%] h-[90%] my-auto mx-auto object-cover"
                ></img>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
