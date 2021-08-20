import request from "./request";

// 首页请求
export const homeRequest = {
  // 热门推荐请求
  fetchHotRecommend() {
    return request.get("hourse/scene");
  },

  // 热门城市
  fetchHotCity() {
    return request.get("hourse/city");
  },

  // 目的地推荐列表
  fetchDestination() {
    return request.get("hourse/list");
  },
};

// 目的地请求
export const targetRequeat = {
  // 房源
  fetchRoom() {
    return request.get("hourse/list");
  },

  // 评论
  fetchComment() {
    return request.get("hourse/comment");
  },

  // 周边
  fetchPeriphery() {
    return request.get("hourse/around");
  },

  // 介绍
  fetchIntroduce() {
    return request.get("hourse/introduction");
  },
};
