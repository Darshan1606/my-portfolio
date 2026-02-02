import React from "react";
import { HiOutlineCode, HiOutlineExternalLink } from "react-icons/hi";
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
    <section id="projects" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-red-500/50" />
            <span className="text-red-500/70 font-mono text-sm tracking-widest">{"["}</span>
            <h2 className="text-3xl md:text-4xl font-mono font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-300 to-red-500">
              Featured Projects
            </h2>
            <span className="text-red-500/70 font-mono text-sm tracking-widest">{"]"}</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-red-500/50" />
          </div>
          <p className="text-gray-500 font-mono text-sm tracking-wide">
            {"// Things I've built so far"}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectData.map((project, index) => (
            <article
              key={project._id}
              className="group relative overflow-hidden bg-black/80 border border-red-500/30
                       hover:border-red-500/60 hover:shadow-[0_0_40px_rgba(255,0,0,0.25)]
                       transition-all duration-500"
              style={{
                clipPath:
                  "polygon(0 15px, 15px 0, calc(100% - 15px) 0, 100% 15px, 100% calc(100% - 15px), calc(100% - 15px) 100%, 15px 100%, 0 calc(100% - 15px))",
              }}
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-red-500/50 group-hover:border-red-400/70 transition-colors duration-300 z-20" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-red-500/50 group-hover:border-red-400/70 transition-colors duration-300 z-20" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-red-500/50 group-hover:border-red-400/70 transition-colors duration-300 z-20" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-red-500/50 group-hover:border-red-400/70 transition-colors duration-300 z-20" />

              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <img
                  src={project.imgUrl}
                  alt={project.project_title}
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
                {/* Red tint overlay */}
                <div className="absolute inset-0 bg-red-900/10 group-hover:bg-red-900/20 transition-all duration-500" />
              </div>

              {/* Scanline effect */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 z-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)",
                  }}
                />
              </div>

              {/* Header bar */}
              <div className="relative px-5 py-3 border-b border-red-500/20 flex items-center justify-between z-10">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 bg-red-500 animate-pulse shadow-[0_0_8px_rgba(255,0,0,0.5)]"
                    style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
                  />
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                    Project_{String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <span className="text-xs font-mono text-green-500/70 flex items-center gap-1">
                  <span className="w-1 h-1 bg-green-500" />
                  DEPLOYED
                </span>
              </div>

              {/* Content */}
              <div className="relative p-6 z-10">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                  <h3 className="text-2xl font-mono font-bold text-red-100 group-hover:text-red-50 transition-colors duration-300">
                    {project.project_title}
                  </h3>
                  <div className="flex gap-2 flex-shrink-0">
                    <a
                      href={project.project_codelink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center px-3 py-1.5 bg-black/60 border border-red-500/30
                               text-gray-300 font-mono text-xs uppercase tracking-wider
                               hover:bg-red-900/30 hover:border-red-500/60 hover:text-red-300
                               transition-all duration-300"
                      style={{
                        clipPath:
                          "polygon(0 4px, 4px 0, calc(100% - 4px) 0, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 0 calc(100% - 4px))",
                      }}
                    >
                      <HiOutlineCode className="w-4 h-4 mr-1.5" />
                      Code
                    </a>
                    {project.project_livelink && (
                      <a
                        href={project.project_livelink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center px-3 py-1.5 bg-red-500/20 border border-red-500/50
                                 text-red-300 font-mono text-xs uppercase tracking-wider
                                 hover:bg-red-500/30 hover:border-red-400
                                 hover:shadow-[0_0_15px_rgba(255,0,0,0.4)]
                                 transition-all duration-300"
                        style={{
                          clipPath:
                            "polygon(0 4px, 4px 0, calc(100% - 4px) 0, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 0 calc(100% - 4px))",
                        }}
                      >
                        <HiOutlineExternalLink className="w-4 h-4 mr-1.5" />
                        Live
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm text-gray-400 font-mono mb-5 line-clamp-2">
                  {">"} {project.project_description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.project_tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-mono uppercase tracking-wider
                               bg-black/40 text-red-400/80 border border-red-500/20
                               group-hover:border-red-500/40 group-hover:text-red-300
                               transition-all duration-300"
                      style={{
                        clipPath:
                          "polygon(0 3px, 3px 0, calc(100% - 3px) 0, 100% 3px, 100% calc(100% - 3px), calc(100% - 3px) 100%, 3px 100%, 0 calc(100% - 3px))",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom glow line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent group-hover:via-red-500/60 transition-all duration-300 z-10" />
            </article>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="flex items-center justify-center mt-12">
          <div className="flex items-center gap-2 text-xs font-mono text-gray-600">
            <span className="w-2 h-2 bg-red-500/50 rotate-45" />
            <span className="w-1 h-1 bg-red-500/30" />
            <span className="text-red-500/50">PROJECTS.RENDERED</span>
            <span className="w-1 h-1 bg-red-500/30" />
            <span className="w-2 h-2 bg-red-500/50 rotate-45" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
