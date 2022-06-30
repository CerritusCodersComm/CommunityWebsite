import React, { useState, useEffect, Component } from "react";
import "./Navbar.css";
import assets from "../assets/logo_3.png";
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = (props) => {
  // static propTypes = {
  //   about: PropTypes.string,
  //   events: PropTypes.string,
  //   team: PropTypes.string,
  //   join: PropTypes.string,
  // };

  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <Link to="/">
            <img src={assets} alt="Community logo" class="nav__logo" />
          </Link>
        </div>
        <div className={showMediaIcons ? "links mobile-menu-link" : "links"}>
          <ul className="nav__links">
            <li className="nav__item">
              <a className="link" href={props.about}>
                About
              </a>
            </li>
            {/* <li class="nav__item">
              <a class="nav__link" href="#resources">
                Resources
              </a>
            </li> */}
            <li class="nav__item menu-big">
              <a className="link" href={props.events}>
                Events
              </a>
            </li>
            <li class="nav__item menu-big">
              <a className="link" href={props.team}>
                Team
              </a>
            </li>
            <li class="nav__item menu-big">
              <a className="link" href={props.join}>
                Join
              </a>
            </li>
          </ul>
        </div>
        <div className="hamburger-menu">
          <a className="link-icon" href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <GiHamburgerMenu />
          </a>
        </div>

        {/* <i class="fa-solid fa-bars menu"></i> */}
      </nav>
    </>
  );
};
export default Navbar;
