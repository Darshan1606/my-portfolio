import React from "react";
import { HiArrowRight } from "react-icons/hi";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 mb-0">
      {/* Hero-specific Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/30 rounded-full filter blur-[140px] animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center space-y-8">
          {/* Main Heading with Glass Effect */}
          <div className="relative">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white leading-tight">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-200">
                Darshan Tarsariya
              </span>
            </h1>
            <div className="mt-4 text-3xl md:text-5xl font-bold text-white/80">
              Software Engineer
            </div>
          </div>

          {/* Description with Glass Card */}
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-2xl"></div>
            <p className="relative text-gray-300 text-lg md:text-xl p-6 leading-relaxed">
              From Complexity to Clarity — Through Code
            </p>
          </div>

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

          {/* Decorative Elements */}
          <div className="absolute top-1/4 left-0 w-24 h-24 border-l-2 border-t-2 border-purple-500/20 rounded-tl-xl"></div>
          <div className="absolute bottom-1/4 right-0 w-24 h-24 border-r-2 border-b-2 border-purple-500/20 rounded-br-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
