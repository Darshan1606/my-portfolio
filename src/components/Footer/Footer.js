import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center p-8 bg-violet-700 text-white">
      <div>
        {" "}
        <a
          href="mailto:darshantarsariya17@gmail.com"
          rel="noreferrer"
          className="flex items-center text-white no-underline hover:text-orange-300"
        >
          <HiMail className="mr-2" />
          darshantarsariya17@gmail.com
        </a>
      </div>
      <div>
        <div>Darshan Tarsariya</div>
      </div>
      <div className="flex justify-center items-end space-x-4">
        <a
          href="https://www.linkedin.com/in/darshan-t-b2b5b31ab/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center text-white no-underline hover:text-orange-300"
        >
          <FaLinkedin className="mr-2" />
          LinkedIn
        </a>
        <a
          href="https://github.com/Darshan1606"
          target="_blank"
          rel="noreferrer"
          className="flex items-center text-white no-underline hover:text-orange-300"
        >
          <FaGithub className="mr-2" />
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Footer;
