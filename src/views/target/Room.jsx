import React from "react";

export default (props) => (
  <div className="room-container">
    {props.roomList.map((item) => (
      <div key={item.id}>
        <div className="img-box rel">
          <img className="img" src={item.imageURL} alt="" />
          <img
            className="head abs"
            src={
              item.merchant.headImageURL.length > 50
                ? item.merchant.headImageURL
                : `https://img.villaday.com//images${item.merchant.headImageURL}`
            }
            alt=""
          />
          <span className="money abs f16">¥3888起</span>
        </div>
        <div className="text">
          <h2>{item.name}</h2>
          <p className="mt-5">{item.description}</p>
          <p className="mt-10 color">{item.villageName}</p>
        </div>
      </div>
    ))}
  </div>
);
