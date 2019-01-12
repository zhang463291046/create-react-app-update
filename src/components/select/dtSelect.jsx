// 引用配置的selectConfig列表
import * as arrList from './selectConfig'

import './dtSelect.less'

import React, { Component } from 'react'
import { Select } from 'antd'
const Option = Select.Option

class dtSelect extends Component {
  constructor(props) {
    super(props)
  }
  static defaultProps = {
    url: '',
  }
  state = {
    
  }
  componentDidMount() {
    
  }
  handleSelect = (value) => {
    this.props.onChange(value)
  }
  render() {
    return (
      <Select style={{ width: 150 }} onChange={this.handleSelect}>
        {
          arrList[this.props.url].map((item,index) => {
            return <Option value={item.value} key={index}>{item.label}</Option>
          })
        }
      </Select>
    );
  }
}

export default dtSelect;
