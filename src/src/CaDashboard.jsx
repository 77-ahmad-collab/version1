import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import MenuBar from "./Dashboard/Navbar/MenuBar";
import Sidebar from "./Dashboard/Navbar/Sidebar";
import Dashboard from "./Dashboard/Components/Dashboard/Dashboard";
// import { createStore, combineReducers, applyMiddleware } from "redux";
// import { Provider } from "react-redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import SliderReducer from "./Dashboard/Reduxstore/SliderReducer";
// import AddproductReducer from "./Dashboard/Reduxstore/AddproductReducer";
// import FetchReducer from "./Dashboard/Reduxstore/FetchReducer";
// import CouponPostReducer from "./Dashboard/Reduxstore/CouponPostReducer";
// // import logger from "redux-logger";
// // import Thunk from "redux-thunk";
// const mymiddleware = (store) => (next) => (action) => {
//   console.log("i am setting up middleware");
//   return next(action);
// };
// const store = createStore(
//   combineReducers({
//     slider: SliderReducer,
//     addslider: AddproductReducer,
//     fetchdata: FetchReducer,
//     postdata: CouponPostReducer,
//   }),
//   composeWithDevTools(applyMiddleware(Thunk))
// );
const CaDashboard = () => {
  return (
    <>
      {/* <Provider store={store}> */}
      {/* <MenuBar />
      <Sidebar /> */}
      <Dashboard />
      <App />
    </>
    // </Provider>
  );
};
export default CaDashboard;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
