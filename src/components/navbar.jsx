import React, { Component } from "react";

//sfc
// stateless functional component
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge bdge-pill badge-secondary">{totalCounters}</span>
      </a>
    </nav>
  );
};

export default NavBar;
