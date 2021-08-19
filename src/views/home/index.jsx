import React, { useState } from "react";
import "./index.scss";

export default function Home() {
  return (
    <div className="home-container">
      {/*头部导航 */}
      <header className="head">
        <div className="head-nav pl-10">
          <div className="flex jc-sb aic">
            <img
              className="logo mr-5 mt-5"
              src="./img/logo.png"
              alt=""
            />
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
      {/*首页轮播 */}
      <div className="swiper">
        <img src="./img/swiper.png" alt="" />
      </div>

      {/*热门推荐 */}
      <div className="classify pl-10 pr-10 bg-fff">
        {/*标题 */}
        <div className="title flex jc-sb pt-20 pb-20 bg-fff">
          <span className="ml-10 f666">
            <strong>热门推荐</strong>{" "}
          </span>
          <span></span>
        </div>
        {/*分类 */}
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

      {/*城市列表 */}
      <div className="city pl-10 pr-10 bg-fff mt-20 pt-20 pb-10">
        {/*标题 */}
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
            <li className="list-item">深圳</li>
            <li className="list-item">深圳</li>
            <li className="list-item">深圳</li>
            <li className="list-item">深圳</li>
            <li className="list-item">深圳</li>
            <li className="list-item">深圳</li>
            <li className="list-item">深圳</li>
            <li className="list-item">深圳</li>
          </ul>
        </div>
      </div>
      {/*旅游景点 */}
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
        {/*1 */}
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
        {/*2 */}
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
    </div>
  );
}
