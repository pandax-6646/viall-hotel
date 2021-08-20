import React from "react";

export default function Comment(props) {
  console.log(props);
  return (
    <div className="comment-container">
      <div className="content">
        <div className="border"></div>
        <div className="title flex jc-sb aic">
          <img className="head" src="./img/target1.jpg" alt="" />
          <p className="name f20 fg1 ml-5">12343425</p>
          <span className="color">2019-01-30</span>
        </div>
        <p className="pl-10" style={{ color: "#999" }}>
          美丽的大鹏半岛南澳水头沙海滨
        </p>
        <div className="img-box rel flex jc-sa">
          <img className="" src="./img/target1.jpg" alt="" />
          <img className="" src="./img/target1.jpg" alt="" />
          <img className="" src="./img/target1.jpg" alt="" />
          <span className="abs">共x张</span>
        </div>
      </div>
      <div className="content">
        <div className="border"></div>
        <div className="title flex jc-sb aic">
          <img className="head" src="./img/target1.jpg" alt="" />
          <p className="name f20 fg1 ml-5">12343425</p>
          <span className="color">2019-01-30</span>
        </div>
        <p className="pl-10" style={{ color: "#999" }}>
          美丽的大鹏半岛南澳水头沙海滨
        </p>
        <div className="img-box rel flex jc-sa">
          <img className="" src="./img/target1.jpg" alt="" />
          <img className="" src="./img/target1.jpg" alt="" />
          <img className="" src="./img/target1.jpg" alt="" />
          <span className="abs">共x张</span>
        </div>
      </div>
    </div>
  );
}
