import React from "react";
import "./skills.css";

import skills from '../../assets/hero.png'
import htmlIcon from "../../assets/html_icon.png";
import cssIcon from "../../assets/css_icon.png";
import jsIcon from "../../assets/js_icon.png";
import reactIcon from "../../assets/react_icon.png";
import reduxIcon from "../../assets/redux_icon.png";
import cppIcon from "../../assets/c++_icon.png";


const Skills = () => {
  return (
    <div className="skillsclass">
      <div className="skill-title">Skills</div>

      <div className="skills-content">
        <div className="skills-list">
        <div className="skill-card">
          <div className="skill-name">HTML</div>
          <img width="130px" src={htmlIcon} alt="darshan" />
        </div>
        <div className="skill-card">
          <div className="skill-name">CSS</div>
          <img width="130px" src={cssIcon} alt="darshan" />
        </div>
        <div className="skill-card">
          <div className="skill-name">JavaScript</div>
          <img width="130px" src={jsIcon} alt="darshan" />
        </div>
        <div className="skill-card">
          <div className="skill-name">React</div>
          <img width="130px" src={reactIcon} alt="darshan" />
        </div>
        <div className="skill-card">
          <div className="skill-name">Redux</div>
          <img width="130px" src={reduxIcon} alt="darshan" />
        </div>
        <div className="skill-card">
          <div className="skill-name">C++</div>
          <img width="130px" src={cppIcon} alt="darshan" />
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default Skills;
