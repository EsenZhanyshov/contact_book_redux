import React from "react";
import Navbar from "./Navbar";
import logo from "./images/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper wrapper">
        <Link to={"/"} className="header__logo logo">
          <img src={logo} alt="#" />
          <p>contact book</p>
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
