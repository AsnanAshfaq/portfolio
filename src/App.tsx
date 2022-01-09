import React from "react";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;
