import React, { useState, useEffect } from "react";
import { HiArrowRight, HiTerminal } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// Terminal component with Tron Ares styling
const TronTerminal = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "From Complexity to Clarity — Through Code";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="relative max-w-3xl mx-auto bg-black/80 overflow-hidden
                 border border-red-500/40 shadow-[0_0_40px_rgba(255,0,0,0.2)]"
      style={{
        clipPath:
          "polygon(0 12px, 12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px))",
      }}
    >
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-red-500/70" />
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-red-500/70" />
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-red-500/70" />
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-red-500/70" />

      {/* Terminal Header */}
      <div className="flex items-center gap-3 px-4 py-3 bg-gray-950/80 border-b border-red-500/30">
        <div className="flex gap-2">
          <div
            className="w-3 h-3 bg-red-500/80 shadow-[0_0_8px_rgba(255,0,0,0.5)]"
            style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
          />
          <div
            className="w-3 h-3 bg-red-400/60"
            style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
          />
          <div
            className="w-3 h-3 bg-red-300/40"
            style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
          />
        </div>
        <div className="flex-1 text-center">
          <span className="text-red-400/70 text-sm font-mono tracking-wider uppercase">
            {"// system_terminal"}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 bg-red-500 animate-pulse" />
          <span className="text-xs font-mono text-gray-600">LIVE</span>
        </div>
      </div>

      {/* Terminal Content */}
      <div className="p-6 font-mono relative">
        {/* Scanline effect inside terminal */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-transparent animate-scanline" />
        </div>

        <div className="flex items-start gap-2 text-red-400">
          <HiTerminal className="w-5 h-5 mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <span className="text-gray-500">user@darshan</span>
            <span className="text-red-500">:</span>
            <span className="text-red-400/70">~/portfolio</span>
            <span className="text-gray-500 ml-1">$</span>
            <span className="ml-2 text-red-300">{displayText}</span>
            <span className="inline-block w-2 h-5 bg-red-500 ml-1 animate-pulse shadow-[0_0_10px_rgba(255,0,0,0.5)]" />
          </div>
        </div>
      </div>

      {/* Bottom glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
    </div>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 pt-20 mb-0 overflow-hidden"
    >
      {/* Hero-specific Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Red glow orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/20 rounded-full filter blur-[120px] animate-pulse" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-red-600/10 rounded-full filter blur-[80px] animate-pulse delay-700" />

        {/* Data streams */}
        <div className="absolute left-[10%] top-0 h-full w-px opacity-20">
          <div className="h-full w-full bg-gradient-to-b from-transparent via-red-500 to-transparent animate-data-flow" />
        </div>
        <div
          className="absolute left-[90%] top-0 h-full w-px opacity-20"
          style={{ animationDelay: "1s" }}
        >
          <div className="h-full w-full bg-gradient-to-b from-transparent via-red-500 to-transparent animate-data-flow" />
        </div>
      </div>

      {/* Perspective floor grid */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[40vh] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 0, 0, 0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          transform: "perspective(500px) rotateX(60deg)",
          transformOrigin: "center top",
          maskImage: "linear-gradient(to top, black, transparent)",
          WebkitMaskImage: "linear-gradient(to top, black, transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center space-y-10">
          {/* Status indicator */}
          <div className="flex items-center justify-center gap-2 text-sm font-mono text-gray-500">
            <span
              className="w-2 h-2 bg-red-500 animate-pulse shadow-[0_0_10px_rgba(255,0,0,0.5)]"
              style={{
                clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              }}
            />
            <span className="uppercase tracking-widest">System Online</span>
            <span className="text-red-500/50">|</span>
            <span className="uppercase tracking-widest">User Identified</span>
          </div>

          {/* Main Heading */}
          <div className="relative">
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-mono font-bold text-white leading-tight tracking-tight">
              Hi, I'm{" "}
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-red-500
                           drop-shadow-[0_0_30px_rgba(255,0,0,0.5)]"
              >
                Darshan
              </span>
            </h1>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-red-500/50" />
              <span className="text-xl md:text-2xl font-mono text-gray-300 uppercase tracking-widest">
                Software Engineer
              </span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-red-500/50" />
            </div>
          </div>

          {/* Terminal UI */}
          <TronTerminal />

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-red-500/10 border-2 border-red-500/60
                       text-red-100 font-mono text-sm uppercase tracking-wider
                       hover:bg-red-500/20 hover:border-red-400
                       hover:shadow-[0_0_30px_rgba(255,0,0,0.5)]
                       transition-all duration-300 flex items-center gap-2"
              style={{
                clipPath:
                  "polygon(0 10px, 10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px))",
              }}
            >
              <span className="text-red-500">&gt;</span>
              View Projects
              <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-red-500" />
            </a>
            <a
              href="#contactme"
              className="px-8 py-4 bg-black/60 border border-red-500/30
                       text-gray-300 font-mono text-sm uppercase tracking-wider
                       hover:bg-red-900/20 hover:border-red-500/50 hover:text-red-300
                       hover:shadow-[0_0_20px_rgba(255,0,0,0.3)]
                       transition-all duration-300"
              style={{
                clipPath:
                  "polygon(0 10px, 10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px))",
              }}
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 pt-4">
            <a
              href="https://github.com/Darshan1606"
              target="_blank"
              rel="noreferrer"
              className="group relative p-4 bg-black/60 border border-red-500/30
                       hover:border-red-500/60 hover:shadow-[0_0_20px_rgba(255,0,0,0.3)]
                       transition-all duration-300"
              style={{
                clipPath:
                  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
            >
              <FaGithub className="w-6 h-6 text-gray-400 group-hover:text-red-400 transition-colors duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/darshan-t-b2b5b31ab/"
              target="_blank"
              rel="noreferrer"
              className="group relative p-4 bg-black/60 border border-red-500/30
                       hover:border-red-500/60 hover:shadow-[0_0_20px_rgba(255,0,0,0.3)]
                       transition-all duration-300"
              style={{
                clipPath:
                  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
            >
              <FaLinkedin className="w-6 h-6 text-gray-400 group-hover:text-red-400 transition-colors duration-300" />
            </a>
          </div>

          {/* Bottom HUD decoration */}
          <div className="flex items-center justify-center gap-4 pt-8 text-xs font-mono text-gray-600">
            <span className="flex items-center gap-1">
              <span className="w-1 h-1 bg-red-500" />
              v0.0.0
            </span>
            <span className="text-red-500/30">|</span>
            <span className="flex items-center gap-1">
              <span className="w-1 h-1 bg-green-500" />
              STATUS: OPERATIONAL
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
