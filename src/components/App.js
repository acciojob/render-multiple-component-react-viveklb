import React from "react";
import "../styles/App.css";

const projects = [
  {
    name: "AI-Based Healthcare Assistant",
    description: "A web application that helps users monitor their health."
  },
  {
    name: "Smart Farming System",
    description: "An IoT-based system for crop monitoring."
  },
  {
    name: "Online Learning Platform",
    description: "A platform for interactive learning."
  }
];

const App = () => {
  return (
    <div id="main">
      {projects.map((project, index) => (
        <div key={index}>
          <h1 data-ns-test="project-name">{project.name}</h1>
          <h6 data-ns-test="project-description">
            {project.description}
          </h6>
        </div>
      ))}
    </div>
  );
};

export default App;