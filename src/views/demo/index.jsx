import React from "react";

import Footer from "components/footer/index";
import { Tabs, WhiteSpace } from "antd-mobile";

export default () => {
  const tabs = [
    { title: "小区房源", sub: "1" },
    { title: "评论", sub: "2" },
    { title: "周边玩乐", sub: "3" },
    { title: "小区介绍", sub: "4" },
  ];
  return (
    <div>
      <Tabs
        tabs={tabs}
        initialPage={0}
        renderTab={(tab) => <span>{tab.title}</span>}
      >
        <div>aaaaaaaaaaa</div>
        <div>bbbbbbbbbbb</div>
        <div>ccccccccccc</div>
      </Tabs>
      <WhiteSpace />

      <Footer currIndex="06" />
    </div>
  );
};
