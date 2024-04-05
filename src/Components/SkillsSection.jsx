import React from "react";
import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import js from "../assets/skills/js.png";
import react from "../assets/skills/react.png";
import redux from "../assets/skills/redux.png";
import mongodb from "../assets/skills/mongodb.png";
import node from "../assets/skills/node.png";
import git from "../assets/skills/git.png";

const SkillsSection = () => {
  const technologies = [html, css, js, react, redux, mongodb, node, git];

  return (
    <section
      id="skills"
      // className="flex snap-center min-h-full w-[80%] mx-auto text-white overflow-hidden 2xl:px-52"
      className="pt-[3rem] flex snap-center snap-always min-h-[100dvh] w-[100%] max-w-[100rem] mx-auto text-white overflow-hidden"
    >
      <div className="flex flex-col justify-between space-y-4 py-4 my-auto mx-auto w-[80%]">
        <div className="my-auto mx-auto text-center">
          <p className="text-[2.5rem] px-3 text-slate-200">Skills</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-[100%] justify-items-center">
          {technologies.map((el) => {
            return (
              <div
                key={el}
                className="flex w-[6rem] h-[6rem] md:w-[8rem] md:h-[8rem] shadow-xl rounded-2xl mx-auto my-auto hover:scale-105 transition duration-700"
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

export default SkillsSection;
