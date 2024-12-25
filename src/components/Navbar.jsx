import React, { useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    closeMenu();
  };

  return (
    <header className="relative h-[100vh] w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Add Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Kanit:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/Bganimation.mp4"
        autoPlay
        loop
        muted
      ></video>

      {/* Full-Width Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-4 bg-indigo-600 bg-opacity-50 backdrop-blur-sm z-20">
        <div className="text-Black text-3xl font-bold cursor-pointer hover:text-blue-500">
          Krupa's Portfolio
        </div>

        <div className="flex items-center space-x-4">
          {/* Navbar Links for large screens */}
          <div className="hidden md:flex space-x-8">
            <motion.button
              className="text-black hover:text-blue-500 font-bold"
              onClick={() => scrollToSection("home")}
            >
              Home
            </motion.button>
            <motion.button
              className="text-black hover:text-purple-500 font-bold"
              onClick={() => scrollToSection("about")}
            >
              About Me
            </motion.button>
            <motion.button
              className="text-black hover:text-yellow-300 font-bold"
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </motion.button>
            <motion.button
              className="text-black hover:text-red-400 font-bold"
              onClick={() => scrollToSection("achievements")}
            >
              Connect
            </motion.button>
          </div>

          {/* Menu Toggle Button */}
          <button
            onClick={toggleMenu}
            className="text-white text-3xl focus:outline-none md:hidden"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Slide-in Menu */}
      {isMenuOpen && (
        <motion.div
          className="absolute top-[4rem] right-0 h-[70vh] w-64 bg-black bg-opacity-70 z-30 shadow-lg text-white"
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-start py-4 px-6 space-y-6 overflow-y-auto">
            <motion.button
              className="block text-lg hover:text-blue-500 transition-colors"
              onClick={() => scrollToSection("home")}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              Home
            </motion.button>
            <motion.button
              className="block text-lg hover:text-purple-500 transition-colors"
              onClick={() => scrollToSection("about")}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              About Me
            </motion.button>

            <motion.button
              className="block text-lg hover:text-yellow-300 transition-colors"
              onClick={() => scrollToSection("projects")}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              Projects
            </motion.button>
            <motion.button
              className="block text-lg hover:text-red-400 transition-colors"
              onClick={() => scrollToSection("achievements")}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              Connect
            </motion.button>
          </div>
        </motion.div>
      )}
    </header>
  );
}

export default Navbar;
