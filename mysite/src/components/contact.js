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
    <section id="contactme" className="question-section">
      <div className="question-text">
        Want to connect?
      </div>

      <div className="answer-content">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Minimal Container */}
            <div className="relative p-8 border border-white/5">
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
                    className="peer w-full bg-transparent border-b border-white/10 px-2 pt-4 pb-2 text-white focus:border-white/30 focus:outline-none transition-colors duration-300 font-light"
                  />
                  <label
                    htmlFor="fname"
                    className="absolute left-2 top-2 text-white/40 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:text-sm peer-focus:top-0 peer-focus:text-white/60 font-light"
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
                    className="peer w-full bg-transparent border-b border-white/10 px-2 pt-4 pb-2 text-white focus:border-white/30 focus:outline-none transition-colors duration-300 font-light"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-2 top-2 text-white/40 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:text-sm peer-focus:top-0 peer-focus:text-white/60 font-light"
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
                    className="peer w-full bg-transparent border-b border-white/10 px-2 pt-4 pb-2 text-white focus:border-white/30 focus:outline-none transition-colors duration-300 resize-none font-light"
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute left-2 top-2 text-white/40 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:text-sm peer-focus:top-0 peer-focus:text-white/60 font-light"
                  >
                    Your Message
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-12 relative bg-transparent border border-white/10 text-white hover:border-white/30 transition-all duration-300 flex items-center justify-center gap-2 font-light text-sm"
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
