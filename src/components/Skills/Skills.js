// import React from "react";
// import "../../assets/style/App.css";

// import jsIcon from "../../assets/image/js_icon.png";
// import reactIcon from "../../assets/image/react_icon.png";
// import reduxIcon from "../../assets/image/redux_icon.png";
// import cppIcon from "../../assets/image/c++_icon.png";
// import tailwindCSS from "../../assets/image/tailwindcss-mark.svg";
// import nodejs from "../../assets/image/nodejs.png";
// import expressjs from "../../assets/image/express.png";
// import mongodb from "../../assets/image/mongodb.png";

// const skills = [
//   { name: "JavaScript", image: jsIcon, alt: "javascript" },
//   { name: "React", image: reactIcon, alt: "react" },
//   { name: "Tailwind CSS", image: tailwindCSS, alt: "tailwindCSS" },
//   { name: "Redux", image: reduxIcon, alt: "redux" },
//   { name: "NodeJs", image: nodejs, alt: "nodejs" },
//   { name: "ExpressJs", image: expressjs, alt: "expressjs" },
//   { name: "MongoDB", image: mongodb, alt: "mongodb" },
//   { name: "C++", image: cppIcon, alt: "c++" },
// ];

// const Skills = () => {
//   return (
//     <div className="p-4 sm:p-8" id="skills">
//       {/* Section Title */}
//       <div className="text-center mb-8">
//         <h2 className="text-4xl md:text-5xl font-extrabold uppercase text-gray-800 tracking-widest">
//           Skills
//         </h2>
//         <p className="text-gray-600 mt-2 text-lg">
//           Technologies I have worked with
//         </p>
//       </div>

//       {/* Skills Grid */}
//       <div className="flex justify-center items-center">
//         <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8">
//           {skills.map((skill, index) => (
//             <div
//               key={index}
//               className="glass-card w-32 sm:w-44 h-36 sm:h-44 flex flex-col items-center justify-center text-center rounded-xl shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl"
//             >
//               {/* Skill Image */}
//               <img
//                 src={skill.image}
//                 alt={skill.alt}
//                 className="w-16 sm:w-20 mb-2 transition duration-300"
//               />
//               {/* Skill Name */}
//               <h3 className="text-lg font-semibold text-gray-700">
//                 {skill.name}
//               </h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;

import React from "react";

const techStack = [
  {
    title: "🛠️ Languages",
    items: [
      {
        name: "JavaScript",
        badge:
          "https://img.shields.io/badge/JavaScript-323330?logo=javascript&logoColor=F7DF1E",
      },
      {
        name: "C++",
        badge:
          "https://img.shields.io/badge/C++-00599C?logo=c%2B%2B&logoColor=white",
      },
    ],
  },
  {
    title: "🎨 Frontend",
    items: [
      {
        name: "ReactJS",
        badge:
          "https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB",
      },
      // {
      //   name: "HTML5",
      //   badge:
      //     "https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white",
      // },
      // {
      //   name: "CSS3",
      //   badge:
      //     "https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white",
      // },
    ],
  },
  {
    title: "⚙️ Backend",
    items: [
      {
        name: "Node.js",
        badge:
          "https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white",
      },
      {
        name: "Express.js",
        badge:
          "https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white",
      },
    ],
  },
  {
    title: "🗄️ Databases",
    items: [
      {
        name: "MongoDB",
        badge:
          "https://img.shields.io/badge/MongoDB-4EA94B?logo=mongodb&logoColor=white",
      },
      {
        name: "PostgreSQL",
        badge:
          "https://img.shields.io/badge/PostgreSQL-316192?logo=postgresql&logoColor=white",
      },
      {
        name: "Studio 3T",
        badge:
          "https://img.shields.io/badge/Studio%203T-0078D7?logo=studio3t&logoColor=white",
      },
    ],
  },
  {
    title: "☁️ Cloud & APIs",
    items: [
      {
        name: "AWS S3",
        badge:
          "https://img.shields.io/badge/AWS_S3-FF9900?logo=amazonaws&logoColor=white",
      },
      {
        name: "Firebase",
        badge:
          "https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black",
      },
      {
        name: "Stripe",
        badge:
          "https://img.shields.io/badge/Stripe-008CDD?logo=stripe&logoColor=white",
      },
      {
        name: "Google Maps API",
        badge:
          "https://img.shields.io/badge/Google%20Maps-4285F4?logo=googlemaps&logoColor=white",
      },
    ],
  },
  {
    title: "🛠️ Tools & IDEs",
    items: [
      {
        name: "VSCode",
        badge:
          "https://img.shields.io/badge/VSCode-007ACC?logo=visual-studio-code&logoColor=white",
      },
      {
        name: "Postman",
        badge:
          "https://img.shields.io/badge/Postman-FF6C37?logo=postman&logoColor=white",
      },
      {
        name: "Replit",
        badge:
          "https://img.shields.io/badge/Replit-667881?logo=replit&logoColor=white",
      },
    ],
  },
];

const Skills = () => {
  return (
    <section id="tech" className="py-8 px-4 ">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
        🔧 Tech Stack & Tools
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {techStack.map((category, index) => (
          <div
            key={index}
            className="rounded-lg bg-white border p-6 transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.items.map((item, idx) => (
                <img
                  key={idx}
                  src={item.badge}
                  alt={item.name}
                  className="h-8"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
