import React from 'react'
import { domain } from '../config/constants'
const tiles = [
    { name: 'About', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Technologies', path: '/technologies' },
    { name: 'Contact', path: '/contact' },
]
export default class Header extends React.PureComponent {
    renderTiles(data) {
        const mapped = data.map((val) => {
            const active = val.path === this.props.path ? 'active' : ''
            return (
                <div className="header-tiles" key={val.name}>
                    <a className={`header-tiles-links ${active}`} href={`${domain}${val.path}`}>{val.name}</a>
                </div>
            )
        })
        return mapped
    }
    render() {
        return (
            <div className="header">
                {this.renderTiles(tiles)}
            </div>
        )
    }
}