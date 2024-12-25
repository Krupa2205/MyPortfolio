import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Connect from "../assets/Connect.jpeg";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com";

function ConnectMe() {
  const navigate = useNavigate();

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedbackSent, setFeedbackSent] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS logic to send the feedback to your email
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,  // Service ID from .env
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,  // Template ID from .env
        e.target,
        import.meta.env.VITE_EMAILJS_USER_ID      // User ID from .env
      )
      .then(
        (result) => {
          setFeedbackSent(true);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gray-900 overflow-hidden pt-12 pb-12"
      style={{ fontFamily: "'Kanit', sans-serif" }}
    >
      {/* Background */}
      <div className="absolute inset-0 h-full w-full">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-teal-500 via-green-400 to-lime-300 opacity-80"></div>
      </div>

      {/* Back Arrow */}
      <div
        className="absolute top-8 left-8 w-12 h-12 bg-gray-800 bg-opacity-50 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-75 transition duration-300"
        onClick={() => navigate("/")}
      >
        <motion.span
          className="text-white text-2xl"
          initial={{ x: -10 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          ←
        </motion.span>
      </div>

      {/* Header */}
      <motion.h1
        className="relative z-10 text-4xl sm:text-5xl font-bold text-white mb-16"
        style={{ fontFamily: "'Oswald', sans-serif" }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        Connect with Me👋🏻
      </motion.h1>

      {/* Feedback Form Section */}
      <div className="relative z-10 flex flex-col items-center gap-12 sm:flex-row sm:flex-wrap sm:justify-center">
        <div className="flex flex-col items-center space-y-6 sm:flex-row sm:space-x-12">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="w-full max-w-md p-6 bg-white bg-opacity-20 rounded-lg shadow-lg border border-white border-opacity-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
              Feedback Form
            </h2>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full p-3 mb-4 bg-gray-800 text-white rounded-md"
              required
            />
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="w-full p-3 mb-4 bg-gray-800 text-white rounded-md"
              required
            />
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Feedback"
              className="w-full p-3 mb-4 bg-gray-800 text-white rounded-md"
              rows="4"
              required
            />
            <button
              type="submit"
              className="w-full py-3 bg-teal-500 text-white rounded-md hover:bg-teal-400 transition duration-300"
            >
              Submit
            </button>
          </motion.form>

          {/* GIF or Image */}
          <motion.div
            className="hidden sm:block w-56 h-56 bg-gray-800 rounded-full shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={Connect}
              alt="Your Choice"
              className="object-cover w-full h-full rounded-full"
            />
          </motion.div>
        </div>

        {/* Success Popup Message */}
        {feedbackSent && (
          <motion.div
            className="absolute z-50 top-1/3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-4 rounded-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Thanks for your valuable feedback!
          </motion.div>
        )}
      </div>

      {/* Footer with Icons */}
      <div className="absolute bottom-4 flex justify-center space-x-8 text-white w-full">
        <div className="flex space-x-8">
          <a
            href="https://github.com/Krupa2205"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/kaklotar-k/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="mailto:kdemo2205@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope size={30} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ConnectMe;
