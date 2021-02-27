import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FoodDataContext } from "./FoodData.js";
import "./foodmenudetails.css";

export default function FoodMenuDetails() {
  const value = useContext(FoodDataContext);
  // const { banner } = value;

  const [products] = value.products;
  const addCart = value.addCart;

  const [cart, setCart] = value.cart;
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setCart([]);
  }, []);
  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + item.fprice * item.count;
      }, 0);
      setTotal(res);
    };
    getTotal();
  }, [cart]);

  const reduction = (id) => {
    cart.map((item) =>
      item.fid == id
        ? item.count == 1
          ? item.count
          : (item.count -= 1)
        : item.count
    );

    setCart([...cart]);
  };
  const increase = (id) => {
    cart.map((item) => (item.fid == id ? (item.count += 1) : item));
    setCart([...cart]);
  };
  //ask.piaic.org
  const removeProduct = (id) => {
    if (window.confirm("Do you want to delete this product?")) {
      cart.map((item, index) => {
        if (item.fid == id) {
          cart.splice(index, 1);
        }
      });
      setCart([...cart]);
    }
  };

  return (
    <div className="headcard" style={{ backgroundColor: "rgb(228, 224, 224)" }}>
      <div className="card">
        {products.map((val, index) => {
          return (
            <div className="foodnavbar">
              <div className="heading" key={index}>
                <h5>
                  <span style={{ color: " rgba(163, 161, 161, 0.726)" }}>
                    . . .{" "}
                  </span>
                  {val.fcategory}
                  <span style={{ color: " rgba(163, 161, 161, 0.726)" }}>
                    {" "}
                    . . .
                  </span>
                </h5>
              </div>

              {val.fdata.map((f, i) => {
                let myfoodid = f.fid;
                return (
                  <div
                    className="fooddata"
                    key={i}
                    style={{ width: "100%", paddingBottom: "5%" }}
                  >
                    <div className="food12">
                      <span className="foodname2">
                        <strong>{f.fname}</strong>
                      </span>
                      <br />
                      <span className="foodaddress2">{f.fdetail}</span>
                    </div>

                    <div className="food22">
                      <div className="col22" style={{ fontSize: 12 }}>
                        <span className="col22_child1" name="fromhead">
                          From
                        </span>
                        <br />
                        <span className="col22_child2">
                          <strong>${f.fprice}</strong>
                        </span>
                      </div>
                      <div className="col33">
                        <span className="hidden_price">
                          <strong>${f.fprice}</strong>
                        </span>
                        <span
                          className="delivery_button2"
                          onClick={() => addCart(myfoodid)}
                          type="button"
                        >
                          <img src="https://img.icons8.com/ios/24/000000/plus-math.png" />
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="addtocart">
        <header>🛒 {cart.length} Item</header>
        <hr />

        <div className="cartitems">
          {cart.map(({ fid, fname, count, fprice }) => (
            <div>
              <div className="item" key={fid}>
                <div className="quantity">
                  <li>
                    <button className="countplus" onClick={() => increase(fid)}>
                      {" "}
                      +{" "}
                    </button>
                  </li>
                  <li>
                    <span> {count} </span>
                  </li>
                  <li>
                    <button
                      className="countminus"
                      onClick={() => reduction(fid)}
                    >
                      {" "}
                      -{" "}
                    </button>
                  </li>
                </div>

                <div className="itemdetails">
                  <span className="itemname">{fname}</span>
                  <span className="item_price">${fprice * count}</span>
                  <span>
                    <button
                      className="remove"
                      onClick={() => removeProduct(fid)}
                    >
                      {" "}
                      X{" "}
                    </button>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cart.length === 0 ? (
          <div className="checkout_btn">
            <div className="pl-2 align-align-items-center text-white mt-2">
              {cart.length === 0 ? "Cart is empty" : null}
            </div>
            <div className="p1hide">🛒 {cart.length} Item</div>
            <div className="p2">${total}</div>
          </div>
        ) : (
          <NavLink to="/fooddetails/appcheckout">
            <div className="checkout_btn">
              <div className="p1">Checkout</div>
              <div className="p1hide">🛒 {cart.length} Item</div>
              <div className="p2">${total}</div>
            </div>
          </NavLink>
        )}
      </div>
    </div>
  );
}
