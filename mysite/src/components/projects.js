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
    <div className="projects p-4 md:p-16 " id="projects">
      <div className="project-section  md:p-8 rounded-xl md:rounded-3xl bg-white">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 my-8">
          Projects
        </h2>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {projectData?.map((project) => (
            <div
              key={project?._id}
              className="projects-card p-4 rounded-2xl h-auto bg-white border border-gray-500 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <div className="flex justify-center items-center mb-4">
                <img
                  className="rounded-xl w-full h-48 object-cover"
                  src={project?.imgUrl}
                  alt={project?.project_title}
                />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-violet-500 mb-2">
                  {project?.project_title}
                </h3>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {project?.project_tech &&
                  project?.project_tech?.length > 0 ? (
                    project?.project_tech?.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs font-medium text-white bg-orange-400 px-3 py-1 rounded-full mb-2"
                      >
                        {tech}
                      </span>
                    ))
                  ) : (
                    <span className="text-xs font-medium text-gray-500">
                      No tech stack listed
                    </span>
                  )}
                </div>
                <p className="text-gray-500 text-sm mb-6">
                  {project?.project_description}
                </p>
                <div className="flex justify-center gap-4">
                  <a
                    className="flex items-center bg-orange-400 text-white py-2 px-4 rounded-lg hover:bg-orange-500 transition-all"
                    href={project?.project_codelink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <HiOutlineCode className="mr-2" />
                    Code
                  </a>
                  {project?.project_livelink && (
                    <a
                      className="flex items-center bg-orange-400 text-white py-2 px-4 rounded-lg hover:bg-orange-500 transition-all"
                      href={project?.project_livelink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <HiOutlineEye className="mr-2" />
                      Live
                    </a>
                  )}
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
