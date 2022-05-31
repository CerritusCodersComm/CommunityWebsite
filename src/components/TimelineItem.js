import React from "react";
import "./TimelineItem.css";
const TimelineItem = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <p>{data.date}</p>
      <h5>{data.text}</h5>
      <span className="circle"></span>
    </div>
  </div>
);
export default TimelineItem;
