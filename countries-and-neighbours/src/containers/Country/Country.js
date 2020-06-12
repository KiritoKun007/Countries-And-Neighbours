import React, { Component } from 'react'
import axios from '../../axios-instance'

import styles from './Country.module.scss'
import BackButton from '../../components/UI/Button/BackButton/BackButton'
import CountryDetail from '../../components/Country/CountryDetail/CountryDetail'

class Country extends Component {

    state = {
        Country: null
    }

    componentDidMount() {
        this.loadCountry()
    }

    componentDidUpdate() {
        this.loadCountry()
    }

    loadCountry = () => {
        console.log(this.props.match)
        if(this.props.match.params.name) {
            if( !this.state.Country || (this.state.Country && this.state.Country.name !== this.props.match.params.name) ) {
                // let countryName = encodeURIComponent(this.props.match.params.name)

                axios.get(`/name/${this.props.match.params.name}?fullText=true&fields=name;capital;region;population;flag;nativeName;subregion;topLevelDomain;currencies;languages;borders`)
                    .then(response => {
                        console.log(response)

                        let country = {...response.data[0]}

                        if(country.borders.length !== 0) {
                            let borderCountryCode = country.borders.join(';')
        
                            axios.get(`/alpha?codes=${borderCountryCode}&fields=name`)
                                .then(response => {
                                        console.log(response)
    
                                        country.borders = response.data
    
                                        this.setState({
                                            Country: country
                                        })
                                    })
                                    .catch(error => {
                                        console.log(error)
                                    }) 
                        } else {
                            this.setState({
                                Country: country
                            })
                        }
                    })
                    .catch(error => {
                        console.log(error)
                    })
                
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
                    country={this.state.Country}
                    borderCountryHandler={this.borderCountryHandler} />
            </div>
        )
    }
}

export default Country;