import React, { useState, useEffect } from 'react'
import './style.css'
import assets from "../assets/logo_5.png"

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton()
  }, [button]);

  window.addEventListener('resize', showButton);

  const changeBackground = () => {
    if (window.scrollY >= window.innerHeight - 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  // const openGithub = () => {
  //     window.open(GITHUB_PROJECT_URL)
  // }

  window.addEventListener('scroll', changeBackground)

  return (
    <>
      <nav class="nav">
        <img src={assets} alt="Community logo" class="nav__logo" id="logo" />
        <div class="links">
          <ul class="nav__links">
            <li class="nav__item">
              <a class="nav__link" href="#about">About</a>
            </li>
            <li class="nav__item">
              <a class="nav__link" href="#resources">Resources</a>
            </li>
            <li class="nav__item">
              <a class="nav__link" href="#events">Events</a>
            </li>
            <li class="nav__item">
              <a class="nav__link nav__link--btn" href="#team">Team</a>
            </li>
            <li class="nav__item">
              <a class="nav__link nav__link--btn" href="#join">Join</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar