import "./DestinationStyles.css";

import React from "react";

function DestinationData(props) {
  return (
    <div>
      <div className={props.cName}>
        <div className="des-text">
          <h2>{props.heading}</h2>
          <p>{props.text}</p>
        </div>
        <div className="image">
          <img src={props.img1} alt="img" />
          <img src={props.img2} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default DestinationData;
