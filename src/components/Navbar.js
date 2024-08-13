import React from "react";
import { Link } from "react-router-dom";
import "../Navbar.css"; // Optional: for custom styling

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/logout" className="nav-link">
            Logout
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/secret" className="nav-link">
            Secret Page
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/private" className="nav-link">
            Private Route
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
