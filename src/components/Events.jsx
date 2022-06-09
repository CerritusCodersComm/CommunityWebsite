import React from "react";
import "./Events.css";
import Timeline from "./Timeline";
import bootcamp from "../assets/bootcamp.png";

function Events() {
  return (
    <div>
      <section class="events timeline">
        <h1 class="events__header">Events</h1>
        {/* <div class="timeline">
          <p>Here are the details of our upcoming bootcamp this summer</p>
          <Timeline />
        </div> */}
        <div class="bootcamp_box box">
          <img alt="img" src={bootcamp} class="bootcamp"></img>
          <h3> Summer Bootcamp</h3>
          <button class="btn info">
            <span>More Info</span>
          </button>
          <button class="btn ">
            <span>Register</span>
          </button>
        </div>
      </section>
      {/* <div class="timeline">
        <Timeline />
      </div> */}
    </div>
  );
}

export default Events;
