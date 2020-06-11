import React from 'react'

import styles from './DropDown.module.scss'

const DropDown = (props) => {

    let dropDownList = null

    if(props.show) {
        dropDownList = (
            <div className={styles.DropDownList}>
                <ul>
                    {props.dropDownList.map(region => {
                        return (
                            <li 
                                key={region.id} 
                                onClick={() => props.showCountryByRegion(region.id)} >{region.name}</li>
                        )
                    })}
                </ul>
            </div>
        )
        
    }

    return (
        <div className={styles.DropDown}>
            <button onClick={props.openCloseDropDown}>
                {props.children}    
            </button>         
            {dropDownList}   
        </div>
    )
}

export default DropDown
