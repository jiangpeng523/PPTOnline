"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _store = _interopRequireDefault(require("../vuex/store"));

var _permissionUtil = _interopRequireDefault(require("../util/permissionUtil"));

var _router = _interopRequireDefault(require("../router"));

var _qs = _interopRequireDefault(require("qs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var axiosInstance = _axios["default"].create({
  // axios 通用配置项
  baseUrl: '/api',
  timeout: 120000,
  transformRequest: [function (data) {
    if (data !== null && data !== undefined && !(data instanceof FormData)) {
      return _qs["default"].stringify({
        param: JSON.stringify(data)
      });
    } else {
      return data;
    }
  }]
});

axiosInstance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

var requestInterceptor = function requestInterceptor(config) {
  if (_permissionUtil["default"].getToken()) {
    // token，如果存在的话，都加上token
    config.params = {
      token: _permissionUtil["default"].getToken(),
      param: config.params,
      t: Date.parse(new Date()) + Math.random(10000)
    };
  } else if (_permissionUtil["default"].getTicket()) {
    // ticket，如果存在的话，都加上ticket
    // console.log(config)
    config.params = {
      ticket: _permissionUtil["default"].getTicket(),
      servicePath: _permissionUtil["default"].getServicePath(),
      param: config.params
    };
  } else {
    config.params = {
      param: config.params
    };
  }

  return config;
};

var requestError = function requestError(error) {
  return Promise.reject(error);
};

var responseInterceptor = function responseInterceptor(response) {
  if (!response || !response.data) {
    // 跳转500
    redirectPage('/500');
  }

  switch (response.data.code) {
    case 402:
      // 清除token信息
      _permissionUtil["default"].cleanToken(); // 跳转登录页面


      if (window.location.pathname === '/logining') {
        _permissionUtil["default"].toReLogin('/home');
      } else {
        var param = window.location.search;

        _permissionUtil["default"].toReLogin(window.location.pathname + param);
      }

  } // 检查token


  var token = response.data.token;

  if (token !== undefined) {
    if (_permissionUtil["default"].getToken() != null && _permissionUtil["default"].getToken() !== '' && _permissionUtil["default"].getToken() === token) {
      return response;
    } else {
      _permissionUtil["default"].setToken(token);

      _permissionUtil["default"].setTicket('');

      _store["default"].commit('SET_PERMISSION', []);
    }
  }

  return response;
};

var responseError = function responseError(error) {
  if (!error || !error.response) {} // 跳转500
  // redirectPage('/500')
  // 检查状态


  if (error.response) {
    switch (error.response.status) {
      case 402:
        // // 清除token信息
        // permissionUtil.logout()
        console.log('responseError');

        _permissionUtil["default"].cleanToken();

        return error;

      case 404:
        console.log('404le '); // 跳转404
        // redirectPage('/404')

        break;
    }
  }

  return Promise.reject(error);
};

var redirectPage = function redirectPage(path) {
  _router["default"].replace({
    path: path
  });
}; // 添加token信息
// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN
// axiosInstance.defaults.withCredentials=true
// 请求拦截器


axiosInstance.interceptors.request.use(requestInterceptor, requestError); // 响应拦截器

axiosInstance.interceptors.response.use(responseInterceptor, responseError);
var _default = axiosInstance;
exports["default"] = _default;