import React from "react";
import { techStack } from "constants/app.constants";

// Terminal-style skill tag component
const SkillTag = ({ name }) => {
  return (
    <div className="group/item relative">
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-red-500/0 group-hover/item:bg-red-500/20 blur-lg transition-all duration-300" />

      <div
        className="relative flex items-center gap-2 bg-black/60 border border-red-500/30 px-3 py-2
                   group-hover/item:border-red-400 group-hover/item:bg-red-900/20
                   group-hover/item:shadow-[0_0_15px_rgba(255,0,0,0.3)]
                   transition-all duration-300 cursor-default"
        style={{
          clipPath:
            "polygon(0 4px, 4px 0, calc(100% - 4px) 0, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 0 calc(100% - 4px))",
        }}
      >
        {/* Terminal prompt indicator */}
        <span className="text-red-500/60 text-xs font-mono group-hover/item:text-red-400 transition-colors">
          {">"}
        </span>

        {/* Skill name */}
        <span className="text-gray-300 font-mono text-sm tracking-wide group-hover/item:text-red-200 transition-colors">
          {name}
        </span>

        {/* Blinking cursor on hover */}
        <span className="w-0 h-3 bg-red-500 group-hover/item:w-1.5 group-hover/item:animate-pulse transition-all duration-200 shadow-[0_0_5px_rgba(255,0,0,0.5)]" />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="tech" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-red-500/50" />
            <span className="text-red-500/70 font-mono text-sm tracking-widest">
              {"["}
            </span>
            <h2 className="text-3xl md:text-4xl font-mono font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-300 to-red-500">
              Tech Stack & Tools
            </h2>
            <span className="text-red-500/70 font-mono text-sm tracking-widest">
              {"]"}
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-red-500/50" />
          </div>
          <p className="text-gray-500 font-mono text-sm tracking-wide">
            {"// Technologies I work with"}
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack?.map((category, index) => (
            <div
              key={index}
              className="group relative bg-black/60 border border-red-500/30
                       hover:border-red-500/60 hover:shadow-[0_0_30px_rgba(255,0,0,0.2)]
                       transition-all duration-300 overflow-hidden"
              style={{
                clipPath:
                  "polygon(0 10px, 10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px))",
              }}
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-red-500/50 group-hover:border-red-400/70 transition-colors duration-300" />
              <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-red-500/50 group-hover:border-red-400/70 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-red-500/50 group-hover:border-red-400/70 transition-colors duration-300" />
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-red-500/50 group-hover:border-red-400/70 transition-colors duration-300" />

              {/* Circuit pattern overlay */}
              <div
                className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10 L10 50 L50 50' stroke='%23FF0000' stroke-width='1' fill='none'/%3E%3Cpath d='M90 10 L90 30 L70 30 L70 50' stroke='%23FF0000' stroke-width='1' fill='none'/%3E%3Ccircle cx='50' cy='50' r='3' fill='%23FF0000'/%3E%3C/svg%3E\")",
                  backgroundSize: "100px 100px",
                }}
              />

              {/* Header */}
              <div className="relative px-5 py-4 border-b border-red-500/20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 bg-red-500 animate-pulse shadow-[0_0_8px_rgba(255,0,0,0.5)]"
                    style={{
                      clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                    }}
                  />
                  <span className="text-xs font-mono text-gray-600 uppercase tracking-wider">
                    Module_{String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <span className="text-xs font-mono text-green-500/70 flex items-center gap-1">
                  <span className="w-1 h-1 bg-green-500" />
                  ACTIVE
                </span>
              </div>

              {/* Content */}
              <div className="relative p-5">
                <h3 className="text-lg font-mono font-bold text-red-100 mb-4 tracking-wide flex items-center gap-2">
                  <span className="text-red-500/50">$</span>
                  {category?.title}
                </h3>

                {/* Terminal-style skill tags */}
                <div className="flex flex-wrap gap-2">
                  {category?.items?.map((item, idx) => (
                    <SkillTag key={idx} name={item?.name} index={idx} />
                  ))}
                </div>

                {/* Item count */}
                <div className="mt-4 pt-3 border-t border-red-500/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-gray-600">
                    <span className="text-red-500/50">{"//"}</span>{" "}
                    {category?.items?.length} items loaded
                  </span>
                </div>
              </div>

              {/* Bottom glow line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent group-hover:via-red-500/50 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="flex items-center justify-center mt-12">
          <div className="flex items-center gap-2 text-xs font-mono text-gray-600">
            <span className="w-2 h-2 bg-red-500/50 rotate-45" />
            <span className="w-1 h-1 bg-red-500/30" />
            <span className="text-red-500/50">STACK.LOADED</span>
            <span className="w-1 h-1 bg-red-500/30" />
            <span className="w-2 h-2 bg-red-500/50 rotate-45" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
