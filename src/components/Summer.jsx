import React from "react";
import Navbar from "./Navbar";
import Timeline from "./Timeline";
import Footer from "./Footer";
import EventCard from "./EventCard";
import bootcamp from "../assets/bootcamp.png";
import web from "../assets/web-dev.jpg";
import "./Summer.css";

function Summer() {
  return (
    <div className="ishir">
      <Navbar
        about="http://localhost:3000/#about"
        events="http://localhost:3000/#events"
        team="http://localhost:3000/#team"
        join="http://localhost:3000/#join"
      />
      <h1>Summer Bootcamp - 2k22</h1>
      {/* <div className="side"> */}
      <div className="time">
        <div className="one">
          <Timeline />
        </div>
        <div className="events">
          <EventCard heading="Android App Development" />
          <EventCard heading="Web Development" />
          <EventCard heading="Discord Bot" />
          <EventCard heading="Blockchain Development  " />
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
      {/* // <div className="e">
        //   <EventCard />
        //   <EventCard />
      //   </div>
      // </div> */}

      {/* <div className="event1">
          <EventCard />
          <EventCard />
        </div> */}
    </div>
  );
}
export default Summer;
