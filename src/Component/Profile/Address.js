  
import React from "react";

let condition = true;

function Address() {
  return (
    <h1 style={condition ? { color: "blue" } : { color: "red" }}>
      {" "}
      {condition ? "The condition is True " : "The condition is flase"}{" "}
    </h1>
  );
}

export default Address;