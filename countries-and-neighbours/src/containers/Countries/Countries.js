import React, { Component } from 'react'
import axios from '../../axios-instance'

import styles from './Countries.module.scss'

import Input from '../../components/UI/Input/Input'
import DropDown from '../../components/UI/DropDown/DropDown'
import Spinner from '../../components/UI/Spinner/Spinner'

import AllCountries from '../../components/AllCountries/AllCountries'
import { connect } from 'react-redux'
import * as actionCreator from '../../store/action/index'

class Countries extends Component {

    state = {
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
    }

    componentDidMount() {
        if(!this.state.countries) {
            this.props.getCountries()
        }
    }

    showCountryByRegionHandler = (region) => {

        this.props.getCountriesByRegion(region)

        this.setState({
            showRegions: false,
            regionName: region
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
        let newSearchedInput = {...this.state.searchInput};

        newSearchedInput.value = e.target.value

        this.props.getSearchedCountries(e.target.value)

        this.setState({ searchInput: newSearchedInput })
    }

    goToSearchedCountries = (countryName) => {
        this.props.history.push({
            pathname: '/Country/' + countryName
        })
    }

    render() {

        const { searchInput, searchByRegion, showRegions } = this.state

        let allCountries = <Spinner theme={this.props.theme} />
        let searchedCountryList = null

        if(this.props.ctries) {
            allCountries = <AllCountries 
                                countries={this.props.ctries} 
                                theme={this.props.theme} />
        }

        if(this.props.srchCtries) {
            searchedCountryList = (
                <div className={styles.SearchedCountries}>
                    <ul>
                        {this.props.srchCtries.map(country => (
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

        let classes = [styles.Countries, styles[this.props.theme]]

        return (
            <div className={classes.join(' ')}>
                <div className={styles.SearchNFilter}>
                    <div className={styles.Search}>
                        <i className='fas fa-search'></i>
                        <Input
                            elementType={searchInput.elementType}
                            config={searchInput.elementConfig}
                            value={searchInput.value}
                            theme={this.props.theme}
                            inputHandler={this.searchedCountriesHandler} />
                        {searchedCountryList}
                    </div>
                    <DropDown
                        dropDownList={searchByRegion}
                        showCountryByRegion={this.showCountryByRegionHandler}
                        show={showRegions}
                        openCloseDropDown={this.dropDownHandler}
                        theme={this.props.theme} >
                        {this.state.regionName}
                        <i className='fas fa-angle-down'></i>
                    </DropDown>
                </div>

                {allCountries}

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ctries: state.countries.countries,
        srchCtries: state.countries.searchedCountries
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCountries: () => dispatch(actionCreator.getCountries()),
        getCountriesByRegion: (region) => dispatch(actionCreator.getCountriesByRegion(region)),
        getSearchedCountries: (name) => dispatch(actionCreator.getSearchedCountries(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Countries)
