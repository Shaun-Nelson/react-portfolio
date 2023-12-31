import React from "react";
import { NavLink } from "react-router-dom";
// NavLink is used to highlight the current page in the navigation bar.

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/react-portfolio/'>About Me</NavLink>
        </li>
        <li>
          <NavLink to='/react-portfolio/projects'>Projects</NavLink>
        </li>
        <li>
          <NavLink to='/react-portfolio/contact'>Contact</NavLink>
        </li>
        <li>
          <NavLink to='/react-portfolio/resume'>Resume</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
