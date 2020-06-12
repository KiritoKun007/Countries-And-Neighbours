import React from 'react'

import styles from './Button.module.scss'

const Button = ({ btnStyle, clicked, btnHoverHandler, children }) => {

    return (
        <button 
            className={styles.Button}
            onClick={clicked}
            onMouseOver={btnHoverHandler}
            onMouseLeave={btnHoverHandler} >
            {children}
        </button>
    )
}

export default Button
