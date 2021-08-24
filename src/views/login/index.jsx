import React from "react";
import "./index.scss";
import { userRequest } from "api/index";
import classNames from "classnames";

function Login() {
  let [userInfo, setUserInfo] = React.useState({
    phone: "18720514724",
    smsCode: "",
  });

  // 输入框事件
  const changValue = (e) => {
    let dom = e.target;
    setUserInfo({
      ...userInfo,
      [dom.name]: dom.value,
    });
  };

  // 获取验证码
  const getSmsCode = () => {
    userRequest.fetchGetSmsCode({ phone: userInfo.phone }).then((res) => {
      setUserInfo({
        ...userInfo,
        smsCode: res.result.smsCode,
      });
    });
  };

  // 登录
  const login = () => {
    // 验证码为空
    if (!userInfo.smsCode) return;

    userRequest.fetchLogin(userInfo).then((res) => {
      console.log(res.result);
    });
  };
  return (
    <div className="login-index">
      <div className="login-box bg-fff">
        <div className="phone-box flex aic rel">
          <input
            className="phone pl-10 f16 reset-input"
            name="phone"
            type="text"
            value={userInfo.phone}
            onChange={changValue}
            placeholder="请输入手机号，验证或登录"
          />
        </div>
        <div className="prove-box flex aic rel">
          <input
            className="code f16 pl-10 reset-input"
            type="text"
            name="smsCode"
            value={userInfo.smsCode}
            onChange={changValue}
            placeholder="请输入验证码"
          />
          <button onClick={getSmsCode} className="get-code fff abs">
            获 取 验 证 码
          </button>
        </div>
        <div className="user-control flex jc-sa">
          <button className="cancel control-button">取 消</button>
          <button
            onClick={login}
            className={classNames("control-button login", {
              select: userInfo.smsCode,
            })}
          >
            登 录
          </button>
        </div>
      </div>
    </div>
  );
}

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
export default connect(mapStateToProps, mapDispatchToProps)(Login);
