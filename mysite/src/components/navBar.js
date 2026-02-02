import React, { useState, useEffect } from "react";
import { navMenu } from "constants/app.constants";
import { HiTerminal } from "react-icons/hi";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-md border-b border-red-500/30 shadow-[0_0_30px_rgba(255,0,0,0.15)]"
            : "bg-transparent"
        }`}
      >
        {/* Top HUD line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />

        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#home"
              className="relative group flex items-center gap-2"
            >
              <div className="relative">
                <span className="text-2xl font-mono font-bold text-white tracking-wider">
                  Darshan
                </span>
                <span className="text-2xl font-mono font-bold text-red-500 animate-pulse">
                  T
                </span>
                {/* Underline glow effect */}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300 shadow-[0_0_10px_rgba(255,0,0,0.5)]" />
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-1">
              {navMenu.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="relative px-4 py-2 text-gray-400 font-mono text-sm uppercase tracking-wider
                           hover:text-red-400 transition-all duration-300 group"
                >
                  {/* Hover bracket decorations */}
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 text-red-500/0 group-hover:text-red-500/70 transition-all duration-300 transform group-hover:translate-x-1">
                    {"["}
                  </span>
                  {item.title}
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 text-red-500/0 group-hover:text-red-500/70 transition-all duration-300 transform group-hover:-translate-x-1">
                    {"]"}
                  </span>
                  {/* Bottom line on hover */}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-red-500 group-hover:w-3/4 transition-all duration-300" />
                </a>
              ))}

              {/* CTA Button */}
              <a
                href="#contactme"
                className="relative ml-4 px-5 py-2 bg-red-500/10 border border-red-500/50
                         text-red-400 font-mono text-sm uppercase tracking-wider
                         hover:bg-red-500/20 hover:border-red-400 hover:text-red-300
                         hover:shadow-[0_0_20px_rgba(255,0,0,0.4)]
                         transition-all duration-300 group"
                style={{
                  clipPath:
                    "polygon(0 6px, 6px 0, calc(100% - 6px) 0, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0 calc(100% - 6px))",
                }}
              >
                <span className="flex items-center gap-2">
                  <HiTerminal className="w-4 h-4 text-red-500 group-hover:animate-pulse" />
                  Contact
                </span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5
                       border border-red-500/30 hover:border-red-500/60
                       hover:shadow-[0_0_15px_rgba(255,0,0,0.3)]
                       transition-all duration-300 bg-black/50"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <span
                className={`w-5 h-0.5 bg-red-500 transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-red-500 transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-red-500 transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Bottom HUD line */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-px transition-all duration-500 ${
            isScrolled
              ? "bg-gradient-to-r from-transparent via-red-500/40 to-transparent"
              : "bg-transparent"
          }`}
        />
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/98 backdrop-blur-xl z-40 md:hidden transition-all duration-500 ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 0, 0, 0.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Corner accents */}
        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-red-500/50" />
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-red-500/50" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-red-500/50" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-red-500/50" />

        {/* Menu Content */}
        <div className="flex flex-col items-center justify-center h-full">
          {/* Terminal header */}
          <div className="absolute top-20 text-center">
            <div className="flex items-center justify-center gap-2 text-red-500/60 font-mono text-xs uppercase tracking-widest">
              <span className="w-2 h-2 bg-red-500 animate-pulse" style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }} />
              <span>Navigation Menu</span>
              <span className="w-2 h-2 bg-red-500 animate-pulse" style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }} />
            </div>
          </div>

          <ul className="space-y-6 text-center">
            {navMenu.map((item, index) => (
              <li
                key={index}
                className={`transform transition-all duration-500 ${
                  isMobileMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <a
                  href={item.link}
                  onClick={closeMobileMenu}
                  className="relative text-xl font-mono text-gray-300 uppercase tracking-widest
                           hover:text-red-400 transition-all duration-300 group inline-block py-2 px-4"
                >
                  <span className="text-red-500/50 mr-2 text-sm">{`0${index + 1}`}</span>
                  {item.title}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-red-500 group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
            <li
              className={`transform transition-all duration-500 pt-6 ${
                isMobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${navMenu.length * 100}ms` }}
            >
              <a
                href="#contactme"
                onClick={closeMobileMenu}
                className="inline-flex items-center gap-2 px-8 py-3 bg-red-500/10 border border-red-500/50
                         text-red-400 font-mono uppercase tracking-wider
                         hover:bg-red-500/20 hover:border-red-400
                         hover:shadow-[0_0_25px_rgba(255,0,0,0.4)]
                         transition-all duration-300"
                style={{
                  clipPath:
                    "polygon(0 8px, 8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px))",
                }}
              >
                <HiTerminal className="w-5 h-5" />
                Get in Touch
              </a>
            </li>
          </ul>

          {/* Status indicators */}
          <div className="absolute bottom-20 flex items-center gap-4 text-xs font-mono text-gray-600">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-red-500 animate-pulse" />
              SYS_READY
            </span>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-500" />
              CONNECTED
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
