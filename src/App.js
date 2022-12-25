import React from "react";
import "./index.css";
import Home from "./routes/Home";
import Connect from "./routes/Connect";
import Resume from "./routes/Resume";
import About from "./routes/About";
import { Routes, Route } from "react-router";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Connect" element={<Connect />} />
        <Route path="/About" element={<About />} />
        <Route path="/Resume" element={<Resume />} />
      </Routes>
    </>
  );
}

export default App;
