<<<<<<< HEAD
import "./Page.css";
import React from "react";
import About from "./About";
import Resources from "./Resources";
import Events from "./Events";
import Join from "./Join";

function Page() {
  return (
    <div>
      <About />
      <Resources />
      <Events />
      <Join />
    </div>
  );
=======

import './Page.css'
import React from 'react';
import About from './About';
import Resources from './Resources';
import Events from './Events';
import Join from './Join';
import Team from './Team';

function Page() {
    return (
        <div>
            <About />
            <Resources />
            <Events />
            <Team/>
            <Join />
        </div>
    )
>>>>>>> e9de7a5 (added team cards)
}
export default Page;
