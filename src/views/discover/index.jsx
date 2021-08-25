import { Tabs } from "antd-mobile";
import React from "react";
import { discoverRequest } from "api/index";

import "./index.scss";

import TabList from "./TabList";

const TabExample = () => {
  const tabs = [
    { title: "推荐•路线", kind: "01" },
    { title: "精品•别墅", kind: "02" },
    { title: "优惠•活动", kind: "03" },
  ];

  let [list, setList] = React.useState([]);

  const changeTab = (tab) => {
    let params = {
      kind: tab.kind,
      pageSize: 10,
      pageNum: 1,
    };
    discoverRequest.fetchDiscoverList(params).then((res) => {
      setList(res.result);
    });
  };

  React.useEffect(() => {
    changeTab(tabs[0]);
  }, []);

  return (
    <div className="discover-container">
      <Tabs tabs={tabs} initialPage={0} onChange={changeTab}>
        <TabList list={list} />
      </Tabs>
    </div>
  );
};
export default TabExample;
