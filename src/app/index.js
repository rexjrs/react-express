import React, { Component } from 'react'
import Home from '../views/Home'
import Technology from '../views/Technology'
import Portfolio from '../views/Portfolio'
import Contact from '../views/Contact'

export default class App extends Component {
  render() {
    switch (this.props.path) {
      case '/':
        return <Home {...this.props}/>
        break;
        case '/technologies':
        return <Technology {...this.props}/>
        break;
        case '/portfolio':
        return <Portfolio {...this.props}/>
        break;
        case '/contact':
        return <Contact {...this.props}/>
        break;
      default:
        return <Home {...this.props}/>
        break;
    }
  }
}
