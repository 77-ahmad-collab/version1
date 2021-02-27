import React, { useState } from "react";
import styles from "./customer.module.css";
import CustomersDetails from "./customerDetails";
import * as Rs from "react-bootstrap";

const Customers = () => {
  // const reqCustomer = CustomersDetails.filter((customer) => {
  //   return customer.trackingId === 123456;
  // });

  return (
    <div className={styles.body}>
      <div>
        <div className={styles.card}>
          <Rs.Card className={`shadow bg-white rounded`}>
            <Rs.Card.Header className={styles.cardHeader}>
              Customer Order History
            </Rs.Card.Header>
            <Rs.Card.Body>
              <Rs.Card.Title className={styles.cardTitle}>
                Customer Tracking Id: 123456
              </Rs.Card.Title>
              <Rs.Card.Text>
                <Rs.Table responsive="sm" bordered className={styles.table}>
                  <thead>
                    <tr className={styles.tblHeader}>
                      <th>Number Of Orders</th>
                      <th>Total Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {CustomersDetails.length !== 0 ? (
                      CustomersDetails.map((val) => {
                        const {
                          id,
                          trackingId,
                          name,
                          contacts,
                          totalOrder,
                          totalAmount,
                        } = val;
                        return (
                          <tr key={id}>
                            <td>{totalOrder}</td>
                            <td>$ {totalAmount}</td>
                          </tr>
                        );
                      })
                    ) : (
                      <div className={styles.noOrder}>No Order History</div>
                    )}
                  </tbody>
                </Rs.Table>
              </Rs.Card.Text>
            </Rs.Card.Body>
          </Rs.Card>
        </div>
      </div>
    </div>
  );
};

export default Customers;
