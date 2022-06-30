import React, { useState, useEffect, Component } from "react";
import PropTypes from "prop-types";
import "./EventCard.css";

export default class EventCard extends Component {
  static propTypes = {
    image: PropTypes.string,
    heading: PropTypes.string,
    summary: PropTypes.string,
    video: PropTypes.string,
  };
  render() {
    return (
      <>
        <div className="box1">
          {/* <img alt="img" src={this.props.image} className="boot" /> */}
          <h3 className="head">{this.props.heading}</h3>
          <button class="summary info">
            {/* <Link to="/summer"> */}
            <span className="more">
              <a href={this.props.summary} target="_blank">
                Summary
              </a>
            </span>
            {/* </Link> */}
          </button>
          <button class="summary" id="reg">
            <a href={this.props.video} target="_blank">
              Video
            </a>
          </button>
        </div>
      </>
    );
  }
}
