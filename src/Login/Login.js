// import React, { useState } from "react";
// // import styles from "./logIn.module.css";
// import * as Rs from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
// import { faGoogle } from "@fortawesome/free-brands-svg-icons";

// function App() {
//   const [modalShow, setModalShow] = React.useState(false);
//   const [signUpShow, setSignUp] = React.useState(false);

//   return (
//     <>
//       <Rs.Button variant="primary" onClick={() => setModalShow(true)}>
//         Join
//       </Rs.Button>
//       <Rs.Button variant="primary" onClick={() => setSignUp(true)}>
//         SignUp
//       </Rs.Button>

//       <LogIn show={modalShow} onHide={() => setModalShow(false)} />
//       <SignUp show={signUpShow} onHide={() => setSignUp(false)} />
//     </>
//   );
// }
// export default App;

// function LogIn(props) {
//   return (
//     <div className={styles.modalForm}>
//       <Rs.Modal
//         {...props}
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//       >
//         <Rs.Modal.Body>
//           <div className={styles.modalBody}>
//             <h3 className={styles.header}>Welcome Back</h3>
//             <span className={styles.subHeader}>
//               Login with your email and password
//             </span>
//             <form className={`${styles.formcontainer} `}>
//               <input type="text" placeholder="demo@demo.com" />
//               <input type="text" placeholder="demo" />

//               <button type="button" className={`${styles.btn} button`}>
//                 Continue
//               </button>
//             </form>

//             <div className={`${styles.or}`}>
//               <span>or</span>
//             </div>

//             <button
//               type="button"
//               className={`${styles.btn}  ${styles.fbBtn} button`}
//             >
//               <FontAwesomeIcon icon={faFacebookF} /> Continue With Facebook
//             </button>

//             <button
//               type="button"
//               className={`${styles.btn} ${styles.googleBtn} button`}
//             >
//               <FontAwesomeIcon icon={faGoogle} /> Continue With Google
//             </button>

//             <p className={styles.footer}>
//               Don't have any account?
//               <button className={styles.signUp} onClick={props.signup}>
//                 Sign Up
//               </button>
//             </p>
//           </div>
//         </Rs.Modal.Body>

//         <p className={styles.reset}>
//           Forgot your password?
//           <button className={styles.signUp}>Reset It</button>
//         </p>
//       </Rs.Modal>
//     </div>
//   );
// }

// function SignUp(props) {
//   return (
//     <div className={styles.modalForm}>
//       <Rs.Modal
//         {...props}
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//       >
//         <Rs.Modal.Body>
//           <div className={styles.modalBody}>
//             <h3 className={styles.header}>Sign Up</h3>
//             <span className={styles.subHeader}>
//               By signing up, you agree to Pickbazar's
//             </span>
//             <form className={`${styles.formcontainer} `}>
//               <input type="text" placeholder="demo@demo.com" />
//               <input type="text" placeholder="demo" />

//               <p className={styles.termCond}>
//                 By signing up, you agree to Pickbazar's{" "}
//                 <a href="/">Terms & Condtion</a>
//               </p>

//               <button type="button" className={`${styles.btn} button`}>
//                 Continue
//               </button>
//             </form>

//             <div className={`${styles.or}`}>
//               <span>or</span>
//             </div>
//             <button
//               type="button"
//               className={`${styles.btn}  ${styles.fbBtn} button`}
//             >
//               <FontAwesomeIcon icon={faFacebookF} /> Continue With Facebook
//             </button>

//             <button
//               type="button"
//               className={`${styles.btn} ${styles.googleBtn} button`}
//             >
//               <FontAwesomeIcon icon={faGoogle} /> Continue With Google
//             </button>

//             <p className={`${styles.footer} ${styles.signupFooter}`}>
//               Already have an account?
//               <button className={styles.signUp}>Login</button>
//             </p>
//           </div>
//         </Rs.Modal.Body>
//       </Rs.Modal>
//     </div>
//   );
// }
