import { blogPosts } from "constants/app.constants";
import React from "react";

const Blog = () => {
  return (
    <section id="blog" className="question-section">
      <div className="question-text">What am I exploring now?</div>

      <div className="answer-content">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group border border-white/5 hover:border-white/10 transition-all duration-500 p-6"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs text-white/30 font-light">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-light text-white/90 leading-relaxed">
                    {post.title}
                  </h3>

                  <p className="text-sm text-white/50 font-light leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <a
                    href={post.mediumLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm text-white/40 hover:text-white/70 transition-colors font-light border-b border-white/10 hover:border-white/30"
                  >
                    Read more →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
