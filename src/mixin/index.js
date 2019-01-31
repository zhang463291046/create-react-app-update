/*全局混入对象,会插入到每一个组件中,需要慎用*/
import React, { Component } from 'react'
import {notification, message, Modal} from 'antd'
//添加全局提示信息框
Component.prototype.notification = notification;
Component.prototype.message = message;
//添加全局方法,this指向Component实例
Component.prototype.handleRemove = function(url,params={}) {
  this.$post(url, params).then( res => {
    this.message.success('删除成功');
    this.handleSearch();
  })
}

Component.prototype.handleRemoveModal = function(url,params={}) {
	Modal.confirm({
    title: '温馨提示',
    content: '你确定删除数据?',
    onOk: () => {
      this.$post(url, params).then( res => {
        this.message.success('删除成功');
        this.handleSearch();
      })
    },
    onCancel: () => {

    },
  });
}