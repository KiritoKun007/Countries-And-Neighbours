import React, { Component } from 'react'
import axios from '../../axios-instance'

import styles from './Countries.module.scss'

import Input from '../../components/UI/Input/Input'
import DropDown from '../../components/UI/DropDown/DropDown'

import AllCountries from '../../components/AllCountries/AllCountries'

class Countries extends Component {

    state = {
        countries: null,
        searchedCountries: null,
        searchInput: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                name: 'search',
                placeholder: 'Search for a country...'
            },
            value: ''
        },
        searchByRegion: [
            { id: 'africa', name: 'Africa' },
            { id: 'americas', name: 'America' },
            { id: 'asia', name: 'Asia' },
            { id: 'europe', name: 'Europe' },
            { id: 'oceania', name: 'Oceania' },
        ],
        showRegions: false,
        regionName: 'Filter by region',
        theme: ''
    }

    componentDidMount() {

        const queryParams = new URLSearchParams(this.props.location.search)

        let theme = null

        for (let query of queryParams.entries()) {
            theme = query[1]
        }

        if(!this.state.countries) {
            axios.get('/all?fields=name;capital;region;population;flag;alpha3Code')
                .then(response => {
                    this.setState({
                        countries: response.data,
                        theme: theme
                    })
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }

    componentDidUpdate() {

        const queryParams = new URLSearchParams(this.props.location.search)

        let theme = null

        for (let query of queryParams.entries()) {
            theme = query[1]
        }

        if(this.state.theme !== theme) {
            this.setState({ theme: theme })
        }

    }

    // getCountries = () => {
        // if(!this.state.countries) {
    //         if(this.state.theme !== this.props.theme) {
                
    //         }
    //     }
    // }

    showCountryByRegionHandler = (region) => {

        axios.get(`/region/${region}?fields=name;capital;region;population;flag;alpha3Code`)
            .then(response => {
                this.setState({
                    countries: response.data,
                    showRegions: false,
                    regionName: region
                })
            })
            .catch(error => {
                console.log(error)
            }) 
    }

    dropDownHandler = () => {
        this.setState((prevState) => {
            return {
                showRegions: !prevState.showRegions
            }
        })
    }

    searchedCountriesHandler = (e) => {
        let searchInput = {...this.state.searchInput};

        searchInput.value = e.target.value 

        if(searchInput.value !== '') {
            axios.get(`/name/${searchInput.value}?fields=name`)
                .then(response => {
                    console.log(response)
                    this.setState({
                        searchedCountries: response.data
                    })
                })
                .catch(error => {
                    console.log(error)
                })
        } else {
            this.setState({
                searchedCountries: null
            })
        }

    }

    goToSearchedCountries = (countryName) => {
        this.props.history.push({
            pathname: '/Country/' + countryName
        })
    }

    render() {

        const { searchInput, searchByRegion, countries, showRegions, searchedCountries, theme } = this.state

        let allCountries = null
        let searchedCountryList = null

        if(countries) {
            allCountries = <AllCountries countries={countries} />
        }

        if(searchedCountries) {
            searchedCountryList = (
                <div className={styles.SearchedCountries}>
                    <ul>
                        {searchedCountries.map(country => (
                            <li 
                                key={country.name} 
                                onClick={() => this.goToSearchedCountries(country.name)} >
                                {country.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )
        }

        let classes = [styles.Countries, styles[theme]]

        return (
            <div className={classes.join(' ')}>
                <div className={styles.SearchNFilter}>
                    <div className={styles.Search}>
                        <i className='fas fa-search'></i>
                        <Input 
                            elementType={searchInput.elementType}
                            config={searchInput.elementConfig}
                            value={searchInput.value}
                            theme={theme}
                            inputHandler={this.searchedCountriesHandler} />
                        {searchedCountryList}
                    </div>
                    <DropDown 
                        dropDownList={searchByRegion}
                        showCountryByRegion={this.showCountryByRegionHandler}
                        show={showRegions}
                        openCloseDropDown={this.dropDownHandler}
                        theme={theme} >
                        {this.state.regionName}
                        <i className='fas fa-angle-down'></i>
                    </DropDown>
                </div>

                {allCountries}

            </div>
        )
    }
}

export default Countries
