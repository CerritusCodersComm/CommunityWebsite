import "./Page.css";
import React from "react";
import About_img from "./About_img";
import About_text from "./About_text";
import Resources from "./Resources";
import Events from "./Events";
import Join from "./Join";
import Team from "./Team";
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./About";

function Page() {
  return (
    <div>
      {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
      <Navbar about="#about" events="#events" team="#team" join="#join" />
      {/* <div className="about_cards">
        <div className="img">
          <About_img />
        </div>
        <div className="text">
          <About_text />
        </div>
      </div> */}
      {/* <Resources /> */}
      <About />
      <Events />
      <Team />
      <Join />
      <Footer />
    </div>
  );
}
export default Page;
