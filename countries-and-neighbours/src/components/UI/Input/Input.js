import React from 'react'

import SearchInput from './SearchInput/SearchInput'
import styles from './Input.module.scss'

const Input = (props) => {

    let inputElement = null

    switch (props.elementType) {
        case 'input':
            if(props.config.name === 'search') {
                inputElement = <SearchInput {...props} />
            }
            break;
    
        default:
            break;
    }

    return inputElement
}

export default Input
