import './dtSelect.less'

import React, { Component } from 'react'
import moment from 'moment'
import { DatePicker } from 'antd'

class dtDatePicker extends Component {
  // static defaultProps = {
  //   value: [null,null],
  // }

  state = {
    start_time: this.props.value && this.props.value[0],
    end_time: this.props.value && this.props.value[1],
  }

  componentDidMount() {
    
  }

  // componentWillReceiveProps(nextProps){
  //   console.log(nextProps)
  //   this.setState({
  //     start_time: nextProps.start_time && moment(nextProps.start_time),
  //     end_time: nextProps.end_time && moment(nextProps.end_time),
  //   })
  // }

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
    this.setState({
      start_time: value,
    })
    this.props.onChange && this.props.onChange([value,this.state.end_time])
  }

  dateChange2 = (value) => {
    this.setState({
      end_time: value,
    });
    this.props.onChange && this.props.onChange([this.state.start_time,value])
  }

  render() {
    const { start_time = null, end_time = null } = this.state;
    return (
      <span>
        <DatePicker
          style={{ width: '200px' }}
          format="YYYY-MM-DD"
          defaultValue={start_time}
          placeholder="请选择开始时间"
          onChange={this.dateChange1}
          disabledDate={this.options1}
        />
        <span> - </span>
        <DatePicker
          style={{ width: '200px' }}
          format="YYYY-MM-DD"
          defaultValue={end_time}
          placeholder="请选择截止时间"
          onChange={this.dateChange2}
          disabledDate={this.options2}
        />
      </span>
    );
  }
}

export default dtDatePicker;
