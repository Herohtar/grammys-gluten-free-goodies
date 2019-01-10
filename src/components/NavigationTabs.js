import React from 'react'
import { Location, Link } from '@reach/router'
//
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import * as routes from '../constants/routes'

// location.pathname can be either '/some/path' or '/some/path/', but both are actually
// the same route, so to make location matching work for both cases we need to remove the
// trailing slash from the path string (with the exception of the root path, '/')
const cleanPath = path => path.replace(/\/$/, '') || '/'

const NavigationTabs = () => (
  <Location>
    {({ location }) => (
      <Tabs value={cleanPath(location.pathname)} centered component="nav">
        <Tab component={Link} value={routes.HOME} to={routes.HOME} label="Home" />
        <Tab component={Link} value={routes.PRODUCTS} to={routes.PRODUCTS} label="Products" />
        <Tab component={Link} value={routes.ORDER} to={routes.ORDER} label="Order Form" />
      </Tabs>
    )}
  </Location>
)

export default NavigationTabs
