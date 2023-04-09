import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center p-8 bg-violet-700 text-white">
      <div>darshantarsariya17@gmail.com</div>
      <div>
        <div>
          Copyright @ {new Date().getFullYear()} | &nbsp; Darshan Tarsariya
        </div>
      </div>
      <div>
        <a href="#contactme">Contact Me</a>
      </div>
    </div>
  );
};

export default Footer;
