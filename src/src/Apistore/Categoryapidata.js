import axios from "axios";
// import { useContext } from "react";
import { CATEGORYDATA } from "../Dashboard/Reduxstore/Action";
// import { FoodDataContext } from "../../components/FoodData";
export const Fetchcategorydata = () => {
  // const { setloa } = useContext(FoodDataContext);
  return async (dispatch, getState) => {
    const id = localStorage.getItem("token");
    console.log(id, "id in category component");
    const response = await axios.get(
      `http://damp-headland-05751.herokuapp.com/show/category/${id}`
    );
    // setloa(false);
    console.log(response, "coupon api data");
    // console.log(response, "response");

    const data = await response.data;
    // console.log(data, "Category  api data");
    dispatch({ type: CATEGORYDATA, payload: { data: data, show: false } });
  };
};
