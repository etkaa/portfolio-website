import React from "react";

const Navbar = () => {
  return (
    <nav className="max-h-[4rem] px-4 md:px-8 absolute mb-0 w-screen text-slate-300 bg-[#07316c]">
      <div className="flex max-w-7xl min-h-[3rem] justify-between items-center text-center mx-auto my-2">
        <div className="flex space-x-4 text-xl lg:text-2xl text-center items-center">
          <svg
            className="w-8 h-8 lg:w-10 lg:h-10 my-auto"
            fill="none"
            stroke="#E7F6F2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
            ></path>
          </svg>
          <a href="#home" className="font-extralight">
            E T K A <b>D E V</b>
          </a>
        </div>
        <div
          name="hamburger"
          className="lg:hidden flex"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <div className="hidden lg:flex">
          <ul className="flex justify-between space-x-8 text-2xl font-light">
            <li>
              <a
                href="#about"
                className="hover:bg-cyan-500 hover:text-white px-4 py-1 rounded-full transition duration-150"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className=" hover:bg-cyan-500 hover:text-white px-4 py-1 rounded-full transition duration-150"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:bg-cyan-500 hover:text-white px-4 py-1 rounded-full transition duration-150"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:bg-cyan-500 hover:text-white px-4 py-1 rounded-full transition duration-150"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
