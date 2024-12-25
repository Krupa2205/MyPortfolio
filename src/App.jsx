import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe"; 
import Projects from "./components/Projects";
import ConnectMe from "./components/ConnectMe";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/connect" element={<ConnectMe />} />
      </Routes>
    </Router>
  );
}

export default App;
