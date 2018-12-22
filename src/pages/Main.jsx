import './Main.less'

import React, { Component } from 'react';
import { Layout } from 'antd';
import SlideMenu from '../components/slideMenu/slideMenu';

const Header = Layout.Header;
const Content = Layout.Content;
const Sider = Layout.Sider;

class Main extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Layout>
        <Sider width={200} theme="light" style={{ height: '100vh' }}>
          {/*<SlideMenu />*/}
        </Sider>
        <Layout>
          <Header style={{ background: '#fff' }}>
            vue-cli管理系统
          </Header>
          <Content>
            {this.props.children}
          </Content>
        </Layout>
      </Layout>  
    );
  }
}


export default Main;
