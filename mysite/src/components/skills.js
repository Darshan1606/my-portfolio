import React from "react";
import { techStack } from "constants/app.constants";

const Skills = () => {
  return (
    <section id="tech" className="question-section">
      <div className="question-text">
        What tools do I use?
      </div>

      <div className="answer-content">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {techStack?.map((category, index) => (
            <div
              key={index}
              className="group relative p-6 border border-white/5 hover:border-white/10 transition-all duration-500"
            >
              <h3 className="text-lg font-light mb-4 text-white/80">
                {category?.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category?.items?.map((item, idx) => (
                  <div key={idx} className="group/item relative">
                    <img
                      src={item?.badge}
                      alt={item?.name}
                      className="h-7 relative transform group-hover/item:scale-110 transition-transform duration-300 opacity-70 group-hover/item:opacity-100"
                      title={item?.name}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
