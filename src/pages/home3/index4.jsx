import React, { Component } from 'react';
import Button from 'antd/lib/button';
// import 'antd/dist/antd.css';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {clickCount: 0};
      this.myRef = React.createRef();
  }
  handleClick() {
    console.log(React)
    console.log(this)
    this.setState(function(state) {
      console.log(state)
      return {clickCount: state.clickCount + 1};
    });
  }
  render() {
    return (
      <div>
        <Button type="primary">Button2</Button>
      </div>
    );
  }
}

export default App;
