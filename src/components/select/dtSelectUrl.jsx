import './dtSelect.less'

import React, { Component } from 'react'
import { Select } from 'antd'
const Option = Select.Option

class dtSelectUrl extends Component {
  static defaultProps = {
    url: '',
  }
  state = {
    arrList: [],
  }
  componentDidMount() {
    this.getList()
  }
  getList() {
    this.$http.post(this.props.url,{}).then( res => {
      this.setState({
        arrList: res.data
      })
    })
  }
  handleSelect = (value) => {
    this.props.onChange(value)
  }
  render() {
    return (
      <Select className={this.props.className} onChange={this.handleSelect} placeholder="请选择">
        {
          this.state.arrList.map((item,index) => {
            return <Option value={item.value} key={index}>{item.label}</Option>
          })
        }
      </Select>
    );
  }
}

export default dtSelectUrl;
