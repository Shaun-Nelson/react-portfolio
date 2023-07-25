import React from "react";

const Resume = () => {
  return (
    <div className='container-content'>
      <h2>Resume</h2>
      <h3>
        Download my{" "}
        <a href='https://docs.google.com/document/d/1F1xv_8_9jt9Uly8zDEVxQrJJE9SYfKNj5yqRtp-UEDA/edit?usp=sharing'>
          resume
        </a>
      </h3>
      <h4>Front End Proficiencies</h4>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
      <h4>Back End Proficiencies</h4>
      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </ul>
    </div>
  );
};

export default Resume;
