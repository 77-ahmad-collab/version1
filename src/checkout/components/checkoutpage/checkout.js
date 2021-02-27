import React, { useContext } from "react";
import styles from "./checkout.module.css";
import cartBagImage from "./images/cart bag.png";
import CheckOutDetails from "./checkoutdetails";
import AddressDetails from "./subComponents/addressDetails";
import ContactDetails from "./subComponents/contactdetails";
import DeliverySchedule from "./subComponents/deliverysch";
import AddCard from "./subComponents/addCard";
import { FoodDataContext } from "../../../components/FoodData";
const CheckOut = () => {
  const value = useContext(FoodDataContext);
  console.log(value.products);
  const [cart, setCart] = value.cart;
  return (
    <div className={styles.containercheckout}>
      <div className={`${styles.rowcheckout} ${styles.setbody}`}>
        {/* main section */}

        <div className={styles.maincheckout}>
          {/* Delivery Address */}
          <AddressDetails
            btn="Add Address"
            PlaceHolderTitle="Enter Title"
            value1="home"
            value2="office"
            PlaceHolderAddress="Enter Address"
            title="Delivery Address"
          />

          {/* Delivery Schedule */}
          <DeliverySchedule />

          {/* Contact Number */}
          <ContactDetails
            btn="Add Contact"
            PlaceHolderTitle="Enter Contact Number"
            title="Contact Number"
          />

          {/* Payment Option */}
          <AddCard btn="Add Card" title="Payment Option" />
        </div>

        {/* Side bar */}
        <div className={styles.sidecheckout}>
          <div className={styles.sidecheckoutfixed}>
            <div>
              <h3 className={styles.yourOrderHeading}>Your Order</h3>
              <img src={cartBagImage} className={styles.cartBag} alt="error" />

              <div className={styles.productshowing}>
                <h3 className="mt-3">YOUR ORDER</h3>
                {cart.length !== 0 ? (
                  cart.map((val) => {
                    const { fname, count, fprice } = val;
                    return (
                      <div className={styles.productset}>
                        <div className={`p-2 ${styles.detailofproduct}`}>
                          <h6>{fname}</h6>

                          <h4 className="">
                            QTY
                            <span className="text-success ml-2">
                              {" "}
                              : {count}
                            </span>
                          </h4>
                        </div>
                        <div className={styles.pkr}>
                          <h4 className="ml-4">PKR : </h4>
                          <h4 className="text-success  ml-1"> {fprice}</h4>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <h2 className="text-danger">
                    You haven't added any product in your cart
                  </h2>
                )}
              </div>
            </div>
            <hr></hr>
            <div className="text-muted">
              <CheckOutDetails total="Sub Total" price={value.total} />
              <CheckOutDetails total="Delivery Fee" price="0.00" />
              <CheckOutDetails total="Discount" price="0.00" />
            </div>
            <br></br>
            <CheckOutDetails total="Total (Incl. VAT)" price={value.total} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CheckOut;
