import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignInLinks";
import SignedOutLinks from "./SignoutLinks";
const Navbar = () => {
  return (
    <nav className="nav-wrapper #1976d2 blue darken-2">
      <div className="container">
        <Link to="/" class="flow-text">
          Mario Plan
        </Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  );
};

export default Navbar;
