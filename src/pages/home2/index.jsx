import areaData from '@/components/selectAddress/areaData.js'
import React, { Component } from 'react'
import moment from 'moment'
import { Drawer, Form, Input, Select, Cascader, DatePicker, Radio, Checkbox, Button, Icon, Modal } from 'antd'
import DtSelect from '@/components/select/dtSelect'
import DtSelectUrl from '@/components/select/dtSelectUrl'
import DtSelectDate from '@/components/select/dtSelectDate'
import DtCascader from '@/components/selectAddress/dtCascader'
import DtTable from '@/components/table/dtTable'
const FormItem = Form.Item
const Option = Select.Option
const RadioGroup = Radio.Group
const CheckboxGroup = Checkbox.Group

class App extends Component {
  state = {
    params: {
      key1: '',
      key2: '',
      key3: '',
    },
    visible: false,
    formData: {
      form1: '',
      form2: '',
      form3: '',
      form4: [],
      form5: '',
    },
  }
  rules = {
    form1: [{ required: true, message: '请输入条件1!' }],
    form2: [{ required: true, message: '请输入条件2!' }],
    form3: [],
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
            <Button type="primary" style={{ marginRight: 10 }} onClick={() => this.handleEdit(row)}>编辑</Button>
            <Button type="danger" onClick={() => this.handleRemove('device/del_list',{id:row.key1})}>删除</Button>
          </div>
        )  
      }
    }
  ]
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
    this.refs.table.handleSearch()
  }
  handleAdd = () => {
    this.props.form.resetFields();
    this.setState({
      visible: true,
      formData: {}
    })
  }
  handleEdit(item) {
    this.props.form.resetFields();
    this.setState({
      visible: true,
      formData: {...item}
    })
    this.props.form.setFieldsValue({
      dateRange: [moment('2018-01-05', 'YYYY-MM-DD'),moment('2018-01-15', 'YYYY-MM-DD')]
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log(err, values)
      console.log('开始时间',values.dateRange[0].format('YYYY-MM-DD'))
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
      title: '温馨提示',
      content: '你确定删除数据?',
      onOk: () => {
        this.message.success('删除成功');
      },
      onCancel: () => {

      },
    });
  }
  render() {
    const { params } = this.state
    const { getFieldDecorator} = this.props.form
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
              条件1：<Input className="dt-search-input" placeholder="请输入条件1" onChange={e => this.setState({ params: {...params, key1: e.target.value} })}/>
            </div>
            <div className="dt-search-cell">
              条件2：<DtSelect className="dt-search-select" url="deviceType" onChange={value => this.setState({ params: {...params, key2: value} })}/>
            </div>
            <div className="dt-search-cell">
              条件3：<DtSelectUrl className="dt-search-select" url="device/get_select" onChange={value => this.setState({ params: {...params, key3: value} })}/>
            </div>
            <div className="dt-search-cell">
              条件4：<DatePicker className="dt-search-date" placeholder="请选择时间" onChange={(moment, value) => this.setState({ params: {...params, key4: value} })} />
            </div>
            <div className="dt-search-cell">
              条件5：<DtSelectDate onChange={value => this.setState({ params: {...params, key5: value[0], key6: value[1]} })}/>
            </div>
            <div className="dt-search-cell">
              条件6：<DtCascader onChange={value => this.setState({ params: {...params, key7: value} })}/>
            </div>
            <div className="dt-search-cell">
              <Button type="ghost" onClick={this.handleSearch}>查询</Button>
            </div>
          </div>
          <div className="dt-search-operation">
            <Button type="info" style={{ marginRight: 10 }} onClick={this.handleAdd}>新增</Button>
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
                getFieldDecorator('form2', {initialValue: '1'})
                (
                  <DtSelect url="deviceType"/>
                )
              }
            </FormItem>
            <FormItem label="时间" {...formItemLayout}>
              {
                getFieldDecorator('form3', {initialValue: moment('2019-01-02', 'YYYY-MM-DD')})
                (
                  <DatePicker placeholder="请选择时间" />
                )
              }
            </FormItem>
            <FormItem label="时间范围" {...formItemLayout}>
              {
                getFieldDecorator('dateRange', {initialValue: [moment('2019-01-05', 'YYYY-MM-DD'), moment('2019-01-20', 'YYYY-MM-DD')]})
                (
                  <DtSelectDate/>
                )
              }
            </FormItem>
            <FormItem label="区域" {...formItemLayout}>
              {
                getFieldDecorator('form4', {initialValue: ["天津", "天津市", "和平区"]})
                (
                  <Cascader options={areaData} placeholder="请选择地址"/>
                )
              }
            </FormItem>
            <FormItem label="区域组件化" {...formItemLayout}>
              {
                getFieldDecorator('address', {initialValue: ["天津", "天津市", "和平区"]})
                (
                  <DtCascader/>
                )
              }
            </FormItem>
            <FormItem label="单选项" {...formItemLayout}>
              {
                getFieldDecorator('form5', {initialValue: 1})
                (
                  <RadioGroup>
                    <Radio value={1}>A</Radio>
                    <Radio value={2}>B</Radio>
                    <Radio value={3}>C</Radio>
                    <Radio value={4}>D</Radio>
                  </RadioGroup>
                )
              }
            </FormItem>
            <FormItem label="复选项" {...formItemLayout}>
              {
                getFieldDecorator('form6', {initialValue: [1,2]})
                (
                  <CheckboxGroup>
                    <Checkbox value={1}>A</Checkbox>
                    <Checkbox value={2}>B</Checkbox>
                    <Checkbox value={3}>C</Checkbox>
                    <Checkbox value={4}>D</Checkbox>
                  </CheckboxGroup>
                )
              }
            </FormItem>
          </Form>
          <div className="form-footer">
            <Button type="primary" style={{ marginRight: 10 }} onClick={this.handleSubmit}>确定</Button>
            <Button onClick={this.onClose}>取消</Button>
          </div> 
        </Drawer>
      </div>
    );
  }
}
export default Form.create()(App);
