import React, { Fragment } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import Countries from '../../containers/Countries/Countries'
import Country from '../../containers/Country/Country'

const Layout = (props) => {

    return (
        <Fragment>
            <Toolbar 
                theme={props.theme}
                changeThemeHandler={props.changeThemeHandler} />
            <Switch>
                <Route path='/Country/:name' exact component={Country} />
                <Route to={{
                    pathname: '/all-countries',
                    search: '?theme=' + props.theme
                }} exact component={Countries} />
            </Switch>
                <Redirect from='/' to={'/all-countries?theme=' + props.theme } />
        </Fragment>
    )
}

export default Layout
