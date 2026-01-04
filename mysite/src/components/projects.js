import React from "react";
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
    <section id="projects" className="question-section">
      <div className="question-text">What have I built?</div>

      <div className="answer-content">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectData.map((project, index) => (
              <article
                key={project._id}
                className="group relative border border-white/5 hover:border-white/10 transition-all duration-500 p-6"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-light text-white/90">
                      {project.project_title}
                    </h3>
                    <div className="flex gap-2">
                      <a
                        href={project.project_codelink}
                        target="_blank"
                        rel="noreferrer"
                        className="text-white/30 hover:text-white/60 transition-colors text-sm font-light"
                      >
                        Code
                      </a>
                      {project.project_livelink && (
                        <>
                          <span className="text-white/20">•</span>
                          <a
                            href={project.project_livelink}
                            target="_blank"
                            rel="noreferrer"
                            className="text-white/30 hover:text-white/60 transition-colors text-sm font-light"
                          >
                            Live
                          </a>
                        </>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-white/50 font-light leading-relaxed">
                    {project.project_description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.project_tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs text-white/30 font-light"
                      >
                        {tech}
                        {idx < project.project_tech.length - 1 && (
                          <span className="mx-1">•</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
