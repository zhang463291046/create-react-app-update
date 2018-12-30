import React, { Component } from 'react'
import { Drawer, Form, Input, Button, Icon, Modal } from 'antd'
import DtTable from '@/components/dtTable/dtTable'
const FormItem = Form.Item
class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    params: {
      key1: '',
      key2: '',
      key3: '',
    },
    visible: true
  }
  columns = [
    {
      title: '标题1',
      dataIndex: 'key1',
      key: 'key1',
    },
    {
      title: '标题2',
      dataIndex: 'key2',
      key: 'key2',
    },
    {
      title: '标题3',
      dataIndex: 'key3',
      key: 'key3',
    },
    {
      title: '标题4',
      dataIndex: 'key4',
      key: 'key4',
    },
    {
      title: '标题5',
      dataIndex: 'key5',
      key: 'key5',
    },
    {
      title: '标题6',
      dataIndex: 'key6',
      key: 'key6',
    },
    {
      title: '过滤器',
      dataIndex: 'key7',
      key: 'key7',
      render: (value, row, index) => {
        const label = value < 5?'小的':'大的'
        return <span>{label}</span>
      }
    },
    {
      title: '操作',
      dataIndex: 'key8',
      key: 'key8',
      render: (value, row, index) => {
        return (
          <div>
            <Button type="primary" onClick={() => this.handleEdit(row)}>编辑</Button>
            <Button type="danger" onClick={() => this.handleRemove('device/get_list',{id:row.key1})}>删除</Button>
          </div>
        )  
      }
    }
  ]
  rules = {
    userName: [{ required: true, message: '请输入条件1!' }],
    nickName: [{ required: true, message: '请输入条件2!' }],
  }
  componentDidMount() {
    console.log(this)
  }
  handleAdd = () => {
    this.setState({
      visible: true
    })
  }
  handleEdit(item) {
    console.log(item)
  }
  handleSubmit = (e) => {
    console.log(e)
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log(err, values)
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  onClose = () => {
    this.setState({
      visible: false
    })
  }
  handleTableSelect = () => {
    const arr = this.refs.table.getSelect()
    Modal.confirm({
      title: '删除数据?',
      content: `你将要删除${arr.join(',')}数据`,
      onOk() {
        this.message.success('删除成功');
      },
      onCancel() {

      },
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    return (
      <div className="page">
        <div className="dt-search-top">
          <div className="dt-search-cells">
            <div className="dt-search-cell">
              <Input v-model="params.keyword" className="dt-search-input" placeholder="输入账号、用户名" />
            </div>
            <div className="dt-search-cell">
              <Input v-model="params.keyword" className="dt-search-input" placeholder="输入账号、用户名" />
            </div>
          </div>
          <div className="dt-search-operation">
            <Button type="info" onClick={this.handleAdd}>新增</Button>
            <Button type="error" onClick={this.handleTableSelect}>批量删除</Button>
          </div>
        </div>
        <DtTable ref="table" url="device/get_list" params={this.state.params} columns={this.columns} selectable></DtTable>
        <Drawer visible={this.state.visible} title="新增" onClose={this.onClose} closable={false} width={640}>
          <Form className="drawer-form">
            <FormItem label="输入框" {...formItemLayout}>
              {
                getFieldDecorator('userName', {rules: this.rules.userName})
                (
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入条件1" />
                )
              }
            </FormItem>
            <FormItem label="输入框" {...formItemLayout}>
              {
                getFieldDecorator('nickName', {rules: this.rules.nickName})
                (
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入条件2" />
                )
              }
            </FormItem>
            <FormItem label="输入框" {...formItemLayout}>
              {
                getFieldDecorator('nickName', {rules: this.rules.nickName})
                (
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入条件2" />
                )
              }
            </FormItem>
            <FormItem label="输入框" {...formItemLayout}>
              {
                getFieldDecorator('nickName', {rules: this.rules.nickName})
                (
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入条件2" />
                )
              }
            </FormItem>
            <FormItem label="输入框" {...formItemLayout}>
              {
                getFieldDecorator('nickName', {rules: this.rules.nickName})
                (
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入条件2" />
                )
              }
            </FormItem>
            <FormItem label="输入框" {...formItemLayout}>
              {
                getFieldDecorator('nickName', {rules: this.rules.nickName})
                (
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入条件2" />
                )
              }
            </FormItem>
            <FormItem label="输入框" {...formItemLayout}>
              {
                getFieldDecorator('nickName', {rules: this.rules.nickName})
                (
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入条件2" />
                )
              }
            </FormItem>
            <FormItem label="输入框" {...formItemLayout}>
              {
                getFieldDecorator('nickName', {rules: this.rules.nickName})
                (
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入条件2" />
                )
              }
            </FormItem>
            <FormItem label="输入框" {...formItemLayout}>
              {
                getFieldDecorator('nickName', {rules: this.rules.nickName})
                (
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入条件2" />
                )
              }
            </FormItem>
            <FormItem label="输入框" {...formItemLayout}>
              {
                getFieldDecorator('nickName', {rules: this.rules.nickName})
                (
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入条件2" />
                )
              }
            </FormItem>
            <FormItem label="输入框" {...formItemLayout}>
              {
                getFieldDecorator('nickName', {rules: this.rules.nickName})
                (
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入条件2" />
                )
              }
            </FormItem>
            <FormItem label="输入框" {...formItemLayout}>
              {
                getFieldDecorator('nickName', {rules: this.rules.nickName})
                (
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入条件2" />
                )
              }
            </FormItem>
            <FormItem label="输入框" {...formItemLayout}>
              {
                getFieldDecorator('nickName', {rules: this.rules.nickName})
                (
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入条件2" />
                )
              }
            </FormItem>
            <FormItem label="输入框" {...formItemLayout}>
              {
                getFieldDecorator('nickName', {rules: this.rules.nickName})
                (
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入条件2" />
                )
              }
            </FormItem>
          </Form>
          <div className="form-footer">
            <Button type="primary" onClick={this.handleSubmit} style={{ marginRight: 8 }}>确定</Button>
            <Button onClick={this.onClose}>取消</Button>
          </div> 
        </Drawer>
      </div>
    );
  }
}
export default Form.create()(App);
