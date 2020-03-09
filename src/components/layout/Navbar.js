import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1> {title} </h1>
      <ul>
        <Link to="/about">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired
};

export default Navbar;
