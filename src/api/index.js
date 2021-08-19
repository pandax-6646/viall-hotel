import request from "./request";

// 首页请求
export const HomeRequest = {
  // 热门推荐请求
  fetchHotRecommend() {
    return request.get("hourse/scene");
  },

  // 热门城市
  fetchHotCity() {
    return request.get("hourse/city");
  },

  // 目的地列表
  fetchDestination() {
    return request.get("hourse/list");
  },
};
