import React from "react";
import { Link } from "react-router-dom";

export default (props) => (
  <div className="place bg-fff pl-10 pr-10 mt-20 mb-10">
    <div className="title flex jc-sb aic pt-10 pb-10">
      <span className="f666 ml-10">
        <strong>目的地推荐</strong>
      </span>
      <p className="flex aic">
        <span className="f16 f666"> 更多目的地 </span>
        <i className="iconfont icon">&#xe650;</i>
      </p>
    </div>

    {props.fetchDestinationList.map((item) => {
      return (
        <Link
          to={`/detail/${item.id}`}
          className="place-item pb-10"
          key={item.id}
        >
          <div className="place-list rel">
            <div className="list-item flex">
              <img src={item.imageURL} alt="" />
            </div>
            <p className="price abs fff flex jc-c aic">
              ¥ <span>{(item.minPrice / 100).toFixed(0)}</span> 起
            </p>
          </div>
          <div className="text pl-10 pr-20">
            <div className="f18 title mt-5">{item.name}</div>
            <div className="f14 pt-5 pb-5">{item.description}</div>
            <div className="f14 area pl-10 pr-10 fff mt-5">
              <i className="iconfont area-icon">&#xe6e4;</i>
              <span className="ml-5">
                {item.city}
                {item.area}
              </span>
            </div>
          </div>
        </Link>
      );
    })}
  </div>
);
