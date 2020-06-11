import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'

import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import Countries from '../../containers/Countries/Countries'

const Layout = () => {
    return (
        <Fragment>
            <Toolbar />
            <Switch>
                <Route path='/' exact component={Countries} />
            </Switch>
        </Fragment>
    )
}

export default Layout
