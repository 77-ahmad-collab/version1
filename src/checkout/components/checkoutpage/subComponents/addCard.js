import React, { useState, useContext, useEffect } from "react";
import styles from "../checkout.module.css";
import * as Rs from "react-bootstrap";
import { FoodDataContext } from "../../../../components/FoodData";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
function CheckoutInfo(props) {
  const valuepart = useContext(FoodDataContext);
  const {
    time,
    myaddress,
    contact,
    getcashmethod,
    payment,
    getvalue,
    getcontact,
    gettime,
    date,
    total,
    deltime,
  } = valuepart;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showResults, setShowResults] = React.useState(false);
  const onclick = () => setShowResults(true);
  const hour12 = 43200000;
  const handlepayment = (e) => {
    console.log("you are handling payment");
    getcashmethod(e.target.value);
  };
  const [proceedpay, setproceedpay] = useState(false);
  useEffect(() => {
    if (time >= hour12 && myaddress && contact && payment) {
      setproceedpay(true);
      console.log(time, myaddress, payment, contact);
      console.log("procedd is true");
    } else {
      console.log("procedd is false");
      setproceedpay(false);
      console.log(time, myaddress, payment, contact, "in else");
    }
  }, [myaddress, time, payment, contact]);
  const handleproceedbtn = () => {
    console.log(
      time,
      myaddress,
      payment,
      contact,
      total,
      deltime,
      "Proceed btn"
    );
    axios.post("http://damp-headland-05751.herokuapp.com/order/place", {
      address: myaddress,
      time: deltime,
      contact: contact,
      paymentmethod: payment,
      amount: total,
      delivery_date: date,
    });
    getcashmethod("");
    getvalue("");
    getcontact("");
    gettime("");
  };
  return (
    <div className="info">
      <Rs.Card className={`${styles.checkoutcard} shadow p-4 bg-white rounded`}>
        <div>
          <span className={styles.cardtitle}>
            <Rs.Badge bsPrefix className={styles.numBadge}>
              4
            </Rs.Badge>
            {props.title}
          </span>

          <span>
            {/* <button
              className={styles.openbutton}
              onClick={handleShow}
              style={{ display: !props.btn && "none", float: "right" }}
            >
              + {props.btn}
            </button> */}
          </span>
        </div>
        <select
          className="form-select w-75 mx-auto "
          aria-label="Default select example"
          onChange={handlepayment}
        >
          <option selected>Select Your Desired Choice</option>
          <option value="Payment Through Easy paisa">
            Payment Through Easy paisa
          </option>
          <option value="Payment Through Cash">Payment Through Cash</option>
        </select>
        <div className={styles.containerdeck}>
          <div className={styles.row}>
            <div className={styles.radioGroup}>
              <label className={`${styles.column} ${styles.cardinput}`}>
                <input
                  type="radio"
                  name="product"
                  className={styles.cardinputelement}
                />

                <div className={styles.checkborder}>
                  <div className={styles.contentcardheader}>
                    Payment Through Easypaisa
                  </div>
                  <div className={styles.contentcard}>
                    Contact Details <br />
                    Muhammad Asad : 03321-28383833
                  </div>
                </div>
              </label>

              <label className={`${styles.column} ${styles.cardinput}`}>
                <input
                  // style={{ type: props.btn ? "radio" : "hidden" }}
                  type="radio"
                  name="product"
                  className={styles.cardinputelement}
                  // onClick={handleShow}
                />

                <div>
                  <div className={styles.contentcardheader}>
                    Payment On Delivery
                  </div>
                  <div className={styles.contentcard}>
                    Pay the Bills on Door
                  </div>
                </div>
              </label>

              {/* <label className={`${styles.column} ${styles.cardinput}`}>
                <input
                  type="radio"
                  name="product"
                  className={styles.cardinputelement}
                  onClick={handleShow} //handleShow(ss,id)
                />

                <div>
                  <div className={styles.contentcardheader}>product B</div>
                  <div className={styles.contentcard}>
                    Product specific content
                  </div>
                </div>
              </label> */}

              <div>
                <button className={styles.voucher} onClick={onclick}>
                  Do you have a voucher?
                </button>
                {showResults ? <Results /> : null}
              </div>
              <div
                className="text-muted"
                style={{ margin: "20px", fontSize: "13px" }}
              >
                By making this purchase you agree to our{" "}
                <span style={{ color: "red" }}>terms and conditions</span>.
              </div>
              {/* {if(time <=hour12 && myaddress &&)} */}
              {proceedpay ? (
                <NavLink to="/fooddetails/appcheckout/done" exact>
                  <Rs.Button
                    variant="secondary"
                    size="lg"
                    block
                    onClick={handleproceedbtn}
                  >
                    Proceed Checkout
                  </Rs.Button>
                </NavLink>
              ) : (
                // <NavLink to="/fooddetails/appcheckout/done" exact>
                //   <Rs.Button
                //     variant="secondary"
                //     size="lg"
                //     block
                //     onClick={handleproceedbtn}
                //   >
                //     Proceed Checkout
                //   </Rs.Button>
                // </NavLink>
                <Rs.Button variant="secondary" size="md" block disabled>
                  {/* Minimum Delivery Time must be 12 hours */}
                  {/* <br /> */}
                  *Fill all respective fields
                </Rs.Button>
              )}
            </div>
          </div>
        </div>
      </Rs.Card>
      <CenteredModal show={show} onhide={handleClose} modalTitle={props.btn} />
    </div>
  );
}

export default CheckoutInfo;

function CenteredModal(props) {
  return (
    <Rs.Modal {...props} show={props.show} onHide={props.onhide} centered>
      <Rs.Modal.Header closeButton>
        <Rs.Modal.Title>Enter Card Info</Rs.Modal.Title>
      </Rs.Modal.Header>
      <Rs.Modal.Body>
        <div className={styles.formcontainer}>
          <input
            type="text"
            id="fname"
            name="fname"
            placeholder="Card Number"
          />

          <button
            type="submit"
            className={styles.payBtn}
            onClick={props.onsave}
          >
            Pay Now
          </button>
        </div>
      </Rs.Modal.Body>
    </Rs.Modal>
  );
}

const Results = () => (
  <div className="results">
    <input
      type="text"
      placeholder="Enter Voucher Code"
      className={styles.vouchercodeinput}
    />
    <button type="submit" className={styles.applyBtn}>
      Apply
    </button>
  </div>
);
