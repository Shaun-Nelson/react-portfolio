import React from "react";
import avatar from "../assets/avatar1.jpg";

const About = () => {
  return (
    <div className='container-content'>
      <h2>About Me</h2>
      <img src={avatar} alt="Shaun's headshot" height='200px' />
      <article>
        <p>
          Hi, I'm Shaun. I'm an aspiring full stack web developer with a
          background in biochemistry and digital marketing. I'm passionate about
          creating applications that are accessible to everyone. I'm currently
          looking for a position as a full stack web developer.
        </p>
      </article>
    </div>
  );
};

export default About;
