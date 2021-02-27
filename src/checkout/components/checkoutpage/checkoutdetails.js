import React from "react";
import styles from "./checkout.module.css";

function CartDetails(props) {
  return (
    <div>
      <div className={styles.flexcontainer}>
        <div className={styles.flexitemleft}>{props.total}</div>
        <div className={styles.flexitemright}>PKR: {props.price}</div>
      </div>
    </div>
  );
}

export default CartDetails;
