import React from 'react';

export function Message(props) {
  return (
    <div>
      <h1>Counter Variable: </h1>
      <h3>Value of counter variable is: {props.counter}</h3>
    </div>
  );
}
