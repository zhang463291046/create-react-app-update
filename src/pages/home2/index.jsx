import React, { Component } from 'react'
import { Drawer, Form, Input, Select, DatePicker, Radio, Checkbox, Button, Icon, Modal } from 'antd'
import DtTable from '@/components/dtTable/dtTable'
const FormItem = Form.Item
const Option = Select.Option
const RadioGroup = Radio.Group
const CheckboxGroup = Checkbox.Group
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
    visible: true,
    formData: {
      form1: '',
      form2: '',
      form3: '',
      form4: [],
      form5: '',
    },
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
    form1: [{ required: true, message: '请输入条件1!' }],
    form2: [{ required: true, message: '请输入条件2!' }],
    form3: [],
  }
  componentDidMount() {
    console.log(this)
  }
  handleInput = ({target: {value}}) => {
    const params = this.state.params
    params.key1 = value
    this.setState({
      params: params
    })
  }
  handleSelect = (value) => {
    const params = this.state.params
    params.key2 = value
    this.setState({
      params: params
    })
  }
  handleDate = (moment,value) => {
    const params = this.state.params
    params.key3 = value
    this.setState({
      params: params
    })
  }
  handleSearch = () => {
    console.log(this.state)
  }
  handleAdd = () => {
    this.setState({
      visible: true,
      formData: {}
    })
  }
  handleEdit(item) {
    this.setState({
      visible: true,
      formData: {...item}
    })
  }
  handleSubmit = (e) => {
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
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
    };
    return (
      <div className="page">
        <div className="dt-search-top">
          <div className="dt-search-cells">
            <div className="dt-search-cell">
              <Input className="dt-search-input" placeholder="输入账号、用户名" onChange={this.handleInput}/>
            </div>
            <div className="dt-search-cell">
              <Select style={{ width: 120 }} onChange={this.handleSelect}>
                <Option value="1">条件1</Option>
                <Option value="2">条件2</Option>
                <Option value="3">条件3</Option>
                <Option value="4">条件4</Option>
              </Select>
            </div>
            <div className="dt-search-cell">
              <DatePicker onChange={this.handleDate} />
            </div>
            <div className="dt-search-cell">
              <Button type="ghost" onClick={this.handleSearch}>查询</Button>
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
                getFieldDecorator('form1', {rules: this.rules.form1, initialValue: this.state.formData.key1})
                (
                  <Input placeholder="请输入条件1" />
                )
              }
            </FormItem>
            <FormItem label="选择" {...formItemLayout}>
              {
                getFieldDecorator('form2', {initialValue: 'jack'})
                (
                  <Select defaultValue="lucy" >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled">Disabled</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                )
              }
            </FormItem>
            <FormItem label="时间" {...formItemLayout}>
              {
                getFieldDecorator('form3', {})
                (
                  <DatePicker placeholder="请选择时间" />
                )
              }
            </FormItem>
            <FormItem label="单选" {...formItemLayout}>
              {
                getFieldDecorator('form4', {})
                (
                  <RadioGroup value={this.state.value}>
                    <Radio value={1}>A</Radio>
                    <Radio value={2}>B</Radio>
                    <Radio value={3}>C</Radio>
                    <Radio value={4}>D</Radio>
                  </RadioGroup>
                )
              }
            </FormItem>
            <FormItem label="复选" {...formItemLayout}>
              {
                getFieldDecorator('form5', {})
                (
                  <RadioGroup value={this.state.value}>
                    <Radio value={1}>A</Radio>
                    <Radio value={2}>B</Radio>
                    <Radio value={3}>C</Radio>
                    <Radio value={4}>D</Radio>
                  </RadioGroup>
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
