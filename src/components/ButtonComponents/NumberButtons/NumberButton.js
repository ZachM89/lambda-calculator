import React from "react";

export const NumberButton = (props) => {
    //console.log(props.num);
  return (
    <div className="numberButtons">
        {props.num}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </div>
  );
};

