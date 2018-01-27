import React, { Component } from 'react'
import { assetsUrl } from '../config/constants'
import Page from './Page'

export default class Technology extends Component {
    render() {
        return (
            <Page {...this.props}>

                <style>{
                    `
                    @media screen and (max-width: 1000px) {

                    }
                    `
                }
                </style>
            </Page>
        );
    }
}
