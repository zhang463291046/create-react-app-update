import areaData from '@/components/selectAddress/areaData.js'
import React, { Component } from 'react'
import { Row, Col, Cascader } from 'antd'

class App extends Component {
  state = {
    value:[],
    selectedData:[],
  }
  componentDidMount() {
    console.log(this)
  }
  onChange = (value, selectedData ) => {
    const selectItem = selectedData.map( item => {
      return {
        code: item.id,
        name: item.name
      }
    })
    this.setState({
      value: value,
      selectedData: selectItem,
    })
  }
  render() {
    const { value, selectedData } = this.state
    return (
      <div className="page">
        <h1>城市联级选择</h1>
        <Row>
          <Col span={12}>
            <Cascader style={{ width: 300 }} options={areaData} defaultValue= {["天津", "天津市", "和平区"]} placeholder="请选择地址" onChange={this.onChange}/>
          </Col>
          <Col span={12}>
            <p>{value}</p>
            <pre style={{ height: 500 }}>{JSON.stringify(selectedData, null, 2)}</pre>
          </Col>
        </Row>
      </div>
    );
  }
}
export default App;
