import React from 'react';
import {Form} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {DataContext} from './CardData.js';
import CardN from './CardN.js';
import '../App.css';

export default function AddProduct() {
 
  return (
      <Container className="addprodContainer" >
             <Form style={{padding:"10px"}}>

  <Form.Group>
    <Form.Label style={{paddingBottom:"10px"}}>     Name       </Form.Label>
    <Form.Control type="text" style={{backgroundColor: "rgb(236, 232, 232)",fontWeight:"bold"}} className="input" />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>                                  Description     </Form.Label>
    <Form.Control style={{backgroundColor: "rgb(236, 232, 232)",fontWeight:"bold"}} className="input" as="textarea" rows={3} />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label style={{paddingBottom:"10px"}}>     Unit          </Form.Label>
    <Form.Control type="text" style={{backgroundColor: "rgb(236, 232, 232)",fontWeight:"bold"}} className="input" />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label style={{paddingBottom:"10px"}}>     Price          </Form.Label>
    <Form.Control type="number"  style={{backgroundColor: "rgb(236, 232, 232)",fontWeight:"bold"}} className="input" />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label style={{paddingBottom:"10px"}}>     Sales Price          </Form.Label>
    <Form.Control type="number"  style={{backgroundColor: "rgb(236, 232, 232)",fontWeight:"bold"}} className="input" />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label style={{paddingBottom:"10px"}}>     Discount In Percent         </Form.Label>
    <Form.Control type="number"  style={{backgroundColor: "rgb(236, 232, 232)",fontWeight:"bold"}} className="input" />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label style={{paddingBottom:"10px"}}>     Product Quantity          </Form.Label>
    <Form.Control type="number"  style={{backgroundColor: "rgb(236, 232, 232)",fontWeight:"bold"}} className="input" />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Type</Form.Label>
    <Form.Control style={{backgroundColor: "rgb(236, 232, 232)",fontWeight:"bold"}} className="input" as="select">
        <option>Product Type</option>
      <option>Grocery</option>
      <option>Womens Cloth</option>
      <option>Bags</option>
      <option>Makeup</option>
      
    </Form.Control>
  </Form.Group>

  <Form.Group >
    <Form.Label>Category</Form.Label>
    <Form.Control style={{backgroundColor: "rgb(236, 232, 232)",fontWeight:"bold"}} className="input" as="select">
    <option>Product Tag</option>
      <option>Purse</option>
      <option>Handbag</option>
      <option>Wallet</option>
      <option>Women Dress</option>
     
    </Form.Control>
  </Form.Group>
  
  
</Form>
</Container>
         

  )
}
