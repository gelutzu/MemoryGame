import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Id:</strong> {props.id}
          </li>
      </ul>
    </div>

    {/* <span onClick={() => props.testFriend(props.id)} className="test">
      𝘅
    </span> */}
    <button onClick={() => props.incrementClick(props.id)} className="testButton">Click here!</button>
    
  </div>
);

export default FriendCard;
