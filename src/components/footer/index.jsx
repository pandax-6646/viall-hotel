import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

import classNames from "classnames";

export default (props) => {
  let { currIndex } = props;
  // 底部导航
  return (
    <div className="footer-container nav-box fixed flex jc-sa bg-fff">
      <Link
        to="/index"
        className={classNames("box flex aic fdc", {
          select: currIndex == "01",
        })}
      >
        <img
          src={`./img/shouye${currIndex === "01" ? "ing" : ""}.png`}
          alt=""
        />
        <div className="text mt-5 f999">首页</div>
      </Link>
      <Link
        to="/target"
        className={classNames("box flex aic fdc", {
          select: currIndex == "02",
        })}
      >
        <img
          src={`./img/mudedi${currIndex === "02" ? "ing" : ""}.png`}
          alt=""
        />
        <div className="text mt-5 f999">目的地</div>
      </Link>
      <Link
        to="/dmand"
        className={classNames("box flex aic fdc", {
          select: currIndex == "03",
        })}
      >
        <img src="./img/tijiao.png" alt="" />
        <div className="text mt-5 f999">提交需求</div>
      </Link>
      <Link
        to="discover"
        className={classNames("box flex aic fdc", {
          select: currIndex == "04",
        })}
      >
        <img
          className="mt-5"
          src={`./img/xingqiu${currIndex == "04" ? "ing" : ""}.png`}
          alt=""
        />
        <div className="text mt-5 f999">发现</div>
      </Link>
      <Link
        to="/my"
        className={classNames("box flex aic fdc", {
          select: currIndex == "05",
        })}
      >
        <img src={`./img/wode${currIndex == "05" ? "ing" : ""}.png`} alt="" />
        <div className="text mt-5 f999">我的</div>
      </Link>
      <Link
        to="/demo"
        className={classNames("box flex aic fdc", {
          select: currIndex == "06",
        })}
      >
        <img src={`./img/wode${currIndex == "06" ? "ing" : ""}.png`} alt="" />
        <div className="text mt-5 f999">demo</div>
      </Link>
    </div>
  );
};
