import React, { Component } from 'react'
import axios from '../../axios-instance'

import Input from '../../components/UI/Input/Input'

import styles from './Countries.module.scss'

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
        ]
    }

    // componentDidMount() {
    //     // All Country
    //     axios.get('/all?fields=name;capital;region;population;flag')
    //         .then(response => {
    //             console.log(response)
    //             this.setState({
    //                 countries: response.data
    //             })
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })

    //     // Single Country
    //     axios.get('/name/Afghanistan?fullText=true&fields=name;capital;region;population;flag;nativeName;subregion;topLevelDomain;currencies;languages;borders')
    //         .then(response => {
    //             console.log(response)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })

    //     // For Searching
    //     axios.get('/name/Af?fields=name')
    //         .then(response => {
    //             console.log(response)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })

    //     // Search By Region
    //     axios.get('/region/Americas?fields=name;capital;region;population;flag')
    //         .then(response => {
    //             console.log(response)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         }) 
        
    //     // Search By alpha 3 code
    //     axios.get('/alpha?codes=col;no;ee&fields=name')
    //         .then(response => {
    //             console.log(response)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         }) 
    // }

    searchedCountriesHandler = (e) => {

        console.log(e.target.value)

    }

    render() {

        const { searchInput } = this.state

        return (
            <div className={styles.Countries}>
                <div className={styles.SearchNFilter}>
                    <div className={styles.Search}>
                        <i class='fas fa-search'></i>
                        <Input 
                            elementType={searchInput.elementType}
                            config={searchInput.elementConfig}
                            value={searchInput.value}
                            inputHandler={this.searchedCountriesHandler} />
                    </div>
                    <input type="text"/>

                </div>
            </div>
        )
    }
}

export default Countries
