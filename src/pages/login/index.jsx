import './login.less'

import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd'

const FormItem = Form.Item

class App extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount () {
    console.log(this)
  }
  handleLogin = () => {
    this.props.history.push('/home-index')
  }
  handleSubmit = (e) => {
    console.log(e)
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    return (
      <div className="login">
        <div className="login-main">
          <div className="logo">智能牙刷运营平台</div>
          <Form className="loginForm" ref="form" onSubmit={this.handleSubmit}>
            <FormItem label="" required>
              <Input addonBefore={<Icon type="user" />} placeholder="请输入手机号码"></Input>
            </FormItem>
            <FormItem label="" required>
              <Input addonBefore={<Icon type="lock" />} placeholder="请输入密码" type="password"></Input>
            </FormItem>
            <FormItem label="" prop="remember">
              <div className="remember">
                <Checkbox>记住密码</Checkbox>
                <div style={{cursor: 'pointer'}}>忘记密码</div>
              </div>
            </FormItem>
            <FormItem label="">
              <Button type="primary" block onClick={this.handleLogin}>登录</Button>
            </FormItem>
          </Form>
        </div>
      </div>
    );
  }
}

export default App;
