import React, { useState, useEffect } from "react";
import "./index.scss";


import Search from "./Search";
import Swiper from "./Swiper";
import HotRecommend from "./HotRecommend";
import HotCity from "./HotCity";
import List from "./List";


import { HomeRequest } from "api/index";



export default function Home() {
  // 热门推荐
  let [hotRecommendList, setHotRecommendList] = useState([]);
  useEffect(() => {
    HomeRequest.fetchHotRecommend().then((res) => {
      console.log(res.result);
      setHotRecommendList(res.result);
    });
  }, []);

  // 热门城市
  let [hotCityList, setHotCityList] = useState([]);
  useEffect(() => {
    HomeRequest.fetchHotCity().then((res) => {
      console.log(res.result);
      setHotCityList(res.result);
    });
  }, []);

  return (
    <div className="home-container">
      {/*头部导航 */}
      <Search />

      {/*首页轮播 */}
      <Swiper />

      {/*热门推荐 */}
      <HotRecommend hotRecommendList={hotRecommendList} />

      {/*城市列表 */}
      <HotCity hotCityList={hotCityList} />

      {/*旅游景点 */}
      <List />
    </div>
  );
}
