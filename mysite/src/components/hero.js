import React from "react";

const Hero = () => {
  return (
    <section className="question-section" id="hero">
      <div className="question-text">Why do I create?</div>

      <div className="answer-content text-center space-y-8">
        <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed max-w-2xl mx-auto">
          I create to transform complexity into clarity. Every line of code is a
          question answered, every interface a conversation started, every
          solution a bridge between problem and possibility.
        </p>

        <div className="pt-8 space-y-4">
          <p className="text-lg text-white/50 font-light">Darshan Tarsariya</p>
          <p className="text-base text-white/40 font-light">
            Software Engineer
          </p>
        </div>

        {/* Minimal Social Links */}
        <div className="flex justify-center gap-6 pt-12">
          <a
            href="https://github.com/Darshan1606"
            target="_blank"
            rel="noreferrer"
            className="text-white/40 hover:text-white/70 transition-colors duration-300 text-sm font-light"
          >
            GitHub
          </a>
          <span className="text-white/20">•</span>
          <a
            href="https://www.linkedin.com/in/darshan-t-b2b5b31ab/"
            target="_blank"
            rel="noreferrer"
            className="text-white/40 hover:text-white/70 transition-colors duration-300 text-sm font-light"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="scroll-indicator">Scroll to contemplate</div>
    </section>
  );
};

export default Hero;
