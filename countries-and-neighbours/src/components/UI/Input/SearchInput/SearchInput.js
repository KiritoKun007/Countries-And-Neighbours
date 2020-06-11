import React from 'react'

import styles from './SearchInput.module.scss'

const SearchInput = (props) => {

    return (
        <input 
            className={styles.SearchInput}
            {...props.config}
            defaultValue={props.value}
            onChange={props.inputHandler} />
    )
}

export default SearchInput
