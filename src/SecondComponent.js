import React from "react";
import { Link } from "react-router-dom";

function SecondComponent() {
  return (
    <div>
      <h1>this is the second component</h1>
      <Link to="/">
        <button className="header-button">navigate back to home</button>
      </Link>
    </div>
  );
}

export default SecondComponent;
