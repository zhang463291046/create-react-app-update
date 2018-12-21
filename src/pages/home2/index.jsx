import React, { Component } from 'react';
import DtTable from '@/components/dtTable/dtTable';

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
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
      dataSource: [
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
        <DtTable dataSource={this.state.dataSource} columns={columns}></DtTable>
      </div>
    );
  }
}

export default App;
