import React, { useContext, useEffect, useState } from "react";
import Catstyles from "./Categories.module.css";
import { connect, useDispatch } from "react-redux";
import Homeazaz from "../../../Home.module.css";
import AddCategory from "./AddCategory";
import { OPEN } from "../../Reduxstore/Action";
//import { HiOutlinePlus } from "react-icons/hi";
//import Selectbox from "./Select";
import Modal from "./Modal";
import { Fetchcategorydata } from "../../../Apistore/Categoryapidata";
// import Customersdata from "./Data";
// import { header } from "./style";
import Loader from "./Loader";
import MenuBar from "../../Navbar/MenuBar";
// import { FoodDataContext } from "../../../../components/FoodData";
import Sidebar from "../../Navbar/Sidebar";
const Categories = ({ add, categorylist, myshowslider, loader }) => {
  const [value, setvalue] = useState("");
  const [modal, setmodal] = useState(true);
  // const { loader } = useContext(FoodDataContext);
  const [categorydata, setcategorydata] = useState(categorylist);
  // const [listdata, setlistdata] = useState(Coupondata);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Fetchcategorydata());
  }, []);
  useEffect(() => {
    // console.log(categorylist, "i am the category data in use effect");
    setcategorydata(categorylist);
  }, [categorylist]);
  let filteritem = categorydata.filter((contacts) => {
    return contacts.ct_name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
  });
  const handleinput = (e) => {
    setvalue(e.target.value);
  };
  // console.log(value);

  return (
    <>
      <MenuBar />
      <Sidebar />
      <div
        className={`${Homeazaz.setbody} ${Catstyles.category_body} container-fluid p-2`}
      >
        <div className={` ${Catstyles.header_body} ${Catstyles.body_head}`}>
          <div className=" ml-4">
            <h3>Category</h3>
          </div>
          {/* selc */}
          {/* <div className="select_box">
          <select className="select" id="inputGroupSelect04">
            <option selected>Category Type</option>
            <option value="Grocery">Grocery</option>
            <option value="cloth">Women Cloth</option>
            <option value="Bag">Bag</option>
            <option value="Make up">Make up</option>
          </select>
        </div> */}
          <div className="">
            <form>
              <input
                type="text"
                className={`form-control ${Catstyles.cat_input}`}
                placeholder="EX: Search By Name"
                aria-label="Large"
                value={value}
                aria-describedby="inputGroup-sizing-sm"
                onChange={handleinput}
              ></input>
            </form>
          </div>
          <div className="">
            <button className={Catstyles.add_catbtn} onClick={add}>
              Add Category
            </button>
          </div>
        </div>
        <div className={`${Catstyles.table_cat} mb-5`}>
          <table className="table table-responsive  ">
            <thead>
              <tr>
                <th scope="col">
                  <p>Id</p>
                </th>

                <th scope="col">
                  <p>Name</p>
                </th>
              </tr>
            </thead>
            <tbody className="mt-0">
              {loader ? (
                <Loader />
              ) : categorylist.length !== 0 ? (
                filteritem.map((val, index) => {
                  const {
                    category_id,

                    ct_name,
                  } = val;
                  return (
                    <tr key={index}>
                      <td>{category_id}</td>
                      <td>{ct_name}</td>
                    </tr>
                  );
                })
              ) : (
                <h2 className="text-center text-success mt-4">
                  No Category yet
                </h2>
              )}
            </tbody>
          </table>
        </div>
        <Modal />
        <AddCategory />
      </div>
    </>
  );
};
function mapStateToProps({ slider: { showslider }, fetchdata }) {
  return {
    myshowslider: showslider,
    categorylist: fetchdata.categorylist,
    loader: fetchdata.loader,
  };
}

function mapDispatchToProps(dispatch) {
  return { add: () => dispatch({ type: OPEN }) };
}
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
