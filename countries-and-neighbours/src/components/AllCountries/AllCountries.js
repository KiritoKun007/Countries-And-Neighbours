import React, { Component } from 'react'

import styles from './AllCountries.module.scss'
import CountrySummary from '../Country/CountrySummary/CountrySummary'

class AllCountries extends Component {

    state = {
        theme: ''
    }

    static getDerivedStateFromProps(props, state) {
        return { theme: props.theme }
    }

    shouldComponentUpdate(nextProps, nextState) {
        // console.log(nextProps, this.props)
        return nextProps.countries !== this.props.countries || nextProps.theme !== this.props.theme
    }

    render() {
        return (
            <div className={styles.AllCountries}>
                {this.props.countries.map(country => {
                    return <CountrySummary 
                                country={country}
                                theme={this.state.theme}
                                key={country.alpha3Code} />
                })}
            </div>
        )
    }
}

export default AllCountries
