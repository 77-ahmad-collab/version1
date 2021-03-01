import React from "react";
import { AiOutlineDollar } from "react-icons/ai";
import { IoBasketSharp } from "react-icons/io5";
import Dashstyles from "./Dashboard.module.css";
export const Singlecard = ({ heading, amount, icon }) => {
  return (
    <div
      style={{ fontSize: "20px" }}
      className={`${Dashstyles.singlecard_das} `}
    >
      <span className="text-success" style={{ fontSize: "40px" }}>
        {icon}
      </span>
      <div className={Dashstyles.info}>
        <span className="text-success ">{amount}</span>
        <p className="text-dark">{heading}</p>
      </div>
    </div>
  );
};
