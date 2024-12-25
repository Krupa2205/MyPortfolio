import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import for navigation
import Bg3 from "../assets/Bg3.jpg";
import Bg4 from "../assets/Bg4.jpg";
import Me from "../assets/Me.jpg";
import Connect from "../assets/Connect.jpg";

function Home() {
  const navigate = useNavigate(); // Initialize navigation hook

  return (
    <header className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gray-900 overflow-y-auto">
      {/* Full-Screen Background */}
      <div className="absolute inset-0 h-full w-full">
        <img
          className="absolute inset-0 h-full w-full object-cover opacity-70"
          src={Bg4}
          alt="Background"
        />
        <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-teal-500 via-green-400 to-lime-300 opacity-80"></div>
      </div>

      {/* Header Content */}
      <div className="z-10 text-center text-white px-4 sm:px-8 mt-20 sm:mt-0">
        <motion.h1
          className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
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
          className="w-full sm:w-72 h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          onClick={() => navigate("/about")} // Navigate to the About Me page
        >
          <img src={Me} alt="Card 1" className="h-2/3 w-full object-cover" />
          <div className="p-4 text-center text-white">
            <h2 className="text-lg sm:text-xl font-semibold mb-2">About Me</h2>
            <p className="text-sm font-light">
              Learn more about my journey, skills, and interests.
            </p>
          </div>
        </motion.div>

        {/* Projects Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="w-full sm:w-72 h-96 bg-gradient-to-br from-yellow-400 to-red-500 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          onClick={() => navigate("/projects")} // Navigate to the Projects page
        >
          <img src={Bg3} alt="Card 2" className="h-2/3 w-full object-cover" />
          <div className="p-4 text-center text-white">
            <h2 className="text-lg sm:text-xl font-semibold mb-2">Projects</h2>
            <p className="text-sm font-light">
              Discover the innovative projects I have built.
            </p>
          </div>
        </motion.div>

        {/* Connect Me Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="w-full sm:w-72 h-96 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          onClick={() => navigate("/connect")} // Navigate to the Connect Me page
        >
          <img
            src={Connect}
            alt="Card 3"
            className="h-2/3 w-full object-cover"
          />
          <div className="p-4 text-center text-white">
            <h2 className="text-lg sm:text-xl font-semibold mb-2">
              Connect With Me
            </h2>
            <p className="text-sm font-light">Connect With Me here :)</p>
          </div>
        </motion.div>
      </div>
    </header>
  );
}

export default Home;
