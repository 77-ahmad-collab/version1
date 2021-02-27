import React, { useState, useContext } from "react";
import styles from "../checkout.module.css";
import * as Rs from "react-bootstrap";
import { FoodDataContext } from "../../../../components/FoodData";
function CheckoutInfo(props) {
  const value = useContext(FoodDataContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const [address, setaddress] = useState("Enter your Delivery address Details");
  return (
    <div className="info">
      <Rs.Card className={`${styles.checkoutcard} shadow p-4 bg-white rounded`}>
        <div>
          <span className={styles.cardtitle}>
            <Rs.Badge bsPrefix className={styles.numBadge}>
              1
            </Rs.Badge>
            {props.title}
          </span>

          <span>
            <button
              className={styles.openbutton}
              onClick={handleShow}
              // style={{ float: "right" }}
            >
              + {props.btn}
            </button>
          </span>
        </div>
        <div className={styles.containerdeck}>
          <div className={styles.row}>
            <div>
              <h4>{value.myaddress}</h4>
              {/* <label className={`${styles.column} ${styles.cardinput}`}>
                <input
                  type="radio"
                  name="product"
                  className={styles.cardinputelement}
                />
                <div>
                  <div className={styles.contentcardheader}>Product A</div>
                  <div className={styles.contentcard}>
                    Product specific content
                  </div>
                </div>
              </label> */}

              {/* <label className={`${styles.column} ${styles.cardinput}`}>
                <input
                  // style={{ type: props.btn ? "radio" : "hidden" }}
                  type="radio"
                  name="product"
                  className={styles.cardinputelement}
                  onClick={handleShow}
                />

                <div>
                  <div className={styles.contentcardheader}>Product B</div>
                  <div className={styles.contentcard}>
                    Product specific content
                  </div>
                </div>
              </label> */}

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
            </div>
          </div>
        </div>
      </Rs.Card>
      <CenteredModal
        show={show}
        onhide={handleClose}
        modalTitle={props.btn}
        // onsave={saveData}
      />
    </div>
  );
}

export default CheckoutInfo;

function CenteredModal(props) {
  const [addinput, setaddinput] = useState("");
  const value = useContext(FoodDataContext);
  const { getvalue } = value;
  const submited = () => {
    props.onhide();
    if (addinput) {
      getvalue(addinput);
      setaddinput("");
    }
  };
  return (
    <Rs.Modal {...props} show={props.show} onHide={props.onhide} centered>
      <Rs.Modal.Header closeButton>
        <Rs.Modal.Title>{props.modalTitle}</Rs.Modal.Title>
      </Rs.Modal.Header>
      <Rs.Modal.Body>
        <form
          className={styles.formcontainer}
          onSubmit={(e) => e.preventDefault()}
        >
          {/* <input
            type="text"
            id="fname"
            name="fname"
            placeholder="Enter Title"
            value={props.address}
            // onChange={(e) => props.setAddress(e.target.value)}
          /> */}
          <textarea
            type="text"
            id="lname"
            name="lname"
            // class="address"
            placeholder="Enter Address"
            value={addinput}
            onChange={(e) => setaddinput(e.target.value)}
          ></textarea>

          <button
            type="submit"
            className={`${styles.btn} button`}
            onClick={submited}
          >
            {" "}
            {/**class="button" */}
            Save
          </button>
        </form>
      </Rs.Modal.Body>
    </Rs.Modal>
  );
}
