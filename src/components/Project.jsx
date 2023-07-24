import React from "react";

const Project = ({ link, img, alt, heading1, heading2 }) => {
  return (
    <>
      <div className='container-grid'>
        <div class='project'>
          <a href={link}>
            <figure>
              <img src={img} alt={alt}></img>
            </figure>
          </a>
          <div class='project-headings'>
            <a href={link}>
              <h3>{heading1}</h3>
              <h6>{heading2}</h6>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
