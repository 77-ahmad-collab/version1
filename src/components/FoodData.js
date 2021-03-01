import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const FoodDataContext = createContext();

export const FoodDataProvider = (props) => {
  const [banner, setbanner] = useState(false);
  const [dateofdel, setdateofdel] = useState("");
  const [deltime, setdeltime] = useState("");
  const [log, setlog] = useState(false);
  const [proceed, setproceed] = useState(false);
  const proc = (val) => {
    setproceed(val);
  };
  const login = () => {
    setlog(true);
  };
  const logout = () => {
    setlog(false);
  };
  const getdeltime = (val) => {
    setdeltime(val);
  };
  const deldate = (e) => {
    setdateofdel(e);
  };
  const close = () => {
    setbanner(false);
  };
  const open = () => {
    setbanner(true);
  };
  const [catid, setcatid] = useState(-1);
  const getcatid = (val) => {
    setcatid(val);
  };
  const [foodproducts, setFoodProducts] = useState([
    {
      _id: 1,
      fcategory: "Burgers",
      fdata: [
        {
          fid: "b1",
          fname: "Classic Cheese Burger",
          fdetail: "Prepared with a patty, a slice of cheese and special sauce",
          fprice: 2000,
          count: 1,
        },
      ],
    },
    {
      _id: 2,
      fcategory: "Sandwich",
      fdata: [
        {
          fid: "s1",
          fname: "Classic Cheese Sandwich",
          fdetail: "Prepared with a patty, a slice of cheese and special sauce",
          fprice: 3000,
          count: 1,
        },
        {
          fid: "s2",
          fname: "Plain Cheese Sandwich",
          fdetail: "Prepared with a patty and special sauce",
          fprice: 5000,
          count: 1,
        },
      ],
    },
    {
      _id: 3,
      fcategory: "Chicken",
      fdata: [
        {
          fid: "c1",
          fname: "Classic Cheesy Chicken",
          fdetail: "Prepared with a patty, a slice of cheese and special sauce",
          fprice: 4000,
          count: 1,
        },
        {
          fid: "c2",
          fname: "Roasted Cheesy Chicken",
          fdetail: "Prepared with a patty, a slice of cheese and special sauce",
          fprice: 5000,
          count: 1,
        },
      ],
    },
  ]);
  const [cart, setCart] = useState([]);
  const [mytotal, setTotal] = useState(0);
  //state for address dont remove
  const [myaddress, setmyaddress] = useState("");
  const [contact, setcontact] = useState("");
  const [time, settime] = useState(0);
  const addCart = (fid) => {
    const itemIndex = cart.findIndex((item) => item.fid === fid);

    if (itemIndex === -1) {
      // Food item not found, add to cart
      const getItemByFid = (fid) =>
        foodproducts.reduce((data, { _id, fcategory, fdata }) => {
          const foodIndex = fdata.findIndex((item) => item.fid === fid);
          if (foodIndex !== -1) {
            return {
              _id,
              fcategory,
              ...fdata[foodIndex],
              count: 1,
            };
          }
          return data;
        }, {});

      setCart((cart) => [...cart, getItemByFid(fid)]);
    } else {
      // Food item found, update item count in cart
      setCart((cart) =>
        cart.map((item) =>
          item.fid === fid
            ? {
                ...item,
                count: item.count + 1,
              }
            : item
        )
      );
    }
  };
  console.log(cart);
  useEffect(() => {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    if (dataCart) setCart(dataCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("dataCart", JSON.stringify(cart));
  }, [cart]);
  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + item.fprice * item.count;
      }, 0);
      setTotal(res);
    };
    getTotal();
  }, [cart]);
  const [payment, setpayment] = useState("");
  const getcashmethod = (cash) => {
    setpayment(cash);
    console.log("cailing");
  };
  const getvalue = (valuep) => {
    setmyaddress(valuep);
  };
  const getcontact = (add) => {
    setcontact(add);
  };
  const gettime = (time) => {
    settime(time);
  };
  const [acess, setacess] = useState(401);
  const acessid = (val) => {
    setacess(val);
  };
  const [cartrerid, setcatrerid] = useState(1);
  const fcartrerid = (val) => {
    setcatrerid(val);
  };
  const [loader, setloader] = useState(true);
  const setloa = (val) => {
    setloader(val);
  };
  const [emailid, setemailid] = useState("");
  const email = (val) => {
    setemailid(val);
  };
  const value = {
    products: [foodproducts, setFoodProducts],
    cart: [cart, setCart],
    addCart: addCart,
    total: mytotal,
    getvalue: getvalue,
    myaddress: myaddress,
    banner: banner,
    open: open,
    close: close,
    contact: contact,
    getcontact: getcontact,
    gettime: gettime,
    time: time,
    payment: payment,
    getcashmethod: getcashmethod,
    date: dateofdel,
    deldate: deldate,
    deltime: deltime,
    getdeltime: getdeltime,
    log: log,
    login: login,
    logout: logout,
    getcatid: getcatid,
    catid: catid,
    acess: acess,
    acessid: acessid,
    cartrerid: cartrerid,
    fcartrerid: fcartrerid,
    loader: loader,
    setloa: setloa,
    proceed: proceed,
    proc: proc,
    emailid: emailid,
    email: email,
  };

  return (
    <FoodDataContext.Provider value={value}>
      {props.children}
    </FoodDataContext.Provider>
  );
};
