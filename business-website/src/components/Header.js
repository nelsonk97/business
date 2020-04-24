import React from "react";
import logo from "./logo.jpg";

function Header() {
  return (
    <div id="header">
      <div id="logo-container">
        <img src={logo} alt="logo" id="logo"></img>
      </div>
    </div>
  );
}

export default Header;
