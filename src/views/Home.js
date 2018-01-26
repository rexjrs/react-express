import React, { Component } from 'react'
import { assetsUrl } from '../config/constants'
import Page from './Page'

export default class Home extends Component {
    render() {
        return (
            <Page {...this.props}>
                <div className="profile-picture-container">
                    <img className="profile-picture" src={`${assetsUrl}/images/me.jpg`} />
                </div>
            </Page>
        );
    }
}
