import React from 'react'
import { Location, Link } from '@reach/router'
//
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import * as routes from '../constants/routes'

const NavigationTabs = React.memo(() => (
  <Location>
    {({ location }) => (
      <Tabs value={location.pathname} centered component="nav">
        <Tab component={Link} value={routes.HOME} to={routes.HOME} label="Home" />
        <Tab component={Link} value={routes.PRODUCTS} to={routes.PRODUCTS} label="Products" />
        <Tab component={Link} value={routes.ORDER} to={routes.ORDER} label="Order Form" />
      </Tabs>
    )}
  </Location>
))

export default NavigationTabs
