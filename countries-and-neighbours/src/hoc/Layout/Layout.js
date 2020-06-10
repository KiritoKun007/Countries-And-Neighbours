import React, { Fragment } from 'react'

import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import Countries from '../../containers/Countries/Countries'

const Layout = () => {
    return (
        <Fragment>
            <Toolbar />
            <Countries />
        </Fragment>
    )
}

export default Layout
