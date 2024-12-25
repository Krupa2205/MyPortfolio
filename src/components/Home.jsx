import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Bg3 from "../assets/Bg3.jpg";
import Me from "../assets/Me.jpg";
import Connect from "../assets/Connect.jpeg";

function Home() {
  const navigate = useNavigate(); 

  return (
    <header
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gray-900 overflow-y-auto pb-16"  // Increased bottom padding
      style={{ fontFamily: "'Kanit', sans-serif" }} 
    >
      {/* Full-Screen Background */}
      <div className="absolute inset-0 h-full w-full">
       
        <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-teal-500 via-green-400 to-lime-300 opacity-80"></div>
      </div>

      {/* Header Content */}
      <div className="z-10 text-center text-white px-4 sm:px-8 mt-20 sm:mt-0">
        <motion.h1
          className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{ fontFamily: "'Oswald', sans-serif" }} 
        >
          Welcome to <span className="text-white">My Portfolio</span>
        </motion.h1>
        <motion.p
          className="text-sm sm:text-lg lg:text-xl font-medium mb-6 sm:mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
        >
          <p className="text-white mt-2 font-bold animate-bounce">
            "Explore my journey, projects, and achievements✨👩🏻‍💻"
          </p>
        </motion.p>
      </div>

      {/* Cards Section */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-4 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-8">
        {/* About Me Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="w-full sm:w-72 h-96 bg-gradient-to-br from-blue-200 to-pink-500 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          onClick={() => navigate("/about")} 
        >
          <img src={Me} alt="Card 1" className="h-2/3 w-full object-cover" />
          <div className="p-4 text-center text-white">
            <h2
              className="text-lg sm:text-xl font-semibold mb-2"
              style={{ fontFamily: "'Oswald', sans-serif" }} 
            >
              About Me
            </h2>
            <p className="text-sm font-light">
              Learn more about my journey, skills, and interests.
            </p>
          </div>
        </motion.div>

        {/* Projects Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="w-full sm:w-72 h-96 bg-gradient-to-br from-yellow-200 to-red-500 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          onClick={() => navigate("/projects")} 
        >
          <img src={Bg3} alt="Card 2" className="h-2/3 w-full object-cover" />
          <div className="p-4 text-center text-white">
            <h2
              className="text-lg sm:text-xl font-semibold mb-2"
              style={{ fontFamily: "'Oswald', sans-serif" }} 
            >
              Projects
            </h2>
            <p className="text-sm font-light">
              Discover the innovative projects I have built.
            </p>
          </div>
        </motion.div>

        {/* Connect Me Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="w-full sm:w-72 h-96 bg-gradient-to-br from-green-200 to-blue-500 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          onClick={() => navigate("/connect")} 
        >
          <img
            src={Connect}
            alt="Card 3"
            className="h-2/3 w-full object-cover"
          />
          <div className="p-4 text-center text-white">
            <h2
              className="text-lg sm:text-xl font-semibold mb-2"
              style={{ fontFamily: "'Oswald', sans-serif" }} 
            >
              Connect With Me
            </h2>
            <p className="text-sm font-light">Connect With Me here :)</p>
          </div>
        </motion.div>
      </div>

      {/* Footer Section */}
<div className="w-full flex justify-center py-4 bg-opacity-80 bg-gray-900">
  <p className="text-sm md:text-base">
    
    <span className="animate-pulse">
      ❤️🔥🤗✨
    </span>
  </p>
</div>

    </header>
  );
}

export default Home;
