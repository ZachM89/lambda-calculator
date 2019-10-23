import React from "react";

export const OperatorButton = (props) => {
    //console.log(props.symbol);
  return (
    <div className="operatorButtons">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.symbol.char}
    </div>
  );
};
