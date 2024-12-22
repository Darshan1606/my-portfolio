const Hero = () => {
  return (
    <section id="home" className="relative py-16 md:py-24">
      {/* Centered Hero Content */}
      <div
        className="text-center text-white mt-6 md:mt-0 animate-fadeInRight"
        data-aos="fade-left"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-snug mb-4 tracking-wide">
          Hi, I'm Darshan<span className="text-violet-400"></span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-light uppercase text-blue-300 tracking-wider mb-4">
          Software Engineer
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
          Transforming ideas into{" "}
          <span className="text-white">scalable solutions</span> with a pinch of
          creativity and a dash of code.
        </p>

        {/* Connect Button */}
        <a
          href="#contactme"
          className="inline-block bg-violet-500 text-white px-6 py-3 rounded-lg font-semibold text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:bg-violet-600"
        >
          Let's Connect
        </a>
      </div>
    </section>
  );
};

export default Hero;
