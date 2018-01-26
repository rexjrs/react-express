import React from 'react'
import Header from '../components/Header'

export default class Page extends React.PureComponent {
    render() {
        return (
            <div>
                <Header {...this.props} />
                <div className="page-container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
