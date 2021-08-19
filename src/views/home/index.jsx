import React, { useState } from "react";
import "./index.scss";

import Search from "./Search";
import Swiper from "./Swiper";
import HotRecommend from "./HotRecommend";
import HotCity from "./HotCity";
import List from "./List";

export default function Home() {
  return (
    <div className="home-container">
      {/*头部导航 */}
      <Search />

      {/*首页轮播 */}
      <Swiper />

      {/*热门推荐 */}
      <HotRecommend />

      {/*城市列表 */}
      <HotCity />

      {/*旅游景点 */}
      <List />
    </div>
  );
}
