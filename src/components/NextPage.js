import React, { PureComponent } from 'react'

export default class NextPage extends PureComponent {
    render() {
        return (
            <React.Fragment>
                <br/>
                <center><a className="continue-link" href={this.props.link}>Continue to {this.props.page}</a></center>
                <br/>
                <style>{
                    `
                    .continue-link{
                        text-decoration: none;
                    }
                    `
                }
                </style>
            </React.Fragment>
        );
    }
}
