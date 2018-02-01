import React, { Component } from 'react'
import NextPage from '../components/NextPage'
import PortItem from '../components/PortItem'
import { assetsUrl, domain } from '../config/constants'
import Page from './Page'

export default class Portfolio extends Component {
    constructor() {
        super()
        this.data = [
            {
                image: `${assetsUrl}/images/lightrocket.PNG`,
                title: 'LightRocket',
                desc: `LightRocket is an app currently in development for LightRocketMedia.
                The app automatically syncs the user's images to the LightRocket archive platform for photographers.`,
                tech: 'React Native (IOS/Android), Redux, LightRocket API service'
            },
            {
                image: `${assetsUrl}/images/joox.png`,
                title: 'Joox',
                desc: `I spent 3 months with the Tencent Thailand team working on the new Joox website. It was built with Next.js so that
                 we could get better SEO offered by the serverside rendering.`,
                tech: 'ReactJS, Next.JS, Tencent API service'
            },
            {
                image: `${assetsUrl}/images/chickenapp.png`,
                title: 'Unicity Unishop Mobile App',
                desc: `Unishop is Unicity International's next mobile app for distributors around the world to manage
                their MLM business. It features many of the tools required for MLM distributors to check their commission statements,
                 shop for new products and view their genealogy.`,
                tech: 'React Native (IOS/Android), MobX, Hydra API service'
            },
            {
                image: `${assetsUrl}/images/membercd.png`,
                title: 'Unicity Unishop Web App',
                desc: `Unishop is Unicity International's next web app for distributors around the world to manage
                their MLM business. It features many of the tools required for MLM distributors to check their commission statements,
                 shop for new products and view their genealogy.`,
                tech: 'React JS, MobX, Hydra API service'
            },
            {
                image: `${assetsUrl}/images/ifit1.PNG`,
                title: 'Unicity Project U',
                desc: `Project U is a fitness mobile app built for Unicity fitness trainers to manage and coach their fitness team.
                 It allows participants to track their meals, exercises, weight and much more. Coaches are then able to give feedback 
                 to their participants.`,
                tech: 'React Native (IOS/Android), MobX, AWS Lambda + RDS'
            },
            {
                image: `${assetsUrl}/images/graph.png`,
                title: 'React Native Touchable Graph',
                desc: `This graph component for React Native allows developers to plot a line graph so that users can interact with their
                 finger to see the data points. More: https://github.com/rexjrs/react-native-touchable-graph`,
                tech: 'React Native (IOS/Android)'
            },
        ]
        this.renderRow = this.renderRow.bind(this)
    }
    renderRow(data) {
        const mapped = data.map((val, index) => {
            return (
                <PortItem key={index} image={val.image} title={val.title} desc={val.desc} tech={val.tech}/>
            )
        })
        return mapped
    }
    render() {
        return (
            <Page {...this.props}>
                {this.renderRow(this.data)}
                <NextPage link={`${domain}/technologies`} page='Technologies' />
                <style>{
                    `
                    h1{
                        font-weight: 300 !important;
                    }
                    @media screen and (max-width: 1000px) {
                        .item-wrapper{
                            margin-right: 10% !important;
                            margin-left: 10% !important;
                        }
                    }
                    @media screen and (max-width: 800px) {
                        .item-wrapper{
                            margin-right: 5% !important;
                            margin-left: 5% !important;
                        }
                    }
                    @media screen and (max-width: 650px) {
                        .item-wrapper{
                            flex-direction: column !important;
                        }
                        .item-desc{
                            padding-top: 20px;
                        }
                    }
                    .item-wrapper{
                        display: flex;
                        flex-direction: row;
                        margin-right: 20%;
                        margin-left: 20%;
                        padding-top: 40px;
                    }
                    .item-image{
                        display: flex;
                        flex: 0.5;
                        justify-content: center;
                        align-items: center;
                    }
                    .item-image img{
                        max-height: 500px;
                        box-shadow: 0px 0px 11px -4px;
                        max-width: 400px;
                    }
                    .item-desc{
                        display: flex;
                        flex-direction: column;
                        flex: 0.5;
                        justify-content: center;
                        align-items: flex-start;
                        color: #555;
                    }
                    `
                }
                </style>
            </Page>
        );
    }
}
