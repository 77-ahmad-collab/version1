import React, { useEffect, useRef, useState, useContext } from "react";
import Productstyles from "./product.module.css";
import { connect, useDispatch } from "react-redux";
// import Singleproduct from "./Singleproduct";
// import { AiOutlinePlusCircle } from "react-icons/ai";
import Modal from "./Modal";
import { OPEN } from "../../Reduxstore/Action";
import { AiOutlineDelete } from "react-icons/ai";
import axios from "axios";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { EDIT } from "../../Reduxstore/Action";
import "../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Fetchproductdata } from "../../../Apistore/Productapidata";
import MenuBar from "../../Navbar/MenuBar";
import Sidebar from "../../Navbar/Sidebar";
import Hoi from "../../../Home.module.css";
import Singledish from "./Singledish";

const Products = ({ productdata, add }) => {
  //state for adding single dish

  const [dish, setdish] = useState(-1);
  const [clickeditem, setitem] = useState(-1);
  const [s_data, sets_data] = useState("");
  const [ids, setids] = useState({
    product_id: 0,
    id: 0,
    index: 0,
    category_id: 0,
  });
  // const snedd = [{ name: "ahmad", age: 20 }];
  const deleteref = useRef(null);
  const [productlist, setproductdata] = useState(productdata);
  const [toggle, setoggle] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Fetchproductdata());
  }, []);
  // useEffect(() => {
  //   dispatch(Fetchproductdata());
  //   // console.log("i am updated");
  // }, [clickeditem]);
  useEffect(() => {
    setproductdata(productdata);
    // console.log(productdata, "i am the product data that you are getting");
  }, [productdata]);
  useEffect(() => {
    setTimeout(() => {
      dispatch(Fetchproductdata());
      setproductdata(productdata);
      console.log("its toggling functionality");
    }, 1000);
    console.log(productdata, "i am the product data that you are getting");
  }, [toggle]);
  // console.log(productlist);
  const deletehandler = (dishid, catid) => {
    // const filteritem = productlist.filter((val) => {
    //   const newdishes = val.dishes.filter((val2) => {
    //     return val2.product_id !== dishid;
    //   });
    //   return newdishes;
    // });
    // console.log(filteritem, "i am filteritem");
    /////=========logic 2 start here=
    // console.log(dishid.target);
    // console.log(dishid, "dish id", catid);
    // console.log(this);
    // console.log(productlist[catid - 1].dishes);
    // const newitem = productlist[catid - 1].dishes.filter((val) => {
    //   console.log(val.product_id !== dishid);
    //   return val.product_id === dishid;
    // });
    // console.log(productlist, "i am the product list");
    const upitem = productlist.filter((preval) => {
      return preval.id === catid;
    });
    // console.log(upitem, "i am the up item");
    const delitem = upitem[0].dishes.filter((prev) => {
      return prev.product_id === dishid;
    });
    console.log(delitem[0], "hurray you are getting the delted item");
    let productid = delitem[0].product_id;
    let d_catererid = delitem[0].d_caterer_id;
    // console.log(productid, d_catererid);
    // console.log("i am new item ", newitem);
    axios.delete("https://damp-headland-05751.herokuapp.com/products/delete", {
      data: {
        product_id: productid,
        d_caterer_id: d_catererid,
      },
    });
    setoggle(!toggle);
    // setproductdata(
    //   productlist[catid - 1].dishes.filter((val) => {
    //     console.log(val.product_id !== dishid);
    //     return val.product_id !== dishid;
    //   })
    // );
    ////===============logic 2 end
    // setproductdata(
    //   productlist[catid].filter((val) => {
    //     const filterdishes = val.dishes.filter((val) => {
    //       return val.product_id !== dishid;
    //     });
    //     console.log(filterdishes, "filter");
    //     return filterdishes;
    //   })
    // );
  };
  const handleedit = (dishid, catid, dindex, category_id) => {
    // console.log("here you wil send mes", dindex);
    // const newitem = productlist[catid - 1].dishes.find((val) => {
    //   // console.log(val.product_id !== dishid);
    //   return val.product_id === dishid;
    // });
    // console.log(newitem, "i am new item in edi handler");

    //updated logic
    // console.log(productlist, " i am product list");
    const upitem = productlist.filter((preval) => {
      return preval.id === catid;
    });
    console.log(upitem, "i am the up item");
    const edititem = upitem[0].dishes.filter((prev) => {
      return prev.product_id === dishid;
    });

    // console.log(edititem[0], "i am the edited item");
    //end of updated logic

    sets_data(edititem[0]);
    setids({
      product_id: dishid,
      id: catid,
      index: dindex,
      category_id: category_id,
    });
  };

  // console.log(s_data, "sended data");
  return (
    // main body of product is starting here
    <>
      <MenuBar />
      <Sidebar />
      <div className={`${Hoi.setbody} ${Productstyles.product_body} p-4`}>
        {/*   const deletehandler = (id, e) => {
    const filtereditem = productlist.filter((val) => {
      const filterdishes = val.dishes.filter((val) => {
        return val.product_id !== id;
      });
      console.log(filterdishes, "filter");
      return filterdishes;
    });
    console.log(filtereditem, "hhdhdhh");
  }; */}
        <div className={Productstyles.singlemenucomponent}>
          {productdata.length !== 0 ? (
            productlist.map((val, category_index) => {
              const { category, dishes, id } = val;
              // return <Singleproduct productapidata={productlist} heading={category} />;
              //start
              return (
                <>
                  <div className="singleproduct">
                    <div className={`${Productstyles.productheader} py-4`}>
                      <div className={Productstyles.dotspro}>
                        <div className={Productstyles.singledot}></div>
                        <div className={Productstyles.singledot}></div>
                        <div className={Productstyles.singledot}></div>
                      </div>
                      {/* ----your menu heading */}
                      <h5>{category}</h5>
                      {/* end of your meanu heaing */}
                      <div className={Productstyles.dotspro}>
                        <div className={Productstyles.singledot}></div>
                        <div className={Productstyles.singledot}></div>
                        <div className={Productstyles.singledot}></div>
                      </div>
                    </div>
                    {/* start of product discription */}
                    {dishes.length !== 0 ? (
                      dishes.map((dish, index) => {
                        const {
                          p_name,
                          p_description,
                          product_id,
                          category_id,
                          p_minamount,
                        } = dish;
                        return (
                          <>
                            <div
                              className={`${Productstyles.productbody} ${
                                product_id === clickeditem
                                  ? `${Productstyles.ffff}`
                                  : null
                              } py-4`}
                            >
                              <div className={Productstyles.productdetails}>
                                <h6 className="bold">{p_name}</h6>
                                <p>{p_description}</p>
                              </div>
                              <div className={Productstyles.productpr}>
                                {/* product price setup here */}
                                <p
                                  className={`${Productstyles.price} text-success`}
                                >
                                  PKR {p_minamount}
                                </p>
                                {/* end of product price setup here */}
                                <div className={Productstyles.productbtns}>
                                  <div>
                                    {/* <span className="iconstyle-add">
                          <AiOutlinePlusCircle />
                          </span> */}
                                    <span
                                      className={Productstyles.iconstyledelete}
                                      // ref={deleteref}
                                      onClick={(e) => {
                                        setitem(product_id);
                                        // console.log(e.target.parentElement);
                                        // console.log(deleteref.current, "i am ref");
                                        deletehandler(product_id, id);
                                      }}
                                    >
                                      <AiOutlineDelete />
                                    </span>
                                  </div>
                                  <span
                                    className={Productstyles.editpro}
                                    onClick={() => {
                                      add();
                                      handleedit(
                                        product_id,
                                        id,
                                        index,
                                        category_index
                                      );
                                    }}
                                    // onClick={() => {

                                    //   // dispatch({
                                    //   //   type: EDIT,
                                    //   //   payload: {
                                    //   //     catid: id,
                                    //   //     product_id: product_id,
                                    //   //     dishindex: index,
                                    //   //   },
                                    //   // });
                                    // }}
                                  >
                                    Edit
                                  </span>
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      })
                    ) : (
                      <div>
                        <h4>no dishes in the product</h4>
                      </div>
                    )}
                  </div>
                  {/* {dish === id ? (
                  <div className={`${Productstyles.addsingledish} pl-5`}>
                    <form autoComplete="off">
                      <TextField
                        id="standard-search"
                        label="Dish name"
                        type="search"
                        onChange={(e) => console.log(e.target.value)}
                      />
                    </form>

                    <Button
                      variant="contained"
                      className={`${Productstyles.focused2} ml-2`}
                      onClick={() => setdish(-1)}
                    >
                      Update
                    </Button>
                  </div>
                ) : (
                  <div className={Productstyles.bottomborder}>
                    <Button
                      variant="contained"
                      onClick={() => setdish(id)}
                      className={`${Productstyles.focused} `}
                    >
                      Add item
                    </Button>
                  </div>
                )} */}
                </>
              );

              // end
            })
          ) : (
            <div className="text-center loadingproduct">
              <div>
                <h4>Loading...</h4>
              </div>
              <div class="spinner-border text-primary" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          )}
        </div>
        <Modal dat={s_data} ids={ids} />
      </div>
    </>
    // end of product body
  );
};
function mapStateToProps({ fetchdata }) {
  return { productdata: fetchdata.productlist };
}

function mapDispatchToProps(dispatch) {
  return { add: () => dispatch({ type: OPEN }) };
}
export default connect(mapStateToProps, mapDispatchToProps)(Products);
