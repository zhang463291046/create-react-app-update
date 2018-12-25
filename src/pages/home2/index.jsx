import React, { Component } from 'react';
import { Button } from 'antd';
import DtTable from '@/components/dtTable/dtTable';

const columns = [
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
          <Button type="primary">编辑</Button>
          <Button type="danger">删除</Button>
        </div>
      )  
    }
  }
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      params: {
        key1: '',
        key2: '',
        key3: '',
      }
    };
    console.log(this)
  }
  handleClick() {
    console.log(React)
  }
  handleTableSelect = () => {
    console.log(this.refs.table.getSelect())
  }
  render() {
    return (
      <div className="page">
        <Button type="error" onClick={this.handleTableSelect}>批量删除</Button>
        <DtTable ref="table" url="device/get_list" params={this.state.params} columns={columns}></DtTable>
      </div>
    );
  }
}

export default App;
