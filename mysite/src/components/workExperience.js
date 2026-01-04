import { workExperienceData } from "constants/app.constants";
import React from "react";
import { HiBriefcase, HiCalendar, HiLocationMarker } from "react-icons/hi";

const WorkExperience = () => {
  return (
    <section className="question-section">
      <div className="question-text">
        Where have I been?
      </div>

      <div className="answer-content">
        <div className="max-w-3xl mx-auto space-y-8">

          {workExperienceData.map((experience, index) => (
            <div key={index} className="border-b border-white/5 pb-8 last:border-0 last:pb-0">
              <div className="space-y-2">
                <h3 className="text-xl font-light text-white/90">
                  {experience.jobTitle}
                </h3>
                <p className="text-lg font-light text-white/60">
                  {experience.company}
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-white/40 font-light pt-2">
                  <span>{experience.location}</span>
                  <span>•</span>
                  <span>{experience.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
