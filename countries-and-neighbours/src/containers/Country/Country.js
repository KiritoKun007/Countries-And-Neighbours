import React, { Component } from 'react'
import axios from '../../axios-instance'

import styles from './Country.module.scss'
import BackButton from '../../components/UI/Button/BackButton/BackButton'
import CountryDetail from '../../components/Country/CountryDetail/CountryDetail'
import { connect } from 'react-redux'
import * as actionCreator from '../../store/action/index'

class Country extends Component {

    componentDidMount() {
        this.loadCountry()
    }

    componentDidUpdate() {
        this.loadCountry()
    }

    loadCountry = () => {
        console.log(this.props.match)
        if(this.props.match.params.name) {
            if( !this.props.ctry || (this.props.ctry && this.props.ctry.name !== this.props.match.params.name) ) {

                this.props.getCountry(this.props.match.params.name)
                
            }
        }
    }

    borderCountryHandler = (countryName) => {
        console.log(countryName)

        this.props.history.push({
            pathname: '/Country/' + countryName
        })
    }

    render() {

        return (
            <div className={styles.Country}>
                <BackButton theme={this.props.theme}>
                    <i className='fas fa-arrow-left'></i>
                    Back
                </BackButton>
                <CountryDetail 
                    theme={this.props.theme}
                    country={this.props.ctry}
                    borderCountryHandler={this.borderCountryHandler} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ctry: state.country.Country
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCountry: (name) => dispatch(actionCreator.getCountry(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Country);