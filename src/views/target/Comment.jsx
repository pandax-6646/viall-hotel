import React from "react";

export default (props) => (
  <div className="comment-container">
    {props.commentList.map((item) => (
      <div className="content" key={item.id}>
        <div className="border"></div>
        <div className="title flex jc-sb aic">
          <img className="head" src={item.headImgUrl} alt="" />
          <p className="name f20 fg1 ml-5">{item.nickName}</p>
          <span className="color">{item.submitTime}</span>
        </div>
        <p className="pl-10" style={{ color: "#999" }}>
          {item.detail}
        </p>
        <div className="img-box rel flex wp-100">
          {item.images.map((image, index) => (
            <img src={image} alt="" key={index} />
          ))}

          {item.images.length == 0 ? (
            ""
          ) : (
            <span className="abs">共{item.images.length}张</span>
          )}
        </div>
      </div>
    ))}
  </div>
);
