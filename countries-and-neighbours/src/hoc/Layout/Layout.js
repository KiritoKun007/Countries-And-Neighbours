import React, { Fragment } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import Countries from '../../containers/Countries/Countries'
import Country from '../../containers/Country/Country'

const Layout = () => {
    return (
        <Fragment>
            <Toolbar />
                {/* <Redirect to='/Country' from="/" exact  /> */}
            <Switch>
                <Route path='/Country/:name' component={Country} />
                <Route path='/all-countries' component={Countries} />
            </Switch>
                <Redirect from='/' to='/all-countries' />
        </Fragment>
    )
}

export default Layout
