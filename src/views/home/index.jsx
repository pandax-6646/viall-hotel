import React, { useState, useEffect } from "react";
import "./index.scss";

import Search from "./Search";
import Swiper from "./Swiper";
import HotRecommend from "./HotRecommend";
import HotCity from "./HotCity";
import List from "./List";

import { HomeRequest } from "api/index";
import Footer from "components/footer/index";

export default function Home() {
  // 热门推荐
  let [hotRecommendList, setHotRecommendList] = useState([]);
  useEffect(() => {
    HomeRequest.fetchHotRecommend().then((res) => {
      setHotRecommendList(res.result);
    });
  }, []);

  // 热门城市
  let [hotCityList, setHotCityList] = useState([]);
  useEffect(() => {
    HomeRequest.fetchHotCity().then((res) => {
      setHotCityList(res.result);
    });
  }, []);

  //  目的地推荐列表
  let [fetchDestinationList, setFetchDestinationList] = useState([]);
  useEffect(() => {
    HomeRequest.fetchDestination().then((res) => {
      setFetchDestinationList(res.result);
    });
  }, []);

  return (
    <div className="home-container">
      {/* 头部导航 */}
      <Search />

      {/* 首页轮播 */}
      <Swiper />

      {/* 热门推荐 */}
      <HotRecommend hotRecommendList={hotRecommendList} />

      {/* 城市列表 */}
      <HotCity hotCityList={hotCityList} />

      {/* 旅游景点列表 */}
      <List fetchDestinationList={fetchDestinationList} />

      <Footer />
    </div>
  );
}
