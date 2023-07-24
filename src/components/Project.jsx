import React from "react";

const Project = ({ link, img, alt, heading1, heading2 }) => {
  return (
    <>
      <div className='project'>
        <a href={link}>
          <figure>
            <img src={img} alt={alt}></img>
          </figure>
        </a>
        <div className='project-headings'>
          <a href={link}>
            <h3>{heading1}</h3>
            <h6>{heading2}</h6>
          </a>
        </div>
      </div>
    </>
  );
};

export default Project;
