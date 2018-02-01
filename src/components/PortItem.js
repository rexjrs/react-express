import React, { PureComponent } from 'react'

export default class PortItem extends PureComponent {
    render() {
        return (
            <React.Fragment>
                <div className="item-wrapper">
                    <div className="item-image"><img src={this.props.image} alt="LightRocket"/></div>
                    <div className="item-desc">
                        <h1>{this.props.title}</h1>
                        {this.props.desc}
                        <h3>{this.props.tech}</h3>
                    </div>
                </div>
                <style>{
                    `
                    h1, h3{
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
            </React.Fragment>
        );
    }
}
