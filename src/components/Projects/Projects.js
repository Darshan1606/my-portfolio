// import React from "react";
// import p1 from "../../assets/image/vidapp.PNG";
// import p2 from "../../assets/image/tenzi.PNG";
// import p3 from "../../assets/image/marvel.PNG";
// import p4 from "../../assets/image/porfolio.PNG";

// import { HiOutlineCode, HiOutlineEye } from "react-icons/hi";

// const projectData = [
//   {
//     _id: 1,
//     imgUrl: p1,
//     project_title: "VidApp",
//     project_tech: ["JavaScript", "React", "CSS"],
//     project_description: "React project with youtube API",
//     project_codelink: "https://github.com/Darshan1606/VidApp",
//     project_livelink: "https://vidappbyme.netlify.app/",
//   },
//   {
//     _id: 2,
//     imgUrl: p2,
//     project_title: "Tenzies Dice Game",
//     project_tech: ["JavaScript", "React", "CSS"],
//     project_description:
//       "Tenzies Dice game is the fast-paced and frenzied dice-rolling game",
//     project_codelink: "https://replit.com/@DarshanTarsariy/TenziesGame",
//     project_livelink: "https://tenziesgame.darshantarsariy.repl.co/",
//   },
//   {
//     _id: 3,
//     imgUrl: p3,
//     project_title: "Marvel API Project",
//     project_tech: ["JavaScript", "React", "HTML", "CSS"],
//     project_description:
//       "The project display data of Marvel movies, comics, characters, stories and series using Marvel API",
//     project_codelink: "https://github.com/Darshan1606/React-Marvel-API",
//     project_livelink: "",
//   },
//   {
//     _id: 4,
//     imgUrl: p4,
//     project_title: "My Portfolio",
//     project_tech: ["JavaScript", "React", "HTML", "Tailwind CSS"],
//     project_description: "This is my portfolio which made by me using React",
//     project_codelink: "https://github.com/Darshan1606/DarshanTarsariya",
//     project_livelink: "https://darshant.netlify.app/",
//   },
// ];

// const Projects = () => {
//   return (
//     <div className="projects p-4 md:p-16 h-auto bg-violet-700" id="projects">
//       <div className="project-section p-2 md:p-8 rounded-3xl bg-white h-auto">
//         <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
//           Projects
//         </h2>
//         <div className="m-8 p-4 grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-4 gap-8">
//           {projectData.map((project) => (
//             <div
//               key={project._id}
//               className="projects-card p-3 rounded-2xl h-auto min-w-fit"
//             >
//               <div className="flex justify-center items-center">
//                 <img
//                   className="rounded-xl"
//                   src={project.imgUrl}
//                   alt=""
//                   width={250}
//                 />
//               </div>
//               <div className="text-center">
//                 <div className="py-4 text-violet-500 text-2xl font-bold">
//                   {project.project_title}
//                 </div>
//                 <div className="flex flex-wrap justify-center items-center gap-2 text-center">
//                   {project.project_tech.map((tech, index) => (
//                     <div
//                       key={index}
//                       className="font-medium text-xs px-2 py-1 text-orange-300 border border-orange-300 rounded-xl"
//                     >
//                       {tech}
//                     </div>
//                   ))}
//                 </div>
//                 <div className="text-gray-400 text-sm font-normal py-4 ">
//                   {project.project_description}
//                 </div>
//                 <div className="flex justify-center items-center">
//                   <div className="w-full bg-orange-400 m-1 p-1 rounded-xl hover:bg-orange-200">
//                     <a
//                       className="flex justify-center items-center text-center text-white no-underline text-lg font-medium"
//                       rel="noreferrer"
//                       href={project.project_codelink}
//                       target="_blank"
//                     >
//                       <HiOutlineCode />
//                       &nbsp;Code
//                     </a>
//                   </div>
//                   {project.project_livelink && (
//                     <div className="w-full bg-orange-400 m-1 p-1 rounded-xl hover:bg-orange-200">
//                       <a
//                         className="flex justify-center items-center text-center text-white no-underline text-lg font-medium"
//                         rel="noreferrer"
//                         href={project.project_livelink}
//                         target="_blank"
//                       >
//                         <HiOutlineEye />
//                         &nbsp;Live
//                       </a>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;

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
      <div className="project-section p-8 rounded-3xl bg-white border">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
          Projects
        </h2>
        <div className="m-8 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {projectData.map((project) => (
            <div
              key={project._id}
              className="projects-card p-4 rounded-2xl h-auto bg-white border transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <div className="flex justify-center items-center mb-4">
                <img
                  className="rounded-xl w-72 h-48 object-cover"
                  src={project.imgUrl}
                  alt={project.project_title}
                />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-violet-500 mb-2">
                  {project.project_title}
                </h3>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {project.project_tech && project.project_tech.length > 0 ? (
                    project.project_tech.map((tech, index) => (
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
                  {project.project_description}
                </p>
                <div className="flex justify-center gap-4">
                  <a
                    className="flex items-center bg-violet-500 text-white py-2 px-4 rounded-lg hover:bg-violet-600 transition-all"
                    href={project.project_codelink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <HiOutlineCode className="mr-2" />
                    Code
                  </a>
                  {project.project_livelink && (
                    <a
                      className="flex items-center bg-violet-500 text-white py-2 px-4 rounded-lg hover:bg-violet-600 transition-all"
                      href={project.project_livelink}
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
