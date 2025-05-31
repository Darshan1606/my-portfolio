import React from "react";
import { techStack } from "constants/app.constants";

const Skills = () => {
  return (
    <section id="tech" className="p-4 ">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
        Tech Stack & Tools
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {techStack?.map((category, index) => (
          <div
            key={index}
            className="rounded-lg bg-white border border-gray-500 p-6 transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              {category?.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category?.items?.map((item, idx) => (
                <img
                  key={idx}
                  src={item?.badge}
                  alt={item?.name}
                  className="h-8"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
