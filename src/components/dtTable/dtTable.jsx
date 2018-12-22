import React, { Component } from 'react'
import { Table, Pagination } from 'antd'

const rowSelection = {
  onChange: function(selectedRowKeys, selectedRows){
    console.log(selectedRowKeys, selectedRows)
  }
}

class dtTable extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      loading: false,
      arrList: [],
      page: {
        currTotal: 0,
        currCurrent: 1,
        currPageSize: 10,
      }
    };
  }
  componentDidMount() {
    this.getList()
  }
  getList() {
    this.setState({
      loading: true,
    })
    React.$http.post(this.props.url,{}).then( res=>{
      console.log(res)
      // this.loading = false;
      // this.arrList = res.data.list;
      // this.page.currTotal = Number(res.data.total);
      this.setState({
        loading: false,
        arrList: res.data.list,
        page: {
          currTotal: Number(res.data.total),
          currCurrent: this.state.page.currCurrent
        }
      })
    })
  }
  pageChange = (num) => {
    this.setState({
      page: {
        currTotal: this.state.page.currTotal,
        currCurrent: num
      }
    })
    this.getList();
  }
  render() {
    return (
      <div>
        <Table columns={this.props.columns} dataSource={this.state.arrList} pagination={false} rowSelection={rowSelection}/>
        <Pagination onChange={this.pageChange} total={this.state.page.currTotal} showTotal={total => `共 ${total} 条`}/>
      </div>
    );
  }
}

export default dtTable;
