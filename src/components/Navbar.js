import React, { useState, useEffect, useContext } from "react";
import "./header.css";
import PhoneInput from "react-phone-number-input";
import styles from "./logIn.module.css";
import logo from "../assests/logo.jpeg";
import * as Rs from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import "./loginstyles.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Login from "../Login/Login";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import { FoodDataContext } from "./FoodData";
export default function Navbar() {
  const [modalShow, setModalShow] = React.useState(false);
  const [signUpShow, setSignUp] = React.useState(false);
  const [modalShowpop, setModalShowpop] = React.useState(false);
  const { acessid, acess } = useContext(FoodDataContext);
  useEffect(() => {
    acessid(localStorage.getItem("token"));
    console.log("my working is okay");
  }, [acess, localStorage.getItem("token")]);
  // const [, setlogin] = useState(true);
  return (
    <>
      <nav>
        <input id="nav-toggle" type="checkbox" />
        <div class="logo">
          <img src={logo} alt="logoimage" />
        </div>
        <ul class="links">
          {/* <li className="hiddennav">
            <a href="#home">Home</a>
          </li>
          <li className="hiddennav">
            <a href="#home">Profile</a>
          </li>
          <li className="hiddennav">
            <a href="#home">Checkout</a>
          </li>
          <li className="hiddennav">
            <a href="#home">Checkout Alternative</a>
          </li>
          <li className="hiddennav">
            <a href="#home">Your order</a>
          </li>
          <li className="hiddennav">
            <a href="#home">Order Invoice</a>
          </li>
          <li className="hiddennav">
            <a href="#home">Terms and Services</a>
          </li>
          <li className="hiddennav">
            <a href="#home">Privacy Policy</a>
          </li> */}
          {/* 
          <li>
            <a href="#home">Offer</a>
          </li>
          <li>
            <a href="#about">❔ Need Help</a>
          </li> */}
          <li>
            {/* <div class="lang-menu">
              <div class="selected-lang">English</div>
              <ul>
                <li>
                  <a href="#" class="de">
                    German
                  </a>
                </li>
                <li>
                  <a href="" class="en">
                    English
                  </a>
                </li>
                <li>
                  <a href="" class="fr">
                    French
                  </a>
                </li>
                <li>
                  <a href="" class="ar">
                    Arabic
                  </a>
                </li>
              </ul>
            </div> */}
          </li>
          <li>
            {acess == 401 ? (
              <a
                type="button"
                href="#work"
                style={{
                  backgroundColor: "#009E7F",
                  paddingTop: 10,
                  paddingLeft: 15,
                  paddingRight: 15,
                  paddingBottom: 10,
                  color: "white",
                  borderRadius: 5,
                }}
                onClick={() => {
                  localStorage.setItem("token", 401);
                  acessid(localStorage.getItem("token"));
                  console.log(localStorage.getItem("token"), "join ");
                  setModalShow(true);
                }}
              >
                Join
              </a>
            ) : (
              <NavLink to="/dashboard">
                <a
                  type="button"
                  href="#work"
                  style={{
                    backgroundColor: "#009E7F",
                    paddingTop: 10,
                    paddingLeft: 15,
                    paddingRight: 15,
                    paddingBottom: 10,
                    color: "white",
                    borderRadius: 5,
                  }}
                  // onClick={() => {
                  //   localStorage.setItem("token", 401);
                  //   acessid(localStorage.getItem("token"));
                  //   console.log(localStorage.getItem("token"), "join ");
                  //   setModalShow(true);
                  // }}
                >
                  Dashboard
                </a>
              </NavLink>
            )}
          </li>
          {acess == 401 ? (
            ""
          ) : (
            <li>
              <a
                type="button"
                href="#work"
                style={{
                  backgroundColor: "#009E7F",
                  paddingTop: 10,
                  paddingLeft: 15,
                  paddingRight: 15,
                  paddingBottom: 10,
                  color: "white",
                  borderRadius: 5,
                }}
                onClick={() => {
                  localStorage.setItem("token", 401);
                  acessid(localStorage.getItem("token"));
                  console.log(localStorage.getItem("token"), "join ");
                  axios.post(
                    "http://damp-headland-05751.herokuapp.com/user/logout"
                  );
                  // setModalShow(true);
                }}
              >
                Logout
              </a>
            </li>
          )}
          {/* <li>
            <a
              type="button"
              href="#work"
              style={{
                backgroundColor: "#009E7F",
                paddingTop: 10,
                paddingLeft: 15,
                paddingRight: 15,
                paddingBottom: 10,
                color: "white",
                borderRadius: 5,
              }}
              onClick={() => setModalShowpop(true)}
            >
              History
            </a>
          </li> */}
        </ul>
        <label
          for="nav-toggle"
          // style={{ border: "2px solid red", zIndex: "1" }}
          class="icon-burger"
        >
          {/* <GiHamburgerMenu /> */}
          <div class="line" style={{ zIndex: "30" }}></div>
          <div class="line" style={{ zIndex: "30" }}></div>
          <div class="line" style={{ zIndex: "30" }}></div>
        </label>
      </nav>
      <div className="body_aaa">
        <LogIn
          show={modalShow}
          onmyShow={() => setSignUp(true)}
          onHide={() => setModalShow(false)}
        />
        <SignUp
          show={signUpShow}
          onmysignup={() => setModalShow(true)}
          onHide={() => setSignUp(false)}
        />

        <CustomerHistory
          show={modalShowpop}
          onHide={() => setModalShowpop(false)}
        />
      </div>
    </>
  );
}
function LogIn(props) {
  const context = useContext(FoodDataContext);
  const { acessid, acess, fcartrerid, cartrerid } = context;
  const [toggle, settoggle] = useState(false);
  const [value, setvalue] = useState({
    email: "",
    password: "",
  });
  const [pass, setpass] = useState(false);
  const handleinput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setvalue((val) => {
      return { ...val, [name]: value };
    });
  };
  console.log(value);
  console.log(localStorage.getItem("token"));
  // useEffect(() => {
  //   const local = localStorage.getItem("token");
  //   // if (local !== 401) {
  //   //   console.log("i am authorized");
  //   //   localStorage.setItem("token", acessid);
  //   // } else {
  //   //   console.log("i am not");
  //   // }
  //   console.log(local, "i am local");
  // }, [toggle]);
  const [show, setshow] = useState(false);
  useEffect(() => {
    const tt = setTimeout(() => {
      setshow(false);
    }, 3000);
    return () => clearTimeout(tt);
  }, [show]);
  const [btn, setbtn] = useState(false);
  const handlesubmit = (e) => {
    console.log("working good");
    e.preventDefault();
    const options = {
      method: "POST",
      data: {
        email: value.email,
        password: value.password,
      },
      // headers: {
      //   "Content-Type": "application/x-www-form-urlencoded",
      // },
      // Authorization: {
      //   email: value.email,
      //   password: value.password,
      // },
      url: "http://damp-headland-05751.herokuapp.com/user/login",
    };
    const callme = async () => {
      const response = await axios(options)
        .then((response) => {
          console.log(response.data);
          fcartrerid(response.data);
          console.log(cartrerid, "i ma the cartere id");
          localStorage.setItem("token", response.data);
          acessid(response.data);

          console.log(localStorage.getItem("token"), "i am token");
          setTimeout(() => {
            localStorage.setItem("token", 401);
            console.log("timeout executed");
            // return () => clearTimeout(tt);
          }, 86400000);
          // localStorage.setItem(response.data);
          // acessid(response.data);
        })
        .catch((error) => {
          console.log(error);
          setshow(true);

          localStorage.setItem("token", 401);
          console.log(localStorage.getItem("token"), "i am token i error");
          // localStorage.setItem(error.response.status);
          acessid(401);
        });
      settoggle(!toggle);
      // console.log(response.data);
    };
    callme();
  };
  return (
    <div className={styles.modalForm}>
      <Rs.Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Rs.Modal.Body>
          <div className={styles.modalBody}>
            <h3 className={styles.header}>Welcome Back</h3>
            <span className={styles.subHeader}>
              Login with your email and password
            </span>
            <form
              className={`${styles.formcontainer} `}
              autoComplete="off"
              method="POST"
              // onSubmit={(e) => {
              // e.preventDefault();
              // const options = {
              //   method: "POST",
              //   data: {
              //     email: value.email,
              //     password: value.password,
              //   },
              //   // headers: {
              //   //   "Content-Type": "application/x-www-form-urlencoded",
              //   // },
              //   // Authorization: {
              //   //   email: value.email,
              //   //   password: value.password,
              //   // },
              //   url: "http://damp-headland-05751.herokuapp.com/user/login",
              // };
              // const callme = async () => {
              //   const response = await axios(options)
              //     .then((response) => {
              //       console.log(response.data);
              //       localStorage.setItem("token", response.data);
              //       acessid(response.data);
              //       console.log(localStorage.getItem("token"), "i am token");
              //       setTimeout(() => {
              //         localStorage.setItem("token", 401);
              //         console.log("timeout executed");
              //         // return () => clearTimeout(tt);
              //       }, 86400000);
              //       // localStorage.setItem(response.data);
              //       // acessid(response.data);
              //     })
              //     .catch((error) => {
              //       console.log(error);
              //       setshow(true);

              //       localStorage.setItem("token", error.response.status);
              //       console.log(
              //         localStorage.getItem("token"),
              //         "i am token i error"
              //       );
              //       // localStorage.setItem(error.response.status);
              //       acessid(error.response.status);
              //     });
              //   settoggle(!toggle);
              //   // console.log(response.data);
              // };
              // callme();
              // }}
            >
              {show && (
                <p className="text-danger">*Incorrect Username and password</p>
              )}
              <label htmlFor="mail">
                <h6 className="mr-auto">E-Mail</h6>
              </label>

              <input
                type="email"
                id="mail"
                name="email"
                onChange={handleinput}
                placeholder="someone@gmail.com"
                required
                // value={val.email}
              />
              <label htmlFor="password">
                <h6 className="mr-auto">Password</h6>
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                onChange={handleinput}
                name="password"
                // value={val.pass}
                className={`${styles.success}`}
                required
              />

              {/* {pass ? (
                <Link to="/dash">
                  <button type="submit" className={`${styles.btn} button`}>
                    Continue
                  </button>
                </Link>
              ) : (
                <button type="submit" className={`${styles.btn} button`}>
                  Continuettt
                </button>
              )} */}
              {/* <Link to="/dash"> */}

              <button
                type="button"
                onClick={handlesubmit}
                className={`${styles.btn} button`}
              >
                <Link to="/dashboard">
                  <h5
                    className="text-white d-flex justify-content-center align-items-center"
                    style={{
                      textDecoration: "none",
                      // marginTop: "10px",
                      // border: "2px solid red",
                      height: "100%",
                      marginRight: "20px",
                      width: "100%",
                    }}
                  >
                    Continue
                  </h5>
                </Link>
              </button>
            </form>

            {/* <div className={`${styles.or}`}>
              <span>or</span>
            </div>

            <button
              type="button"
              className={`${styles.btn}  ${styles.fbBtn} button`}
            >
              <FontAwesomeIcon icon={faFacebookF} /> Continue With Facebook
            </button>

            <button
              type="button"
              className={`${styles.btn} ${styles.googleBtn} button`}
            >
              <FontAwesomeIcon icon={faGoogle} /> Continue With Google
            </button> */}

            <p className={`${styles.footer} mt-3`}>
              Don't have any account?
              <button
                className={styles.signUp}
                onClick={() => {
                  props.onmyShow();
                  props.onHide();
                }}
              >
                Sign Up
              </button>
            </p>
          </div>
        </Rs.Modal.Body>

        <p className={styles.reset}>
          Forgot your password?
          <button className={styles.signUp}>Reset It</button>
        </p>
      </Rs.Modal>
    </div>
  );
}

function SignUp(props) {
  const [suc, setsuccess] = useState(true);
  const [val, setval] = useState({
    name: "",
    contactno: "",
    address: "",
    email: "",
    pass: "",
    repass: "",
  });
  const handleinput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(val.pass, "val.pass and >=", val.repass);

    setval((call) => {
      return { ...call, [name]: value };
    });
  };
  const [len, setlen] = useState(true);

  useEffect(() => {
    // console.log("ia m running on every pas change");
    if (val.pass !== val.repass) {
      setsuccess(false);
    } else {
      setsuccess(true);
    }
    if (val.pass.length >= 8) {
      console.log("length is greater");
      setlen(false);
    } else {
      console.log("not greater");
      setlen(true);
    }
  }, [val.pass, val.repass]);
  useEffect(() => {
    if (val.pass.length >= 8) {
      console.log("length is greater");
      setlen(false);
    } else {
      console.log("not greater");
      setlen(false);
    }
  }, []);
  const [response, setresponse] = useState("");
  const [showme, setshowme] = useState(false);
  const handlesubmit = (e) => {
    const addd = axios
      .post("http://damp-headland-05751.herokuapp.com/user/register", {
        ca_name: val.name,
        ca_mobileno: val.contactno,
        ca_address: val.address,
        ca_email: val.email,
        ca_passwd: val.pass,
      })
      .then(
        (response) => {
          console.log(response.data);
          setresponse(response.data);
        }
        // (error) => {
        //   console.log(error, "i am error ");
        // }
      );

    // axios.get("testcarter@example.com"")
    console.log(addd, "add");
    e.preventDefault();
    console.log(val);
    setval({
      name: "",
      contactno: "",
      address: "",
      email: "",
      pass: "",
      repass: "",
    });
    props.onHide();
  };
  useEffect(() => {
    if (response === "FAIL") {
      setshowme(true);
    } else {
      setshowme(false);
    }
    // console.log("i am ru");
  }, [response]);
  // console.log(val);
  return (
    <div className={styles.modalForm}>
      <Rs.Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Rs.Modal.Body>
          <div className={styles.modalBody}>
            <h3 className={`${styles.header} text-center`}>Sign Up</h3>
            <span className={`${styles.subHeader} text-center`}>
              By signing up, you agree to Pickbazar's
            </span>
            <form
              className={`${styles.formcontainer} `}
              autoComplete="off"
              onSubmit={handlesubmit}
            >
              <label htmlFor="name">
                <h6 className="mr-auto">Name</h6>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={handleinput}
                value={val.name}
                placeholder="Enter your name"
                required
              />
              <label htmlFor="Contact No">
                <h6 className="mr-auto">Contact No</h6>
              </label>
              <input
                type="tel"
                pattern="[0-9]{11}"
                id="Contact No"
                name="contactno"
                onChange={handleinput}
                placeholder="0321-9878987"
                required
                value={val.contactno}
              />
              <label htmlFor="address">
                <h6 className="mr-auto">Address</h6>
              </label>
              <input
                type="text"
                id="addrres"
                name="address"
                onChange={handleinput}
                placeholder="Enter your Address details"
                required
                value={val.address}
              />
              <label htmlFor="mail">
                <h6 className="mr-auto">E-Mail</h6>
              </label>

              <input
                type="email"
                id="mail"
                name="email"
                onChange={handleinput}
                placeholder="someone@gmail.com"
                required
                value={val.email}
              />
              <label htmlFor="password">
                <h6 className="mr-auto">Password</h6>
              </label>
              {len ? (
                <p className="text-danger">Minimum length of password is 8</p>
              ) : null}

              <input
                type="password"
                id="password"
                placeholder="Password"
                onChange={handleinput}
                name="pass"
                value={val.pass}
                className={`${suc ? `${styles.success}` : `${styles.fail}`}`}
                required
              />
              <label htmlFor="repassword">
                <h6 className="mr-auto">Confirm Password</h6>
              </label>
              <input
                type="password"
                id="repassword"
                onChange={handleinput}
                name="repass"
                value={val.respass}
                placeholder="Confirm Your password"
                className={`${suc ? `${styles.success}` : `${styles.fail}`}`}
              />
              <p className="text-danger">
                {suc ? "" : `Password doesn't matched`}
              </p>

              <p className={styles.termCond}>
                By signing up, you agree to Pickbazar's{" "}
                <a href="/">Terms & Condtion</a>
              </p>
              {showme ? (
                <p className="text-danger">The email already exists</p>
              ) : (
                ""
              )}
              {suc ? (
                <button
                  type="submit"
                  onSubmit={handlesubmit}
                  className={`${styles.btn} button`}
                >
                  Continue
                </button>
              ) : (
                <button
                  type="submit"
                  onSubmit={(e) => e.preventDefault()}
                  onClick={(e) => e.preventDefault()}
                  className={`${styles.btn} button`}
                >
                  Continuettt
                </button>
              )}
            </form>

            {/* <div className={`${styles.or}`}>
              <span>or</span>
            </div> */}
            {/* <button
              type="button"
              className={`${styles.btn}  ${styles.fbBtn} button`}
            >
              <FontAwesomeIcon icon={faFacebookF} /> Continue With Facebook
            </button> */}

            {/* <button
              type="button"
              className={`${styles.btn} ${styles.googleBtn} button`}
            >
              <FontAwesomeIcon icon={faGoogle} /> Continue With Google
            </button> */}

            <p className={`${styles.footer} ${styles.signupFooter}`}>
              Already have an account?
              <button
                onClick={() => {
                  props.onmysignup();
                  props.onHide();
                }}
                className={styles.signUp}
              >
                Login
              </button>
            </p>
          </div>
        </Rs.Modal.Body>
      </Rs.Modal>
    </div>
  );
}

function CustomerHistory(props) {
  const [value, setvalue] = useState("");
  console.log(value);
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
              <input
                type="text"
                placeholder="123456"
                onChange={(e) => setvalue(e.target.value)}
              />

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
