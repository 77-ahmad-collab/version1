import React from "react";
// import "./Dashboard.css";
import Catstyles from "../Category/Categories.module.css";
import Dashstyles from "./Dashboard.module.css";
import { Singlecard } from "./Singlecard";
import HO from "../../../Home.module.css";
import MenuBar from "../../Navbar/MenuBar";
import Sidebar from "../../Navbar/Sidebar";
import { useState } from "react";
const Dashboard = () => {
  //   const list = [
  //     { catid: 1, catname: "biryani", dish: "biryani dish 1" },
  //     { catid: 2, catname: "chicken", dish: "chicken dish 1" },
  //     { catid: 3, catname: "beef", dish: "beef dish 1" },
  //     { catid: 1, catname: "biryani", dish: "biryani dish 2" },
  //     { catid: 2, catname: "chicken", dish: "chicken dish 2" },
  //     { catid: 3, catname: "beef", dish: "beef dish 2" },
  //   ];
  //   console.log(list, "i am list");
  //  list.filter((x, i, a) => a.indexOf(x) === i));
  // console.log(filcat,"i am filcat");
  // const [arr,setarr]=useState({

  // })
  return (
    <>
      <MenuBar />
      <Sidebar />
      <div
        className={`${HO.setbody} ${Catstyles.category_body} ${Dashstyles.dashboardbody}`}
      >
        <div>
          <h4>Analytics Overview</h4>
        </div>
        <div className={Dashstyles.dashboardcards}>
          <Singlecard heading="total order" amount="20" />
          <Singlecard heading="total amount" amount="4520" />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
