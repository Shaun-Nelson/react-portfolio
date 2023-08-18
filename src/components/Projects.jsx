import React from "react";
import Project from "./Project";
import "../styles.css";
import ufoImg from "../assets/ufo.jpeg";
import barflyImg from "../assets/barfly.jpg";
import djImg from "../assets/dj.jpeg";
import sunriseImg from "../assets/sunrise.png";
import natureImg from "../assets/nature.jpeg";
import jokeImg from "../assets/joke-generator.jpeg";
import aiMusicImg from "../assets/aimusic.png";

const Projects = () => {
  return (
    <div className='container-content'>
      <h2>Projects</h2>
      <div className='container-grid'>
        <Project
          link='https://cadence-music-8f49c24828dd.herokuapp.com/'
          github='https://github.com/Shaun-Nelson/Cadence'
          img={aiMusicImg}
          alt='Robot producing music'
          heading1={"Cadence"}
          heading2={"Fullstack App"}
        />
        <Project
          link='https://bar-fly-1ce0c9bdfc9c.herokuapp.com'
          github='https://github.com/Shaun-Nelson/top-50-best-bars-canada'
          img={barflyImg}
          alt='Orange slice being squeezed into a pint of beer.'
          heading1={"Barfly"}
          heading2={"Fullstack App"}
        />
        <Project
          link='https://shaun-nelson.github.io/UFO-Tracker/'
          github='https://github.com/Shaun-Nelson/UFO-Tracker'
          img={ufoImg}
          alt='Flying saucer with light coming out of bottom'
          heading1={"FindU (UFO Tracker)"}
          heading2={"JS/Bootstrap/APIs"}
        />
        <Project
          link='https://songanalyzer.onrender.com/'
          github='https://github.com/Shaun-Nelson/Song-Analyzer'
          img={djImg}
          alt="Bird's-eye view of DJ"
          heading1={"Song Analyzer"}
          heading2={"Fullstack App"}
        />
        <Project
          link='https://shaun-nelson.github.io/SunriseSunset/'
          github='https://github.com/Shaun-Nelson/SunriseSunset'
          img={sunriseImg}
          alt='Sun traveling across the sky'
          heading1={"Sunrise/Sunset"}
          heading2={"HTML/CSS/JS/APIs"}
        />
        <Project
          link='https://shaun-nelson.github.io/nature-viewer-react/'
          github='https://github.com/Shaun-Nelson/nature-viewer-react'
          img={natureImg}
          alt='Waterfall down rocky cliffs'
          heading1={"Nature Viewer"}
          heading2={"React App"}
        />
      </div>
    </div>
  );
};

export default Projects;
