import { workExperienceData } from "constants/app.constants";
import React from "react";
import { HiBriefcase, HiCalendar, HiLocationMarker } from "react-icons/hi";

const WorkExperience = () => {
  return (
    <section className="py-16 px-4  from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey and the amazing teams I've worked with
          </p>
        </div>

        <div className="relative">
          <div className="space-y-8">
            {workExperienceData.map((experience, index) => (
              <>
                <div className="relative group">
                  {/* Timeline dot */}

                  {/* Card */}
                  <div className="md:ml-16 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                    <div className="p-6">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                            <HiBriefcase className="w-5 h-5 text-violet-600" />
                            {experience.jobTitle}
                          </h3>
                          <p className="text-lg font-semibold text-violet-600 mb-2">
                            {experience.company}
                          </p>
                        </div>

                        <div className="flex flex-col sm:text-right space-y-1">
                          <div className="flex items-center text-gray-600 text-sm md:text-lg sm:justify-end">
                            <HiLocationMarker className="w-4 h-4 mr-1" />
                            {experience.location}
                          </div>
                          <div className="flex items-center text-gray-600 text-sm md:text-lg sm:justify-end">
                            <HiCalendar className="w-4 h-4 mr-1" />
                            {experience.duration}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Gradient accent */}
                    <div className="h-1 bg-violet-500 rounded-b-xl"></div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
