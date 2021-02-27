import React from "react";
import { Link } from "react-router-dom";
import Mystyles from "./done.module.css";

const Error = () => {
  return (
    <div className={Mystyles.body}>
      <h2>This is an </h2>

      <Link to="/">
        <button className="btn btn-success mt-3 text-white">
          Go back to home
        </button>
      </Link>
    </div>
  );
};

export default Error;
