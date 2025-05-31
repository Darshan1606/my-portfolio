import { workExperienceData } from "constants/app.constants";
import React from "react";
import { HiBriefcase, HiCalendar, HiLocationMarker } from "react-icons/hi";

const WorkExperience = () => {
  return (
    <section className="relative -mt-20 py-20 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-gray-400">
            My professional journey and the amazing teams I've worked with
          </p>
        </div>

        <div className="relative">
          <div className="space-y-8">
            {workExperienceData.map((experience, index) => (
              <div key={index} className="relative">
                {/* Timeline line */}
                <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-purple-500/25 to-transparent"></div>

                {/* Timeline dot */}
                <div className="hidden md:flex absolute -left-2.5 top-0 h-5 w-5 items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                </div>

                {/* Card */}
                <div className="group md:ml-8 relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-purple-500/30">
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white group-hover:from-white group-hover:to-purple-300 transition-all duration-300 flex items-center gap-2">
                          <HiBriefcase className="w-5 h-5 text-purple-500" />
                          {experience.jobTitle}
                        </h3>
                        <p className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-400 group-hover:from-purple-400 group-hover:to-purple-300 mt-2">
                          {experience.company}
                        </p>
                      </div>

                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center text-gray-400 text-sm sm:justify-end">
                          <HiLocationMarker className="w-4 h-4 mr-1.5 text-purple-500/70" />
                          {experience.location}
                        </div>
                        <div className="flex items-center text-gray-400 text-sm sm:justify-end">
                          <HiCalendar className="w-4 h-4 mr-1.5 text-purple-500/70" />
                          {experience.duration}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Gradient accent */}
                  <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
