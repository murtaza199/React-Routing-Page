import "./App.css";
import React from "react";
import Home from "./Home";
import About from "./About";
import Nav from "./Nav"
import Errorpage from "./Errorpage"
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </div>
  );
}

export default App;
