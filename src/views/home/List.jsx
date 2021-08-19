import React from "react";

export default function List() {
  return (
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
      <div className="place-item pb-10">
        <div className="place-list rel">
          <div className="list-item flex">
            <img src="./img/swiper.png" alt="" />
          </div>
          <p className="price abs fff flex jc-c aic">
            ¥ <span>300</span>起
          </p>
        </div>
        <div className="text pl-10 pr-20">
          <div className="f18 title mt-5">惠州 万科双月湾</div>
          <div className="f14 pt-5 pb-5">
            沙滩踏浪享受篝火狂欢,水上运动挑战激情夏日
          </div>
          <div className="f14 area pl-10 pr-10 fff mt-5">
            <i className="iconfont area-icon">&#xe6e4;</i>
            <span>惠州,惠东县</span>
          </div>
        </div>
      </div>
      <div className="place-item pb-5">
        <div className="place-list rel">
          <div className="list-item flex">
            <img src="./img/swiper.png" alt="" />
          </div>
          <p className="price abs fff flex jc-c aic">
            ¥ <span>300</span>起
          </p>
        </div>
        <div className="text pl-10 pr-20">
          <div className="f18 title">惠州 万科双月湾</div>
          <div className="f14 pt-5 pb-5">
            沙滩踏浪享受篝火狂欢,水上运动挑战激情夏日
          </div>
          <div className="f14 area pl-10 pr-10 fff mt-5">
            <i className="iconfont area-icon">&#xe6e4;</i>
            <span>惠州,惠东县</span>
          </div>
        </div>
      </div>
    </div>
  );
}
