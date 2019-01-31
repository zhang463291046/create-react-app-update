import React, { Component } from 'react';
import { Button, Icon } from 'antd';

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

class App extends Component {
  render() {
    return (
      <div className="page">
        <h1>阿里图标库iconfont</h1>
        <h4>方式一:下载对应的文件,引用样式文件</h4>
        <Button type="primary" style={{ marginRight: 10 }}><i className="icon iconfont icon-download"></i>下载</Button>
        <Button type="primary"><i className="icon iconfont icon-xiazai"></i>文件</Button>
        <h4>方式二:创建远程项目链接,直接使用</h4>
        <Button type="primary" style={{ marginRight: 10 }}><IconFont type="icon-tuichu" />图标</Button>
        <Button type="primary" style={{ marginRight: 10 }}><IconFont type="icon-facebook" />图标</Button>
        <Button type="primary"><IconFont type="icon-twitter" />图标</Button>
      </div>
    )
  }
}

export default App;
