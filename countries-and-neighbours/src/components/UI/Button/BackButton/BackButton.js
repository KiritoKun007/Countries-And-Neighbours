import React from 'react'
import { withRouter } from 'react-router-dom'

import styles from './BackButton.module.scss'

const BackButton = (props) => {

    const goBack = () => {
        props.history.goBack()
    }

    let classes = [styles.BackButton, styles[props.theme]]

    return (
        <button onClick={goBack} className={classes.join(' ')}>
            {props.children}
        </button>
    )
}

export default withRouter(BackButton)
