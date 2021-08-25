import axios from "axios";
import redux from "reduce/index";

// 创建axios 实例
const service = axios.create({
  // 配置 baseURL
  baseURL: "http://132.232.87.95:3006/",

  // 请求超时时间
  timeout: 10000,
});

//  请求拦截
service.interceptors.request.use(
  (config) => {
    config.headers["user-token"] = redux.getState().user.token;
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// 响应拦截
service.interceptors.response.use(
  (res) => {
    const data = res.data;
    if (data.code != 666) {
      console.log(data);
    }
    return data;
  },
  (err) => {
    return Promise.reject(err);
  }
);

const get = (url, data = {}) => {
  return service.get(url, {
    params: data,
  });
};

const post = (url, data = {}) => {
  return service.post(url, data);
};

// 导出
export default {
  get,
  post,
};
