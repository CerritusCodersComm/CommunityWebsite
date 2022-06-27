import React from "react";
import "./Events.css";
import Timeline from "./Timeline";
import bootcamp from "../assets/bootcamp.png";
import { Link } from "react-router-dom";

function Events() {
  // const register = document.querySelector("#reg");
  // if (register) {
  //   register.addEventListener("click", function () {

  //     alert("You have successfully registered for the event!");
  //   });
  // }
  const ale = function () {
    alert("You have successfully registered for the event!");
  };
  return (
    <div>
      <section class="events timeline" id="events">
        <h1 class="events__header">Events</h1>
        {/* <div class="timeline">
          <p>Here are the details of our upcoming bootcamp this summer</p>
          <Timeline />
        </div> */}
        <div class=" box">
          <img alt="img" src={bootcamp} class="bootcamp"></img>
          <h3> Summer Bootcamp</h3>
          {/* <input type="button" value="Learn More" class="btn"></input> */}
          <button class="bttn info">
            <Link to="/summer">
              <span className="more">More Info</span>
            </Link>
          </button>
          <button class="bttn" id="reg" onClick={ale}>
            Register
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
