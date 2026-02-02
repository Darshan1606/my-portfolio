import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiMail, HiUser, HiLink } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="relative mt-20 overflow-hidden">
      {/* Grid overlay background */}
      <div className="absolute inset-0 bg-gradient-to-t from-red-900/10 to-transparent">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255, 0, 0, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 0, 0, 0.03) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Top border with glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 py-12">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Section */}
          <div
            className="relative p-5 bg-black/40 border border-red-500/20
                     hover:border-red-500/40 transition-all duration-300 group"
            style={{
              clipPath:
                "polygon(0 8px, 8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px))",
            }}
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-red-500/40" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-red-500/40" />

            <div className="flex items-center gap-2 mb-4">
              <HiMail className="w-4 h-4 text-red-500" />
              <h3 className="font-mono text-sm uppercase tracking-wider text-red-400">
                Contact
              </h3>
            </div>
            <a
              href="mailto:darshantarsariya17@gmail.com"
              rel="noreferrer"
              className="flex items-center text-gray-400 hover:text-red-400
                       font-mono text-sm transition-colors duration-300"
            >
              <span className="text-red-500/50 mr-2">{">"}</span>
              darshantarsariya17@gmail.com
            </a>
          </div>

          {/* Developer Section */}
          <div
            className="relative p-5 bg-black/40 border border-red-500/20
                     hover:border-red-500/40 transition-all duration-300 group"
            style={{
              clipPath:
                "polygon(0 8px, 8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px))",
            }}
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-red-500/40" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-red-500/40" />

            <div className="flex items-center gap-2 mb-4">
              <HiUser className="w-4 h-4 text-red-500" />
              <h3 className="font-mono text-sm uppercase tracking-wider text-red-400">
                Developer
              </h3>
            </div>
            <p className="text-gray-400 font-mono text-sm">
              <span className="text-red-500/50 mr-2">{">"}</span>
              Darshan
            </p>
          </div>

          {/* Connect Section */}
          <div
            className="relative p-5 bg-black/40 border border-red-500/20
                     hover:border-red-500/40 transition-all duration-300 group"
            style={{
              clipPath:
                "polygon(0 8px, 8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px))",
            }}
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-red-500/40" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-red-500/40" />

            <div className="flex items-center gap-2 mb-4">
              <HiLink className="w-4 h-4 text-red-500" />
              <h3 className="font-mono text-sm uppercase tracking-wider text-red-400">
                Connect
              </h3>
            </div>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/darshan-t-b2b5b31ab/"
                target="_blank"
                rel="noreferrer"
                className="group/link flex items-center text-gray-400 hover:text-red-400
                         font-mono text-sm transition-all duration-300"
              >
                <FaLinkedin className="w-4 h-4 text-red-500/60 group-hover/link:text-red-400 mr-1" />
                LinkedIn
              </a>
              <a
                href="https://github.com/Darshan1606"
                target="_blank"
                rel="noreferrer"
                className="group/link flex items-center text-gray-400 hover:text-red-400
                         font-mono text-sm transition-all duration-300"
              >
                <FaGithub className="w-4 h-4 text-red-500/60 group-hover/link:text-red-400 mr-1" />
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-red-500/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-gray-500 font-mono">
              <span className="text-red-500/50">{"// "}</span>
              {new Date().getFullYear()} Darshan. All rights reserved.
            </p>

            {/* System status */}
            <div className="flex items-center gap-4 text-xs font-mono text-gray-600">
              <span className="flex items-center gap-1">
                <span
                  className="w-1.5 h-1.5 bg-green-500 shadow-[0_0_5px_rgba(0,255,0,0.5)]"
                  style={{
                    clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                  }}
                />
                SYSTEM_ONLINE
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
    </footer>
  );
};

export default Footer;
