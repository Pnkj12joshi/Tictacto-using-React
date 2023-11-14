import React from "react";

const Squre = (props) => {
  return (
    <div
      className="squre"
      onClick={props.onclick}
      style={{
        border: "1px solid",
        height: "100px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h5> {props.value}</h5>
    </div>
  );
};
export default Squre;
