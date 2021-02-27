import React, { useContext, useState } from "react";
import { DataContext } from "./CardData.js";
import { CaterersDataContext } from "./Caterers.js";

import CardN from "./CardN.js";
import { useParams } from "react-router-dom";
import "../App.css";

export default function HomeCard(props) {
  const value = useContext(DataContext);
  const catererValue = useContext(CaterersDataContext);
  const [products] = value.products;
  const [catererproducts] = catererValue.catererProducts;
  const [limit, setLimit] = useState(8);
  const { searchItem } = useParams();
  const { searchCategory } = useParams();
  if (searchCategory == "Caterers") {
    return (
      <div className="card" style={{ float: "right", width: "75%" }}>
        <div>
          <br />
          <br />
          {catererproducts
            .filter((val) => {
              if (searchItem === undefined) {
                return catererproducts;
              }
              if (searchCategory !== undefined) {
                if (
                  val.ca_name.includes(
                    searchItem.charAt(0).toUpperCase() +
                      searchItem.substr(1).toLowerCase()
                  )
                ) {
                  return val;
                }
              }
              if (searchCategory == undefined) {
                return catererproducts;
              }
            })
            .map((val, index) => {
              return (
                <CardN
                  key={val.d_caterer_id}
                  isitcaterer={1}
                  incorrectData={"No Search Result"}
                  id={val.d_caterer_id}
                  caterer={val.ca_description}
                  town={val.ca_town}
                  imgsrc={val.ca_image}
                  detail={val.ca_headline}
                  delivery={val.ca_address}
                  time={val.ca_workinghours}
                  price={val.ca_minamount}
                  mname={val.ca_name}
                />
              );
            })}
        </div>
        <br />
        <br />
      </div>
    );
  } else if (searchCategory == "Location") {
    return (
      <div className="card" style={{ float: "right", width: "75%" }}>
        <div>
          <br />
          <br />
          {catererproducts
            .filter((val) => {
              if (searchItem === undefined) {
                return catererproducts;
              }
              if (searchCategory !== undefined) {
                if (val.ca_town.includes(searchItem.toUpperCase())) {
                  return val;
                }
              }
              if (searchCategory == undefined) {
                return catererproducts;
              }
            })
            .map((val, index) => {
              return (
                <CardN
                  key={val.d_caterer_id}
                  isitcaterer={1}
                  incorrectData={"No Search Result"}
                  id={val.d_caterer_id}
                  caterer={val.ca_description}
                  town={val.ca_town}
                  imgsrc={val.ca_image}
                  detail={val.ca_headline}
                  delivery={val.ca_address}
                  time={val.ca_workinghours}
                  price={val.ca_minamount}
                  mname={val.ca_name}
                />
              );
            })}
        </div>
        <br />
        <br />
      </div>
    );
  } else {
    return (
      <div
        className="card"
        id="setstyle"
        // style={{
        //   float: "right",
        //   width: "100%",
        //   margin: "0px",
        //   paddingLeft: "15%",
        // }}
      >
        <div>
          <br />
          <br />
          {products
            .filter((val) => {
              if (searchItem == undefined || searchCategory == undefined) {
                return products;
              }
              if (searchCategory == "Product") {
                if (searchItem !== undefined) {
                  if (
                    val.mname.includes(
                      searchItem.charAt(0).toUpperCase() +
                        searchItem.substr(1).toLowerCase()
                    )
                  ) {
                    return val;
                  }
                }
                if (searchItem == undefined) {
                  return products;
                }
              }
              if (searchCategory == undefined) {
                return products;
              }
            })
            .slice(0, limit)
            .map((val, index) => {
              return (
                <CardN
                  key={val._id}
                  id={val._id}
                  feat={val.feat}
                  caterer={val.caterer}
                  imgsrc={val.imgsrc}
                  detail={val.detail}
                  delivery={val.delivery}
                  time={val.time}
                  fill={val.fill}
                  price={val.price}
                  mname={val.mname}
                  link={val.links}
                />
              );
            })}
        </div>
        <br />
        <br />
        <div style={{ marginTop: "0%", textAlign: "center" }}>
          {limit <= 14 ? (
            <button className="loadmore" onClick={() => setLimit(limit + 4)}>
              Load More
            </button>
          ) : (
            <br />
          )}
        </div>
        <br />
      </div>
    );
  }
}
