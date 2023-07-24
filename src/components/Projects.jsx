import React from "react";
import "../styles.css";

const Projects = () => {
  return (
    <>
      <div className='container-content'>
        <h1>Projects</h1>
        <div className='container-grid'>
          <div class='project'>
            <a href='https://shaun-nelson.github.io/UFO-Tracker/'>
              <figure>
                <img
                  src={require("../assets/ufo.jpeg")}
                  alt='Flying saucer with light coming out of bottom'
                ></img>
              </figure>
            </a>
            <div class='project-headings'>
              <a href='https://shaun-nelson.github.io/UFO-Tracker/'>
                <h3>FindU (UFO Tracker)</h3>
                <h6>JS/Bootstrap/APIs</h6>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
