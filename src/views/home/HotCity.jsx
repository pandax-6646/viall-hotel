import React from "react";

export default function HotCity() {
  return (
    <div className="city pl-10 pr-10 bg-fff mt-20 pt-20 pb-10">
      <div className="title flex jc-sb aic">
        <span className="f666 ml-10">
          <strong>热门城市</strong>
        </span>
        <p className="flex aic">
          <span className="f16 f666"> 更多城市 </span>
          <i className="iconfont icon">&#xe650;</i>
        </p>
      </div>
      <div className="city-list">
        <ul className="flex mt-30 city-content">



          
          <li className="list-item" >深圳</li>
         
        </ul>
      </div>
    </div>
  );
}
