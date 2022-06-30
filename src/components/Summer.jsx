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
      <h1 className="head">Summer Bootcamp - 2k22</h1>
      {/* <div className="side"> */}
      <div className="time">
        <div className="one">
          <Timeline />
        </div>
        <div className="events">
          <EventCard
            heading="Android App Development"
            summary="https://cdhiraj40.notion.site/Android-101-Session-1-91064c106a4a4ce697c3c84a6317c2cb"
            video="https://youtu.be/DXw5_s_MCho"
          />
          <EventCard
            heading="Web Development"
            summary="https://adventurous-sundae-0c5.notion.site/Web-Development-101-575853c600c0463d87a3bce88deae058"
            video="https://youtu.be/ckABNdQfTkU"
          />
          <EventCard
            heading="Discord Bot"
            summary="https://pastebin.com/eBSwcK07"
            video="https://youtu.be/9KxVqusGOe4"
          />
          <EventCard
            heading="Introduction to Blockchain"
            summary=" https://quasar-rice-68d.notion.site/How-to-get-started-with-Web3-Resources-a1cd5e2943c84528896eef59701650d0"
            video="https://youtu.be/pB_6kMJJGUw"
          />
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
      <Footer />
    </div>
  );
}
export default Summer;
