import React, { useEffect, useState } from "react";
// import Coupondata from "./Couponsdata";
import "./Coupons.css";
import Catstyles from "../Category/Categories.module.css";
import Orderstyles from "../Orders/Order.module.css";
import Homeee from "../../../Home.module.css";
import { connect, useDispatch } from "react-redux";
import { OPEN } from "../../Reduxstore/Action";
import Createcompaign from "./Createcompaign";
import Loader from "../Orders/Loader";
import { Fetchcoupondata } from "../../../Apistore/Couponsapidata";
import MenuBar from "../../Navbar/MenuBar";
import Sidebar from "../../Navbar/Sidebar";
const Coupons = ({ add, coupondata, loader }) => {
  // const [listdata, setlistdata] = useState(Coupondata);
  const [mycoupondata, setcoupondata] = useState(coupondata);
  const [value, setvalue] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Fetchcoupondata());
  }, []);
  useEffect(() => {
    // console.log(coupondata, "copon api data in useeffect");
    setcoupondata(coupondata);
  }, [coupondata]);
  let filteritem = mycoupondata.filter((contacts) => {
    return contacts.coupon_code.indexOf(value.toLowerCase()) !== -1;
  });
  // console.log(mycoupondata[0], "coupon data in state");
  ////////---ed of logic
  const handleinput = (e) => {
    setvalue(e.target.value.trim());
  };
  // console.log(value);
  // console.log(filteritem, "filtered item");
  return (
    <>
      <MenuBar />
      <Sidebar />
      {/* //start of main body */}
      <div className={`${Homeee.setbody} ${Catstyles.category_body} `}>
        {/* start of first box */}
        <div className={` ${Catstyles.header_body} ${Catstyles.body_head} `}>
          <div className=" ml-4">
            <h3 className="">Campaigns</h3>
          </div>
          {/* <div className="select_box">
          <select className="select" id="inputGroupSelect04">
            <option selected>Status</option>
            <option value="active">Active</option>
            <option value="revoked">Revoked</option>
          </select>
        </div> */}

          <div className="">
            <form>
              <input
                type="text"
                className={`form-control ${Catstyles.cat_input}`}
                placeholder="EX: Search By Code"
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                onChange={handleinput}
                value={value}
              ></input>
            </form>
          </div>
          <div className="">
            <button className={Catstyles.add_catbtn} onClick={add}>
              Create Compaigns
            </button>
          </div>
        </div>
        {/* end of first box */}
        {/* start of 2nd box */}
        <div className={` ${Orderstyles.setwidth}`}>
          <table className={`table table-bordered ${Orderstyles.loadordertab}`}>
            <thead>
              <tr>
                <th>Id</th>
                <th>Coupon Name</th>
                <th>Code</th>
                <th> Remaining Coupon</th>
                <th>Expiration Date</th>
                <th>Create Date</th>
              </tr>
            </thead>
            <tbody>
              {loader ? (
                <div className={Orderstyles.loaderleft}>
                  <Loader />
                </div>
              ) : coupondata.length !== 0 ? (
                filteritem.map((val, index) => {
                  const {
                    coupon_id,
                    title,
                    end_date,
                    coupon_code,
                    coupon_count,
                    start_date,
                  } = val;
                  const mydate = new Date(start_date).toLocaleDateString();
                  // const mydate = new Date(start_date).toLocaleDateString();
                  // `${(remainingcoupon / totalcoupon) * 100}%`
                  return (
                    <tr key={index}>
                      <td>{coupon_id}</td>
                      <td>{title}</td>
                      <td>{coupon_code}</td>
                      <td>
                        <div className="rem_coup">
                          <div
                            className="color_coup"
                            style={{
                              width: `${20}%`,
                            }}
                          ></div>
                        </div>
                        <br />
                        {`${coupon_count} codes remaining`}
                      </td>
                      <td>{end_date}</td>
                      <td>{mydate}</td>
                    </tr>
                  );
                })
              ) : (
                <h3 className="text-center text-success mt-4">
                  You dont have any coupons yet
                </h3>
              )}
            </tbody>
          </table>
        </div>
        {/* end of 2nd box */}
        <Createcompaign />
      </div>
    </>
  );
};
function mapStateToProps({ slider: { showslider }, fetchdata }) {
  return {
    myshowslider: showslider,
    coupondata: fetchdata.couponlist,
    loader: fetchdata.couploader,
  };
}
function mapDispatchToProps(dispatch) {
  return { add: () => dispatch({ type: OPEN }) };
}
export default connect(mapStateToProps, mapDispatchToProps)(Coupons);
