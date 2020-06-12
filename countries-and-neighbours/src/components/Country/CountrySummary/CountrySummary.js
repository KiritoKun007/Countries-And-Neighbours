import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import styles from './CountrySummary.module.scss'

const CountrySummary = (props) => {

    const showCountry = () => {
        props.history.push({
            pathname: '/Country/' + props.country.name
        })        
    }

    let classes = [styles.CountrySummary, styles[props.theme]]

    return (
        <div className={classes.join(' ')} onClick={showCountry} >
            <img src={props.country.flag} alt="Country Flag"/>
            <div className={styles.Summary}>
                <h4>{props.country.name}</h4>
                <div>
                    <p> <strong>Population:</strong>&nbsp; {props.country.population} </p>
                    <p> <strong>Region:</strong>&nbsp; {props.country.region} </p>
                    <p> <strong>Capital:</strong>&nbsp; {props.country.capital} </p>
                </div>
            </div>
        </div>
    )
}

export default withRouter(CountrySummary)
