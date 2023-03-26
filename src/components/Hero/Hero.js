import React from "react";
import mypic from "../../assets/image/my_profile.png";

import "../../assets/style/App.css";

const Hero = () => {
  return (
    <>
      <div
        className="heroclass mt-8 mr-4 mb-0 ml-4 py-8 w-25 h-auto flex justify-evenly items-center"
        id="home"
      >
        <div className="hero-image">
          <img
            className="rounded-full"
            width="300px"
            src={mypic}
            alt="darshan"
          />
        </div>
        <div className="hero-side inline justify-center items-center">
          <div className="p-4 text-center text-white text-5xl font-bold">
            Hi, I'm Darshan
          </div>
          <div className="p-4 text-2xl font-light text-center uppercase text-blue-200 tracking-widest">
            B.Tech(IT) Student & Web Developer
          </div>
          <div className="m-auto p-4 text-base text-center font-normal lowercase w-7/12 text-gray-300">
            Innovative and Passionate about work, Designing and Developing some
            projects in web devlopment
          </div>
          <div className="hero-connect p-4 text-center">
            <a
              className="p-3 rounded-md text-lg text-violet-700 bg-white no-underline outline-0"
              href="#contactme"
            >
              Want to Connect?
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
