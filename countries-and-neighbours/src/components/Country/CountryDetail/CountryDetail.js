import React from 'react'

import styles from './CountryDetail.module.scss'
import Button from '../../UI/Button/Button'
import { withRouter } from 'react-router-dom'

const CountryDetail = ({ country, borderCountryHandler, location }) => {

    let countryDetails = null
    let borderCountry = <p style={{ margin: '0', fontSize: '12px', marginTop: '5px' }}>There are no Border Countries</p>

    if(country) {
        console.log(country)

        let currency = country.currencies.map(currency => currency.name).join(', ')
        let language = country.languages.map(language => language.name).join(', ')

        if(country.borders.length !== 0) {
            borderCountry = country.borders.map(border => {
                return (
                    <Button 
                        btnStyle="BorderCountry"
                        clicked={() => borderCountryHandler(border.name)}
                        btnHoverHandler={() => {}}
                        key={border.name} >
                        {border.name}    
                    </Button>
                )
            })
        }

        countryDetails = (
            <div className={styles.Country}>
                <div className={styles.CountryFlag}>
                    <img src={country.flag} alt="Country Flag"/>
                </div>
                <div className={styles.CountryDetails}>
                    <p className={styles.Name}>
                        {country.name}
                    </p>
                    <div className={styles.Details}>
                        <p> <strong>Native Name:</strong>&nbsp; {country.nativeName} </p>
                        <p> <strong>Population:</strong>&nbsp; {country.population} </p>
                        <p> <strong>Region:</strong>&nbsp; {country.region} </p>
                        <p> <strong>Sub Region:</strong>&nbsp; {country.subregion} </p>
                        <p> <strong>Capital:</strong>&nbsp; {country.capital} </p>
                        <p> <strong>Top Level Domain:</strong>&nbsp; {country.topLevelDomain.join(', ')} </p>
                        <p> 
                            <strong>Currencies:</strong>&nbsp; 
                            {currency} 
                        </p>
                        <p> 
                            <strong>Languages:</strong>&nbsp; 
                            {language} 
                        </p>
                    </div>

                    <div className={styles.BorderCountryContainer}> 
                        <strong>Border Countries:</strong>&nbsp;
                        <div className={styles.BorderCountries}>
                            {borderCountry}
                        </div>
                    </div>
                </div>
            </div>
        ) 
    }

    return countryDetails
}

export default withRouter(CountryDetail)
