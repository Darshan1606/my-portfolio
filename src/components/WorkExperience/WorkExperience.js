import React from "react";

const workExperienceData = [
  {
    id: 1,
    company: "Sapient Codelabs",
    role: "Software Engineer",
    duration: "Jul 2023 - Present",
    location: "Surat, IN",
    achievements: [
      "Developed and optimized responsive UI components using React.",
      "Integrated third-party libraries to enhance functionality and performance.",
      "Collaborated with the backend team to ensure seamless API integration.",
    ],
  },
  {
    id: 2,
    company: "Sapient Codelabs",
    role: "Software Engineer Intern",
    duration: "Jan 2023 - Jun 2023",
    location: "Surat, IN",
    achievements: [
      "Redesigned the product listing pages to improve user engagement.",
      "Implemented payment gateway integration for a secure checkout process.",
      "Enhanced website performance by optimizing images and lazy-loading assets.",
    ],
  },
];

const WorkExperience = () => {
  return (
    <div className="h-auto p-8 bg-violet-600 text-white" id="workexperience">
      <div className="text-center text-4xl font-bold my-8">Work Experience</div>
      <div className="flex justify-center items-center my-4">
        <div className="relative border-l-2 border-gray-300 pl-6">
          {workExperienceData.map((experience) => (
            <div key={experience.id} className="mb-10">
              <div className="absolute -left-3 w-6 h-6 bg-violet-500 border-4 border-white rounded-full"></div>
              <div className="ml-6">
                <h3 className="text-2xl font-semibold">{experience.role}</h3>
                <p className="text-sm my-2 text-orange-300">
                  {experience.company} | {experience.location} |{" "}
                  {experience.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
