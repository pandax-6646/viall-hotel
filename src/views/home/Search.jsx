import React from "react";

export default () => (
  <header className="head">
    <div className="head-nav pl-10">
      <div className="flex jc-sb aic">
        <img className="logo mr-5 mt-5" src="./img/logo.png" alt="" />
        <div className="flex fg1 aic ml-5 content">
          <i className="iconfont icon ml-10">&#xe7d2;</i>
          <input className="hear-search ml-10" type="text" />
        </div>
        <p>
          <span className="city">深圳</span>
          <i className="city-down iconfont icon">&#xe733;</i>
        </p>
      </div>
    </div>
  </header>
);
