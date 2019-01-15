import './dtSelect.less'

import React, { Component } from 'react'
import moment from 'moment'
import { DatePicker } from 'antd'

class dtSelect extends Component {
  constructor(props) {
    super(props)
  }
  static defaultProps = {
    url: '',
  }
  state = {
    start_time: moment(),
    end_time: moment(),
  }
  componentDidMount() {
    
  }
  options1 = (start_time) => {
    const end_time = this.state.end_time;
    if (!start_time || !end_time) {
      return false;
    }

    return start_time.valueOf() > end_time.valueOf();
  }

  options2 = (end_time) => {
    const start_time = this.state.start_time;
    if (!end_time || !start_time) {
      return false;
    }
    return end_time.valueOf() <= start_time.valueOf();
  }

  dateChange1 = (value) => {
    console.log(value.format('YYYY-MM-DD'))
    this.setState({
      start_time: value,
    })
    // this.onChange('start_time', value);
    this.props.onChange([value.format('YYYY-MM-DD'),this.state.end_time.format('YYYY-MM-DD')])
  }

  dateChange2 = (value) => {
    console.log(value)
    this.setState({
      end_time: value,
    });
    this.props.onChange([this.state.start_time.format('YYYY-MM-DD'),value.format('YYYY-MM-DD')])
  }
  select (start_time, end_time) {
    // this.onChange('end_time', value);
    // this.$emit('on-select',[this.start_time,this.end_time]);
    this.props.onChange([this.state.start_time,this.state.end_time])
  }
  handleSelect = (value) => {
    this.props.onChange(value)
  }
  render() {
    const { start_time, end_time } = this.state;
    return (
      <div>
        <DatePicker
          style={{ width: '200px' }}
          format="YYYY-MM-DD"
          placeholder="请选择开始时间"
          onChange={this.dateChange1}
          disabledDate={this.options1}
        />
        <DatePicker
          style={{ width: '200px' }}
          format="YYYY-MM-DD"
          placeholder="请选择截止时间"
          onChange={this.dateChange2}
          disabledDate={this.options2}
        />
      </div>
    );
  }
}

export default dtSelect;
