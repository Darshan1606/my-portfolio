import React from "react";
import "../../assets/style/App.css";

import htmlIcon from "../../assets/image/html_icon.png";
import cssIcon from "../../assets/image/css_icon.png";
import jsIcon from "../../assets/image/js_icon.png";
import reactIcon from "../../assets/image/react_icon.png";
import reduxIcon from "../../assets/image/redux_icon.png";
import cppIcon from "../../assets/image/c++_icon.png";
import tailwindCSS from "../../assets/image/tailwindcss-mark.svg";

const skills = [
  {
    name: "HTML",
    image: htmlIcon,
    alt: "html",
  },
  {
    name: "CSS",
    image: cssIcon,
    alt: "css",
  },
  {
    name: "JavaScript",
    image: jsIcon,
    alt: "javascript",
  },
  {
    name: "React",
    image: reactIcon,
    alt: "react",
  },
  {
    name: "Tailwind CSS",
    image: tailwindCSS,
    alt: "tailwindCSS",
  },
  {
    name: "Redux",
    image: reduxIcon,
    alt: "redux",
  },
  {
    name: "C++",
    image: cppIcon,
    alt: "c++",
  },
];

const Skills = () => {
  return (
    <div className="p-8" id="skills">
      <div className="text-violet-700 text-4xl font-semibold text-center uppercase">
        Skills
      </div>
      <div className="flex justify-evenly items-center">
        <div className="grid grid-cols-4 gap-12 m-4 p-8">
          {skills.map((skill) => {
            return (
              <div className="flex justify-center items-center flex-col m-0 px-12 w-40 h-40 rounded-md border shadow-lg shadow-gray-100">
                <div className="text-lg font-normal text-center p-4 text-violet-600">
                  {skill.name}
                </div>
                <img width="130px" src={skill.image} alt={skill.alt} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
