import React from "react";
import { HiArrowRight, HiTerminal } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Terminal = () => (
  <div className="relative max-w-3xl mx-auto bg-[#1E1E1E] rounded-xl overflow-hidden shadow-2xl">
    {/* Terminal Header */}
    <div className="flex items-center gap-2 px-4 py-3 bg-[#2D2D2D] border-b border-gray-700">
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="flex-1 text-center">
        <span className="text-gray-400 text-sm font-mono">terminal</span>
      </div>
    </div>

    {/* Terminal Content */}
    <div className="p-6 font-mono">
      <div className="flex items-center gap-2 text-green-400 mb-2">
        <HiTerminal className="w-5 h-5" />
        <span className="text-sm">
          ~/portfolio ${" "}
          <span className="text-purple-400">
            From Complexity to Clarity — Through Code
          </span>
        </span>
      </div>
    </div>
  </div>
);

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 mb-0">
      {/* Hero-specific Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/30 rounded-full filter blur-[140px] animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center space-y-12">
          {/* Main Heading with Glass Effect */}
          <div className="relative">
            <h1 className="text-2xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white leading-tight">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-200">
                Darshan Tarsariya
              </span>
            </h1>
            <div className="mt-4 text-2xl font-bold text-white/80">
              Software Engineer
            </div>
          </div>

          {/* Terminal UI */}
          <Terminal />

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#projects"
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white rounded-xl transition-all duration-300 flex items-center shadow-lg shadow-purple-500/25 hover:shadow-purple-500/50"
            >
              View Projects
              <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contactme"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-xl border border-white/10 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 shadow-lg"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/Darshan1606"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group"
            >
              <FaGithub className="w-6 h-6 text-gray-300 group-hover:text-purple-400" />
            </a>
            <a
              href="https://www.linkedin.com/in/darshan-t-b2b5b31ab/"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group"
            >
              <FaLinkedin className="w-6 h-6 text-gray-300 group-hover:text-purple-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
