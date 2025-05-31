import { blogPosts } from "constants/app.constants";
import React from "react";

const Blog = () => {
  return (
    <section id="blog" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          From the Dev Desk
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          Tech-driven thoughts from a software engineer's perspective
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="p-6 border border-gray-500 bg-white rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 rounded-xl object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <span className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2 group-hover:text-purple-700 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                <a
                  href={post.mediumLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center justify-center w-full py-3 px-6 bg-white border-2 border-purple-600 text-purple-700 font-medium rounded-lg overflow-hidden transition-all duration-300 hover:bg-purple-600 hover:text-white group"
                >
                  <span className="relative z-10 flex items-center">
                    <span>Read on Medium</span>
                    <svg
                      className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
