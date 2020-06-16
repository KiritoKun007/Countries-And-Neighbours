import * as actionTypes from "./actionTypes"
import axios from '../../axios-instance'

export const getCountry = countryName => {
    return dispatch => {
        axios.get(`/name/${countryName}?fullText=true&fields=name;capital;region;population;flag;nativeName;subregion;topLevelDomain;currencies;languages;borders`)
            .then(response => {
                console.log(response.data[0])

                let country = {...response.data[0]}

                if(country.borders.length !== 0) {
                    
                    let borderCountryCode = country.borders.join(';')
    
                    axios.get(`/alpha?codes=${borderCountryCode}&fields=name`)
                        .then(response => {
                            country.borders = response.data
    
                            dispatch({
                                type: actionTypes.GET_COUNTRY,
                                payload: {
                                    country: country
                                }
                            })
    
                        })
                        .catch(error => {
                            console.log(error)
                        })

                } else {

                    dispatch({
                        type: actionTypes.GET_COUNTRY,
                        payload: {
                            country: country
                        }
                    })

                }

            })
            .catch(error => {
                console.log(error)
            })
    }
}
