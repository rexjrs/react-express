import React, { Component, PropTypes } from 'react';

export default class Home extends Component {
  constructor(){
    super()
    this.state={
      test: 1
    }
  }
  render() {
    const { isMobile } = this.props;
    return (
      <div>
        <h1>hello world {isMobile ? 'mobile' : 'desktop'}</h1>
        {this.state.test}
        <button onClick={()=>this.setState({test: this.state.test+1})}>Add</button>
      </div>
    );
  }
}
