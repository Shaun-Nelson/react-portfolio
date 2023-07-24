import React from "react";
import Project from "./Project";
import "../styles.css";
import ufoImg from "../assets/ufo.jpeg";
import barflyImg from "../assets/barfly.jpg";
import djImg from "../assets/dj.jpeg";
import sunriseImg from "../assets/sunrise.png";
import natureImg from "../assets/nature.jpeg";
import jokeImg from "../assets/joke-generator.jpeg";

const Projects = () => {
  return (
    <div className='container-content'>
      <h2>Projects</h2>
      <div className='container-grid'>
        <Project
          link='https://bar-fly-1ce0c9bdfc9c.herokuapp.com/'
          img={barflyImg}
          alt='Orange slice being squeezed into a pint of beer.'
          heading1={"Barfly"}
          heading2={"Fullstack App"}
        />
        <Project
          link='https://shaun-nelson.github.io/UFO-Tracker/'
          img={ufoImg}
          alt='Flying saucer with light coming out of bottom'
          heading1={"FindU (UFO Tracker)"}
          heading2={"JS/Bootstrap/APIs"}
        />
        <Project
          link='https://songanalyzer.onrender.com/'
          img={djImg}
          alt="Bird's-eye view of DJ"
          heading1={"Song Analyzer"}
          heading2={"Fullstack App"}
        />
        <Project
          link='https://shaun-nelson.github.io/SunriseSunset/'
          img={sunriseImg}
          alt='Sun traveling across the sky'
          heading1={"Sunrise/Sunset"}
          heading2={"HTML/CSS/JS/APIs"}
        />
        <Project
          link='https://shaun-nelson.github.io/nature-viewer-react/'
          img={natureImg}
          alt='Waterfall down rocky cliffs'
          heading1={"Nature Viewer"}
          heading2={"React App"}
        />
        <Project
          link='https://shaun-nelson.github.io/Joke-Generator/'
          img={jokeImg}
          alt='Microphone on stand'
          heading1={"Joke Generator"}
          heading2={"HTML/CSS/JS/APIs"}
        />
      </div>
    </div>
  );
};

export default Projects;
