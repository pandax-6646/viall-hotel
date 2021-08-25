import React from "react";
import "./index.scss";
import { homeRequest } from "api/index";
import { NavBar, Icon } from "antd-mobile";
import { useHistory } from "react-router-dom";
import classNames from "classnames";

const Detail = (props) => {
  let [detail, setDetail] = React.useState({});
  let [isSelect, setIsSelect] = React.useState(false);

  let params = {
    id: props.match.params.id,
  };
  let history = useHistory();

  // 请求详情页的数据
  React.useEffect(() => {
    homeRequest
      .getHomeDetail(params)
      .then((res) => {
        setDetail(res.result);
        console.log(res.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // 收藏按钮
  const changeSelect = () => {
    setIsSelect(!isSelect);

    
  };

  return (
    <div className="home-detail">
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => history.push("/index")}
      >
        NavBar
      </NavBar>
      <img className="img" src="../../img/service.png" alt="" />
      <div className="head">
        {/* 轮播图 */}
        <div className="head-top">
          <img src={detail.imageURL} alt="" />
          {/* 价格 */}
          <div className="head-top-price">
            <p>
              ￥<span>{(detail.minPrice / 100).toFixed(0)}</span>起 人均:￥
              {detail.village && detail.village.showMinPrice}
            </p>
          </div>
          {/* 轮播图数量指示器 */}
          <div className="head-top-num">
            <p>1/5</p>
          </div>
          {/* 收藏 */}
          <div
            className={classNames("head-top-like", { select: isSelect })}
            onClick={changeSelect}
          >
            <img src="../../img/like2.png" alt="" />
          </div>
        </div>
        {/* 简介 */}
        <div className="head-text">
          <div>
            <div className="head-text-top flex">
              <h3 className="f18 mt-10 mr-5">{detail.name}</h3>
              <img src="../../img/detail3.png" alt="" />
            </div>
            <div className="head-text-center flex jc-sb mt-5">
              <p className="f14 f999">
                {detail.roomNum}室3厅6卫·{detail.acreage}㎡·{detail.bedNum}
                床·{detail.peopleNum}人
              </p>
              <span className="f12 f999">房屋编号：{detail.houseNo}</span>
            </div>
          </div>
        </div>
      </div>
      {/* 地理位置 */}
      <div className="address mt-10 pl-10 pt-20 pr-10">
        <h3 className="f18 flex mb-20">
          <div className="mr-5"></div>
          <span>地理位置</span>
        </h3>
        <p className="flex jc-sb">
          <span className="f16">
            <img src="../../img/位置.png" alt="" /> {detail.villageName}
          </span>
          <span className="ff8 f14">查看地图</span>
        </p>
      </div>
      {/* 详情 */}
      <div className="detail mt-10 pb-15">
        <div className="detail-top flex jc-sa f16">
          <p className="pl-10 pr-10 active">房源详情</p>
          <p className="pl-10 pr-10">周边美食娱乐</p>
          <p className="pl-10 pr-10">小区环境</p>
        </div>
        <div className="detail-text f16 pl-10 pr-10">
          <p className="f888 mt-20 mb-20">
            <span>连住有优惠</span>
            ，具体可以咨询客服
          </p>
          <span>
            特色：出门五米就是沙滩，全无敌海景，带独立私家灯光奢华泳池可开泳池派对，全新欧式轻奢装修豪华家私以及智能家居，室内专设儿童娱乐区，全屋大金中央空调，超大极米屏幕投影；专业KTV云点歌设备以及JBL音响，美国皇冠功放以及调音器，效果完胜普通KTV。大厅可以容纳20-30人开会，配有投影跟音响设备。一楼露台可作为舞台使用，开小型晚会。户外也配有音箱设备，可播放背景音乐，吹海风，看海景，饮咖啡享受惬意生活。全套华三企业级网络设备高速稳定上网。
            700多平米户外花园，位置风景绝佳。全屋布草由碧桂园五星级酒店进行清洁消毒，绝对保证卫生条件。
          </span>
        </div>
        <div className="flex jc-c">
          <button className="flex jc-c mt-20 mb-20">查看全部</button>
        </div>
      </div>
      {/* 底部 */}
      <div className="foot wp-100 flex f18">
        <p className="left pl-10 pr-10">
          <img src="../../img/客服.png" alt="" />
          咨询客服
          <img src="../../img/下.png" alt="" />
        </p>
        <p className="right flex fg1 jc-c aic">查看价格•预定</p>
      </div>
    </div>
  );
};

export default Detail;
