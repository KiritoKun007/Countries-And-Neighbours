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

    return (
        <header className={styles.Header}>
            <h3>Where in the world?</h3>
            <Button 
                btnStyle='ThemeChange'
                clicked={props.changeThemeHandler}
                btnHoverHandler={btnHoverHandler} >
                <i className={iconClassName} style={{paddingRight: '1rem'}}></i>
                Dark Mode
            </Button>
        </header>
    )
}

export default Toolbar
