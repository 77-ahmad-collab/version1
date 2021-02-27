import React, { useEffect, useState } from "react";
import Orderstyles from "./Order.module.css";
import Catstyles from "../Category/Categories.module.css";
import Data from "./Data";
import Loader from "./Loader";
import { connect, useDispatch } from "react-redux";
import { Fetchorderdata } from "../../../Apistore/Orderapidata";
import MenuBar from "../../Navbar/MenuBar";
import Sidebar from "../../Navbar/Sidebar";
import HOOO from "../../../Home.module.css";
const Orders = ({ productlist, categorylist }) => {
  const [mydata, setmydata] = useState(Data);
  const [productdata, setproductdata] = useState(productlist);
  const [value, setvalue] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Fetchorderdata());
  }, []);

  useEffect(() => {
    setproductdata(productlist);
  }, [productlist]);
  let filteritem = productdata.filter((contacts) => {
    return contacts.c_address.toLowerCase().indexOf(value.toLowerCase()) !== -1;
  });
  const [test, settest] = useState(0);
  const handlechange = (e) => {
    // console.log(e);
    // const len = productdata.length;
    // console.log(e.target.value, len);
    // let com = 0;
    // let pen = len;
    // if (e.target.value === "complete") {
    //   com += 1;
    //   pen -= 1;
    // } else if (e.target.value === "pending") {
    //   pen += 1;
    //   com -= 1;
    // }
    // console.log(pen, "com>=", com);
  };
  // console.log(productdata, "i am orderdata");
  return (
    <>
      <MenuBar />
      <Sidebar />
      <div
        className={`${HOOO.setbody} ${Catstyles.category_body} container-fluid pb-5`}
      >
        <div
          className={` ${Catstyles.header_body} ${Catstyles.body_head} ${Orderstyles.hea_bod}`}
        >
          <div className="  ml-4 mr-5">
            <h3>Orders</h3>
          </div>
          {/* <div className="select_box">
          <select className="select" id="inputGroupSelect04">
            <option selected>Status</option>
            <option value="Pending">Pending</option>
            <option value="Delivered">Delivered</option>
            <option value="Processing">Processing</option>
            <option value="Failed">Failed</option>
          </select>
        </div>
        <div className="select_box">
          <select className="select" id="inputGroupSelect04">
            <option selected>Order Limits</option>
            <option value="7">Last 7 Orders</option>
            <option value="15">Last 15 Orders</option>
            <option value="30">Last 30 Orders</option>
          </select>
        </div> */}
          <div className="">
            <form>
              <input
                type="text"
                className={`form-control ${Catstyles.cat_input}`}
                placeholder="EX:Search By Address"
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                value={value}
                onChange={(e) => setvalue(e.target.value)}
              ></input>
            </form>
          </div>
        </div>

        <div className={`row ${Orderstyles.setwidth}`}>
          <table className={`table table-bordered ${Orderstyles.loadordertab}`}>
            <thead>
              <tr>
                <th>order Id</th>
                <th>Customer Name</th>

                <th> Delivery Addres</th>
                <th>Amount</th>

                <th>Contact No</th>
                <th>Delivery Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {productlist.length !== 0 ? (
                filteritem.map((val, index) => {
                  const {
                    order_id,
                    c_name,
                    c_address,
                    contact,
                    amount,
                    delivery_date,
                    order_status,
                  } = val;
                  const mydate = new Date(delivery_date).toLocaleDateString();
                  return (
                    <>
                      <tr key={index}>
                        <td>{order_id}</td>
                        <td>{c_name}</td>
                        <td>{c_address}</td>
                        <td>{amount}</td>
                        <td>{contact}</td>
                        <td>{mydate}</td>
                        {/* <td>{order_status}</td> */}
                        <td>
                          {" "}
                          <div class="form-group">
                            {/* <label for="sel1">Select list:</label> */}
                            <select
                              onChange={() => handlechange(order_id)}
                              class="form-control"
                              id="sel1"
                              name="productcategory"
                            >
                              <option value="pending">pending</option>
                              <option value="complete">Complete</option>

                              {/* {categorylist.map((val) => {
                                const { ct_name } = val;
                                return (
                                  <option value={ct_name}>{ct_name}</option>
                                );
                              })} */}
                            </select>
                          </div>
                        </td>
                        {/* <td>{paymentmethod}</td>
                      <td>{contact}</td>
                      <td>{status}</td> */}
                      </tr>
                    </>
                  );
                })
              ) : (
                <div className={Orderstyles.loaderleft}>
                  <Loader />
                </div>
              )}
            </tbody>
          </table>
        </div>
        {/* <div className="table_order mb-5 ">
        <table className="table table_ord_sub ">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </div> */}
      </div>
    </>
  );
};
function mapStateToProps({ fetchdata }) {
  return {
    productlist: fetchdata.orderlist,
    categorylist: fetchdata.categorylist,
  };
}
export default connect(mapStateToProps)(Orders);
