import React, { useEffect, useState } from "react";
import Orderstyles from "./Order.module.css";
import Catstyles from "../Category/Categories.module.css";
import Data from "./Data";
import Loader from "./Loader";
import axios from "axios";
import { connect, useDispatch } from "react-redux";
import { Fetchorderdata } from "../../../Apistore/Orderapidata";
import MenuBar from "../../Navbar/MenuBar";
import Sidebar from "../../Navbar/Sidebar";
import HOOO from "../../../Home.module.css";
const Orders = ({ productlist, categorylist, loader }) => {
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

  const handlechange = (orderid, catererid, e) => {
    console.log(orderid, catererid, e);
    if (e == "delivered") {
      if (window.confirm("do you confirm")) {
        axios.put(`http://damp-headland-05751.herokuapp.com/order/${orderid}`, {
          status: e,
          d_caterer_id: catererid,
        });
      }
    } else {
      axios.put(`http://damp-headland-05751.herokuapp.com/order/${orderid}`, {
        status: e,
        d_caterer_id: catererid,
      });
    }
    //console.log(pen, "com>=", com);
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
              {loader ? (
                <div className={Orderstyles.loaderleft}>
                  <Loader />
                </div>
              ) : productlist.length !== 0 ? (
                filteritem.map((val, index) => {
                  const {
                    d_caterer_id,
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
                              onChange={(e) =>
                                handlechange(
                                  order_id,
                                  d_caterer_id,
                                  e.target.value
                                )
                              }
                              class="form-control"
                              id="sel1"
                              name="productcategory"
                            >
                              {order_status == "delivered" ? (
                                ""
                              ) : (
                                <option value="pending">pending</option>
                              )}
                              <option value="delivered">Complete</option>

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
                <h3 className="text-center text-success mt-4">No orders yet</h3>
              )}
            </tbody>
          </table>
        </div>
        {/* <div className="table_order mb-5 ">
        <table className="table table_ord_sub ">
          <thead>
          <div className={Orderstyles.loaderleft}>
                  <Loader />
                </div>
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
    loader: fetchdata.orderloader,
  };
}
export default connect(mapStateToProps)(Orders);
