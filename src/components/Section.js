import React, { Component, useContext, useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { DataProvider } from "./CardData.js";
import HomeCard from "./HomeCard.js";
import Header from "./Header";
import FoodDetails from "./FoodDetails.js";
import Appcheckout from "../checkout/Appcheckout.js";
import Done from "./Done.jsx";
import Dashboard from "../src/Dashboard/Components/Dashboard/Dashboard.jsx";
import Products from "../src/Dashboard/Components/Products/Products.jsx";
import Categories from "../src/Dashboard/Components/Category/Categories.jsx";
import Orders from "../src/Dashboard/Components/Orders/Orders.jsx";
import Customers from "../src/Dashboard/Components/Customers/Customers.jsx";
import Coupons from "../src/Dashboard/Components/Coupons/Coupons.jsx";
import CaDashboard from "../src/CaDashboard.jsx";
import MenuBar from "../src/Dashboard/Navbar/MenuBar.jsx";
import Sidebar from "../src/Dashboard/Navbar/Sidebar.jsx";
import { FoodDataContext } from "./FoodData.js";
import Error from "./Error.jsx";
import Apppop from "./deghjee-order-history/customer/popUpForm.js";

const Section = () => {
  const value = useContext(FoodDataContext);
  const { login, log, logout, acess, acessid, proceed } = value;
  // const [auth, setauth] = useState(localStorage.getItem("token"));
  console.log(acess, "i am authy");
  const [t, sett] = useState(false);
  useEffect(() => {
    acessid(localStorage.getItem("token"));
    if (acess == 401) {
      console.log("not authorized");
    } else {
      console.log("authorized");
    }
    console.log("id for rendering compoent is ahngih", acess);
  }, [acess, localStorage.getItem("token")]);
  return (
    <DataProvider>
      <div style={{ backgroundColor: "white" }}>
        <section>
          <Routes>
            <Route path="/">
              <Header />
              {/* <HomeCard /> */}
            </Route>

            <Route
              exact
              path="/product/:searchItem/:searchCategory"
              element={<HomeCard />}
            />
            <Route exact path="/fooddetails" element={<FoodDetails />} />
            <Route
              exact
              path="/fooddetails/appcheckout"
              element={<Appcheckout />}
            />
            <Route
              exact
              path="/fooddetails/appcheckout/done"
              // element={<Done />}
            >
              {proceed ? <Done /> : <Appcheckout />}
            </Route>
            {/* <Route path="/product/" element={<HomeCard/>}  /> */}
            {/* <Route path="/shop/skincare/:id" element={<DetailsPage/>}  />
                    <Route path="/cart" element={<Bucket/>}  />  */}
            {/* <Route exact path="/dash">
              <Dashboard />
            </Route> */}
            <Route exact path="/products">
              {localStorage.getItem("token") == 401 ? <Header /> : <Products />}
            </Route>
            <Route exact path="/category">
              {localStorage.getItem("token") == 401 ? (
                <Header />
              ) : (
                <Categories />
              )}
            </Route>
            <Route exact path="/orders">
              {localStorage.getItem("token") == 401 ? <Header /> : <Orders />}
            </Route>
            <Route exact path="/customers">
              {localStorage.getItem("token") == 401 ? (
                <Header />
              ) : (
                <Customers />
              )}
            </Route>
            <Route exact path="/coupons">
              {acess == 401 ? <Header /> : <Coupons />}
            </Route>
            <Route exact path="/dashboard">
              {/* <Sidebar />
                <MenuBar /> */}
              {/* {acess === 401 ? <Header /> : <Dashboard />} */}
              {localStorage.getItem("token") == 401 ? (
                <Header />
              ) : (
                <Dashboard />
              )}
              {/* {acess !== 401 ? <Header /> : <Dashboard />} */}
              {/* if (acess === 401) {console.log(acess, "====410 ")} else{" "}
              {console.log("i ma not 401", acess)} */}
              {/* {log ? <Dashboard /> : <Header />} */}
            </Route>
            <Route path="/*">
              <Apppop />
            </Route>

            <Route path="*">
              <Error />
            </Route>
            {/* <Route exact path="/settings">
          <Settings />
        </Route> */}
            {/* <Route exact path="/staffmember">
          <Staffmember />
        </Route> */}
            {/* <Redirect to="/dashboard" /> */}
          </Routes>
        </section>
      </div>
    </DataProvider>
  );
};
export default Section;
