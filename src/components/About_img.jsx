import React from "react";
import "./About.css";

import about_us from "../assets/about_us.png";

function About_img() {
  return (
    // <div>
    //   <section class="about group" id="about">
    //     <h1 class="about__header">About Us</h1>
    //     <img className="about_us_img" src={about_us} />
    //     <p class="about__content">
    //       We are a student-run community focusing on open source, project-based learning. Our community is run solely by
    //       students, for students, to encourage development, open-source, and help the community unlock their full
    //       potential, one step at a time.
    //       <strong>
    //         {" "}
    //         We aim to help folks to get opportunities by encouraging them to learn, build and share in public.{" "}
    //       </strong>
    //       Contributing to open-source and focusing on project-based learning are two of many interests that our
    //       community share.
    //     </p>
    //   </section>
    // </div>

    <div className="about">
      {/* <h1 class="about__header">About Us</h1> */}

      <div className="about_img">
        <img src={about_us} alt="img" width="320px" height="320px" />
        {/* Ishirfff */}
      </div>
    </div>

    // <div>
    /* <section class="about group" id="about">
                <h1 class="text-center">Apple Like Content Section</h1>
                <div class="row">
                    <div class="col-md-6">

                        <img src={about_us} alt="" class="w-100" />
                    </div>
                    <div class="col-md-6">

                        <div class="row align-items-center h-100">
                            <div class="col">
                                <h1 class="display-3">Vertically Centered Text</h1>
                                <p class="lead">Flexbox grids help you build some really nice layouts.
                                    <br /><br />
                                    <a href="" class="">Learn More</a>
                                </p>

                            </div>
                        </div>

                    </div>

                </div>
            </section> */
    // </div>
  );
}

export default About_img;
