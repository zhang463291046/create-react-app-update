import React, { Component } from 'react'
import { Table } from 'antd'

class dtTable extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      arrList: [
        {
          key: '1',
          name: '胡彦斌',
          age: 32,
          address: '西湖区湖底公园1号'
        },
        {
          key: '2',
          name: '胡彦祖',
          age: 42,
          address: '西湖区湖底公园1号'
        }
      ]
    };
  }
  handleClick = (e) => {
    this.props.history.replace(e.key)
  }
  render() {
    return (
      <div>
        <Table dataSource={this.state.arrList} columns={this.props.columns} />
      </div>
    );
  }
}

export default dtTable;
