import { useState } from "react";
import React from "react";
import NavBar from "./NavBar";
import logo from "../assets/vdd logo.png";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 mx-auto bg-white w-full flex flex-wrap justify-between items-center px-6 lg:px-24 p-3 lg:p-5 bg-transparent relative">
      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={-1000}
        duration={30}
      >
        VDD
      </Link>
      <NavBar />
    </header>
  );
};

export default Header;
