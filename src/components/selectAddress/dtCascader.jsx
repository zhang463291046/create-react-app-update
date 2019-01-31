import areaData from './areaData.js'

import './dtCascader.less'

import React, { Component } from 'react'
import { Cascader } from 'antd'

class dtCascader extends Component {
  // static defaultProps = {
  //   initialValue: []
  // }
  state = {
    selectValue: this.props.value
  }
  componentDidMount() {
  
  }
  handleSelect = (value,selectedOptions) => {
    this.props.onChange && this.props.onChange(value)
  }
  render() {
    const { selectValue = []  } = this.state
    return (
      <Cascader style={{ width: '300px' }} options={areaData} defaultValue={selectValue} placeholder="请选择地址" onChange={this.handleSelect}/>
    );
  }
}

export default dtCascader;
