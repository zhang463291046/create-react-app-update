import './slideMenu.less'

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Menu, Icon } from 'antd'

const SubMenu = Menu.SubMenu
const MenuItem = Menu.Item

class slideMenu extends Component {
  handleClick = (e) => {
    this.props.history.replace(e.key)
  }
  render() {
    return (
      <div>
        <div>
          <img width="100%" height="64px" src={require('../../assets/logo.png')} />
        </div>
        <Menu onClick={this.handleClick} mode="inline" defaultSelectedKeys={['home-index']} defaultOpenKeys={['home-index']}>
          <MenuItem key="home-index">
            <Icon type="laptop" />首页
          </MenuItem>
          <SubMenu key="home2" title={<span><Icon type="laptop" />多菜单</span>}>
            <MenuItem key="home2-index">mockjs模拟数据</MenuItem>
            <MenuItem key="home2-index2">aes加密和解密</MenuItem>
            <MenuItem key="home2-index3">城市联级</MenuItem>
            <MenuItem key="home2-index4">阿里图标库</MenuItem>
          </SubMenu>
          <SubMenu key="home3" title={<span><Icon type="notification" />常用组件封装</span>}>
            <MenuItem key="home3-index">option5</MenuItem>
            <MenuItem key="home3-index2">option6</MenuItem>
            <MenuItem key="home3-index3">option7</MenuItem>
            <MenuItem key="home3-index4">option8</MenuItem>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default withRouter(slideMenu);
