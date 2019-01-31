// 第三方插件库JS
import React, { Component } from 'react'
// // 自定义表单验证
// import {validate} from './validate'
// // 加密和解密
import {aesEncrypt, aesDecrypt} from './aes'
// // 原型链表单验证方法
//  Vue.prototype.$validate = validate
// 原型链加密方法
 Component.prototype.$aesEncrypt = aesEncrypt
// 原型链解密方法
 Component.prototype.$aesDecrypt = aesDecrypt