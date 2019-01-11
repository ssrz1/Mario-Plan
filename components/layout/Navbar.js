import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-wrapper #1976d2 blue darken-2">
      <div className="container">
        <Link to="/" class="flow-text">
          Mario Plan
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
