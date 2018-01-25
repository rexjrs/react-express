import React from 'react'

export default class Header extends React.PureComponent {
    render() {
        return(
            <div style={styles.container}>

            </div>
        )
    }
}

const styles = {
    container: {
        height: 60,
        borderBottom: '1px solid #CCC',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0
    }
}
