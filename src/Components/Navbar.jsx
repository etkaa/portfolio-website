import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="z-50 max-h-[4rem] px-4 md:px-8 absolute mb-0 w-screen text-slate-300 bg-transparent">
      <div className="flex max-w-7xl min-h-[3rem] justify-between items-center text-center mx-auto my-2">
        <div className="flex text-xl lg:text-2xl text-center items-center rounded-xl py-1 bg-transparent backdrop-blur-lg px-3">
          <a href="#about" className="font-extralight">
            E<b>A</b>
          </a>
        </div>
        <div
          name="hamburger"
          className="lg:hidden flex bg-transparent backdrop-blur-lg py-1 px-1 max-lg:cursor-pointer"
          onClick={toggleMenuHandler}
        >
          {!isMenuOpen ? (
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
          ) : (
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>
        <div className="hidden lg:flex">
          <ul className="flex justify-between space-x-8 text-2xl font-light">
            <li>
              <a
                href="#about"
                className="bg-transparent backdrop-blur-lg hover:text-white 
                px-4 py-1 rounded-full transition duration-150"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className=" bg-transparent backdrop-blur-lg hover:text-white 
                px-4 py-1 rounded-full transition duration-150"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="bg-transparent backdrop-blur-lg hover:text-white 
                px-4 py-1 rounded-full transition duration-150"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="bg-transparent backdrop-blur-lg hover:text-white 
                px-4 py-1 rounded-full transition duration-150"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        name="mobile menu"
        className={`lg:hidden shadow-2xl bg-transparent backdrop-blur-lg rounded-xl ${
          !isMenuOpen && "hidden"
        }`}
      >
        <a
          href="#about"
          className="block py-4 text-2xl text-center font-light shadow-sm"
          onClick={toggleMenuHandler}
        >
          About
        </a>
        <a
          href="#skills"
          className="block py-4 text-2xl text-center font-light shadow-sm"
          onClick={toggleMenuHandler}
        >
          Skills
        </a>
        <a
          href="#projects"
          className="block py-4 text-2xl text-center font-light shadow-sm"
          onClick={toggleMenuHandler}
        >
          Projects
        </a>
        <a
          href="#contact"
          className="block py-4 text-2xl text-center font-light shadow-sm"
          onClick={toggleMenuHandler}
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
