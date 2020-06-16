import axios from '../../axios-instance'
import * as actionTypes from './actionTypes'

export const getCountries = () => {
    return dispatch => {
        axios.get('/all?fields=name;capital;region;population;flag;alpha3Code')
            .then(response => {
                dispatch({
                    type: actionTypes.GET_COUNTRIES, 
                    payload: { 
                        countries: response.data 
                    }
                })
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export const getCountriesByRegion = (region) => {
    return dispatch => {
        axios.get(`/region/${region}?fields=name;capital;region;population;flag;alpha3Code`)
            .then(response => {
                dispatch({
                    type: actionTypes.GET_COUNTRIES, 
                    payload: { 
                        countries: response.data 
                    }
                })
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export const getSearchedCountries = inputValue => {
    return dispatch => {
        axios.get(`/name/${inputValue}?fields=name`)
            .then(response => {

                dispatch({
                    type: actionTypes.SEARCHED_COUNTRIES,
                    payload: {
                        searchedCountriesName: response.data
                    }
                })

            })
            .catch(error => {
                console.log(error)

                dispatch({
                    type: actionTypes.SEARCHED_COUNTRIES,
                    payload: {
                        searchedCountriesName: null
                    }
                })
            })
    }
}