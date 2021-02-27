import React from 'react';
import './fooddetails.css';
import FoodMenu from './FoodMenu.js';

export default function FoodNavbar() {
  return (
    <div className="row1" style={{backgroundColor:"white",position:"sticky",top:"1%"}}>
      <div className="foodnavbar"> 
          <div className="food1">
              <span className="foodname"><h6>Glazed NY</h6></span>
              <span className="foodaddress">919  Black Stallion Road, Kentucky</span>
          </div>
          <div className="food2">
              <div className="col1">
                  <span className="col1_child1">Cuisine</span><br/>
                  <span className="col1_child2"><strong>chinese, indian, kebab, arabic, thai</strong></span>
              </div>
              <div className="col2">
                  <span className="col2_child1">Min Order</span><br/>
                  <span className="col2_child1"><strong>$20</strong></span>
              </div>
              <div className="col3">
                  <span className="delivery_button" type="button"><strong>Free<br/> Delivery</strong></span>
              </div>
          </div>
      </div>
      <div className="row2" style={{marginTop:"5%"}}>
        <FoodMenu/>
      </div>
    </div>
  )
}
