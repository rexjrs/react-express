import React from 'react'
import Header from '../components/Header'

export default class Page extends React.PureComponent {
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
            </div>
        )
    }
}
