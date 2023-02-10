import React from "react";
import mypic from "../../assets/my_profile.png";

import "./hero.css";

const Hero = () => {
  return (
    <>
      <div className="heroclass">
        <div className="hero-image">
          <img width="300px" src={mypic} alt="darshan" />
        </div>
        <div className="hero-side">
          <div className="hero-name">Hi, I'm Darshan</div>
          <div className="hero-content">B.Tech(IT) Student & Web Developer</div>
          <div className="hero-desc">
            Innovative and Passionate about work, Designing and Developing some
            projects in web devlopment
          </div>
          <div className="hero-connect">
            <a href="#">Want to Connect?</a>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Hero;
