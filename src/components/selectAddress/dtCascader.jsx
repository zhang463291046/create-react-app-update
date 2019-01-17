import areaData from './areaData.js'

import './dtCascader.less'

import React, { Component } from 'react'
import { Cascader } from 'antd'

class dtCascader extends Component {
  constructor(props) {
    super(props)
  }
  static defaultProps = {
    initialValue: []
  }
  state = {

  }
  componentDidMount() {
  
  }
  handleSelect = (value,selectedOptions) => {
    this.props.onChange && this.props.onChange(value)
  }
  render() {
    const { initialValue = [] } = this.props
    return (
      <Cascader style={{ width: '100%' }} options={areaData} defaultValue={initialValue} placeholder="请选择地址" onChange={this.handleSelect}/>
    );
  }
}

export default dtCascader;
