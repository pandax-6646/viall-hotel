import React from "react";

import Footer from "components/footer/index";
import { discoverRequest } from "api/index";
import "./index.scss";

export default () => {
  let [discoverList, setDiscoverList] = React.useState([]);

  React.useEffect(() => {
    let params = {
      kind: 1,
      pageSize: 10,
      pageNum: 2,
    };
    discoverRequest.fetchDiscoverList(params).then((res) => {
      console.log(res.result);
    });
  });

  return (
    <div className="discover-container">
      {/*  导航 */}
      <nav className="bg-fff flex jc-sb aic fixed">
        <p className="active f16">推荐•路线</p>
        <p className="f16">精品•别墅</p>
        <p className="f16">优惠•活动</p>
      </nav>
      {/*  列表 */}
      <div className="list">
        <ul>
          <li className="item flex bg-fff mb-10">
            <div>
              <img src="../../img/tupian1.png" alt="" />
            </div>
            <div className="mt-10 ml-15">
              <span className="f14">
                找到了！国内最受欢迎的网红泳池酒店，我带上你，你带上钱，出发吧！
              </span>
            </div>
          </li>
          <li className="item flex bg-fff mb-10">
            <div>
              <img src="../../img/tupian2.png" alt="" />
            </div>
            <div className="mt-10 ml-15">
              <span className="f14">
                为什么花同样钱团建，我们可以玩的这么 High？！
              </span>
            </div>
          </li>
          <li className="item flex bg-fff mb-10">
            <div>
              <img src="../../img/tupian1.png" alt="" />
            </div>
            <div className="mt-10 ml-15">
              <span className="f14">
                找到了！国内最受欢迎的网红泳池酒店，我带上你，你带上钱，出发吧！
              </span>
            </div>
          </li>
          <li className="item flex bg-fff mb-10">
            <div>
              <img src="../../img/tupian2.png" alt="" />
            </div>
            <div className="mt-10 ml-15">
              <span className="f14">
                为什么花同样钱团建，我们可以玩的这么 High？！
              </span>
            </div>
          </li>
          <li className="item flex bg-fff mb-10">
            <div>
              <img src="../../img/tupian1.png" alt="" />
            </div>
            <div className="mt-10 ml-15">
              <span className="f14">
                找到了！国内最受欢迎的网红泳池酒店，我带上你，你带上钱，出发吧！
              </span>
            </div>
          </li>
          <li className="item flex bg-fff mb-10">
            <div>
              <img src="../../img/tupian2.png" alt="" />
            </div>
            <div className="mt-10 ml-15">
              <span className="f14">
                为什么花同样钱团建，我们可以玩的这么 High？！
              </span>
            </div>
          </li>
          <li className="item flex bg-fff mb-10">
            <div>
              <img src="../../img/tupian1.png" alt="" />
            </div>
            <div className="mt-10 ml-15">
              <span className="f14">
                找到了！国内最受欢迎的网红泳池酒店，我带上你，你带上钱，出发吧！
              </span>
            </div>
          </li>
          <li className="item flex bg-fff mb-10">
            <div>
              <img src="../../img/tupian2.png" alt="" />
            </div>
            <div className="mt-10 ml-15">
              <span className="f14">
                为什么花同样钱团建，我们可以玩的这么 High？！
              </span>
            </div>
          </li>
        </ul>
      </div>
      <Footer currIndex="04" />
    </div>
  );
};
