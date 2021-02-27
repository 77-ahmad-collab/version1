import React, { useState, useContext } from "react";
import styles from "./customer.module.css";
import * as Rs from "react-bootstrap";
import CustomersDetails from "./customerDetails";

function Apppop() {
  const [modalShowpop, setModalShowpop] = React.useState(false);

  return (
    <>
      <Rs.Button variant="primary" onClick={() => setModalShowpop(true)}>
        Join
      </Rs.Button>

      <CustomerHistory
        show={modalShowpop}
        onHide={() => setModalShowpop(false)}
      />
    </>
  );
}
export default Apppop;

function CustomerHistory(props) {
  return (
    <div className={styles.modalForm}>
      <Rs.Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        closeButton
      >
        <Rs.Modal.Body>
          <div className={styles.modalBody}>
            <h3 className={styles.header}>Welcome Back</h3>
            <span className={styles.subHeader}>
              See details of your Order by using Tracking Id
            </span>
            <form className={`${styles.formcontainer} `}>
              <input type="text" placeholder="123456" />

              <button type="button" className={`${styles.btn} button`}>
                Continue
              </button>
            </form>
          </div>
        </Rs.Modal.Body>
      </Rs.Modal>
    </div>
  );
}
