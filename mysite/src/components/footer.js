import React from "react";

const Footer = () => {
  return (
    <footer className="relative py-12 px-4 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="space-y-2">
            <p className="text-sm text-white/50 font-light">
              Darshan Tarsariya
            </p>
            <a
              href="mailto:darshantarsariya17@gmail.com"
              rel="noreferrer"
              className="text-sm text-white/40 hover:text-white/70 transition-colors font-light"
            >
              darshantarsariya17@gmail.com
            </a>
          </div>

          <div className="flex gap-6 text-sm text-white/40 font-light">
            <a
              href="https://www.linkedin.com/in/darshan-t-b2b5b31ab/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white/70 transition-colors"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a
              href="https://github.com/Darshan1606"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white/70 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5">
          <p className="text-center text-xs text-white/30 font-light">
            © {new Date().getFullYear()} Darshan Tarsariya
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
