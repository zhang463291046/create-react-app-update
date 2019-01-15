import areaData from './areaData.js'

import './dtCascader.less'

import React, { Component } from 'react'
import { Cascader } from 'antd'

class dtCascader extends Component {
  constructor(props) {
    super(props)
  }
  static defaultProps = {
    getFieldDecorator: '',
    initialValue: [],
  }
  state = {

  }
  componentDidMount() {
  
  }
  handleSelect = (value,selectedOptions) => {
    this.props.onChange && this.props.onChange(value)
  }
  render() {
    const {getFieldDecorator,initialValue = []} = this.props
    return (
      <span>
        {
          getFieldDecorator?
          getFieldDecorator('address', {initialValue: initialValue})
          (
            <Cascader style={{ width: '100%' }} options={areaData} placeholder="请选择地址" onChange={this.handleSelect}/>
          ):
          <Cascader style={{ width: '300px' }} options={areaData} placeholder="请选择地址" onChange={this.handleSelect} defaultValue={initialValue}/>
        }
      </span>
    );
  }
}

export default dtCascader;
