import React from "react";
import './index.scss'

export default function Login() {
  const changValue = () => {};
  const getSmsCode = () => {}
  return (
    <div className="login-index">
      <div className="login-box bg-fff">
        <div className="phone-box flex aic rel">
          <input
            className="phone pl-10 f16 reset-input"
            name="phone"
            type="text"
            // value={userInfo.phone}
            onChange={changValue}
            placeholder="请输入手机号，验证或登录"
          />
        </div>
        <div className="prove-box flex aic rel">
          <input
            className="code f16 pl-10 reset-input"
            type="text"
            name="smsCode"
            // value={userInfo.smsCode}
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
            // onClick={login}
            // className={classNames("control-button login", {
            //   select: userInfo.smsCode,
            // })}
          >
            登 录
          </button>
        </div>
      </div>
    </div>
  );
}
