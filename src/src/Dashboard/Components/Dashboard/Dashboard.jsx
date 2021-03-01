import React, { useEffect } from "react";
// import "./Dashboard.css";
import Catstyles from "../Category/Categories.module.css";
import Dashstyles from "./Dashboard.module.css";
import { Singlecard } from "./Singlecard";
import { CgSandClock } from "react-icons/cg";
import { IoBasketSharp } from "react-icons/io5";
import HO from "../../../Home.module.css";
import MenuBar from "../../Navbar/MenuBar";
import Sidebar from "../../Navbar/Sidebar";
import { FaMoneyBillAlt } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
const Dashboard = () => {
  const [data, setdata] = useState("");
  useEffect(() => {
    const get = async () => {
      const id = localStorage.getItem("token");
      console.log(id, "id in dashboardcomponent");
      const response = await axios.get(
        `http://damp-headland-05751.herokuapp.com/order/${id}`
      );
      // console.log(response.data, "response");
      const data = await response.data;
      setdata(data);
      console.log("my data", data);
    };
    get();
  }, []);
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
          <Singlecard
            heading="Total Orders"
            amount={data.total}
            icon={<IoBasketSharp />}
          />
          <Singlecard
            heading="Pending Orders"
            amount={data.pending}
            icon={<CgSandClock />}
          />
          <Singlecard
            heading="Total Revenue"
            amount={data.revenue == null ? 0 : data.revenue}
            icon={<FaMoneyBillAlt />}
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
