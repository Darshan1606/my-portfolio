import { workExperienceData } from "constants/app.constants";
import React from "react";
import { HiBriefcase, HiCalendar, HiLocationMarker } from "react-icons/hi";

const WorkExperience = () => {
  return (
    <section
      id="workexperience"
      className="relative py-20 px-4 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-red-500/50" />
            <span className="text-red-500/70 font-mono text-sm tracking-widest">
              {"["}
            </span>
            <h2 className="text-3xl md:text-4xl font-mono font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-300 to-red-500">
              Work Experience
            </h2>
            <span className="text-red-500/70 font-mono text-sm tracking-widest">
              {"]"}
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-red-500/50" />
          </div>
          <p className="text-gray-500 font-mono text-sm tracking-wide">
            {"// My professional journey and the amazing teams I've worked with"}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Main timeline line */}
          <div className="hidden md:block absolute left-6 top-0 bottom-0 w-px">
            <div className="h-full bg-gradient-to-b from-red-500/60 via-red-500/30 to-transparent" />
            {/* Data flow animation */}
            <div
              className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-red-500/80 via-red-500/40 to-transparent animate-data-flow"
              style={{
                backgroundSize: "100% 200%",
              }}
            />
          </div>

          <div className="space-y-8">
            {workExperienceData.map((experience, index) => (
              <div key={index} className="relative group">
                {/* Timeline node */}
                <div className="hidden md:flex absolute left-4 top-6 items-center justify-center z-10">
                  <div
                    className="w-5 h-5 bg-black border-2 border-red-500/60 group-hover:border-red-400
                             shadow-[0_0_15px_rgba(255,0,0,0.4)] group-hover:shadow-[0_0_20px_rgba(255,0,0,0.6)]
                             transition-all duration-300"
                    style={{
                      clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                    }}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-red-500 animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Connection line to card */}
                <div className="hidden md:block absolute left-[22px] top-8 w-8 h-px bg-gradient-to-r from-red-500/40 to-transparent" />

                {/* Card */}
                <div
                  className="md:ml-16 relative overflow-hidden bg-black/70 border border-red-500/30
                           hover:border-red-500/60 hover:shadow-[0_0_30px_rgba(255,0,0,0.2)]
                           transition-all duration-300"
                  style={{
                    clipPath:
                      "polygon(0 10px, 10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px))",
                  }}
                >
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-red-500/40 group-hover:border-red-400/60 transition-colors duration-300" />
                  <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-red-500/40 group-hover:border-red-400/60 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-red-500/40 group-hover:border-red-400/60 transition-colors duration-300" />
                  <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-red-500/40 group-hover:border-red-400/60 transition-colors duration-300" />

                  {/* Header bar */}
                  <div className="px-5 py-2 border-b border-red-500/20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2 h-2 bg-red-500 shadow-[0_0_8px_rgba(255,0,0,0.5)]"
                        style={{
                          clipPath:
                            "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                        }}
                      />
                      <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                        Record_
                      </span>
                    </div>
                    <span className="text-xs font-mono text-gray-600">
                      {experience.duration.includes("Present") ? (
                        <span className="text-green-500/80 flex items-center gap-1">
                          <span className="w-1 h-1 bg-green-500 animate-pulse" />
                          ACTIVE
                        </span>
                      ) : (
                        <span className="text-gray-500">COMPLETED</span>
                      )}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-mono font-bold text-red-100 group-hover:text-red-50 transition-colors duration-300 flex items-center gap-3">
                          <HiBriefcase className="w-5 h-5 text-red-500" />
                          {experience.jobTitle}
                        </h3>
                        <p className="text-lg font-mono font-semibold text-red-400/80 group-hover:text-red-400 mt-2 transition-colors duration-300">
                          @ {experience.company}
                        </p>
                      </div>

                      <div className="flex flex-col space-y-2 sm:text-right">
                        <div className="flex items-center text-gray-400 text-sm font-mono sm:justify-end gap-2">
                          <HiLocationMarker className="w-4 h-4 text-red-500/60" />
                          <span>{experience.location}</span>
                        </div>
                        <div className="flex items-center text-gray-400 text-sm font-mono sm:justify-end gap-2">
                          <HiCalendar className="w-4 h-4 text-red-500/60" />
                          <span>{experience.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom glow line */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent group-hover:via-red-500/50 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>

          {/* End of timeline marker */}
          <div className="hidden md:flex absolute left-4 -bottom-4 items-center justify-center">
            <div
              className="w-3 h-3 bg-red-500/30 border border-red-500/40"
              style={{
                clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              }}
            />
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="flex items-center justify-center mt-16">
          <div className="flex items-center gap-2 text-xs font-mono text-gray-600">
            <span className="w-2 h-2 bg-red-500/50 rotate-45" />
            <span className="w-1 h-1 bg-red-500/30" />
            <span className="text-red-500/50">TIMELINE.COMPLETE</span>
            <span className="w-1 h-1 bg-red-500/30" />
            <span className="w-2 h-2 bg-red-500/50 rotate-45" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
