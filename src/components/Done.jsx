import React from "react";
import { Link } from "react-router-dom";
import Mystyles from "./done.module.css";

const Done = () => {
  return (
    <div className={Mystyles.body}>
      <h2>Your Order has been Placed Succesfully</h2>
      <h3>You can check your order history by phone number</h3>
      <h4>Thank you For visting our website</h4>
      <Link to="/">
        <button className="btn btn-success mt-3 text-white">
          Go back to home
        </button>
      </Link>
    </div>
  );
};

export default Done;
