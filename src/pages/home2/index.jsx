import React, { Component } from 'react';
import DtTable from '@/components/dtTable/dtTable';

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
  render: (text, record, index) => {console.log(text, record, index)},
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '住址',
  dataIndex: 'address',
  key: 'address',
}];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      params: [
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
  handleClick() {
    console.log(React)
  }
  render() {
    return (
      <div className="page">
        <DtTable url="device/get_list" params={this.state.params} columns={columns}></DtTable>
      </div>
    );
  }
}

export default App;
