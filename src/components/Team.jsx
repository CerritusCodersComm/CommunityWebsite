import React from "react";
import Card from "./Card";
import "./Team.css";
import dhiraj from "../assets/team/dhiraj-new.jpg";
import ishir from "../assets/team/ishir.jpg";
import anam from "../assets/team/anam-new.jpeg";
import lurid from "../assets/team/lurid.jpg";

function Team() {
  return (
    <div>
      <section class="team" id="team">
        <h1 class="team__header">Meet the team</h1>

        <div class="column">
          <Card
            name="Anam Ansari"
            role="Co-Founder | Event Manager"
            image={anam}
            bio="She loves to explore new technologies and wants to make an impact with the knowledge and experience she gets.
                        Android development is one of her passions, and she's lately begun dabbling in blockchain and web development."
            linkedin="https://linkedin.com/in/anamansari062"
            twitter="https://twitter.com/anamansari062"
            link="https://linktr.ee/anamansari062"
          />
        </div>

        <div class="column">
          <Card
            name="Tejas Nair"
            role="Co-Founder | Moderation Lead"
            image={lurid}
            bio="He is fascinated by creativity and innovation. 
                        He likes technologies that make us think out of the box and put our skills to the test,
                        something like game development, where he has learned about 3-D modeling, animations, 
                        music development, and much more."
            linkedin="https://linkedin.com/in/tejasnair9977"
            twitter="https://twitter.com/tejasnair9977"
            link="https://linktr.ee/anamansari062"
          />
        </div>
        <div class="column">
          <Card
            name="Ishir Agrawal"
            role="Co-Founder | Tech Lead"
            image={ishir}
            bio="He is currently exploring a lot of things in blockchain development and Web3.
                         Apart from this he is a big finance enthusiast, and learning new things everyday."
            linkedin="https://linkedin.com/in/ishiragrawal02"
            twitter="https://twitter.com/ishiragrawal"
            link="https://twitter.com/ishiragrawal"
          />
        </div>
        <div class="column">
          <Card
            name="Dhiraj Chauhan"
            role="Co-Founder | Marketing Lead"
            image={dhiraj}
            bio="He believes in public learning, and is constantly eager to learn new things and enjoy sharing what he has learned with others.
                         he loves interacting with folks and helping community members on a daily basis. he has conducted multiple sessions to encourage and 
                         mentor students towards programming, open source and building communities."
            linkedin="https://linkedin.com/in/cdhiraj40"
            twitter="https://twitter.com/cdhiraj40"
            link="https://linktr.ee/cdhiraj40"
          />
        </div>
      </section>
    </div>
  );
}

export default Team;
