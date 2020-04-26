import React from "react";
import logo from "../assets/logo-2.png";

class Header extends React.Component {
  render() {
    return (
      <div>
        <div id="header">
          <div id="logo-container">
            <img src={logo} alt="logo" id="logo-img"></img>
            <div id="menu">
              <i class="fas fa-bars fa-2x"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
