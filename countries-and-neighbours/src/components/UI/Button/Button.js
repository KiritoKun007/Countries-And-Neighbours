import React from 'react'

import styles from './Button.module.scss'

const Button = ({ btnStyle, clicked, btnHoverHandler, children, theme }) => {

    let classes = [styles.Button, styles[btnStyle], styles[theme]]

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
