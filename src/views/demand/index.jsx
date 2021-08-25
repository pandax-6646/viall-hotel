import React from "react";
import Footer from "components/footer/index";
import "./index.scss";
import { useHistory } from "react-router-dom";
export default function Demand() {
  let history = useHistory();

  return (
    <div className="demand-container wp-100 h100pc">
      <div className="nav bg-fff flex jc-sb aic">
        <div
          className="back flex aic jc-c"
          onClick={() => {
            history.push('/index');
          }}
        >
          <img src="../../img/rightArrow.png" className="arrow-left" alt="" />
          <span>返回</span>
        </div>
        <h2 className="logo fg1 tac">
          <img src="../../img/logo.png" />
        </h2>
      </div>

      <div className="header ">
        <img src="../../img/demand.jpeg" className="image wp-100" />
      </div>

      <div className="main">
        <div className="form bg-fff pl-10 pr-10 pb-15 f999 f16">
          <ul>
            <li className="formLi flex jc-sb aic bdb f999 pt-10 pb-10">
              <label>出游类型</label>
              <ul className="pList ml-20 fg1 flex jc-sb aic pr-10">
                <li className="cur">
                  <a className="demand_type" data-value="0">
                    家庭
                  </a>
                </li>
                <li>
                  <a className="demand_type" data-value="12">
                    公司
                  </a>
                </li>
                <li>
                  <a className="demand_type" data-value="7">
                    同学
                  </a>
                </li>
                <li>
                  <a className="demand_type" data-value="5">
                    其它
                  </a>
                </li>
              </ul>
            </li>
            <li className="formLi flex jc-sb aic bdb f999 pt-10 pb-10">
              <label>出游人数</label>
              <ul className="pList ml-20 fg1 flex aic">
                <li className="cur default pr-10">
                  <a className="demand_people" data-value="1-5">
                    1-5
                  </a>
                </li>
                <li className="default pr-10">
                  <a className="demand_people" data-value="6-10">
                    6-10
                  </a>
                </li>
                <li className="default pr-10">
                  <a className="demand_people" data-value="11-10000">
                    10+
                  </a>
                </li>
              </ul>
            </li>
            <li className="formLi flex jc-sb aic bdb f999 pt-10 pb-10">
              <div className="txt fg1 flex jc-sb f16">
                <label name="data">
                  出游时间
                  <input
                    id="date"
                    className="formInput ml-20"
                    type="text"
                    placeholder="请选择"
                  />
                </label>
                <img src="../../img/rightArrow.png" className="arrow" alt="" />
              </div>
            </li>
            <li
              className="formLi flex jc-sb aic bdb f999 pt-10 pb-10"
              style={{ display: "none" }}
              id="company"
            >
              <label>公司名称</label>
              <input
                id="name"
                className="formInput ml-20 fg1"
                type="text"
                placeholder="请填写"
                maxLength="100"
              />
            </li>
            <li
              className="formLi flex jc-sb aic bdb f999 pt-10 pb-10"
              id="username"
            >
              <label>联系姓名</label>
              <input
                id="name"
                className="formInput ml-20 fg1"
                type="text"
                placeholder="请填写"
                maxLength="100"
              />
            </li>
            <li
              className="formLi flex jc-sb aic bdb f999 pt-10 pb-10"
              id="mobile"
            >
              <label>联系电话</label>
              <input
                id="phone"
                className="formInput ml-20  fg1"
                type="tel"
                placeholder="请填写"
                maxLength="15"
              />
            </li>
            <li className="pt-15">
              <a className="btn" id="submitBtn">
                提交需求
              </a>
            </li>
          </ul>
        </div>
      </div>

      <Footer currIndex="03" />
    </div>
  );
}
