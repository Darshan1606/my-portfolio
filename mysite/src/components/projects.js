import React from "react";
import { HiOutlineCode, HiOutlineEye } from "react-icons/hi";
import p1 from "../assets/image/vidapp.png";
import p2 from "../assets/image/tenzi.png";
import p3 from "../assets/image/marvel.png";
import p4 from "../assets/image/portfolio.png";

const projectData = [
  {
    _id: 1,
    imgUrl: p1,
    project_title: "VidApp",
    project_tech: ["JavaScript", "React", "CSS"],
    project_description: "React project with YouTube API",
    project_codelink: "https://github.com/Darshan1606/VidApp",
    project_livelink: "https://vidappbyme.netlify.app/",
  },
  {
    _id: 2,
    imgUrl: p2,
    project_title: "Tenzies Dice Game",
    project_tech: ["JavaScript", "React", "CSS"],
    project_description:
      "Tenzies Dice game is the fast-paced and frenzied dice-rolling game",
    project_codelink: "https://replit.com/@DarshanTarsariy/TenziesGame",
    project_livelink: "https://tenziesgame.darshantarsariy.repl.co/",
  },
  {
    _id: 3,
    imgUrl: p3,
    project_title: "Marvel API Project",
    project_tech: ["JavaScript", "React", "HTML", "CSS"],
    project_description:
      "The project display data of Marvel movies, comics, characters, stories and series using Marvel API",
    project_codelink: "https://github.com/Darshan1606/React-Marvel-API",
    project_livelink: "",
  },
  {
    _id: 4,
    imgUrl: p4,
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
              className={`group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-purple-500/30 ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <img
                  src={project.imgUrl}
                  alt={project.project_title}
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-300 transition-all duration-300">
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
