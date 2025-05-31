import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="relative mt-20">
      {/* Glass effect background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/0 to-purple-900/10">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Email Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">
              Contact
            </h3>
            <a
              href="mailto:darshantarsariya17@gmail.com"
              rel="noreferrer"
              className="flex items-center justify-center md:justify-start text-gray-300 hover:text-purple-400 transition-colors duration-300 group"
            >
              <HiMail className="w-5 h-5 mr-2 text-purple-500 group-hover:text-purple-400" />
              darshantarsariya17@gmail.com
            </a>
          </div>

          {/* Name Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">
              Developer
            </h3>
            <p className="text-gray-300">Darshan Tarsariya</p>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">
              Connect
            </h3>
            <div className="flex justify-center md:justify-start space-x-6">
              <a
                href="https://www.linkedin.com/in/darshan-t-b2b5b31ab/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center text-gray-300 hover:text-purple-400 transition-colors duration-300"
              >
                <FaLinkedin className="w-5 h-5 text-purple-500 group-hover:text-purple-400" />
                <span className="ml-2">LinkedIn</span>
              </a>
              <a
                href="https://github.com/Darshan1606"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center text-gray-300 hover:text-purple-400 transition-colors duration-300"
              >
                <FaGithub className="w-5 h-5 text-purple-500 group-hover:text-purple-400" />
                <span className="ml-2">GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Darshan Tarsariya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
