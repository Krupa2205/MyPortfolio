import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    name: "API Tool",
    link: "https://krupa2205.github.io/API_Tool/",
  },
  {
    name: "Whatsapp Clone",
    link: "https://wa-clone-522b8.web.app/",
  },
  {
    name: "Syntax Squad",
    link: "https://syntaxsquad52.netlify.app/",
  },
];

function Projects() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gray-900 overflow-hidden pb-12">
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
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        style={{ fontFamily: "Kanit, sans-serif" }}
      >
        My Projects👩🏻‍💻
      </motion.h1>

      {/* Project Cards */}
      <div className="relative z-10 flex flex-col items-center gap-12 sm:flex-row sm:flex-wrap sm:justify-center">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative w-80 h-60 rounded-lg shadow-lg flex flex-col items-center justify-center overflow-hidden cursor-default"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.3, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-green-400 to-green-700 animate-gradient-x opacity-80"></div>

            {/* Laptop Screen */}
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-4">
              {/* Project Name */}
              <h2
                className="text-lg sm:text-xl font-semibold text-white mb-4"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                {project.name}
              </h2>

              {/* Live Link */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 text-sm sm:text-base underline mt-2"
                style={{ fontFamily: "Kanit, sans-serif" }}
              >
                View Live Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
