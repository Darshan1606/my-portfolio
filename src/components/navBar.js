import React from "react";

import { useState } from "react";

import "../../assets/style/App.css";
import { HiMenu, HiX } from "react-icons/hi";

const navMenu = [
  { title: "Home", link: "#home" },
  { title: "Tech Stack & Tools", link: "#tech" },
  { title: "Projects", link: "#projects" },
  { title: "Work Experience", link: "#workexperience" },
  { title: "Contact", link: "#contactme" },
];

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div className="w-full">
      <button
        onClick={() => setIsNavExpanded(!isNavExpanded)}
        className="hamburger"
        aria-controls="primary-navigation"
        aria-expanded="true"
      >
        <HiMenu size={30} color="#ffffff" />
      </button>
      <nav className="flex justify-between items-center  py-8 px-2 md:px-6 mx-4 md:mx-8">
        <a
          className="text-2xl sm:text-3xl md:text-4xl font-semibold no-underline text-white  hover:text-orange-300"
          href="#home"
        >
          Darshan Tarsariya
        </a>
        <div className={isNavExpanded ? "nav-expand " : "nav-menu"}>
          <ul
            data-visible="false"
            className="flex justify-evenly items-center text-center list-none "
          >
            {navMenu.map((menu) => {
              return (
                <li className="ml-12 list-none">
                  <a
                    className="text-white text-center no-underline hover:text-orange-300"
                    href={menu.link}
                    onClick={() => setIsNavExpanded(!isNavExpanded)}
                  >
                    {menu.title}
                  </a>
                </li>
              );
            })}
            <button
              onClick={() => setIsNavExpanded(!isNavExpanded)}
              className="hamburger"
              aria-controls="primary-navigation"
              aria-expanded="true"
            >
              <HiX size={30} color="#3d3d3d" />
            </button>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
