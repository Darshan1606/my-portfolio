import { blogPosts } from "constants/app.constants";
import React from "react";
import { HiCalendar, HiClock, HiExternalLink } from "react-icons/hi";

const Blog = () => {
  return (
    <section id="blog" className="relative py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-red-500/50" />
            <span className="text-red-500/70 font-mono text-sm tracking-widest">
              {"["}
            </span>
            <h2 className="text-3xl md:text-4xl font-mono font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-300 to-red-500">
              From the Dev Desk
            </h2>
            <span className="text-red-500/70 font-mono text-sm tracking-widest">
              {"]"}
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-red-500/50" />
          </div>
          <p className="text-gray-500 font-mono text-sm tracking-wide">
            {"// Tech-driven thoughts from a software engineer's perspective"}
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="group relative overflow-hidden bg-black/70 border border-red-500/30
                       hover:border-red-500/60 hover:shadow-[0_0_30px_rgba(255,0,0,0.2)]
                       transition-all duration-300"
              style={{
                clipPath:
                  "polygon(0 12px, 12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px))",
              }}
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-red-500/40 group-hover:border-red-400/60 transition-colors duration-300 z-20" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-red-500/40 group-hover:border-red-400/60 transition-colors duration-300 z-20" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-red-500/40 group-hover:border-red-400/60 transition-colors duration-300 z-20" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-red-500/40 group-hover:border-red-400/60 transition-colors duration-300 z-20" />

              {/* Image container */}
              <div className="relative h-10 overflow-hidden">
                {/* Article index badge */}
                <div className="absolute top-3 left-3 px-2 py-1 bg-black/80 border border-red-500/40 text-xs font-mono text-red-400">
                  ARTICLE_{String(index + 1).padStart(2, "0")}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Meta info */}
                <div className="flex justify-between items-center text-xs font-mono text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <HiCalendar className="w-3.5 h-3.5 text-red-500/60" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <HiClock className="w-3.5 h-3.5 text-red-500/60" />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-mono font-bold text-red-100 group-hover:text-red-50 transition-colors duration-300 mb-3 line-clamp-2 leading-tight">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-gray-400 font-mono mb-5 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* CTA Button */}
                <a
                  href={post.mediumLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center justify-center w-full py-3 px-4
                           bg-red-500/10 border border-red-500/40
                           text-red-300 font-mono text-sm uppercase tracking-wider
                           hover:bg-red-500/20 hover:border-red-400
                           hover:shadow-[0_0_15px_rgba(255,0,0,0.3)]
                           transition-all duration-300 group/btn"
                  style={{
                    clipPath:
                      "polygon(0 6px, 6px 0, calc(100% - 6px) 0, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0 calc(100% - 6px))",
                  }}
                >
                  <span className="flex items-center gap-2">
                    <span>Read on Medium</span>
                    <HiExternalLink className="w-4 h-4 transform transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </span>
                </a>
              </div>

              {/* Bottom glow line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent group-hover:via-red-500/50 transition-all duration-300" />
            </article>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="flex items-center justify-center mt-12">
          <div className="flex items-center gap-2 text-xs font-mono text-gray-600">
            <span className="w-2 h-2 bg-red-500/50 rotate-45" />
            <span className="w-1 h-1 bg-red-500/30" />
            <span className="text-red-500/50">FEED.LOADED</span>
            <span className="w-1 h-1 bg-red-500/30" />
            <span className="w-2 h-2 bg-red-500/50 rotate-45" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
