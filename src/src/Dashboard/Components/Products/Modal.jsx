import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { CLOSE } from "../../Reduxstore/Action";
import Catstyles from "../Category/Categories.module.css";
import { EDIT } from "../../Reduxstore/Action";
import axios from "axios";
const Modal = ({ modal, dat, ids }) => {
  // console.log(dat.d_caterer_id, "i am that");
  // console.log(dat.p_minamount);
  const [val, setval] = useState({
    pname: "",
    pdesc: "",
    p_minamount: 0,
  });
  const [iddetails, setiddetails] = useState({
    category_id: dat.d_category_category_id,
    d_caterer_id: dat.d_caterer_id,
  });
  //   console.log(ids.product_id, ids.id, ids.index);
  const [show, setshow] = useState(false);
  const [extra, setextra] = useState(false);

  //   console.log("modal is here");
  //   console.log(dat, typeof dat);
  //   setval({
  //     pname: dat.p_name,
  //     pdesc: dat.pdesc,
  //   });
  const formula = () => {
    setval({
      pname: dat.p_name,
      pdesc: dat.p_description,
      p_minamount: dat.p_minamount,
    });
  };
  // console.log(dat.d_caterer_id, "carter");

  useEffect(() => {
    setTimeout(() => {
      formula();
      //   console.log("formulaaaaa");
    }, 0);
  }, [modal]);
  const style = {
    backgroundColor: "red",
    borderRadius: "10px",
    padding: "2px",
    marginLeft: "10%",
    textAlign: "center",
    color: "white",
    opacity: 0.9,
    width: "80%",
  };
  //   const [modal, setmodal] = useState(false);
  const dispatch = useDispatch();

  const handleinput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setval((val) => {
      return { ...val, [name]: value };
    });
    // console.log(e.target.value);
    // console.log(val, "i am val");
  };
  const handlesubmit = () => {
    // console.log("getting clciked");
    if (val.pname && val.pdesc) {
      //   axios.post("http://damp-headland-05751.herokuapp.com/show/category", val);
      // console.log("i am creating");

      dispatch({
        type: EDIT,
        payload: {
          pname: val.pname,
          pdesc: val.pdesc,
          p_minamount: val.p_minamount,
          catid: ids.category_id,
          product_id: ids.product_id,
          dishindex: ids.index,
        },
      });
      setval({
        pname: "",
        pdesc: "",
      });
      dispatch({ type: CLOSE });
      setextra(!extra);
      axios.put("https://damp-headland-05751.herokuapp.com/products/edit", {
        product_id: ids.product_id,
        id: ids.id,
        p_name: val.pname,
        p_description: val.pdesc,
        // p_minamount: val.p_minamount,
        d_caterer_id: dat.d_caterer_id,
        category_id: iddetails.category_id,
      });
    } else {
      setshow(true);
    }
  };
  useEffect(() => {
    const mytime = setTimeout(() => {
      setshow(false);
    }, 3000);
    return () => clearTimeout(mytime);
  });
  return (
    <div
      className={`${Catstyles.modalbody} ${
        modal ? `${Catstyles.showmodal2}` : `${Catstyles.hidemodal}`
      }`}
    >
      <div
        className={`${Catstyles.headingmo} d-flex justify-content-between `}
        style={{ padding: "10px" }}
      >
        <h5 style={{ color: " #30475e" }}>Edit Items</h5>
        <span
          onClick={() => {
            dispatch({ type: CLOSE });
            setval("");
          }}
        >
          &#x2715;
        </span>
      </div>
      <div className={`${Catstyles.innermodal} p-3`}>
        {show ? <p style={style}>Please enter a value</p> : null}
        <h5 style={{ color: " #30475e" }}>Product name</h5>
        <form
          autoComplete="off"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            style={{ fontWeight: "bold" }}
            type="text"
            placeholder="Edit product name"
            className={Catstyles.input}
            onChange={handleinput}
            value={val.pname}
            name="pname"
          />
          <h5 style={{ color: " #30475e" }} className="mt-2">
            Product Description
          </h5>
          <input
            style={{ fontWeight: "bold" }}
            type="text"
            placeholder="Edit product description"
            className={Catstyles.input}
            onChange={handleinput}
            value={val.pdesc}
            name="pdesc"
          />
          <h5 style={{ color: " #30475e" }} className="mt-2">
            Product price
          </h5>
          <input
            style={{ fontWeight: "bold" }}
            type="text"
            placeholder="Edit Your product Price"
            className={Catstyles.input}
            onChange={handleinput}
            value={val.p_minamount}
            name="p_minamount"
          />
        </form>
      </div>
      <div className="footer my-3 d-flex justify-content-end mr-3">
        <button
          className="btn btn-dark mr-3"
          onClick={() => {
            dispatch({ type: CLOSE });
            setval({
              pname: "",
              pdesc: "",
            });
          }}
        >
          Close
        </button>
        <button
          className="btn btn-success"
          onClick={() => {
            handlesubmit();
          }}
        >
          Edit item
        </button>
      </div>
    </div>
  );
};
function mapStateToProps({ slider: { modal } }) {
  return { modal: modal };
}
export default connect(mapStateToProps)(Modal);
