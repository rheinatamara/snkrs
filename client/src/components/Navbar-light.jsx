import React, { Component } from "react";
import Switch from "../img/Switch.png";
import Bag from "../img/Bag.png";
import Account from "../img/Account.png";
import "../scss/navbar.scss";
class Navbar extends Component {
  render() {
    return (
      <div id="navbar">
        <div class="navbar-wrapper">
          <div className="logo">
            <p>snkrs</p>
          </div>
          <div className="mid-navbar">
            <ul>
              <li>
                <p>Women</p>
              </li>
              <li>
                <p>Men</p>
              </li>
              <li>
                <p>Kids</p>
              </li>
              <li>
                <p>Collections</p>
              </li>
            </ul>
          </div>
          <div className="last-navbar">
            <ul>
              <li className="switch">
                <img src={Switch} alt="" />
              </li>
              <li className="bag">
                <img src={Bag} alt="" />
              </li>
              <li className="account">
                <img src={Account} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
