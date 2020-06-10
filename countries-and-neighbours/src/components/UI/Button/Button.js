import React from 'react'

import styles from './Button.module.scss'

const Button = ({ btnStyle, clicked, btnHoverHandler, children }) => {

    let classes = [styles.Button, styles[btnStyle]]

    return (
        <button 
            className={classes.join(' ')}
            onClick={clicked}
            onMouseOver={btnHoverHandler}
            onMouseLeave={btnHoverHandler} >
            {children}
        </button>
    )
}

export default Button
