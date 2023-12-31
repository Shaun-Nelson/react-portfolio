import React from "react";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";
// Icons from react-icons and Font Awesome.

const iconSize = 56;

const Footer = () => {
  return (
    <div className='container-footer'>
      <a href='https://github.com/Shaun-Nelson'>
        <FaGithub size={iconSize} />
      </a>
      <a href='https://linkedin.com/in/shaun-nelson-873640285'>
        <FaLinkedin size={iconSize} />
      </a>
      <a href='https://stackoverflow.com/users/22284610/chum'>
        <FaStackOverflow size={iconSize} />
      </a>
    </div>
  );
};

export default Footer;
