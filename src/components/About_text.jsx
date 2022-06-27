import React from "react";
import "./About.css";

function About_text() {
  return (
    <div className="about" id="about">
      <div>
        {" "}
        <div className="box2">
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

export default About_text;
