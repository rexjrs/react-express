import React, { Component } from 'react'
import NextPage from '../components/NextPage'
import { assetsUrl, domain } from '../config/constants'
import Page from './Page'

export default class Home extends Component {
    render() {
        return (
            <Page {...this.props}>
                <div className="profile-picture-container">
                    <img className="profile-picture" src={`${assetsUrl}/images/me.jpg`} />
                </div>
                <div className="about-bio">
                    I'm Thomas Charlesworth (British/Thai) and I'm a web and mobile developer based in Bangkok. I graduated
                    from Stamford International University with a High Distinction in 2017. Having worked on great teams,
                    I have learnt many skills in teamworking and in technologies. Some of those technologies include: React/React-Native,
                    Laravel, Node.Js+Express, Next.Js and Swift IOS. I am currently working fulltime at LightRocket and am also a contractor.
                </div>
                <center><h1>Experience</h1></center>
                <div className="about-experience">
                    <h3>March 2014 - May 2014: Internship @ MagicBoxAsia - Laravel PHP Developer</h3>
                    This internship involved programming the back-end dashboard for Magic Box Asia’s
                    new website using Laravel PHP framework.
                    I worked on building the functions and tools of the admin side of the website to allow content creators to manage,
                    create and delete content from the main consumer side of the website.
                    This involved working with MySQL database, Amazon S3 and most importantly developing with the Laravel framework.
                    <h3>Nov 2016 - Present: Unicity International - Web/Mobile Developer - (Presently a Contractor)</h3>
                    I joined Unicity as a fresh graduate. I first started working on the Angular.js site where we developed 12 e-commerce sites
                    for 12 different branches of Unicity offices around the world. I also moved on to developing a mobile application for Unicity's
                    fitness program using React Native. Finally, I am now working on a new version of the e-commerce sites/mobile apps that are now being
                    built on React and React Native.
                    <h3>Nov 2017 - Jan 2018: Tencent Thailand - Software Engineer Contractor and React Teacher</h3>
                    After I left my full time job at Unicity, I started contracting for Tencent Thailand and teaching React JS to their developers.
                    I worked on a 3 month project where we rebuilt the joox.com website on Next.Js. Previously it had been written with JQuery using
                    iFrames in order to allow users to navigate the site without stopping the music player. Next.Js allowed us to develop a more
                    performant web app and provided much better SEO rankings for joox.com
                    <h3>June 2017 - Present: LightRocket - Software Engineer</h3>
                    I joined the LightRocket team in June 2017 as a contractor working on their new mobile application.
                    However, in Jan 2018 I joined LightRocket fulltime and am now in the process of converting their Kohana sites to React.
                </div>
                <center><h1>Academics</h1></center>
                <div className="about-experience">
                    <h3>St. Andrews International School Bangkok</h3>
                    IGCSE | Physics – Computer Studies – Geography – Business Studies – Math – English
                    <h3>Stamford International University Bangkok</h3>
                    (High Distinction) Bsc Hons. Information Technology - GPA: 3.64/4.00
                </div>
                <NextPage link={`${domain}/portfolio`} page='Portfolio' />
                <style>{
                    `
                    h1, h3{
                        font-weight: 300 !important;
                    }
                    h3{
                        border-bottom: 1px solid #CCC;
                    }
                    @media screen and (max-width: 1000px) {
                        .about-bio{
                            margin-left: 10% !important;
                            margin-right: 10% !important;
                        }
                        .about-experience{
                            margin-left: 10% !important;
                            margin-right: 10% !important; 
                        }
                    }
                    @media screen and (max-width: 600px) {
                        .about-experience{
                            margin-left: 5% !important;
                            margin-right: 5% !important; 
                        }
                    }
                    .continue-link{
                        text-decoration: none;
                    }
                    .about-experience{
                        padding-top: 20px;
                        display: flex;
                        flex-direction: column;
                        text-align: left;
                        margin-left: 20%;
                        margin-right: 20%;
                        font-size: 18px;
                        line-height: 1.5;
                        color: #555;
                    }
                    .about-bio{
                        padding-top: 20px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        text-align: center;
                        margin-left: 20%;
                        margin-right: 20%;
                        font-size: 20px;
                        line-height: 1.5;
                        color: #555;
                    }
                    .profile-picture{
                        height: 300px;
                        width: 300px;
                        border-radius: 150px;
                    }
                    .profile-picture-container{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding-top: 20px;
                    }
                    `
                }
                </style>
            </Page>
        );
    }
}
