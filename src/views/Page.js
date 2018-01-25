import React from 'react'
import Header from '../components/Header'

export default class Page extends React.PureComponent {
    render() {
        console.log('wat')
        return (
            <div>
                <Header />
                {this.props.children}
            </div>
        )
    }
}
