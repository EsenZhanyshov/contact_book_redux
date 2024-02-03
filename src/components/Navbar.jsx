import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="header__nav nav">
      <NavLink to={"/contacts"}>Contacts</NavLink>
      <NavLink className="add-link" to={"/add"}>
        Add Contact
      </NavLink>
    </nav>
  );
};

export default Navbar;
