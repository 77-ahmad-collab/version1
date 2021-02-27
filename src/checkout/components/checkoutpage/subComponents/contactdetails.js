import React, { useState, useContext } from "react";
import styles from "../checkout.module.css";
import * as Rs from "react-bootstrap";
import { FoodDataContext } from "../../../../components/FoodData";
function CheckoutInfo(props) {
  const value = useContext(FoodDataContext);
  const { contact } = value;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="info">
      <Rs.Card className={`${styles.checkoutcard} shadow p-4 bg-white rounded`}>
        {/**className={styles.checkout-card} */}
        <div>
          <span className={styles.cardtitle}>
            <Rs.Badge bsPrefix className={styles.numBadge}>
              3
            </Rs.Badge>
            {props.title}
          </span>

          <span>
            <button
              className={styles.openbutton}
              onClick={handleShow}
              style={{ display: !props.btn && "none", float: "right" }}
            >
              + {props.btn}
            </button>
          </span>
        </div>
        <div className={styles.containerdeck}>
          <div className={styles.row}>
            <div className={styles.radioGroup}>
              <h2>{contact}</h2>
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
      <CenteredModal show={show} onhide={handleClose} modalTitle={props.btn} />
    </div>
  );
}

export default CheckoutInfo;

function CenteredModal(props) {
  const value = useContext(FoodDataContext);
  const { getcontact } = value;
  const [write, setwrite] = useState("");
  const handlesubmit = () => {
    if (write) {
      getcontact(write);
      props.onhide();
      setwrite("");
    }
  };
  return (
    <Rs.Modal {...props} show={props.show} onHide={props.onhide} centered>
      <Rs.Modal.Header closeButton>
        <Rs.Modal.Title>{props.modalTitle}</Rs.Modal.Title>
      </Rs.Modal.Header>
      <Rs.Modal.Body>
        <form className={styles.formcontainer} autoComplete="off">
          <input
            type="text"
            id="fname"
            name="fname"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            required
            placeholder="Enter Phone Number"
            onChange={(e) => setwrite(e.target.value)}
          />
          <br />
          <button
            type="submit"
            className={`${styles.btn} button`}
            onClick={handlesubmit}
          >
            Save
          </button>
        </form>
      </Rs.Modal.Body>
    </Rs.Modal>
  );
}
