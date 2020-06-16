import * as actionTypes from "../action/actionTypes";

const initialState = {
    countries: null,
    searchedCountries: null
}

const countriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload.countries
            }

        case actionTypes.SEARCHED_COUNTRIES:
            return {
                ...state,
                searchedCountries: action.payload.searchedCountriesName
            }
    
        default:
            return state
    }
}

export default countriesReducer