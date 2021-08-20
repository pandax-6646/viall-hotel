import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

import classNames from 'classnames';


export default function Footer() {
  // 底部导航
  return (
    <div className="nav-box fixed flex jc-sa bg-fff">
      <Link to="/index" className="box flex aic fdc">
        <img src="./img/shouye.png" alt="" />
        <div className="text mt-5 f999">首页</div>
      </Link>

      <Link to="/target" className="box flex aic fdc">
        <img src="./img/mudi.png" alt="" />
        <div className="text mt-5 f999">目的地</div>
      </Link>

      <Link to="/dmand" className="box flex aic fdc">
        <img src="./img/tijiao.png" alt="" />
        <div className="text mt-5 f999">提交需求</div>
      </Link>

      <Link to="discover" className="box flex aic fdc">
        <img className="mt-5" src="./img/xingqiu.png" alt="" />
        <div className="text mt-5 f999">发现</div>
      </Link>

      <Link to="/my" className="box flex aic fdc">
        <img src="./img/wode.png" alt="" />
        <div className="text mt-5 f999">我的</div>
      </Link>

      <Link to="/demo" className="box flex aic fdc">
        <img src="./img/wode.png" alt="" />
        <div className="text mt-5 f999">demo</div>
      </Link>
    </div>
  );
}
