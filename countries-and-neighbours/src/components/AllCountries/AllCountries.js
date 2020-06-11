import React, { Component } from 'react'

import styles from './AllCountries.module.scss'
import CountrySummary from '../Country/CountrySummary/CountrySummary'

class AllCountries extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.countries !== this.props.countries) {
            return true
        } else {
            return false
        }
    }

    render() {
        return (
            <div className={styles.AllCountries}>
                {this.props.countries.map(country => {
                    return <CountrySummary country={country} key={country.alpha3Code} />
                })}
            </div>
        )
    }
}

export default AllCountries
