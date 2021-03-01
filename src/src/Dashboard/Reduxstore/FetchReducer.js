import {
  FETCHCOUPONSDATA,
  CATEGORYDATA,
  PRODUCTDATA,
  ORDERDATA,
  CUSTOMERDATA,
  EDIT,
} from "./Action";
const initialstate = {
  couponlist: [],
  categorylist: [],
  productlist: [],
  orderlist: [],
  customerlist: [],
  loader: true,
  orderloader: true,
  custloader: true,
  couploader: true,
};

export default function reducer(state = initialstate, action) {
  switch (action.type) {
    case FETCHCOUPONSDATA:
      console.log("fetch reducer is working");
      return {
        ...state,
        couponlist: action.payload.data,
        couploader: action.payload.load,
      };
    case CATEGORYDATA:
      return {
        ...state,
        categorylist: action.payload.data,
        loader: action.payload.show,
      };
    case PRODUCTDATA:
      return { ...state, productlist: action.payload };
    case ORDERDATA:
      return {
        ...state,
        orderlist: action.payload.data,
        orderloader: action.payload.load,
      };
    case CUSTOMERDATA:
      return {
        ...state,
        customerlist: action.payload.data,
        custloader: action.payload.load,
      };
    case EDIT:
      const productlist = [...state.productlist];

      productlist[action.payload.catid].dishes[
        action.payload.dishindex
      ].p_name = action.payload.pname;
      productlist[action.payload.catid].dishes[
        action.payload.dishindex
      ].p_minamount = action.payload.p_minamount;
      productlist[action.payload.catid].dishes[
        action.payload.dishindex
      ].p_description = action.payload.pdesc;
      console.log(productlist[action.payload.catid]);
      return { ...state, productlist };

    default:
      return state;
  }
}

// else if (action.type === EDIT) {
//     const list = [...state.list];
//     list[action.payload.editid] = action.payload.value;
//     return { ...state, list };
//   }
