import React from "react";
import "../App.css";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

export default function CardN(props) {
  return (
    <button className="cardhead">
      <Card
        style={{
          width: "15rem",
          padding: "0px",
          float: "left",
          backgroundColor: "white",
          margin: "5px",
        }}
        key={props.id}
      >
        <Card.Img variant="top" src={props.imgsrc} className="cardimg" />
        {props.fill == "true" ? (
          <span className="featuredtrue">{props.feat}</span>
        ) : (
          ""
        )}
        <Card.Body
          style={{
            textAlign: "left",
            padding: "15px",
            backgroundColor: "white",
          }}
        >
          <strong>
            <h6 style={{ paddingTop: "10px" }}>{props.mname}</h6>
          </strong>
          <Card.Text style={{ fontSize: "14px" }}>{props.detail}</Card.Text>
          <strong>
            <Card.Text style={{ fontSize: "14px" }}>{props.caterer}</Card.Text>
          </strong>

          {props.isitcaterer == 1 ? (
            <Card.Text style={{ fontSize: "14px" }}>{props.town}</Card.Text>
          ) : (
            <></>
          )}
        </Card.Body>
        <Card.Footer
          style={{
            textAlign: "left",
            padding: "15px",
            backgroundColor: "white",
          }}
        >
          {props.isitcaterer == 1 ? (
            <>
              <Button
                className="hello"
                variant="primary"
                style={{ float: "right", fontSize: "12px" }}
              >
                {props.time}
              </Button>

              <Card.Text
                style={{
                  float: "left",
                  backgroundColor: "white",
                  fontSize: "14px",
                  width: "48%",
                }}
              >
                {props.delivery}
              </Card.Text>
            </>
          ) : (
            <>
              <NavLink exact to="/fooddetails">
                <Button
                  className="hello"
                  variant="primary"
                  style={{ float: "right", fontSize: "14px" }}
                >
                  {props.time}
                </Button>
              </NavLink>
              <Card.Text style={{ float: "left", backgroundColor: "white" }}>
                <strong>{props.delivery}</strong>
              </Card.Text>
            </>
          )}
        </Card.Footer>
      </Card>
    </button>
  );
}
