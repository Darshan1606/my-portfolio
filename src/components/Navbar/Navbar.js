import React from "react";

import { useState } from "react";

import "../../assets/style/App.css";

const navMenu = [
  { title: "Home", link: "#home" },
  { title: "Skills", link: "#skills" },
  { title: "Projects", link: "#projects" },
  { title: "Experiance", link: "#experiance" },
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
        <svg
          width="32"
          height="31"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </button>
      <nav className="flex justify-between items-center  py-8 px-6 mx-8">
        <a
          className="text-2xl sm:text-3xl md:text-4xl font-semibold no-underline text-white  hover:text-violet-700"
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
                    className="text-white text-center no-underline hover:text-violet-700"
                    href={menu.link}
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
              <svg
                width="32"
                height="31"
                color="#fff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
              </svg>
            </button>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
