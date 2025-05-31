import React from "react";
import { techStack } from "constants/app.constants";

const Skills = () => {
  return (
    <section id="tech" className="relative -mt-20 pb-20 px-4">
      <div className="pt-32">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white">
          Tech Stack & Tools
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
          {techStack?.map((category, index) => (
            <div
              key={index}
              className="group relative rounded-xl transition duration-300"
            >
              {/* Glass Card Background */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 group-hover:border-purple-500/30 group-hover:bg-white/10 transition-all duration-300"></div>

              {/* Content Container */}
              <div className="relative p-6">
                <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                  {category?.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {category?.items?.map((item, idx) => (
                    <div key={idx} className="group/item relative">
                      {/* Glow Effect for each icon */}
                      <div className="absolute inset-0 bg-purple-500/0 group-hover/item:bg-purple-500/20 rounded-full blur-lg transition-all duration-300"></div>
                      <img
                        src={item?.badge}
                        alt={item?.name}
                        className="h-8 relative transform group-hover/item:scale-110 transition-transform duration-300"
                        title={item?.name}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
