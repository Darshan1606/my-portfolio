import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast, Toaster } from "react-hot-toast";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_USER_ID,
} from "constants/env.constants";
import { HiPaperAirplane } from "react-icons/hi";

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
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          e.target,
          EMAILJS_USER_ID
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
    <section id="contactme" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-red-500/50" />
            <span className="text-red-500/70 font-mono text-sm tracking-widest">{"["}</span>
            <h2 className="text-3xl md:text-4xl font-mono font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-300 to-red-500">
              Get in Touch
            </h2>
            <span className="text-red-500/70 font-mono text-sm tracking-widest">{"]"}</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-red-500/50" />
          </div>
          <p className="text-gray-500 font-mono text-sm tracking-wide">
            {"// Have a question or want to work together? Let's connect!"}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Terminal-style form container */}
          <div
            className="relative bg-black/80 border border-red-500/40
                     shadow-[0_0_40px_rgba(255,0,0,0.15)]"
            style={{
              clipPath:
                "polygon(0 15px, 15px 0, calc(100% - 15px) 0, 100% 15px, 100% calc(100% - 15px), calc(100% - 15px) 100%, 15px 100%, 0 calc(100% - 15px))",
            }}
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-red-500/60" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-red-500/60" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-red-500/60" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-red-500/60" />

            {/* Circuit pattern overlay */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10 L10 50 L50 50' stroke='%23FF0000' stroke-width='1' fill='none'/%3E%3Cpath d='M90 10 L90 30 L70 30 L70 50' stroke='%23FF0000' stroke-width='1' fill='none'/%3E%3Ccircle cx='50' cy='50' r='3' fill='%23FF0000'/%3E%3C/svg%3E\")",
                backgroundSize: "100px 100px",
              }}
            />

            {/* Header bar */}
            <div className="relative px-6 py-4 border-b border-red-500/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div
                    className="w-3 h-3 bg-red-500/80 shadow-[0_0_8px_rgba(255,0,0,0.5)]"
                    style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
                  />
                  <div
                    className="w-3 h-3 bg-red-400/60"
                    style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
                  />
                  <div
                    className="w-3 h-3 bg-red-300/40"
                    style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
                  />
                </div>
                <span className="text-red-400/70 text-sm font-mono tracking-wider uppercase">
                  {"// message_transmission"}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-red-500 animate-pulse" />
                <span className="text-xs font-mono text-gray-600">READY</span>
              </div>
            </div>

            {/* Form content */}
            <div className="relative p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div className="relative">
                  <label
                    htmlFor="fname"
                    className="block text-sm font-mono text-red-400/80 mb-2 uppercase tracking-wider"
                  >
                    {">"} Full Name
                  </label>
                  <div className="relative">
                    <input
                      id="fname"
                      name="fname"
                      type="text"
                      value={formData.fname}
                      onChange={handleChange}
                      placeholder="Enter your name..."
                      required
                      className="w-full bg-black/60 border border-red-500/30
                               px-4 py-3 text-gray-100 font-mono
                               placeholder-gray-600
                               focus:outline-none focus:border-red-500/60
                               focus:shadow-[0_0_15px_rgba(255,0,0,0.2)]
                               transition-all duration-300"
                      style={{
                        clipPath:
                          "polygon(0 6px, 6px 0, calc(100% - 6px) 0, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0 calc(100% - 6px))",
                      }}
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-4 bg-red-500/30" />
                  </div>
                </div>

                {/* Email Input */}
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="block text-sm font-mono text-red-400/80 mb-2 uppercase tracking-wider"
                  >
                    {">"} Email Address
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email..."
                      required
                      className="w-full bg-black/60 border border-red-500/30
                               px-4 py-3 text-gray-100 font-mono
                               placeholder-gray-600
                               focus:outline-none focus:border-red-500/60
                               focus:shadow-[0_0_15px_rgba(255,0,0,0.2)]
                               transition-all duration-300"
                      style={{
                        clipPath:
                          "polygon(0 6px, 6px 0, calc(100% - 6px) 0, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0 calc(100% - 6px))",
                      }}
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-4 bg-red-500/30" />
                  </div>
                </div>

                {/* Message Input */}
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="block text-sm font-mono text-red-400/80 mb-2 uppercase tracking-wider"
                  >
                    {">"} Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message..."
                    rows="5"
                    required
                    className="w-full bg-black/60 border border-red-500/30
                             px-4 py-3 text-gray-100 font-mono
                             placeholder-gray-600
                             focus:outline-none focus:border-red-500/60
                             focus:shadow-[0_0_15px_rgba(255,0,0,0.2)]
                             transition-all duration-300 resize-none"
                    style={{
                      clipPath:
                        "polygon(0 6px, 6px 0, calc(100% - 6px) 0, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0 calc(100% - 6px))",
                    }}
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-4 px-6 bg-red-500/20 border-2 border-red-500/60
                             text-red-100 font-mono uppercase tracking-wider
                             hover:bg-red-500/30 hover:border-red-400
                             hover:shadow-[0_0_25px_rgba(255,0,0,0.4)]
                             disabled:opacity-50 disabled:cursor-not-allowed
                             transition-all duration-300 flex items-center justify-center gap-3"
                    style={{
                      clipPath:
                        "polygon(0 8px, 8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px))",
                    }}
                  >
                    {isLoading ? (
                      <>
                        <div
                          className="w-5 h-5 border-2 border-red-400/30 border-t-red-400"
                          style={{
                            animation: "spin 1s linear infinite",
                            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                          }}
                        />
                        <span>Transmitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Transmission</span>
                        <HiPaperAirplane className="w-5 h-5 transform rotate-45" />
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Status bar */}
              <div className="mt-6 pt-4 border-t border-red-500/20 flex items-center justify-between text-xs font-mono text-gray-600">
                <span className="flex items-center gap-1">
                  <span className="w-1 h-1 bg-green-500" />
                  ENCRYPTION: ACTIVE
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-1 h-1 bg-red-500 animate-pulse" />
                  CHANNEL: SECURE
                </span>
              </div>
            </div>

            {/* Bottom glow line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="flex items-center justify-center mt-12">
          <div className="flex items-center gap-2 text-xs font-mono text-gray-600">
            <span className="w-2 h-2 bg-red-500/50 rotate-45" />
            <span className="w-1 h-1 bg-red-500/30" />
            <span className="text-red-500/50">COMMS.READY</span>
            <span className="w-1 h-1 bg-red-500/30" />
            <span className="w-2 h-2 bg-red-500/50 rotate-45" />
          </div>
        </div>
      </div>

      {/* Toast Notifications - Tron themed */}
      <Toaster
        position="top-right"
        toastOptions={{
          className: "font-mono",
          style: {
            background: "#0A0A0A",
            color: "#fff",
            border: "1px solid rgba(255, 0, 0, 0.4)",
            borderRadius: "0",
            padding: "12px 16px",
          },
          success: {
            iconTheme: {
              primary: "#FF0000",
              secondary: "#000",
            },
            style: {
              borderColor: "rgba(0, 255, 0, 0.4)",
            },
          },
          error: {
            iconTheme: {
              primary: "#FF0000",
              secondary: "#fff",
            },
          },
        }}
      />

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default Contact;
