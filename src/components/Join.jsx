import React from "react";
import "./Join.css";

function Join() {
  return (
    <section class="join" id="join">
      <h1 class="join__header">Join Our Community</h1>
      <p class="join__content">
        Join the community run solely by students, for students, focused on development, open source and much more.{" "}
      </p>
      <div class="row__join">
        <a href="https://twitter.com/cerrituscoders" class="media" target="_blank">
          <i class="fa-brands fa-twitter fa-2x"></i>
        </a>
        <a href="https://discord.com/invite/fKakn9kk39/" class="media" target="_blank">
          <i class="fa-brands fa-discord fa-2x"></i>
        </a>
        <a href="https://www.youtube.com/channel/UCwdeEkNRifkL0tZrTPx85Ug" class="media" target="_blank">
          <i class="fa-brands fa-youtube fa-2x"></i>
        </a>
      </div>
    </section>
  );
}

export default Join;
