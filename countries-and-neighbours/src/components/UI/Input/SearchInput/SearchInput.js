import React from 'react'

import styles from './SearchInput.module.scss'

const SearchInput = (props) => {

    let clasess = [styles.SearchInput, styles[props.theme]]

    return (
        <input 
            className={clasess.join(' ')}
            {...props.config}
            defaultValue={props.value}
            onChange={props.inputHandler} />
    )
}

export default SearchInput
