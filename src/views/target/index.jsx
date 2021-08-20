import React, { useState, useEffect } from "react";
import { Tabs, WhiteSpace } from "antd-mobile";
import "./index.scss";

import Footer from "components/footer/index";
import Room from "./Room";
import Periphery from "./Periphery"; // 周边
import Introduce from "./Introduce"; // 介绍
import Comment from "./Comment"; // 评论

import { targetRequeat } from "api";

export default function Target() {
  const tabs = [
    { title: "小区房源", sub: "1" },
    { title: "评论", sub: "2" },
    { title: "周边玩乐", sub: "3" },
    { title: "小区介绍", sub: "4" },
  ];

  // 小区房源
  let [roomList, setRoomList] = useState([]);
  useEffect(() => {
    targetRequeat.fetchRoom().then((res) => {
      setRoomList(res.result);
    });
  },[]);
  // 评论
  let [commentList, setCommentList] = useState([]);
  useEffect(() => {

    targetRequeat.fetchComment().then((res) => {
      setCommentList(res.result);
    });

  }, [])
  // 周边
  let [peripheryList, setPeripheryList] = useState([]);

  // 介绍
  let [introduceList, setIntroduceList] = useState([]);
  return (
    <div className="target-container">
      <Tabs
        tabs={tabs}
        initialPage={0}
        renderTab={(tab) => <span>{tab.title}</span>}
      >
        <Room roomList={roomList} />
        <Comment commentList={commentList} />
        {/* <Periphery peripheryList={peripheryList} />
        <Introduce introduceList={introduceList} /> */}
      </Tabs>
      <WhiteSpace />
      <Footer currIndex="02" />
    </div>
  );
}
