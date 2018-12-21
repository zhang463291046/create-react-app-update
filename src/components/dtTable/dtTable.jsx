import React, { Component } from 'react'
import { Table } from 'antd'

class dtTable extends Component {
  constructor(props) {
    super(props);
    console.log(props)
  }
  handleClick = (e) => {
    this.props.history.replace(e.key)
  }
  render() {
    return (
      <div>
        <Table dataSource={this.props.dataSource} columns={this.props.columns} />
      </div>
    );
  }
}

export default dtTable;
