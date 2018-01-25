import React, { Component } from 'react';
import Home from '../views/Home'

export default class App extends Component {
  render() {
    switch (this.props.path) {
      case '/':
        return <Home {...this.props}/>
        break;
      default:
        return <Home {...this.props}/>
        break;
    }
  }
}
