import React from "react";
import contacts from "../contacts";
import Avatar from "./Avatar";
import Details from "./Details";
// import App from "./App"

function Card(props) {
  console.log(props);
  return (
    <div className="card">
      <div className="top">
        <div className="id-div">
          <p className="id">{props.id}</p>
        </div>

        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <Details tel={props.tel} email={props.email} />
    </div>
  );
}

export default Card;
