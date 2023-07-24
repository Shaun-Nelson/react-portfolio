import React from "react";
import Project from "./Project";
import "../styles.css";
import ufoImg from "../assets/ufo.jpeg";

const Projects = () => {
  return (
    <div className='container-content'>
      <h2>Projects</h2>
      <Project
        link='https://shaun-nelson.github.io/UFO-Tracker/'
        img={ufoImg}
        alt='Flying saucer with light coming out of bottom'
        heading1={"FindU (UFO Tracker)"}
        heading2={"JS/Bootstrap/APIs"}
      />
    </div>
  );
};

export default Projects;
