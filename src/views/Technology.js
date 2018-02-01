import React, { Component } from 'react'
import TechItem from '../components/TechItem'
import NextPage from '../components/NextPage'
import { assetsUrl, domain } from '../config/constants'
import Page from './Page'

export default class Technology extends Component {
    constructor() {
        super()
        this.data = [
            {
                image: `${assetsUrl}/images/firebase.png`,
                title: 'Firebase',
                tech: 'Javascript'
            },
            {
                image: `${assetsUrl}/images/mysql.png`,
                title: 'MySQL',
                tech: 'SQL'
            },
            {
                image: `${assetsUrl}/images/flask.png`,
                title: 'Flask',
                tech: 'Python'
            },
            {
                image: `${assetsUrl}/images/react.png`,
                title: 'React JS + React Native',
                tech: 'Javascript'
            },
            {
                image: `${assetsUrl}/images/node.jpg`,
                title: 'Node JS',
                tech: 'Javascript'
            },
            {
                image: `${assetsUrl}/images/express.png`,
                title: 'Express',
                tech: 'Javascript'
            },
            {
                image: `${assetsUrl}/images/redux.png`,
                title: 'Redux',
                tech: 'Javascript'
            },
            {
                image: `${assetsUrl}/images/mobx.png`,
                title: 'MobX',
                tech: 'Javascript'
            },
            {
                image: `${assetsUrl}/images/laravel.png`,
                title: 'Laravel',
                tech: 'PHP'
            },
            {
                image: `${assetsUrl}/images/jquery.png`,
                title: 'JQuery',
                tech: 'JQuery'
            },
            {
                image: `${assetsUrl}/images/bootstrap.png`,
                title: 'Bootstrap',
                tech: 'HTML+CSS'
            },
        ]
        this.renderRow = this.renderRow.bind(this)
    }
    renderRow(data) {
        const mapped = data.map((val, index) => {
            return (
                <TechItem key={index} image={val.image} title={val.title} desc={val.desc} tech={val.tech}/>
            )
        })
        return mapped
    }
    render() {
        return (
            <Page {...this.props}>
                {this.renderRow(this.data)}
                <NextPage link={`${domain}/contact`} page='Contact' />
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
