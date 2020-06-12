import React, { useState } from 'react'

import Button from '../../UI/Button/Button'
import styles from './Toolbar.module.scss'

const Toolbar = (props) => {

    const [iconClassName, seticonClassName] = useState('far fa-moon')

    const btnHoverHandler = () => {
        seticonClassName((prevState) => {
            if(prevState === 'far fa-moon') {
                return 'fas fa-moon'
            } else {
                return 'far fa-moon'
            }
        })
    }

    let classes = [styles.Header, styles[props.theme]]

    return (
        <header className={classes.join(' ')}>
            <h3>Where in the world?</h3>
            <Button 
                clicked={props.changeThemeHandler}
                btnHoverHandler={btnHoverHandler} >
                <i 
                    className={iconClassName} 
                    style={{
                        paddingRight: '1rem',
                        color: props.theme === 'LightMode' ? 'hsl(209, 23%, 22%)' : 'white'
                    }}></i>
                Dark Mode
            </Button>
        </header>
    )
}

export default Toolbar
