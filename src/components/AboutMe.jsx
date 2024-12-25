import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


function About() {
  const navigate = useNavigate();

  const educationDetails = [
    {
      "year": "2020",
      "title": "10th Grade",
      "description": "Successfully completed 10th grade with a strong foundation in Commerce."
    },
    {
      "year": "2022",
      "title": "12th Grade",
      "description": "Graduated high school with a focus on Commerce, achieving an A+ grade and ranking in the Top 2 of the school."
    },
    {
      "year": "2024",
      "title": "(BCA)",
      "description": "Earned a BCA degree with expertise in web development, programming, and modern technologies."
    }
  ];

  return (
    <div
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gray-900 overflow-hidden pt-12 pb-12" // Added padding-top and padding-bottom
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
        About Me👋🏻
      </motion.h1>

      {/* Education Circles */}
      <div className="relative z-10 flex flex-col items-center gap-12 sm:flex-row sm:flex-wrap sm:justify-center">
        {educationDetails.map((item, index) => (
          <motion.div
            key={index}
            className="w-56 h-56 flex items-center justify-center bg-white bg-opacity-20 rounded-full shadow-lg border border-white border-opacity-30 cursor-default"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.3, ease: "easeOut" }}
            whileHover={{ scale: 1.1 }}
          >
            <div className="text-center text-white px-4">
              <h2 className="text-xl sm:text-2xl font-semibold mb-2">{item.year}</h2>
              <h3 className="text-lg sm:text-xl font-medium mb-2">{item.title}</h3>
              <p className="text-sm font-light">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default About;
