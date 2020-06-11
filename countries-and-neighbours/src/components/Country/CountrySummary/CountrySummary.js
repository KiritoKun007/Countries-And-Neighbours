import React from 'react'

import styles from './CountrySummary.module.scss'

const CountrySummary = ({ country }) => {
    return (
        <div className={styles.CountrySummary}>
            <img src={country.flag} alt="Country Flag"/>
            <div className={styles.Summary}>
                <h4>{country.name}</h4>
                <div>
                    <p> <strong>Population:</strong>&nbsp; {country.population} </p>
                    <p> <strong>Region:</strong>&nbsp; {country.region} </p>
                    <p> <strong>Capital:</strong>&nbsp; {country.capital} </p>
                </div>
            </div>
        </div>
    )
}

export default CountrySummary
