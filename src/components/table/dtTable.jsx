import './dtTable.less'

import React, { Component } from 'react'
import { Table, Pagination } from 'antd'

class dtTable extends Component {
  constructor(props) {
    super(props)
    console.log('dtTable',props)
  }
  static defaultProps = {
    selectable: false,
    pageable: true,
  }
  state = {
    loading: false,
    arrList: [],
    page: {
      currTotal: 0,
      currCurrent: 1,
      currPageSize: 10,
    },
    selection: [],
  }
  componentDidMount() {
    this.getList()
  }
  getList() {
    this.setState({
      loading: true,
      selection: []
    })
    let param = Object.assign({}, this.props.params, {page: this.state.page.currCurrent});
    this.$http.post(this.props.url,param).then( res => {
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
  handleSearch() {
    this.setState({
      page: {
        currTotal: 0,
        currCurrent: 1
      }
    })
    this.getList()
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
  handleSelectChange = (selectedRowKeys, selectedRows) => {
    this.setState({ selection: selectedRows});
  }
  // 返回选中数组,默认是id
  getSelect(key='id'){
    return this.state.selection.map((item) => item[key]);
  }
  render() {
    const rowSelection = {
      onChange: this.handleSelectChange
    }
    return (
      <div className="table-wrap">
        {
          this.props.selectable ? 
          <Table rowKey="key1" columns={this.props.columns} dataSource={this.state.arrList} pagination={false} rowSelection={rowSelection}/>:
          <Table rowKey="key1" columns={this.props.columns} dataSource={this.state.arrList} pagination={false}/>
        }
        {
          this.props.pageable && 
          <Pagination className="table-page" onChange={this.pageChange} total={this.state.page.currTotal} showTotal={total => `共 ${total} 条`}/>
        }
      </div>
    );
  }
}

export default dtTable;
