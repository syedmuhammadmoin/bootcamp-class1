import React from "react";

function Dinner(props) {
  return (
    <h1>
      Today we are serving {props.dishName} and for sweet dish {props.sweetDish}
    </h1>
  );
}

export default Dinner;
