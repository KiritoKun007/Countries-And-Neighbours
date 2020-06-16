import { combineReducers } from "redux";
import countriesReducer from "./countriesReducer";
import countryReducer from "./countryReducer";

export const rootReducer = combineReducers({
    countries: countriesReducer,
    country: countryReducer
})