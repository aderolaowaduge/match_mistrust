// src/components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Optional: add styles here or use Tailwind/CSS modules

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? 'active-link' : ''}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/match-of-mistrust"
            className={({ isActive }) => isActive ? 'active-link' : ''}
          >
            Match of Mistrust
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
