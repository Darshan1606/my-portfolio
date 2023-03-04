import React from "react";
import p1 from "../../assets/image/vidapp.PNG";
import p2 from "../../assets/image/tenzi.PNG";
import p3 from "../../assets/image/marvel.PNG";
import p4 from "../../assets/image/porfolio.PNG";

import { HiOutlineCode, HiOutlineEye } from "react-icons/hi";

const projectData = [
  {
    _id: 1,
    imgUrl: p1,
    project_title: "VidApp",
    project_tech: ["JavaScript", "React", "CSS"],
    project_description: "React project with youtube API",
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
    project_tech: ["JavaScript", "React", "HTML", "CSS"],
    project_description: "This is my portfolio which made by me using React",
    project_codelink: "https://github.com/Darshan1606/DarshanTarsariya",
    project_livelink: "https://darshant.netlify.app/",
  },
];

const Projects = () => {
  return (
    <div className="projects">
      <div className="project-section">
        <div className="section-title">Projects</div>
        <div className="projects-list">
          {projectData.map((project) => (
            <div key={project._id} className="projects-card">
              <div className="projects-img">
                <img src={project.imgUrl} alt="" width={250} />
              </div>
              <div className="projects-content">
                <div className="projects-title">{project.project_title}</div>
                <div className="projects-techlist">
                  {project.project_tech.map((tech, index) => (
                    <div key={index} className="projects-tech">
                      {tech}
                    </div>
                  ))}
                </div>
                <div className="projects-desc">
                  {project.project_description}
                </div>
                <div className="projects-links">
                  <div className="projects-link-code-live">
                    <a
                      rel="noreferrer"
                      href={project.project_codelink}
                      target="_blank"
                    >
                      <HiOutlineCode />
                      &nbsp;Code
                    </a>
                  </div>
                  {project.project_livelink && (
                    <div className="projects-link-code-live">
                      <a
                        rel="noreferrer"
                        href={project.project_livelink}
                        target="_blank"
                      >
                        <HiOutlineEye />
                        &nbsp;Live
                      </a>
                    </div>
                  ) }
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
