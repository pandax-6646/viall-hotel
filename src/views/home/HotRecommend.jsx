import React from "react";

export default function HotRecommend() {
  return (
    <div className="classify pl-10 pr-10 bg-fff">
      <div className="title flex jc-sb pt-20 pb-20 bg-fff">
        <span className="ml-10 f666">
          <strong>热门推荐</strong>{" "}
        </span>
        <span></span>
      </div>
      <div className="classify-content flex mt-10">
        <div className="flex fdc aic classify-item">
          <img className="photos" src="./img/swiper.png" alt="" />
          <p className="name mt-15 mb-15">海边别墅</p>
        </div>
        <div className="flex fdc aic classify-item">
          <img className="photos" src="./img/swiper.png" alt="" />
          <p className="name mt-15 mb-15">海边别墅</p>
        </div>
        <div className="flex fdc aic classify-item">
          <img className="photos" src="./img/swiper.png" alt="" />
          <p className="name mt-15 mb-15">海边别墅</p>
        </div>
        <div className="flex fdc aic classify-item">
          <img className="photos" src="./img/swiper.png" alt="" />
          <p className="name mt-15 mb-15">海边别墅</p>
        </div>
        <div className="flex fdc aic classify-item">
          <img className="photos" src="./img/swiper.png" alt="" />
          <p className="name mt-15 mb-15">海边别墅</p>
        </div>
      </div>
    </div>
  );
}
