import React from "react";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

const iconSize = 56;

const Footer = () => {
  return (
    <div className='container-footer'>
      <a href='https://github.com/Shaun-Nelson'>
        <FaGithub size={iconSize} />
      </a>
      <FaLinkedin size={iconSize} />
      <FaStackOverflow size={iconSize} />
    </div>
  );
};

export default Footer;
