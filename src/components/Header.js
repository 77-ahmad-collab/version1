import React, { useState, useContext, useEffect } from "react";
import "./header.css";
import { DataContext } from "./CardData.js";
import Banner from "../assests/restaurant.png";
import HomeCard from "./HomeCard.js";
import Navbar from "./Navbar.js";
import { Link } from "react-router-dom";
import { FoodDataContext } from "./FoodData";
export default function Header() {
  const value = useContext(DataContext);
  const val = useContext(FoodDataContext);

  const [searchTerm, setSearhTerm] = useState("");
  const [searchCategory, setSearhCategory] = useState("Caterers");

  // const searchTerm = value.searchTerm;
  useEffect(() => {
    val.acessid(localStorage.getItem("token"));
    console.log(val.acess, "i am value.acess");
  }, [val.acess]);
  return (
    <>
      <div className="bg-img" style={{ backgroundImage: `url(${Banner})` }}>
        <Navbar />
        <div class="centered">
          <h1>You order we deliver</h1>
          <p>Get your favourite foods in less than an hour</p>
          <form>
            <select
              className="find"
              onChange={(event) => {
                setSearhCategory(event.target.value);
              }}
            >
              <option
                className="findopt"
                style={{
                  backgroundColor: "white",
                  color: "#009E7F",
                  outline: "none !important",
                }}
                value="Caterers"
              >
                Caterers
              </option>
              <option
                className="findopt"
                style={{
                  backgroundColor: "white",
                  color: "#009E7F",
                  outline: "none !important",
                }}
                value="Product"
              >
                Product
              </option>
              <option
                className="findopt"
                style={{
                  backgroundColor: "white",
                  color: "#009E7F",
                  outline: "none !important",
                }}
                value="Location"
              >
                Location
              </option>
            </select>
            <input
              type="search"
              onChange={(event) => {
                setSearhTerm(event.target.value);
              }}
              value={searchTerm}
              placeholder="Search your products from here"
            />

            <button type="submit">
              {" "}
              <Link
                to={`/product/${searchTerm}/${searchCategory}`}
                style={{ color: "white", textDecoration: "none" }}
              >
                {" "}
                Search{" "}
              </Link>
            </button>
          </form>
        </div>
      </div>
      <HomeCard />
    </>
  );
}
