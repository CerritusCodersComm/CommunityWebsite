import React, { useState, useEffect, Component } from "react";
import "./Navbar.css";
import assets from "../assets/logo_5.png";
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom";
import PropTypes from "prop-types";

export default class Navbar extends Component {
  static propTypes = {
    about: PropTypes.string,
    events: PropTypes.string,
    team: PropTypes.string,
    join: PropTypes.string,
  };

  render() {
    return (
      <>
        <html>
          <script src="https://kit.fontawesome.com/b7d39afe84.js" crossorigin="anonymous"></script>
          <nav class="nav">
            <Link to="/">
              <img src={assets} alt="Community logo" class="nav__logo" id="logo" />
            </Link>
            <div class="links">
              <ul class="nav__links">
                <li class="nav__item">
                  <a class="nav__link" href={this.props.about}>
                    About
                  </a>
                </li>
                {/* <li class="nav__item">
              <a class="nav__link" href="#resources">
                Resources
              </a>
            </li> */}
                <li class="nav__item">
                  <a class="nav__link nav__link--btn" href={this.props.events}>
                    {/* <Link to="#events">Event</Link> */}
                    Events
                  </a>
                </li>
                <li class="nav__item">
                  <a class="nav__link" href={this.props.team}>
                    Team
                  </a>
                </li>
                <li class="nav__item">
                  <a class="nav__link nav__link--btn" href={this.props.join}>
                    Join
                  </a>
                </li>
                {/* <li>
                  <i class="fa-solid fa-bars"></i>
                </li> */}
              </ul>
            </div>
          </nav>
        </html>
      </>
    );
  }
}
