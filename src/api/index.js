import request from "./request";

// 首页请求
export const homeRequest = {
  // 热门推荐请求
  fetchHotRecommend() {
    return request.get("house/scene");
  },

  // 热门城市
  fetchHotCity() {
    return request.get("house/city");
  },

  // 目的地推荐列表
  fetchDestination() {
    return request.get("house/list");
  },

  getHomeDetail(params) {
    return request.get("house/detail", params);
  },
};

// 目的地请求
export const targetRequeat = {
  // 房源
  fetchRoom() {
    return request.get("house/list");
  },

  // 评论
  fetchComment() {
    return request.get("house/comment");
  },

  // 周边
  fetchPeriphery() {
    return request.get("house/around");
  },

  // 介绍
  fetchIntroduce() {
    return request.get("house/introduction");
  },
};

// 用户页
export const userRequest = {
  // 登录
  fetchLogin(params) {
    return request.post("user/loginBySmsCode", params);
  },

  // 获取验证码
  fetchGetSmsCode(params) {
    return request.post("user/getSmsCode", params);
  },
};
