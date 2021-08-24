import React from "react";
import "./index.scss";
import Footer from "components/footer/index";
import { Link } from "react-router-dom";
const My = (props) => {

  // 登出
  let logout = () => {
    props.actionUpdatePhone("");
    props.actionUpdateToken("");
  };

  return (
    <div className="my-index w100pc f16">
      <div
        className="header rel"
        style={{ backgroundImage: "url(img/avtBg.jpg)" }}
      >
        <div className="user abs">
          <img src="img/avatar.png" className="photo" alt="" />
          {props.token ? (
            <span className="phone f18 ml-10 fff">
              {props.phone.replace(/(\d{3})(\d{4})(\d{3})/, "$1****$3")}
            </span>
          ) : (
            <Link to="/login" className="phone f18 ml-10 fff">
              立即登录
            </Link>
          )}
        </div>
      </div>
      <div className="selection bg-fff mt-5">
        <div className="item flex jc-sb bdb">
          <div className="item-l">我的订单</div>
          <img className="item-r" src="img/rightArrow.png" alt="" />
        </div>
        <div className="item flex jc-sb bdb">
          <div className="item-l">我的共享卡</div>
          <img className="item-r" src="img/rightArrow.png" alt="" />
        </div>
        <div className="item flex jc-sb bdb">
          <div className="item-l">优惠券</div>
          <img className="item-r" src="img/rightArrow.png" alt="" />
        </div>
        <div className="item flex jc-sb bdb">
          <div className="item-l">我想去</div>
          <img className="item-r" src="img/rightArrow.png" alt="" />
        </div>
        <div className="item flex jc-sb bdb">
          <div className="item-l">浏览记录</div>
          <img className="item-r" src="img/rightArrow.png" alt="" />
        </div>
      </div>

      <div className="loginout">
        <button onClick={logout} className="exit fff">
          退出登录
        </button>
      </div>
      <Footer currIndex="05" />
    </div>
  );
};

import { actionUpdatePhone, actionUpdateToken } from "reduce/user";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    phone: state.user.phone,
    token: state.user.token,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    actionUpdatePhone: bindActionCreators(actionUpdatePhone, dispatch),
    actionUpdateToken: bindActionCreators(actionUpdateToken, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(My);
