import React, { Component } from 'react';

export default class App extends Component {
  constructor(){
    super()
    this.state={
      test: 1
    }
  }
  render() {
    console.log(this.props)
    //RENDER OPTIONS FOR ROUTING
    const { isMobile } = this.props;
    return (
      <div>
        <h1>hello world {isMobile ? 'mobile' : 'desktop'}</h1>
        {this.state.test}
        <button onClick={()=>this.setState({test: ++this.state.test})}>Add</button>
      </div>
    );
  }
}
