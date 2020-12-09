"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _jpUploadFile = _interopRequireDefault(require("../components/jpUploadFile.vue"));

var _materialManagement = _interopRequireDefault(require("../components/material/materialManagement.vue"));

var _login = _interopRequireDefault(require("../components/login.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
 * @Author: your name
 * @Date: 2020-12-03 21:56:14
 * @LastEditTime: 2020-12-03 22:09:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \uploadFile\src\router\index.js
 */
_vue["default"].use(_vueRouter["default"]);

var _default = new _vueRouter["default"]({
  routes: [{
    path: '/materialManagement',
    name: 'materialManagement',
    component: _materialManagement["default"]
  }, {
    path: '/',
    name: 'login',
    component: _login["default"]
  }]
});

exports["default"] = _default;