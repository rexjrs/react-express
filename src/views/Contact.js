import React, { Component } from 'react'
import { assetsUrl } from '../config/constants'
import Page from './Page'

export default class Contact extends Component {
    render() {
        return (
            <Page {...this.props}>
                <center>
                    <br/><br/>
                    <h3>Phone: +66 094-648-1922</h3>
                    <br/>
                    <a className="links" href="mailto:thomas.charlesworths@gmail.com?Subject=I saw your portfolio!" target="_top">thomas.charlesworths@gmail.com</a>
                    <br/><br/>
                    <a className="links" href="skype:thomas.charlesworthless?userinfo">Contact me on Skype</a>
                </center>
                <style>{
                    `
                    h3{
                        font-weight: 300 !important;
                        margin: 0px !important;
                    }
                    .links{
                        text-decoration: none;
                    }
                    `
                }
                </style>
            </Page>
        );
    }
}
