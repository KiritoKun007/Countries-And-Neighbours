import * as actionTypes from "../action/actionTypes";

const initialState = {
    Country: null
}

const countryReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_COUNTRY:
            return {
                ...state,
                Country: action.payload.country
            }
        default:
            return state
    }
}

export default countryReducer