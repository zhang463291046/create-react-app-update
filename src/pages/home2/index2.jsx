import React, { Component } from 'react'
import { Input, Button} from 'antd'

class App extends Component {
  state = {
    value:'',
    aesValue: '',
  }
  componentDidMount() {
    console.log(this)
  }
  // 加密
  Encrypt = () => {
    const aesValue = this.$aesEncrypt(this.state.value);
    this.setState({
      aesValue: aesValue
    })
  }
  // 解密
  Decrypt = () => {
    const aesValue = this.$aesDecrypt(this.state.aesValue);
    this.setState({
      aesValue: aesValue
    })
  }
  render() {
    const { aesValue } = this.state
    return (
      <div className="page">
        <h1>加密和解密aes</h1>
        <Input placeholder="请输入需要加密的字符串" style={{width: 300}} onChange={e => this.setState({ value: e.target.value })}></Input>
        <Button type="info" onClick={this.Encrypt}>加密</Button>
        <Button type="success" onClick={this.Decrypt}>解密</Button>
        <div>结果:<span>{aesValue}</span></div>
      </div>
    );
  }
}
export default App;
