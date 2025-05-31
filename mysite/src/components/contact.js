import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import the EmailJS SDK
import { toast, Toaster } from "react-hot-toast";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_USER_ID,
} from "constants/env.constants";

const Contact = () => {
  const [formData, setFormData] = useState({
    fname: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      emailjs
        .sendForm(
          EMAILJS_SERVICE_ID, // EmailJS service ID
          EMAILJS_TEMPLATE_ID, // EmailJS template ID
          e.target,
          EMAILJS_USER_ID // EmailJS user ID
        )
        .then(
          (result) => {
            toast.success("Your message has been sent successfully!");
            setFormData({ fname: "", email: "", message: "" });
          },
          (error) => {
            toast.error("Failed to send message. Please try again");
          }
        );
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contactme" className="relative py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-400">
            Have a question or want to work together? Let's connect!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Main Container with Permanent Glass Effect */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-2xl"></div>

            {/* Subtle Gradient Background */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <div className="absolute w-full h-full bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5"></div>
            </div>

            {/* Content Container */}
            <div className="relative p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div className="relative">
                  <input
                    id="fname"
                    name="fname"
                    type="text"
                    value={formData.fname}
                    onChange={handleChange}
                    placeholder=" "
                    required
                    className="peer w-full bg-white/5 border-2 border-white/10 rounded-xl px-4 pt-6 pb-2 text-white focus:border-purple-500/50 focus:outline-none transition-colors duration-300"
                  />
                  <label
                    htmlFor="fname"
                    className="absolute left-4 top-4 text-white/60 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:text-sm peer-focus:top-2 peer-focus:text-purple-400"
                  >
                    Full Name
                  </label>
                </div>

                {/* Email Input */}
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=" "
                    required
                    className="peer w-full bg-white/5 border-2 border-white/10 rounded-xl px-4 pt-6 pb-2 text-white focus:border-purple-500/50 focus:outline-none transition-colors duration-300"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 top-4 text-white/60 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:text-sm peer-focus:top-2 peer-focus:text-purple-400"
                  >
                    Email Address
                  </label>
                </div>

                {/* Message Input */}
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder=" "
                    rows="4"
                    required
                    className="peer w-full bg-white/5 border-2 border-white/10 rounded-xl px-4 pt-6 pb-2 text-white focus:border-purple-500/50 focus:outline-none transition-colors duration-300 resize-none"
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute left-4 top-4 text-white/60 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:text-sm peer-focus:top-2 peer-focus:text-purple-400"
                  >
                    Your Message
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-12 relative bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 text-white hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white/80 rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          className: "bg-[#1a1a1a] text-white border border-white/10",
          style: {
            background: "#1a1a1a",
            color: "#fff",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          },
          success: {
            iconTheme: {
              primary: "#a855f7",
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
          },
        }}
      />

      {/* Add these styles to your CSS */}
      <style jsx>{`
        @keyframes shine {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
        .animate-shine {
          animation: shine 8s linear infinite;
        }
        @keyframes border-shine {
          0% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.5;
          }
        }
        .animate-border-shine {
          animation: border-shine 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Contact;
