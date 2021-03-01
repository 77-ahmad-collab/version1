import React, { useContext } from "react";
import Logo from "../src/logo.png";
import styles from "./invoice.module.css";
import InvoiceDetails from "./invoiceDetails";
import { FoodDataContext } from "./FoodData";
import * as Rs from "react-bootstrap";

const Invoice = () => {
  const { cart, total, myaddress, date } = useContext(FoodDataContext);
  console.log(cart, "i am the cart");

  return (
    <div className={styles.container}>
      <div className={styles.invoice}>
        <div style={{ minWidth: "600px" }}>
          <header>
            <Rs.Row>
              <Rs.Col>
                <div class={styles.invoiceDetails}>
                  <h1 class={styles.invoiceId}>Invoice</h1>
                  <div className={styles.date}>Invoice # GNB-101</div>
                  <div className={styles.date}>Date: {date}</div>
                </div>
              </Rs.Col>
              <Rs.Col className={styles.companyDetails}>
                <img src={Logo} className={styles.logo} alt="imageoflogo" />
              </Rs.Col>
            </Rs.Row>
          </header>
          <main>
            <div className={styles.restaurantDetails}>
              <h4>Karachi</h4>
              <div class="address">{myaddress}</div>
            </div>
            <div className={styles.newCorp}>
              <strong>Cashier:Deghjee</strong>
            </div>
            <table>
              <thead>
                <tr className={styles.thead}>
                  <th>Description</th>

                  <th>Qty</th>
                  <th>Rate</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {InvoiceDetails.length !== 0 ? (
                  cart[0].map((val) => {
                    const { fname, _id, count, fprice } = val;

                    return (
                      <tr key={_id}>
                        <td>{fname} </td>

                        <td>{count}</td>
                        <td> {fprice}</td>
                        <td className=""> {fprice * count}</td>
                      </tr>
                    );
                  })
                ) : (
                  <div>sorry no orders</div>
                )}
                {/* <tr className={styles.feesTotal}>
                  <td>fees total</td>
                  <td></td>
                  <td>11:55:00</td>
                  <td></td>
                  <td>$ 2,000</td>
                </tr> */}
                {/* <tr>
                  <td>10/28/15</td>
                  <td>Travel Charges</td>
                  <td>1</td>
                  <td>$ 47.00</td>
                  <td>$ 47,000</td>
                </tr> */}
                {/* expense total for travel */}
                <tr className={styles.expenseTotal}>
                  <td>Expense total</td>
                  <td></td>

                  <td></td>
                  <td> {total}</td>
                </tr>
              </tbody>
            </table>

            <table>
              <tbody>
                {/* <tr className={styles.feesTotal}>
                  <td>fees total</td>
                  <td></td>
                  <td>11:55:00</td>
                  <td></td>
                  <td>$ 2,000</td>
                </tr> */}
                {/* <tr>
                  <td>10/28/15</td>
                  <td>Travel Charges</td>
                  <td>1</td>
                  <td>$ 47.00</td>
                  <td>$ 47,000</td>
                </tr> */}
                {/* <tr className={styles.expenseTotal}>
                  <td>Expense total</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>$ 47,000</td>
                </tr> */}
              </tbody>
            </table>

            <table className={styles.subTotalTable}>
              <tbody>
                <tr className={styles.subTotal}>
                  <td></td>
                  <td></td>

                  <td></td>
                  <td className="text-right">Sub Total</td>
                  <td className="text-right text-success">PKR {total}</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>

                  <td></td>
                  <td className="text-right">Discounts</td>
                  <td className="text-right">-0.00</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>

                  <td></td>
                  <td className="text-right">Payments</td>
                  <td
                    // style={{ borderBottom: "3px solid black" }}
                    className="text-right"
                  >
                    -{total}
                  </td>
                </tr>
                <tr style={{ marginRight: "50px" }}>
                  <td
                    style={{
                      borderBottom: "2px solid black",
                    }}
                  ></td>
                  <td
                    style={{
                      borderBottom: "2px solid black",
                    }}
                  ></td>
                  <td
                    style={{
                      borderBottom: "2px solid black",
                    }}
                  ></td>
                  <td
                    style={{
                      borderBottom: "2px solid black",
                    }}
                  ></td>
                  <td
                    style={{
                      borderBottom: "2px solid black",
                    }}
                  ></td>
                  <td
                    style={{
                      borderBottom: "2px solid black",
                      // position: "absolute",
                      // top: "10px",
                      // marginLeft: "auto",
                    }}
                  ></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>

                  <td></td>
                  <td
                    style={{ fontWeight: "bolder", fontSize: "20px" }}
                    className={`text-right`}
                  >
                    Balance
                  </td>
                  <td
                    style={{ fontWeight: "bolder", fontSize: "20px" }}
                    className={`text-right`}
                  >
                    - 00.00
                  </td>
                </tr>
              </tbody>
            </table>
          </main>
        </div>
      </div>
    </div>
  );
};
export default Invoice;
