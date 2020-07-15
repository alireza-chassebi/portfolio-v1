import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/education">Education</NavLink>
      <NavLink to="/projects">Projects</NavLink>
    </div>
  );
};
