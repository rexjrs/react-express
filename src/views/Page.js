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
                <style>{
                    `
                    @media screen and (max-width: 600px) {
                        .header{
                            padding-left: 0px !important;
                            padding-right: 0px !important;
                        }
                        .profile-picture{
                            height: 220px !important;
                            width: 220px !important;
                        }
                    }
                    @media screen and (max-width: 480px) {
                        .header-tiles-links{
                            font-size: 18px !important;
                        }
                    }
                    .page-container{
                        margin-top: 60px;
                    }
                    .header{
                        background-color: white;
                        box-shadow: 0px 1px 3px -2px;
                        height: 60px;
                        border-bottom: 1px solid #CCC;
                        position: fixed;
                        top: 0;
                        left: 0;
                        right: 0;
                        display: flex;
                        flex-direction: row;
                        padding-left: 20%;
                        padding-right: 20%;
                    }
                    .header-tiles{
                        display: flex;
                        flex: 1;
                        align-items: center;
                        justify-content: center;
                    }
                    .header-tiles-links{
                        text-decoration: none;
                        color: black;
                        font-size: 20px;
                    }
                    .header-tiles .active{
                        color: green;
                        font-weight: bold;
                    }
                    `
                }
                </style>
            </div>
        )
    }
}
