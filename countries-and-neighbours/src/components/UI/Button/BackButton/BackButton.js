import React from 'react'
import { withRouter } from 'react-router-dom'

import styles from './BackButton.module.scss'

const BackButton = (props) => {

    const goBack = () => {
        props.history.goBack()
    }

    return (
        <button onClick={goBack} className={styles.BackButton}>
            {props.children}
        </button>
    )
}

export default withRouter(BackButton)
