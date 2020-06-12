import React, { Fragment } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import Countries from '../../containers/Countries/Countries'
import Country from '../../containers/Country/Country'

const Layout = (props) => {

    const theme = props.theme

    return (
        <Fragment>
            <Toolbar 
                theme={theme}
                changeThemeHandler={props.changeThemeHandler} />
            <Switch>
                <Route path='/Country/:name' render={(props) => <Country {...props} theme={theme} />} />
                <Route path="/" render={(props) => <Countries {...props} theme={theme} />} />
            </Switch>
                {/* <Redirect from='/' to={'/all-countries?theme=' + props.theme } /> */}
        </Fragment>
    )
}

export default Layout
