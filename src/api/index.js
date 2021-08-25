import request from "./request";

// 首页请求
export const homeRequest = {
  // 热门推荐请求
  fetchHotRecommend: () => request.get("house/scene"),

  // 热门城市
  fetchHotCity: () => request.get("house/city"),

  // 目的地推荐列表
  fetchDestination: () => request.get("house/list"),

  // 获取首页详情
  getHomeDetail: (params) => request.get("house/detail", params),

  // 收藏
  fetchCollection: (params) => request.get("love/change", params),
};

// 目的地请求
export const targetRequeat = {
  // 房源
  fetchRoom: () => request.get("house/list"),

  // 评论
  fetchComment: () => request.get("house/comment"),

  // 周边
  fetchPeriphery: () => request.get("house/around"),

  // 介绍
  fetchIntroduce: () => request.get("house/introduction"),
};

// 用户页
export const userRequest = {
  // 登录
  fetchLogin: (params) => request.post("user/loginBySmsCode", params),

  // 获取验证码
  fetchGetSmsCode: (params) => request.post("user/getSmsCode", params),
};

// 发现页请求
export const discoverRequest = {
  fetchDiscoverList: (params) => request.get("discover/list", params),
};
