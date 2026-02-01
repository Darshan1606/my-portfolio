import React from "react";
import { HiOutlineCode, HiOutlineEye } from "react-icons/hi";
import p1 from "../assets/image/tn.png";
import p2 from "../assets/image/egc.png";
import p3 from "../assets/image/portfolio.png";

const projectData = [
  {
    _id: 1,
    imgUrl: p1,
    project_title: "Tool Notes",
    project_tech: ["Javascript", "React", "Tailwind CSS", "Posthog"],
    project_description:
      "Tool Notes is a developer reference site offering concise cheat-sheets and quick technical notes for programmers",
    project_codelink:
      "https://github.com/Darshan1606/cheat-sheets-for-developers",
    project_livelink: "https://toolnotes.netlify.app/",
  },
  {
    _id: 2,
    imgUrl: p2,
    project_title: "ENV Guardian",
    project_tech: ["JavaScript", "Node.js", "npm"],
    project_description:
      "A CLI tool that scans and manages environment variables to prevent runtime errors and improve type safety in projects",
    project_codelink: "https://github.com/Darshan1606/env-guardian-cli",
    project_livelink: "https://www.npmjs.com/package/env-guardian-cli",
  },
  {
    _id: 3,
    imgUrl: p3,
    project_title: "My Portfolio",
    project_tech: ["JavaScript", "React", "HTML", "Tailwind CSS"],
    project_description: "This is my portfolio which made by me using React",
    project_codelink: "https://github.com/Darshan1606/DarshanTarsariya",
    project_livelink: "https://darshant.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative -mt-20 py-20 px-4">
      <div className="max-w-6xl mx-auto relative">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg">Things I've built so far</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectData.map((project, index) => (
            <article
              key={project._id}
              className={`group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-purple-500/30`}
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <img
                  src={project.imgUrl}
                  alt={project.project_title}
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-white/1 to-[#0A0A0A]"></div>
              </div>

              {/* Content */}
              <div className="relative p-6 z-10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white transition-all duration-300 bg-gradient-to-r from-white to-white bg-clip-text hover:from-white hover:via-purple-200 hover:to-white group-hover:text-transparent">
                    {project.project_title}
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href={project.project_codelink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center px-3 py-1.5 bg-white/5 hover:bg-white/10 text-white rounded-lg border border-white/10 backdrop-blur-sm transition-all duration-300 text-sm font-medium hover:border-purple-500/50"
                    >
                      <HiOutlineCode className="w-4 h-4 mr-1.5" />
                      Code
                    </a>
                    {project.project_livelink && (
                      <a
                        href={project.project_livelink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center px-3 py-1.5 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white rounded-lg transition-all duration-300 text-sm font-medium shadow-lg shadow-purple-500/25 hover:shadow-purple-500/50"
                      >
                        <HiOutlineEye className="w-4 h-4 mr-1.5" />
                        Live
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm text-gray-300 line-clamp-2 mb-4">
                  {project.project_description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.project_tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium bg-white/5 text-gray-300 rounded-full border border-white/10 backdrop-blur-sm group-hover:border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
