import React from "react";
import "./About2.css";
import about_us from "../assets/about_us.png";

function About() {
  return (
    <div className="content-container" id="about">
      <div className="row5 ">
        <div className="left-panel box5">
          <img src={about_us} alt="img" width="400px" height="400px" />
        </div>
        <div className="middle-panel box2">
          <h2 className="about__header">About</h2>
          <p className="about_content">
            <ul>
              <li>🚀 We are a student-run community focusing on open source, project-based learning.</li>
              <br />

              <li>
                🚀 Our community is run solely by students, for students, to encourage development, open-source, and
                help the community unlock their full potential, one step at a time.
              </li>
              <br />

              <li>
                🚀 We aim to help folks to get opportunities by encouraging them to learn, build and share in public.
              </li>
              <br />

              <li>
                🚀 Contributing to open-source and focusing on project-based learning are two of many interests that our
                community share.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
