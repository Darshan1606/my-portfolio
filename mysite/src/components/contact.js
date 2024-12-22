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

  const handleSubmit = (e) => {
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
    <div className="h-auto p-4 md:p-16 " id="contactme">
      <div className="text-center text-white mb-8">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
          Contact Me
        </h2>
        <p className="text-lg text-gray-600">
          Feel free to reach out, and I'll get back to you as soon as possible.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white p-8 rounded-xl border border-gray-500"
        >
          <div className="mb-6">
            <div className="flex gap-4">
              <div className="w-full">
                <label
                  className="block text-lg font-medium mb-2"
                  htmlFor="fname"
                >
                  Full Name
                </label>
                <input
                  className="w-full px-4 py-2 border border-gray-500 rounded-lg focus:border-white  focus:outline-none focus:ring-1 focus:ring-violet-500"
                  id="fname"
                  name="fname"
                  type="text"
                  placeholder="Your Full Name"
                  value={formData.fname}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-lg font-medium mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-500 rounded-lg focus:border-white focus:outline-none focus:ring-1 focus:ring-violet-500"
              id="email"
              name="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-lg font-medium mb-2" htmlFor="message">
              Write Message
            </label>
            <textarea
              className="w-full px-4 py-2 border border-gray-500 rounded-lg focus:border-white focus:outline-none focus:ring-1 focus:ring-violet-500"
              id="message"
              name="message"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className={`inline-block bg-violet-500 text-white px-6 py-3 rounded-lg font-semibold text-lg transform ${
                isLoading ? "opacity-70" : "hover:scale-105"
              } transition-all duration-300 shadow-lg ${
                isLoading ? "cursor-not-allowed" : "hover:bg-violet-600"
              }`}
              disabled={isLoading} // Disable button while loading
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
      {/* Toast container */}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Contact;
