import React, { useState, useEffect } from "react";
import "./index.scss";

import Search from "./Search";
import Swiper from "./Swiper";
import HotRecommend from "./HotRecommend";
import HotCity from "./HotCity";
import List from "./List";

import { homeRequest } from "api/index";
import Footer from "components/footer/index";

const My = () => {
  // 热门推荐
  let [hotRecommendList, setHotRecommendList] = useState([]);
  useEffect(() => {
    homeRequest.fetchHotRecommend().then((res) => {
      setHotRecommendList(res.result);
    });
  }, []);

  // 热门城市
  let [hotCityList, setHotCityList] = useState([]);
  useEffect(() => {
    homeRequest.fetchHotCity().then((res) => {
      setHotCityList(res.result);
    });
  }, []);

  //  目的地推荐列表
  let [fetchDestinationList, setFetchDestinationList] = useState([]);
  useEffect(() => {
    homeRequest.fetchDestination().then((res) => {
      setFetchDestinationList(res.result);
    });
  }, []);

  // 轮播图
  let [swiperImgList, setSwiperImgList] = useState([]);
  useEffect(() => {
    homeRequest.fetchDestination().then((res) => {
      setSwiperImgList(
        res.result.map((item) => {
          return item.imageUrl;
        })
      );
    });
  }, []);

  return (
    <div className="home-container">
      {/* 头部导航 */}
      <Search />

      {/* 首页轮播 */}
      <Swiper swiperImgList={swiperImgList} />

      {/* 热门推荐 */}
      <HotRecommend hotRecommendList={hotRecommendList} />

      {/* 城市列表 */}
      <HotCity hotCityList={hotCityList} />

      {/* 旅游景点列表 */}
      <List fetchDestinationList={fetchDestinationList} />

      <Footer currIndex="01" />
    </div>
  );
};

export default React.memo(My);
